"""
scrape_pilita.py — herramienta de REFERENCIA PERSONAL, no para republicar.

Cómo funciona este sitio (confirmado a mano):
  - Las páginas de CATEGORÍA (route=product/category) redirigen al checkout
    si no estás logueado — no se pueden recorrer así sin sesión.
  - Las páginas de PRODUCTO individual (route=product/product&product_id=N)
    SÍ son públicas. Cada una trae: nombre, precio, imagen real, cantidad
    de "Vistas" (señal de popularidad real, no inventada) y disponibilidad
    ("¡Ultimas N unidades!").
  - Los IDs de producto son correlativos. Este script prueba un rango de
    IDs y guarda los que existan.

Qué NO hay que hacer con esto:
  - No subas el CSV resultante a un repo público de GitHub (expone a tu
    proveedor y sus precios a cualquiera que mire el repo).
  - No uses las imágenes descargadas en tu sitio público — son de Pilita/
    los fabricantes, no tuyas. Usalas solo para vos, como referencia visual
    a la hora de elegir qué cargar y cómo describirlo.
  - No lo corras con una frecuencia alta ni con un rango gigante de una —
    este script ya incluye una pausa entre pedidos para no saturar su sitio.

Requisitos (correr en TU compu, no en este sandbox — acá no hay internet):
  pip install requests beautifulsoup4

Uso:
  python scrape_pilita.py
  → genera pilita_referencia.csv en la misma carpeta, ordenado por Vistas
    (de mayor a menor) como proxy de qué mira más gente — no es lo mismo
    que ventas, pero es un dato real del sitio, no inventado.

Ajustá PRODUCT_ID_START / PRODUCT_ID_END al rango que quieras explorar.
Los últimos productos agregados (los más nuevos) suelen tener el ID más
alto — para "Novedades" de hoy, un rango como 7000-7110 sirve de punto
de partida (verificalo contra la home del sitio, que va cambiando).
"""

import csv
import re
import time
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.distribuidorapilita.com.ar/index.php"
PRODUCT_ID_START = 7000
PRODUCT_ID_END = 7110
DELAY_SECONDS = 1.5  # pausa entre pedidos, para no sobrecargar su servidor
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; consulta-personal-mayorista/1.0)"
}


def scrape_product(product_id):
    """Trae los datos de una página de producto individual. None si no existe."""
    params = {"route": "product/product", "product_id": product_id}
    resp = requests.get(BASE_URL, params=params, headers=HEADERS, timeout=15)
    if resp.status_code != 200:
        return None

    soup = BeautifulSoup(resp.text, "html.parser")

    name_tag = soup.select_one("h1")
    if not name_tag:
        return None  # producto inexistente / redirigido

    img_tag = soup.select_one(".image img, #product img")

    # "Vistas: 47" viene como texto plano cerca de los datos del producto
    page_text = soup.get_text(" ", strip=True)
    views_match = re.search(r"Vistas:\s*(\d+)", page_text)
    views = int(views_match.group(1)) if views_match else None

    avail_match = re.search(r"Disponibilidad:\s*([^\n$]+?)(?=\s*\$|\s*Cantidad|$)", page_text)
    availability = avail_match.group(1).strip() if avail_match else ""

    price_match = re.search(r"\$[\d.,]+", page_text)
    price = price_match.group(0) if price_match else ""

    return {
        "product_id": product_id,
        "nombre": name_tag.get_text(strip=True),
        "precio": price,
        "vistas": views if views is not None else "",
        "disponibilidad": availability,
        "imagen": img_tag.get("src", "") if img_tag else "",
        "link": f"{BASE_URL}?route=product/product&product_id={product_id}",
    }


def main():
    all_products = []

    for pid in range(PRODUCT_ID_START, PRODUCT_ID_END + 1):
        product = scrape_product(pid)
        if product:
            all_products.append(product)
            print(f"  #{pid}: {product['nombre'][:60]} — {product['precio']} — {product['vistas']} vistas")
        time.sleep(DELAY_SECONDS)

    if not all_products:
        print("No se encontró ningún producto en ese rango. Ajustá PRODUCT_ID_START/END")
        print("mirando algún link de producto real en la web (el número al final de la URL).")
        return

    # Ordenar por vistas descendente (proxy real de interés, no de ventas)
    all_products.sort(key=lambda p: (p["vistas"] if isinstance(p["vistas"], int) else -1), reverse=True)

    out_file = "pilita_referencia.csv"
    with open(out_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=["product_id", "nombre", "precio", "vistas", "disponibilidad", "imagen", "link"]
        )
        writer.writeheader()
        for p in all_products:
            writer.writerow(p)

    print(f"\nListo: {len(all_products)} productos guardados en {out_file}, ordenados por vistas.")
    print("Recordá: es para tu uso interno. No lo subas a un repo público ni uses")
    print("las imágenes en tu sitio sin permiso — son de Pilita/los fabricantes.")


if __name__ == "__main__":
    main()
