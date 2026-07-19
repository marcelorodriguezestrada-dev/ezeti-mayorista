/* ==========================================================================
   CATÁLOGO — 63 productos reales cargados desde tools/scrape_pilita.js
   Precio final = precio del proveedor × 1.08 (MARGIN_PERCENT en config.js).
   Stock: parseado real desde "Disponibilidad" del proveedor cuando el
   texto trae un número exacto ("¡Últimas N unidades!"). Cuando no hay
   número exacto ("En Stock", u otro texto), el producto queda SIN campo
   `stock` — la tarjeta muestra el aviso genérico de "sujeto a
   confirmación" en vez de inventar un número.

   `resale` (precio sugerido de reventa) es una referencia mía de partida
   (precio final × 1.5) — ajustalo con tu propio criterio de mercado.

   ⚠️ Campo `image`: apunta directo a fotos de Pilita, SOLO para pruebas.
   Antes de producción real, reemplazar por fotos propias o ilustraciones
   originales (ver nota completa en versiones anteriores de este archivo).
   ========================================================================== */

export const CATS = {
  juguetes: { color: "var(--rojo)", label: "Juguetes" },
  libreria: { color: "var(--azul)", label: "Librería" },
  bijou:    { color: "var(--amarillo)", label: "Bijou / Cotillón" },
};

