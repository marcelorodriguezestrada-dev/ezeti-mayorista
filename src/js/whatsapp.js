import { PRODUCTS } from "../data/products.js";
import { state, fmt, cartTotals, clearCart } from "./state.js";
import { WHATSAPP_NUMBER } from "./config.js";

export function sendWhatsapp(onSent) {
  const { total, count } = cartTotals();
  if (count === 0) {
    alert("Agregá al menos un producto antes de confirmar.");
    return;
  }

  let msg = "🧾 *Hoja de Pedido — Ezeti Mayorista*\n\n";
  Object.keys(state.cart).forEach((id) => {
    const p = PRODUCTS.find((pp) => pp.id == id);
    const tier = p.tiers[state.cart[id].tierIndex];
    msg += `• ${p.name} — ${tier.label} — ${fmt(tier.price)}\n`;
  });
  msg += `\n*Total: ${fmt(total)}*\n\nQuedo atento/a a confirmación de stock y forma de pago. ¡Gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  clearCart();
  if (onSent) onSent();
}
