/**
 * scrape_pilita.js — herramienta de REFERENCIA PERSONAL, no para republicar.
 *
 * Versión en Node.js, sin dependencias externas (usa el fetch nativo de
 * Node 18+, no hace falta "npm install" de nada).
 *
 * Cómo funciona este sitio (confirmado a mano):
 *   - Las páginas de CATEGORÍA redirigen al checkout si no estás logueado.
 *   - Las páginas de PRODUCTO individual (product_id=N) SÍ son públicas:
 *     traen nombre, precio, imagen real, "Vistas" (popularidad real) y
 *     disponibilidad ("¡Ultimas N unidades!").
 *   - Los IDs son correlativos — este script prueba un rango y guarda
 *     los que existan.
 *
 * Qué NO hay que hacer con esto:
 *   - No subas el CSV resultante a un repo público de GitHub.
 *   - No uses las imágenes en tu sitio público sin permiso — son de
 *     Pilita/los fabricantes. Usalas solo como referencia interna.
 *   - No lo corras seguido ni con un rango gigante de una — ya tiene
 *     una pausa entre pedidos para no saturar su sitio.
 *
 * Uso:
 *   node scrape_pilita.js
 *   → genera pilita_referencia.csv en la misma carpeta, ordenado por
 *     vistas (de mayor a menor).
 */

const fs = require("fs");

const BASE_URL = "https://www.distribuidorapilita.com.ar/index.php";
const PRODUCT_ID_START = 7000;
const PRODUCT_ID_END = 7110;
const DELAY_MS = 1500; // pausa entre pedidos, para no sobrecargar su servidor
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; consulta-personal-mayorista/1.0)",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeProduct(productId) {
  const url = `${BASE_URL}?route=product/product&product_id=${productId}`;
  const resp = await fetch(url, { headers: HEADERS });
  if (!resp.ok) return null;

  const html = await resp.text();

  const nameMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!nameMatch) return null; // producto inexistente / redirigido

  const name = nameMatch[1].replace(/\s+/g, " ").trim();

  const imgMatch = html.match(/property="og:image" content="([^"]+)"/);
  const image = imgMatch ? `https://www.distribuidorapilita.com.ar/${imgMatch[1]}` : "";

  // Texto plano (saca tags) para buscar Vistas / Disponibilidad / precio con más seguridad
  const plainText = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  const viewsMatch = plainText.match(/Vistas:\s*(\d+)/);
  const views = viewsMatch ? parseInt(viewsMatch[1], 10) : "";

  const availMatch = plainText.match(/Disponibilidad:\s*([^$]+?)(?=\s*\$|\s*Cantidad|$)/);
  const availability = availMatch ? availMatch[1].trim() : "";

  // El primer "$" de la página es el $0.00 del carrito vacío del header —
  // buscamos el precio real recién después de "Disponibilidad:"
  const availIdx = plainText.indexOf("Disponibilidad:");
  const searchArea = availIdx >= 0 ? plainText.slice(availIdx) : plainText;
  const priceMatch = searchArea.match(/\$[\d.,]+/);
  const price = priceMatch ? priceMatch[0] : "";

  return { productId, name, price, views, availability, image, link: url };
}

function toCsvRow(fields) {
  return fields
    .map((f) => `"${String(f).replace(/"/g, '""')}"`)
    .join(",");
}

async function main() {
  const allProducts = [];

  for (let pid = PRODUCT_ID_START; pid <= PRODUCT_ID_END; pid++) {
    const product = await scrapeProduct(pid);
    if (product) {
      allProducts.push(product);
      console.log(`  #${pid}: ${product.name.slice(0, 60)} — ${product.price} — ${product.views} vistas`);
    }
    await sleep(DELAY_MS);
  }

  if (allProducts.length === 0) {
    console.log("No se encontró ningún producto en ese rango. Ajustá PRODUCT_ID_START/END");
    console.log("mirando algún link de producto real en la web (el número al final de la URL).");
    return;
  }

  // Ordenar por vistas descendente (proxy real de interés, no de ventas)
  allProducts.sort((a, b) => (Number(b.views) || -1) - (Number(a.views) || -1));

  const header = ["product_id", "nombre", "precio", "vistas", "disponibilidad", "imagen", "link"];
  const rows = [header.join(",")];
  for (const p of allProducts) {
    rows.push(toCsvRow([p.productId, p.name, p.price, p.views, p.availability, p.image, p.link]));
  }

  fs.writeFileSync("pilita_referencia.csv", rows.join("\n"), "utf-8");

  console.log(`\nListo: ${allProducts.length} productos guardados en pilita_referencia.csv, ordenados por vistas.`);
  console.log("Recordá: es para tu uso interno. No lo subas a un repo público ni uses");
  console.log("las imágenes en tu sitio sin permiso — son de Pilita/los fabricantes.");
}

main();
