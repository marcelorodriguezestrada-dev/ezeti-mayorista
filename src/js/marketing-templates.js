import { fmt } from "./state.js";

/* ==========================================================================
   Plantillas de texto para redes — sin IA, todo por template string.
   Usan datos REALES del producto (precio, ganancia, stock) que ya están
   en products.js, no inventan nada.
   ========================================================================== */

const HASHTAGS_BASE = {
  juguetes: "#Juguetes #JuguetesMayorista #Kiosco",
  libreria: "#Libreria #UtilesEscolares #Mayorista",
  bijou: "#Bijouterie #Cotillon #Mayorista",
};

function bestTier(product) {
  return product.tiers.find((t) => t.best) || product.tiers[0];
}

// --- Público: revendedores (kiosqueros/bazares) — encuadre de margen ---
function postsRevendedores(product, red) {
  const tier = bestTier(product);
  const gain = Math.max(0, product.resale - tier.price);
  const priceStr = fmt(tier.price);
  const resaleStr = fmt(product.resale);
  const gainStr = fmt(gain);
  const stockLine =
    typeof product.stock === "number" && product.stock <= 5
      ? `\n⚠️ Quedan pocas unidades (${product.stock}).`
      : "";

  return [
    {
      formato: "Feed",
      texto: `🧾 ¿Tenés kiosco, bazar o librería?\n\n${product.name}\nTu precio: ${priceStr}\nReventa sugerida: ${resaleStr}\n💰 Ganás ${gainStr} por unidad.${stockLine}\n\nPedís por WhatsApp, en 2 minutos.`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Mayorista"} #Reventa`,
      cta: "Pedí por WhatsApp",
    },
    {
      formato: "Story",
      texto: `💰 Margen real para tu kiosco:\n\n${product.name}\n${priceStr} → vendé a ${resaleStr}\n\nGanancia: ${gainStr} por unidad`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Mayorista"}`,
      cta: "Deslizá para pedir",
    },
    {
      formato: "Feed",
      texto: `Sumá ${product.name} a tu local.\n\nPrecio mayorista: ${priceStr}${stockLine}\n\nHacemos envío en 2-3 días hábiles desde que confirmás.`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Mayorista"} #Envios`,
      cta: "Escribinos por WhatsApp",
    },
  ].map((p) => ({ ...p, red }));
}

// --- Público: consumidor final (ej. regalo Día del Niño) — encuadre de valor ---
function postsConsumidorFinal(product, red) {
  const tier = bestTier(product);
  const priceStr = fmt(tier.price);
  const stockLine =
    typeof product.stock === "number" && product.stock <= 5
      ? `\n⚠️ Últimas unidades disponibles.`
      : "";

  return [
    {
      formato: "Feed",
      texto: `🎁 ${product.name}\n\n${priceStr}${stockLine}\n\nEntrega en 2-3 días hábiles. Pedís directo por WhatsApp, sin vueltas.`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Regalos"} #DiaDelNiño`,
      cta: "Pedilo por WhatsApp",
    },
    {
      formato: "Story",
      texto: `Ideal para regalar 🎁\n\n${product.name}\n${priceStr}`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Regalos"}`,
      cta: "Deslizá para pedir",
    },
    {
      formato: "Feed",
      texto: `${product.name} — ${priceStr}\n\nJuguete didáctico, ideal para regalar.${stockLine}\n\nConsultanos por WhatsApp.`,
      hashtags: `${HASHTAGS_BASE[product.cat] || "#Regalos"} #Juguetes`,
      cta: "Escribinos",
    },
  ].map((p) => ({ ...p, red }));
}

export function generatePosts(product, red, publico) {
  return publico === "revendedores"
    ? postsRevendedores(product, red)
    : postsConsumidorFinal(product, red);
}

export function buildUtmLink(baseUrl, { red, campaign, content }) {
  const params = new URLSearchParams({
    utm_source: red,
    utm_medium: "social",
    utm_campaign: campaign,
    utm_content: content,
  });
  return `${baseUrl}?${params.toString()}#catalogo`;
}
