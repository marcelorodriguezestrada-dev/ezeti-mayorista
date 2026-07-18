/* ==========================================================================
   CATÁLOGO — cargado con productos reales de referencia (vía tools/scrape_pilita.js)
   Ordenado por "vistas" en el sitio del proveedor — es una señal real de
   interés, no de ventas. Reemplazá `buyers` por tu dato real de pedidos
   apenas tengas unas semanas de operación.

   Precios: precio del proveedor × 1.08 (MARGIN_PERCENT en config.js).
   El campo `resale` (precio sugerido de reventa) es una referencia mía
   de partida — ajustalo con tu propio criterio de mercado.

   NOTA: este rango de IDs (7000-7110) trajo solo productos de la
   categoría Juguetes. Librería y Bijouterie/Cotillón usan otros rangos
   de ID — corré tools/scrape_pilita.js de nuevo ajustando
   PRODUCT_ID_START/END para completar esas categorías.
   ========================================================================== */

export const CATS = {
  juguetes: { color: "var(--rojo)", label: "Juguetes" },
  libreria: { color: "var(--azul)", label: "Librería" },
  bijou:    { color: "var(--amarillo)", label: "Bijou / Cotillón" },
};

export const PRODUCTS = [
  {
    id: 7015, name: "Juego de Equilibrio y Enhebrado de Madera - Transportes Jenga", cat: "juguetes", emoji: "🚂",
    resale: 12000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7009, name: "Ocean Jenga 2 en 1 - Juego de Madera para Enhebrar y Equilibrio", cat: "juguetes", emoji: "🐋",
    resale: 12000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7008, name: "Dinosaurio Jenga 2 en 1 - Juego de Madera para Enhebrar y Equilibrio", cat: "juguetes", emoji: "🦕",
    resale: 12000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7028, name: "Rompecabezas Vertical Tipo Torre - 30 Piezas - Animales Autóctonos", cat: "juguetes", emoji: "🧩",
    resale: 26000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 17820, best: true }],
  },
  {
    id: 7027, name: "Set de 8 Rompecabezas de Cartón Grueso - Conociendo la Selva", cat: "juguetes", emoji: "🦁",
    resale: 17000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 11340, best: true }],
  },
  {
    id: 7029, name: "Rompecabezas Vertical Torre de Dinos Argentinos - 30 Piezas", cat: "juguetes", emoji: "🦖",
    resale: 26000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 17820, best: true }],
  },
  {
    id: 7035, name: "Juego de Memoria Me-Mo Magnético de Viaje", cat: "juguetes", emoji: "🧠",
    resale: 15000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
  {
    id: 7025, name: "Rompecabezas Infantil +2 Años - Conociendo El Bosque (8 piezas)", cat: "juguetes", emoji: "🌲",
    resale: 17000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 11340, best: true }],
  },
  {
    id: 7012, name: "Pizarra Rompecabezas Didáctico de Madera - Frutas con Marcador", cat: "juguetes", emoji: "🍎",
    resale: 13500, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 8856, best: true }],
  },
  {
    id: 7034, name: "Juego Pulpo Oculto Magnético de Viaje", cat: "juguetes", emoji: "🐙",
    resale: 15000, buyers: 0,
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
];