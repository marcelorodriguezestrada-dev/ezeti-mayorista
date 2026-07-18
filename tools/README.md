# Herramientas internas (no forman parte del sitio público)

Esta carpeta es para vos, no se despliega en GitHub Pages ni Vercel.

## Opción recomendada: lista de precios oficial

Pilita tiene una lista de precios descargable para mayoristas logueados
(link "Lista de Precios" en su web, con tu cuenta iniciada). Es más
confiable que cualquier scraper — nombre, precio y código de producto,
directo de la fuente, sin depender de que su HTML no cambie.

## Opción para referencia visual: `scrape_pilita.py`

Trae nombre, precio, link e imagen de las categorías públicas, para que
tengas una planilla de consulta al armar tu catálogo.

```bash
pip install requests beautifulsoup4
python scrape_pilita.py
```

Genera `pilita_referencia.csv` en esta misma carpeta (ese archivo está en
`.gitignore` — no se sube al repo).

**Reglas de uso:**
- Es para tu consulta interna, no para republicar contenido de terceros.
- No uses las imágenes en tu sitio público (son de Pilita/fabricantes).
- No lo corras seguido — ya tiene una pausa entre pedidos para no
  sobrecargar su sitio.
- Si cambian el diseño de su web, el script puede dejar de encontrar
  productos — revisá los selectores CSS en `scrape_category()`.

## De ahí a tu catálogo

1. Elegís qué productos van a `../src/data/products.js`.
2. Calculás el precio final con tu margen (ver `../src/js/config.js`,
   `MARGIN_PERCENT`) — nunca cargues el precio de costo del proveedor.
3. Para la imagen, usá un emoji/ilustración genérica (como el resto del
   catálogo) en vez de la foto scrapeada, salvo que tengas tus propias
   fotos o permiso para usar las de Pilita.
