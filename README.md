# Ezeti Mayorista

App web (catálogo + carrito + checkout) para vender al por mayor a kioscos, bazares y librerías. Sin backend: el pedido se arma en el navegador y se confirma directo por WhatsApp.

**[Ver demo en vivo →]()** *(se completa al activar GitHub Pages, ver abajo)*

## Cómo se usa

1. El cliente navega el catálogo, elige cantidad (unidad / media docena / docena / bulto según producto).
2. Cada producto muestra el precio de reventa sugerido, el precio mayorista y la ganancia estimada.
3. Al agregar productos se arma la "Hoja de Pedido" (carrito).
4. Al confirmar, se abre WhatsApp con el pedido ya redactado, listo para enviar.

## Cómo correrlo local

Como usa módulos de JS (`type="module"`), necesitás servirlo con un servidor local (no funciona abriendo el `index.html` directo por `file://` en todos los navegadores):

```bash
# opción 1
npx serve .

# opción 2
python3 -m http.server 8000
```

Después abrís `http://localhost:8000` (o el puerto que indique).

## Estructura del proyecto

```
mayorista-pilita/
├── index.html                 # estructura de la página
├── src/
│   ├── styles/
│   │   ├── tokens.css         # paleta, tipografía, radios — cambiar acá reskinea todo
│   │   ├── layout.css         # header, hero, grillas, footer
│   │   └── components.css     # tarjeta de producto, cajón de carrito
│   ├── data/
│   │   └── products.js        # TU CATÁLOGO — acá se cargan productos reales
│   └── js/
│       ├── config.js          # número de WhatsApp, umbral de envío gratis, pedido mínimo
│       ├── state.js           # estado del carrito y cálculos (totales, ganancia)
│       ├── render.js          # pinta la grilla de productos y el carrito
│       ├── whatsapp.js        # arma el mensaje y abre el checkout
│       └── main.js            # conecta todo con los eventos del DOM
└── assets/                    # para imágenes reales de producto (vacío por ahora)
```

## Configurar tu negocio

Antes de usarla en serio, editá:

- **`src/js/config.js`** — tu número de WhatsApp real, umbral de envío gratis, pedido mínimo, y `MARGIN_PERCENT` (arranca en 8%). Usalo para calcular el precio final de cada producto **antes** de cargarlo en `products.js` — nunca cargues ahí el precio de costo del proveedor.
- **`src/data/products.js`** — tu catálogo real: nombres, precios finales (ya con tu margen aplicado — nunca cargues el precio de costo del proveedor, ver nota en `config.js`), tiers de cantidad, `resale` (precio sugerido de reventa) y `buyers` (cuánta gente lo pidió — usá tu dato real, no lo dejes inventado).
- No hay campo de stock: el sitio no tiene stock propio, así que en vez de mostrar una cantidad inventada se avisa que queda sujeto a confirmación con el proveedor.
- Los testimonios en `index.html` (sección `#testimonios`) son de ejemplo — reemplazalos por reseñas reales de tus clientes.

## Cómo agregar un producto nuevo

En `src/data/products.js`, agregá un objeto al array `PRODUCTS`:

```js
{
  id: 7, name: "Nombre del producto", cat: "juguetes", emoji: "🎈",
  resale: 2000,        // precio sugerido de reventa (para el anclaje de precio)
  buyers: 15,           // cuántos clientes lo pidieron este mes
  tiers: [
    { label: "Unidad", qty: 1, price: 1200 },
    { label: "Docena", qty: 12, price: 12000, best: true }, // "best" = preseleccionado
  ],
}
```

`cat` tiene que ser una de las claves definidas en `CATS` (mismo archivo): `juguetes`, `libreria`, `bijou`. Para agregar una categoría nueva, sumala en `CATS` con su color.

## Cómo agregar un componente nuevo

Cada pieza de UI vive en `render.js` como una función que arma HTML y engancha sus propios event listeners (ver `renderGrid`, `renderCart`, `renderFilters` como ejemplo). Para agregar una sección nueva:

1. Sumá su markup base en `index.html`.
2. Sumá su función de render en `src/js/render.js`.
3. Llamá esa función desde `main.js`, dentro de `refresh()` si depende del estado del carrito.

## Publicar en GitHub Pages (gratis)

1. Subí este repo a GitHub (ver más abajo).
2. En el repo: **Settings → Pages → Source: `main` branch, carpeta `/ (root)`**.
3. GitHub te da una URL tipo `https://tu-usuario.github.io/mayorista-pilita/`.

## Roadmap (ideas para seguir sumando)

- [ ] Panel simple para editar productos sin tocar código
- [ ] Imágenes reales de producto (carpeta `assets/`)
- [ ] Guardar carrito en `localStorage` para no perderlo al recargar
- [ ] Multi-mayorista / multi-sucursal (config por subdominio)
- [ ] Historial de pedidos por cliente
