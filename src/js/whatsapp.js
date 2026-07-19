import { PRODUCTS } from "../data/products.js";
import { state, fmt, cartTotals, clearCart } from "./state.js";
import { WHATSAPP_NUMBER, MIN_ORDER } from "./config.js";

export function sendWhatsapp(customerInfo, onSent) {
  const { total, count } = cartTotals();
  if (count === 0) {
    alert("Agregá al menos un producto antes de confirmar.");
    return;
  }
  if (total < MIN_ORDER) {
    alert(`El pedido mínimo es ${fmt(MIN_ORDER)}. Te faltan ${fmt(MIN_ORDER - total)} para poder confirmar.`);
    return;
  }
  if (!customerInfo.nombre || !customerInfo.telefono) {
    alert("Completá al menos nombre y teléfono para confirmar el pedido.");
    return;
  }

  let msg = "🧾 *Hoja de Pedido — Ezeti Mayorista*\n\n";
  msg += `*Cliente:* ${customerInfo.nombre}\n`;
  msg += `*Teléfono:* ${customerInfo.telefono}\n`;
  if (customerInfo.localidad) msg += `*Localidad:* ${customerInfo.localidad}\n`;
  msg += "\n*Productos:*\n";

  Object.keys(state.cart).forEach((id) => {
    const p = PRODUCTS.find((pp) => pp.id == id);
    const item = state.cart[id];
    const tier = p.tiers[item.tierIndex];
    msg += `• ${p.name} — ${tier.label} × ${item.qty} — ${fmt(tier.price * item.qty)}\n`;
  });

  msg += `\n*Total: ${fmt(total)}*\n`;
  if (customerInfo.comentario) msg += `\n*Comentario:* ${customerInfo.comentario}\n`;
  msg += `\nQuedo atento/a a confirmación de stock y forma de pago. ¡Gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  clearCart();
  if (onSent) onSent();
}