export const PRODUCTS = [
  {
    id: 7015, name: "Juego de Equilibrio y Enhebrado de Madera Transportes Jenga - Juego de Motricidad Fina", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-didactico-jenga-dinosaurios-madera-equilibrio-enhebrado-distribuidora-pilita-600x315.jpg",
    resale: 12150, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7009, name: "Juego de Madera para Enhebrar y Equilibrio Ocean Jenga 2 en 1 - Juego de Motricidad Fina", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-de-madera-para-enhebrar-y-equilibrio-ocean-jenga-2-en-1-distribuidora-pilita-600x315.jpg",
    resale: 12150, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7008, name: "Juego de Madera para Enhebrar y Equilibrio Dinosaurio Jenga 2 en 1 - Juego de Motricidad Fina", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-de-madera-para-enhebrar-y-equilibrio-dinosaurio-jenga-2-en-1-distribuidora-pilita-600x315.jpg",
    resale: 12150, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7028, name: "Rompecabezas Vertical Tipo Torre Infantil - 30 Piezas Didáctico - Animales Autóctonos", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-tipo-torre-infantil-didactico-30-piezas-vertical-distribuidora-pilita-600x315.jpg",
    resale: 26730, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 17820, best: true }],
  },
  {
    id: 7027, name: "Set de 8 Rompecabezas Infantiles de 2 Piezas en Cartón Grueso - Conociendo la Selva", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/set-8-rompecabezas-infantiles-carton-grueso-2-piezas-selva-distribuidora-pilita-600x315.jpg",
    resale: 17010, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 11340, best: true }],
  },
  {
    id: 7029, name: "Rompecabezas Vertical Torre de Dinos Argentinos - 30 Piezas Infantil Didáctico", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-tipo-torre-dinosaurios-argentinos-kurimi-didactico-30-piezas-distribuidora-pilita-600x315.jpg",
    resale: 26730, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 17820, best: true }],
  },
  {
    id: 7035, name: "Juego de Memoria Me-Mo Magnético de Viaje - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/me-mo-magnetico-de-viaje-juego-memoria-barco-de-papel-distribuidora-pilita----600x315.jpg",
    resale: 15390, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
  {
    id: 7025, name: "Rompecabeza Infantil + 2 Años Conociendo El Bosque - 8 Rompecabezas", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-madera-conociendo-el-bosque-kurimi-infantil-distribuidora-pilita-600x315.jpg",
    resale: 17010, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 11340, best: true }],
  },
  {
    id: 7012, name: "Pizarra Rompecabezas Didáctico de Madera Frutas con Marcador - 17 Piezas en Total", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-numerico-frutas-madera-pizarra-encastre-distribuidora-pilita-600x315.jpg",
    resale: 13284, buyers: 0, stock: 8, 
    tiers: [{ label: "Unidad", qty: 1, price: 8856, best: true }],
  },
  {
    id: 7034, name: "Juego Pulpo Oculto Magnético de Viaje - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/pulpo-oculto-magnetico-de-viaje-juego-ingenio-barco-de-papel-distribuidora-pilita-600x315.jpg",
    resale: 15390, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
  {
    id: 7036, name: "Juego Clave Secreta Magnético de Viaje - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/clave-secreta-magnetico-de-viaje-juego-deduccion-barco-de-papel-distribuidora-pilita-600x315.jpg",
    resale: 15390, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
  {
    id: 7019, name: "Cartas Didácticas con Actividades Las Estaciones y El Clima -Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/cartas-didacticas-libro-actividades-varias-tematicas-distribuidora-pilita-600x315.jpg",
    resale: 8100, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 5400, best: true }],
  },
  {
    id: 7031, name: "Juego de Vasos de Velocidad con Timbre y Tarjetas – Desafío Didáctico Mental", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-de-vasos-de-velocidad-con-timbre-didactico-mayorista-600x315.jpg",
    resale: 23490, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 15660, best: true }],
  },
  {
    id: 7011, name: "Pizarra Rompecabezas Didáctico de Madera Bichitos con Marcador - 17 Piezas en Total", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-numerico-madera-pizarra-encastre-insectos-distribuidora-pilita-600x315.jpg",
    resale: 13284, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 8856, best: true }],
  },
  {
    id: 7022, name: "Juego de Mesa Picos de Rapidez y Destreza con Pinzas en Lata - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-de-mesa-picos-rapidez-destreza-pinzas-distribuidora-pilita-600x315.jpg",
    resale: 38070, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 25380, best: true }],
  },
  {
    id: 7014, name: "Pizarra Rompecabezas Didáctico de Madera Vehículos de Construcción con Marcador - 18 Piezas en Total", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-numerico-vehiculos-construccion-madera-pizarra-encastre-distribuidora-pilita-600x315.jpg",
    resale: 13284, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 8856, best: true }],
  },
  {
    id: 7030, name: "Tangram de Madera Grande Hexagonal Multicolor – 96 Piezas Didácticas", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juguetes-de-madera-por-mayor-tangram-hexagonal-distribuidora-pilita-600x315.jpg",
    resale: 17820, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 11880, best: true }],
  },
  {
    id: 7023, name: "Juego de Mesa Colaborativo Miedos para Explorar +6 Años Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-de-mesa-colaborativo-miedos-para-explorar-emociones-distribuidora-pilita-600x315.jpg",
    resale: 22680, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 15120, best: true }],
  },
  {
    id: 7005, name: "Libro de Crucigramas Modelos Surtidos 96 Páginas 15x22 cm", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-de-crucigramas-teorema-modelos-surtidos-96-paginas-distribuidora-pilita-600x315.jpg",
    resale: 2754, buyers: 0, stock: 6, 
    tiers: [{ label: "Unidad", qty: 1, price: 1836, best: true }],
  },
  {
    id: 7042, name: "Rompecabezas Dinosaurios x 8 unidades Animales de Madera 4 y 5 Piezas - Juguetes Didácticos x Mayor", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-dinosaurios-madera-didacticos-x8-juguetes-por-mayor-distribuidora-pilita-600x315.jpg",
    resale: 6318, buyers: 0, stock: 9, 
    tiers: [{ label: "Unidad", qty: 1, price: 4212, best: true }],
  },
  {
    id: 7052, name: "Libro Didáctico Magnético con Letras de Madera - Para Aprender el Abecedario y Las Letras", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/libro-didactico-magnetico-madera-infantil-letras-numeros-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 29970, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 19980, best: true }],
  },
  {
    id: 7043, name: "Pelota Sensorial Antiestrés de Goma Texturada 7 cm", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/pelota-sensorial-antiestres-goma-didactica-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 3078, buyers: 0, stock: 8, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7006, name: "Libro de Sudoku Infinito Modelos Surtidos 96 Páginas 15x22 cm", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-de-sudoku-infinito-modelos-surtidos-96-paginas-distribuidora-pilita-600x315.jpg",
    resale: 2754, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 1836, best: true }],
  },
  {
    id: 7017, name: "Rompecabezas Infantil Cumpleaños 24 Piezas de Cartón Grueso - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-carton-grueso-cumpleanos-24-piezas-infantil-distribuidora-pilita-600x315.jpg",
    resale: 12960, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 8640, best: true }],
  },
  {
    id: 7039, name: "Juego Didáctico de Ortografía - Regletas de Encastre con Letras de Madera para Niños", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/juego-didactico-ortografia-regletas-encastre-letras-madera-ninos-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 23490, buyers: 0, stock: 5, 
    tiers: [{ label: "Unidad", qty: 1, price: 15660, best: true }],
  },
  {
    id: 7047, name: "Libro El Principito En Imprenta Mayúscula Con 3 Rompecabezas de 9 Piezas", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-el-principito-imprenta-mayuscula-con-3-rompecabezas-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 8424, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 5616, best: true }],
  },
  {
    id: 7032, name: "Vínculos en Construcción - Juego de Mesa para Debate, Reflexión y ESI - Barco de Papel", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/vinculos-en-construccion-juego-mesa-debate-reflexion-esi-barco-de-papel-distribuidora-pilita-600x315.jpg",
    resale: 26244, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 17496, best: true }],
  },
  {
    id: 7049, name: "Libro Infantil con Rompecabezas 'Caperucita Roja' - Mis Clásicos de Siempre (School Fun)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-con-rompecabezas-caperucita-roja-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 8424, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 5616, best: true }],
  },
  {
    id: 7050, name: "Libro Infantil con Rompecabezas 'Pinocho' - Mis Clásicos de Siempre (School Fun)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-con-rompecabezas-pinocho-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 8424, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 5616, best: true }],
  },
  {
    id: 7048, name: "Libro Infantil con Rompecabezas 'Los Tres Cerditos' - Mis Clásicos de Siempre (School Fun)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-con-rompecabezas-los-tres-cerditos-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 8424, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 5616, best: true }],
  },
  {
    id: 7044, name: "Libro Infantil Cinco Dinosaurios Ruidosos Con Texturas Libro Didáctico Infantil de Estimulación Sensorial", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-cinco-dinosaurios-ruidosos-texturas-tapa-dura-por-mayor-distribuidora-pilita-600x315.jpg",
    resale: 14904, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 9936, best: true }],
  },
  {
    id: 7073, name: "¡Desafío Escolar! Practicamos la Imprenta Minúscula (17x24 cm - 64 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-desafio-escolar-practicamos-la-imprenta-minuscula-primer-ciclo-17x24-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7054, name: "Libro Con Sonido Jack Y Las Habichuelas Mágicas Cuentos Clásicos Infantiles - El Gato de Hojalata", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-con-sonido-jack-y-las-habichuelas-magicas-cuentos-infantiles-distribuidora-pilita-600x315.jpg",
    resale: 29970, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 19980, best: true }],
  },
  {
    id: 7051, name: "Libro Didáctico con Pizarra Magnética con Números de Madera - Para Operaciones Matemáticas y Aprendizaje", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/libro-didactico-con-pizarra-magnetica-madera-letras-numeros-mayorista-distribuidora-pilita-600x315.jpg",
    resale: 29970, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 19980, best: true }],
  },
  {
    id: 7088, name: "Clásicos Desplegables: La Sirenita - Tapa Acolchada Pop-Up (19.5x19.5 cm) - Imprenta Mayúscula", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-la-sirenita-clasicos-desplegables-pop-up-tapa-acolchada-19-5x19-5-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 12150, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7090, name: "Libro Clásicos Desplegables: Pinocho - Tapa Acolchada Pop-Up (19.5x19.5 cm)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-pinocho-clasicos-desplegables-pop-up-tapa-acolchada-19-5x19-5-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 12150, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7089, name: "Libro Clásicos Desplegables: Cenicienta - Tapa Acolchada Pop-Up (19.5x19.5 cm) - Imprenta Mayúscula", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-cenicienta-clasicos-desplegables-pop-up-tapa-acolchada-19-5x19-5-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 12150, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 8100, best: true }],
  },
  {
    id: 7087, name: "Valija Didáctica Princesas: Para Leer, Decorar y Pintar - School Fun (Con Acuarelas y Stickers)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-valijita-princesas-school-fun-para-leer-y-pintar-con-acuarelas-y-stickers-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 10530, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 7020, best: true }],
  },
  {
    id: 7003, name: "Rompecabezas Didáctico de Madera Encastrable Frutas con Nombres 30x22 cm", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/rompecabezas-didactico-madera-encastrable-frutas-con-nombres-30x22cm-distribuidora-pilita-600x315.jpg",
    resale: 5670, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 3780, best: true }],
  },
  {
    id: 7083, name: "Mandalas: Shanti (24.5x22 cm - 24 Págs) - Libro para Colorear", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-mandalas-shanti-para-colorear-arte-terapia-24-5x22-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 2754, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 1836, best: true }],
  },
  {
    id: 7069, name: "Valijita para Colorear Amigos Monstruosos - Con Manija (23x31 cm - 16 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-para-colorear-amigos-monstruosos-con-manija-infantil-23x31-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3078, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7084, name: "Mandalas: Color Espiritual (24.5x22 cm - 48 Págs) - Libro para Colorear", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-mandalas-color-espiritual-con-frases-para-reflexionar-24-5x22-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7066, name: "Dino Explora - Incluye Memotest (20x28 cm - 32 Págs) - Libro de Actividades x Mayor", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-de-actividades-dino-explora-con-memotest-20x28-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3078, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7079, name: "Mundo Capibara: Mi Libro Para Jugar y Colorear (24.5x22 cm - 48 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-mundo-capibara-mi-libro-para-jugar-y-colorear-infantil-24-5x22-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7070, name: "Valijita para Colorear Viaje por el Espacio - Con Manija (23x31 cm - 16 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-para-colorear-viaje-por-el-espacio-con-manija-infantil-23x31-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3078, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7076, name: "¡Desafío Escolar! Practicamos la Letra Cursiva (17x24 cm - 64 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-desafio-escolar-practicamos-la-letra-cursiva-caligrafia-17x24-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7077, name: "Sopas de Letras: Tapas de la Selección Argentina (15x23 cm - 32 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-el-capitan-sopas-de-letras-genericas-tapas-surtidas-jugadores-seleccion-argentina-15x23-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 1620, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 1080, best: true }],
  },
  {
    id: 7062, name: "Libro de Actividades Infantil 'Arco Iris! Incluye divertidísimo Memotest' (20x28 cm) - 16 pág", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/distribuidora-pilita-mayorista-libros-infantiles-actividades-x-mayor-arco-iris-con-memotest-600x315.jpg",
    resale: 2754, buyers: 0, 
    tiers: [{ label: "Unidad", qty: 1, price: 1836, best: true }],
  },
  {
    id: 7098, name: "Animales de la Selva - Libro Infantil Aprende y Diviértete - Libro Tapa Dura Troquelado - 15x20 cm - 10 páginas", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/animales-de-la-selva-libro-infantil-aprende-y-diviertete-distribuidora-pilita-mayorista-libros-infantiles-x-mayor-600x315.jpg",
    resale: 10044, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 6696, best: true }],
  },
  {
    id: 7078, name: "Mundo Dinosaurios: Mi Libro Para Jugar y Colorear (24.5x22 cm - 48 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-mundo-dinosaurios-mi-libro-para-jugar-y-colorear-infantil-24-5x22-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7063, name: "Mandalas Mindfulness (28x20 cm - 16 Págs) - Libros para Colorear por Mayor", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-para-colorear-mandalas-mindfulness-actividades-28x20-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 2592, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 1728, best: true }],
  },
  {
    id: 7074, name: "¡Desafío Escolar! Practicamos los Números (17x24 cm - 64 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-desafio-escolar-practicamos-los-numeros-del-1-al-100-17x24-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7095, name: "Muñecos de Madera para Enroscar - Juguete Didáctico de Coordinación y Motricidad", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/munecos-de-madera-para-enroscar-juguete-didactico-coordinacion-juguetes-didacticos-por-mayor-distribuidora-pilita-600x315.jpg",
    resale: 29970, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 19980, best: true }],
  },
  {
    id: 7092, name: "Sonajero Maraca Chica de Madera Infantil - Estimulación Temprana", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/sonajero-maraca-chica-madera-infantil-estimulacion-juguetes-didacticos-por-mayor-distribuidora-pilita-600x315.jpg",
    resale: 2430, buyers: 0, stock: 5, 
    tiers: [{ label: "Unidad", qty: 1, price: 1620, best: true }],
  },
  {
    id: 7096, name: "Dinosaurios - Libro Infantil Aprende y Diviértete - Libro Tapa Dura Troquelado - 15x20 cm - 10 páginas", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/dinosaurios-libro-infantil-aprende-y-diviertete-distribuidora-pilita-mayorista-libros-infantiles-x-mayor-600x315.jpg",
    resale: 10044, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 6696, best: true }],
  },
  {
    id: 7097, name: "En la Granja - Libro Infantil Aprende y Diviértete- Libro Tapa Dura Troquelado - 15x20 cm - 10 páginas", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/en-la-granja-libro-infantil-aprende-y-diviertete-distribuidora-pilita-mayorista-libros-infantiles-x-mayor-600x315.jpg",
    resale: 10044, buyers: 0, stock: 3, 
    tiers: [{ label: "Unidad", qty: 1, price: 6696, best: true }],
  },
  {
    id: 7099, name: "Unicornios - Libro Infantil Aprende y Diviértete- Libro Tapa Dura Troquelado - 15x20 cm - 10 páginas", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/unicornios-libro-infantil-aprende-y-diviertete-distribuidora-pilita-mayorista-libros-infantiles-x-mayor-600x315.jpg",
    resale: 10044, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 6696, best: true }],
  },
  {
    id: 7075, name: "¡Desafío Escolar! Practicamos el Abecedario (17x24 cm - 64 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-desafio-escolar-practicamos-el-abecedario-imprenta-mayuscula-17x24-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3564, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 2376, best: true }],
  },
  {
    id: 7061, name: "Libro de Actividades Infantil 'Dino Gigantes: Juegos prehistóricos' (20x28 cm) - 16 pág", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/distribuidora-pilita-mayorista-libros-infantiles-actividades-x-mayor-dino-gigantes-juegos-prehistoricos-600x315.jpg",
    resale: 2754, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 1836, best: true }],
  },
  {
    id: 7067, name: "Dino Desafíos: Acertijos & Adivinanzas (23x31 cm - 16 Págs)", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-dino-desafios-acertijos-y-adivinanzas-infantiles-23x31-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3078, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7064, name: "Hadas & Sirenas: Un Reino de Sueños (20x28 cm - 32 Págs) - Libro de Actividades x Mayor", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-de-actividades-hadas-y-sirenas-un-reino-de-suenos-20x28-distribuidora-pilita-mayorista-600x315.jpg",
    resale: 3078, buyers: 0, stock: 4, 
    tiers: [{ label: "Unidad", qty: 1, price: 2052, best: true }],
  },
  {
    id: 7104, name: "Momentos Geniales: La Granja ruidosa con fichas removibles – Un cuento tierno sobre amistad, juego y descubrimiento", cat: "libreria", emoji: "📚",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-libros-infantiles/libro-infantil-cuentos-la-granja-ruidosa-fichas-removibles-distribuidora-pilita-600x315.jpg",
    resale: 13608, buyers: 0, stock: 1, 
    tiers: [{ label: "Unidad", qty: 1, price: 9072, best: true }],
  },
  {
    id: 7101, name: "Librito Sensorial de Tela para Bebé Diseño de Animales con Texturas - Animales de la Selva", cat: "juguetes", emoji: "🧸",
    image: "https://www.distribuidorapilita.com.ar/image/cache//prod-juguetes/librito-sensorial-de-tela-animales-con-texturas-bebe-didactico-distribuidora-pilita-600x315.jpg",
    resale: 15390, buyers: 0, stock: 2, 
    tiers: [{ label: "Unidad", qty: 1, price: 10260, best: true }],
  },
];
