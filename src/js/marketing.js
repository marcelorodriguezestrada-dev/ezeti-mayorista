import { PRODUCTS } from "../data/products.js";
import { generatePosts, buildUtmLink } from "./marketing-templates.js";

const HISTORY_KEY = "ezeti-mayorista-marketing-history";
const SITE_URL = window.location.origin + window.location.pathname;

const REDES = [
  { id: "instagram", label: "Instagram", color: "#E1306C" },
  { id: "facebook", label: "Facebook", color: "#1877F2" },
  { id: "tiktok", label: "TikTok", color: "#69C9D0" },
  { id: "whatsapp", label: "WhatsApp", color: "#25D366" },
];

let selectedRed = "instagram";
let selectedPublico = "revendedores";
let currentPosts = [];
let currentProduct = null;

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // localStorage no disponible — el historial no persiste, no rompe nada.
  }
}

function populateProductSelect() {
  const select = document.getElementById("mkProduct");
  select.innerHTML = PRODUCTS.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");
}

function renderRedChips() {
  const wrap = document.getElementById("mkRedChips");
  wrap.innerHTML = REDES.map(
    (r) => `<button class="chip ${r.id === selectedRed ? "active" : ""}" data-red="${r.id}">${r.label}</button>`
  ).join("");
  wrap.querySelectorAll("[data-red]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedRed = btn.dataset.red;
      renderRedChips();
    });
  });
}

function renderPublicoChips() {
  const wrap = document.getElementById("mkPublicoChips");
  const options = [
    { id: "revendedores", label: "Revendedores (kiosco/bazar)" },
    { id: "final", label: "Consumidor final" },
  ];
  wrap.innerHTML = options
    .map(
      (o) => `<button class="chip ${o.id === selectedPublico ? "active" : ""}" data-publico="${o.id}">${o.label}</button>`
    )
    .join("");
  wrap.querySelectorAll("[data-publico]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedPublico = btn.dataset.publico;
      renderPublicoChips();
    });
  });
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = "✓ Copiado";
    setTimeout(() => (btn.textContent = original), 1500);
  });
}

function renderResults() {
  const resultsEl = document.getElementById("mkResults");
  if (currentPosts.length === 0) {
    resultsEl.innerHTML = "";
    return;
  }

  const redInfo = REDES.find((r) => r.id === selectedRed);
  const campaignSlug = currentProduct.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 40);

  resultsEl.innerHTML = currentPosts
    .map((post, i) => {
      const utmLink = buildUtmLink(SITE_URL, { red: selectedRed, campaign: campaignSlug, content: `post${i + 1}` });
      const fullText = `${post.texto}\n\n${post.hashtags}\n\n${utmLink}`;
      return `
        <div class="mk-post-card" style="border-color:${redInfo.color}33;">
          <div class="mk-post-head">
            <span>Post ${i + 1} · ${post.formato}</span>
            <button class="mk-copy-btn" data-copy-idx="${i}">Copiar</button>
          </div>
          <div class="mk-post-text">${post.texto}</div>
          <div class="mk-post-hashtags" style="color:${redInfo.color};">${post.hashtags}</div>
          <div class="mk-post-cta">CTA: ${post.cta}</div>
          <div class="mk-post-utm">
            <code>${utmLink}</code>
            <button class="mk-copy-btn" data-copy-link-idx="${i}">Copiar link</button>
          </div>
        </div>
      `;
    })
    .join("");

  resultsEl.querySelectorAll("[data-copy-idx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.copyIdx);
      const post = currentPosts[i];
      const utmLink = buildUtmLink(SITE_URL, { red: selectedRed, campaign: campaignSlug, content: `post${i + 1}` });
      copyToClipboard(`${post.texto}\n\n${post.hashtags}\n\n${utmLink}`, btn);
    });
  });
  resultsEl.querySelectorAll("[data-copy-link-idx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.copyLinkIdx);
      const utmLink = buildUtmLink(SITE_URL, { red: selectedRed, campaign: campaignSlug, content: `post${i + 1}` });
      copyToClipboard(utmLink, btn);
    });
  });

  document.getElementById("mkSaveBtn").style.display = "block";
}

function renderHistory() {
  const history = loadHistory();
  const listEl = document.getElementById("mkHistoryList");
  if (history.length === 0) {
    listEl.innerHTML = `<div class="drawer-empty">Todavía no guardaste ninguna campaña.</div>`;
    return;
  }
  listEl.innerHTML = history
    .slice()
    .reverse()
    .map(
      (h, revIdx) => {
        const i = history.length - 1 - revIdx;
        return `
        <div class="mk-history-item">
          <div>
            <div class="di-name">${h.productName}</div>
            <div class="di-meta">${h.red} · ${h.publico === "revendedores" ? "Revendedores" : "Consumidor final"} · ${new Date(h.date).toLocaleDateString("es-AR")}</div>
          </div>
          <button class="di-remove" data-history-idx="${i}">Borrar</button>
        </div>
      `;
      }
    )
    .join("");

  listEl.querySelectorAll("[data-history-idx]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.historyIdx);
      const history = loadHistory();
      history.splice(idx, 1);
      saveHistory(history);
      renderHistory();
    });
  });
}

export function initMarketing() {
  populateProductSelect();
  renderRedChips();
  renderPublicoChips();
  renderHistory();

  document.getElementById("marketingOpenBtn").addEventListener("click", () => {
    document.getElementById("marketingModal").classList.add("open");
    document.getElementById("marketingOverlay").classList.add("open");
  });
  document.getElementById("marketingCloseBtn").addEventListener("click", closeMarketing);
  document.getElementById("marketingOverlay").addEventListener("click", closeMarketing);

  document.getElementById("mkGenerateBtn").addEventListener("click", () => {
    const productId = Number(document.getElementById("mkProduct").value);
    currentProduct = PRODUCTS.find((p) => p.id === productId);
    currentPosts = generatePosts(currentProduct, selectedRed, selectedPublico);
    renderResults();
  });

  document.getElementById("mkSaveBtn").addEventListener("click", () => {
    if (!currentProduct) return;
    const history = loadHistory();
    history.push({
      productName: currentProduct.name,
      red: selectedRed,
      publico: selectedPublico,
      date: new Date().toISOString(),
    });
    saveHistory(history);
    renderHistory();
  });
}

function closeMarketing() {
  document.getElementById("marketingModal").classList.remove("open");
  document.getElementById("marketingOverlay").classList.remove("open");
}
