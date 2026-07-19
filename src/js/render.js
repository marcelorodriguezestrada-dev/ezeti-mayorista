import { PRODUCTS, CATS } from "../data/products.js";
import {
  state,
  fmt,
  gainFor,
  getSelectedTierIndex,
  setSelectedTier,
  cartTotals,
  visibleProducts,
} from "./state.js";
import { MIN_ORDER } from "./config.js";

export function renderGrid(onAdd, onSelectTier) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  visibleProducts().forEach((p) => {
    const tIdx = getSelectedTierIndex(p.id);
    const tier = p.tiers[tIdx];
    const catInfo = CATS[p.cat];
    const gain = gainFor(p, tier);
    const perUnitCost = Math.round(tier.price / tier.qty);

    const hasStockData = typeof p.stock === "number";
    const outOfStock = hasStockData && p.stock <= 0;
    let stockHtml;
    if (outOfStock) {
      stockHtml = `<div class="stock-row" style="color:var(--rojo);font-weight:700;">🚫 Sin stock por el momento</div>`;
    } else if (hasStockData) {
      stockHtml = `<div class="stock-row">📦 Quedan ${p.stock} unidades</div>`;
    } else {
      stockHtml = `<div class="stock-row">📦 Sujeto a confirmación de stock al recibir tu pedido</div>`;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img" style="background:${catInfo.color}22;">
        <span class="card-tag" style="background:${catInfo.color}">${catInfo.label}</span>
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : p.emoji}
      </div>
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="social-proof"><span class="flame">🔥</span> ${p.buyers} kiosqueros lo pidieron este mes</div>
        ${stockHtml}
        <div class="price-block">
          <div class="anchor-row">
            <span>Reventa sugerida</span>
            <span class="strike">${fmt(p.resale)} c/u</span>
          </div>
          <div class="price-row">
            <span class="price">${fmt(tier.price)}</span>
            <span class="unit">${tier.label} · ${fmt(perUnitCost)} c/u</span>
          </div>
          <div class="gain-row">💰 Ganancia estimada: ${fmt(gain)}</div>
        </div>
        <div class="tier-row">
          ${p.tiers
            .map(
              (t, i) => `
            <button class="tier-btn ${i === tIdx ? "selected" : ""}" data-pid="${p.id}" data-tidx="${i}">
              ${t.best ? '<span class="badge-mas">Más elegido</span>' : ""}
              ${t.label}
            </button>
          `
            )
            .join("")}
        </div>
        <button class="add-btn" data-pid="${p.id}" ${outOfStock ? "disabled style=\"opacity:0.5;cursor:not-allowed;\"" : ""}>${outOfStock ? "Sin stock" : "Agregar a la hoja de pedido"}</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll(".tier-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      onSelectTier(Number(btn.dataset.pid), Number(btn.dataset.tidx));
    });
  });
  grid.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      onAdd(Number(btn.dataset.pid));
    });
  });
}

export function renderCart(onRemove) {
  const { total, gain, count } = cartTotals();

  document.getElementById("cartCount").textContent = count;
  document.getElementById("foldTotal").textContent = fmt(total);
  document.getElementById("foldGain").textContent = fmt(gain);

  const pct = Math.min(100, Math.round((total / MIN_ORDER) * 100));
  const remaining = Math.max(0, MIN_ORDER - total);
  const goalMsg =
    remaining > 0
      ? `Llevás <strong>${fmt(total)}</strong> — te faltan <strong>${fmt(remaining)}</strong> para llegar al pedido mínimo de ${fmt(MIN_ORDER)}.`
      : `<strong>¡Pedido mínimo alcanzado!</strong> Ya podés confirmar por WhatsApp.`;

  ["goalFill", "goalFill2"].forEach((id) => (document.getElementById(id).style.width = pct + "%"));
  ["goalText", "goalText2"].forEach((id) => (document.getElementById(id).innerHTML = goalMsg));

  const drawerItems = document.getElementById("drawerItems");
  if (count === 0) {
    drawerItems.innerHTML = `<div class="drawer-empty">Tu hoja de pedido está vacía.<br>Elegí productos del catálogo →</div>`;
    return;
  }

  drawerItems.innerHTML = Object.keys(state.cart)
    .map((id) => {
      const p = PRODUCTS.find((pp) => pp.id == id);
      const tier = p.tiers[state.cart[id].tierIndex];
      return `
        <div class="drawer-item">
          <div>
            <div class="di-name">${p.name}</div>
            <div class="di-meta">${tier.label} · ${fmt(Math.round(tier.price / tier.qty))} c/u</div>
            <button class="di-remove" data-pid="${p.id}">Quitar</button>
          </div>
          <div class="di-price">${fmt(tier.price)}</div>
        </div>
      `;
    })
    .join("");

  drawerItems.querySelectorAll(".di-remove").forEach((btn) => {
    btn.addEventListener("click", () => onRemove(Number(btn.dataset.pid)));
  });
}

export function renderFilters(onFilter) {
  document.querySelectorAll("#filters .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#filters .chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      onFilter(chip.dataset.cat);
    });
  });
}

export function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

export function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}