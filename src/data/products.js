/* ==========================================================================
   CATÁLOGO — datos de ejemplo
   Orden pensado por potencial de rotación en kiosco/bazar (no por venta real
   todavía): primero lo de ticket bajo y reposición frecuente (impulso en
   mostrador), después lo de ticket medio con menor frecuencia de compra.

   TODO: reemplazar por tu catálogo real. Cuando tengas historial de ventas,
   cambiá el campo `buyers` por tu dato real y reordená según rotación real.
   ========================================================================== */

export const CATS = {
  juguetes: { color: "var(--rojo)", label: "Juguetes" },
  libreria: { color: "var(--azul)", label: "Librería" },
  bijou:    { color: "var(--amarillo)", label: "Bijou / Cotillón" },
};

export const PRODUCTS = [
  // --- Alta rotación / impulso en mostrador (ticket bajo, se repone seguido) ---
  {
    id: 5, name: "Pulsera Strass Surtida x12", cat: "bijou", emoji: "💎",
    resale: 900, buyers: 63,
    tiers: [
      { label: "Docena", qty: 12, price: 6200, best: true },
      { label: "x2 Docenas", qty: 24, price: 11800 },
      { label: "Bulto x60", qty: 60, price: 27000 },
    ],
  },
  {
    id: 3, name: "Cuaderno Universo A4 T.Dura", cat: "libreria", emoji: "📓",
    resale: 3200, buyers: 54,
    tiers: [
      { label: "Unidad", qty: 1, price: 1900 },
      { label: "Media doc.", qty: 6, price: 9600, best: true },
      { label: "Docena", qty: 12, price: 18200 },
    ],
  },
  {
    id: 4, name: "Set 12 Lápices de Colores", cat: "libreria", emoji: "✏️",
    resale: 2100, buyers: 41,
    tiers: [
      { label: "Unidad", qty: 1, price: 1250 },
      { label: "Media doc.", qty: 6, price: 6600, best: true },
      { label: "Docena", qty: 12, price: 12600 },
    ],
  },
  {
    id: 6, name: "Cotillón Cumple Temático x10", cat: "bijou", emoji: "🎉",
    resale: 1600, buyers: 29,
    tiers: [
      { label: "Pack x10", qty: 10, price: 5400 },
      { label: "Pack x30", qty: 30, price: 14700, best: true },
      { label: "Bulto x100", qty: 100, price: 44000 },
    ],
  },

  // --- Ticket medio / menor frecuencia, pero buen margen unitario ---
  {
    id: 1, name: "Muñeca Bebota 35cm", cat: "juguetes", emoji: "🧸",
    resale: 2500, buyers: 37,
    tiers: [
      { label: "Unidad", qty: 1, price: 1500 },
      { label: "Media doc.", qty: 6, price: 8100 },
      { label: "Docena", qty: 12, price: 15300, best: true },
    ],
  },
  {
    id: 2, name: "Auto a Fricción x1", cat: "juguetes", emoji: "🚗",
    resale: 1800, buyers: 22,
    tiers: [
      { label: "Unidad", qty: 1, price: 1050 },
      { label: "Media doc.", qty: 6, price: 5700 },
      { label: "Docena", qty: 12, price: 10800, best: true },
    ],
  },
];
