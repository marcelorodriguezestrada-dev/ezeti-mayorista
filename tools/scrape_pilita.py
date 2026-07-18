"""
scrape_pilita.py — herramienta de REFERENCIA PERSONAL, no para republicar.

Qué hace:
  Recorre las páginas de categoría públicas de Distribuidora Pilita y arma
  un CSV con nombre, precio, link al producto y URL de imagen, para que
  vos (como comprador mayorista de ellos) tengas una planilla de consulta
  a mano al armar tu propio catálogo.

Qué NO hay que hacer con esto:
  - No subas el CSV resultante a un repo público de GitHub (expone a tu
    proveedor y sus precios a cualquiera que mire el repo).
  - No uses las imágenes descargadas en tu sitio público — son de Pilita/
    los fabricantes, no tuyas. Usalas solo para vos, como referencia visual.
  - No lo corras con una frecuencia alta — es su sitio, no el tuyo. Este
    script ya incluye una pausa entre pedidos para no saturarlo.

Requisitos (correr en TU compu, no en este sandbox — acá no hay internet):
  pip install requests beautifulsoup4

Uso:
  python scrape_pilita.py
  → genera pilita_referencia.csv en la misma carpeta

Categorías incluidas (podés sumar/sacar editando CATEGORY_PATHS):
  63 = Juguetes
  59 = Librería
  76 = Bijouterie
  87 = Cotillón
"""

import csv
import time
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.distribuidorapilita.com.ar/index.php"
CATEGORY_PATHS = {
    "Juguetes": "63",
    "Libreria": "59",
    "Bijouterie": "76",
    "Cotillon": "87",
}
DELAY_SECONDS = 1.5  # pausa entre pedidos, para no sobrecargar su servidor
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; consulta-personal-mayorista/1.0)"
}


def scrape_category(path, page=1):
    """Trae los productos de una página de categoría. Devuelve lista de dicts."""
    params = {"route": "product/category", "path": path, "page": page}
    resp = requests.get(BASE_URL, params=params, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    products = []
    # OpenCart clásico: cada producto suele estar en .product-layout / .product-thumb
    for card in soup.select(".product-thumb, .product-layout"):
        name_tag = card.select_one("h4 a, .caption h4 a, .name a")
        price_tag = card.select_one(".price, .price-normal")
        img_tag = card.select_one("img")

        if not name_tag:
            continue

        products.append({
            "categoria": path,
            "nombre": name_tag.get_text(strip=True),
            "link": name_tag.get("href", ""),
            "precio": price_tag.get_text(strip=True) if price_tag else "",
            "imagen": img_tag.get("src", "") if img_tag else "",
        })

    # Detecta si hay más páginas (paginación estándar OpenCart)
    has_next = bool(soup.select_one(f'a[href*="page={page + 1}"]'))
    return products, has_next


def main():
    all_products = []

    for cat_name, path in CATEGORY_PATHS.items():
        print(f"Recorriendo categoría: {cat_name} (path={path})")
        page = 1
        while True:
            products, has_next = scrape_category(path, page)
            if not products:
                break
            for p in products:
                p["categoria_nombre"] = cat_name
            all_products.extend(products)
            print(f"  página {page}: {len(products)} productos")
            if not has_next:
                break
            page += 1
            time.sleep(DELAY_SECONDS)
        time.sleep(DELAY_SECONDS)

    if not all_products:
        print("No se encontraron productos. Puede que el sitio haya cambiado su HTML —")
        print("revisá los selectores CSS en scrape_category().")
        return

    out_file = "pilita_referencia.csv"
    with open(out_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=["categoria_nombre", "nombre", "precio", "link", "imagen"]
        )
        writer.writeheader()
        for p in all_products:
            writer.writerow({k: p.get(k, "") for k in writer.fieldnames})

    print(f"\nListo: {len(all_products)} productos guardados en {out_file}")
    print("Recordá: este archivo es para tu uso interno, no lo subas a un repo público.")


if __name__ == "__main__":
    main()
