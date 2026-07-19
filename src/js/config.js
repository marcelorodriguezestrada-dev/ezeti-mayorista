/* ==========================================================================
   CONFIG DEL NEGOCIO — editá esto con tus datos reales.
   ========================================================================== */
export const WHATSAPP_NUMBER = "5491167076678"; // número real del negocio
export const MIN_ORDER = 70000;                  // pedido mínimo real
export const MARGIN_PERCENT = 0.08;               // 8% — tu margen sobre el precio del proveedor

/* --------------------------------------------------------------------------
   IMPORTANTE sobre márgenes y precios de costo:
   Este sitio es 100% estático y corre en el navegador del cliente. Cualquier
   dato que pongas en estos archivos JS es visible para cualquiera que abra
   "Ver código fuente" — no hay backend que lo oculte.

   Por eso: en src/data/products.js cargá SIEMPRE el precio final ya con tu
   margen aplicado (costo del proveedor × tu %), nunca el precio de costo
   crudo. Calculalo aparte (a mano o en una planilla) y pegá acá solo el
   resultado. Así, aunque alguien inspeccione la página, no ve cuánto pagás
   vos ni quién es tu proveedor.

   Fórmula con el margen fijo de arriba:
     precio final = precio del proveedor × (1 + MARGIN_PERCENT)
     ej: proveedor cobra $10.000 → tu precio = $10.000 × 1.08 = $10.800
   -------------------------------------------------------------------------- */