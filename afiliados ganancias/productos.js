/*
  PRODUCTOS.JS
  ------------
  Acá cargás cada producto que querés mostrar en la tienda.
  No hace falta tocar ningún otro archivo: con editar este alcanza.

  Cada producto necesita:
  - nombre: el nombre que se muestra
  - categoria: tiene que coincidir con una de las categorías de abajo
  - precio: como texto, con el formato que quieras (ej "$45.000")
  - icono: un ícono de la librería Tabler Icons (ver lista en tabler.io/icons)
  - link: tu link de afiliado real (el que te da Mercado Libre, Amazon, etc.)
  - destacado: true o false, para mostrarlo arriba de todo

  IMPORTANTE: reemplazá los links de ejemplo ("#") por tus links de afiliado
  reales apenas los tengas. Mientras tanto, los botones no van a llevar a
  ningún lado.
*/

const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "tecnologia", nombre: "Tecnología" },
  { id: "hogar", nombre: "Hogar" },
  { id: "moda", nombre: "Moda" },
];

const PRODUCTOS = [
  {
    nombre: "Sensor Alarma Detector CO Monoxido De Carbono - Geneve",
    categoria: "tecnologia",
    precio: "$9.875",
    icono: "https://http2.mlstatic.com/D_NQ_NP_615076-MLA115646012482_092026-O.webp",
    link: "https://meli.la/1jHZ2dS",
    destacado: true,
  },
  {
    nombre: "Notebook 15 pulgadas",
    categoria: "tecnologia",
    precio: "$450.000",
    icono: "ti-device-laptop",
    link: "#",
    destacado: true,
  },
  {
    nombre: "Set de sartenes antiadherentes",
    categoria: "hogar",
    precio: "$27.500",
    icono: "ti-tools-kitchen-2",
    link: "#",
    destacado: false,
  },
  {
    nombre: "Lámpara de escritorio LED",
    categoria: "hogar",
    precio: "$15.900",
    icono: "ti-bulb",
    link: "#",
    destacado: false,
  },
  {
    nombre: "Campera deportiva",
    categoria: "moda",
    precio: "$29.900",
    icono: "ti-shirt",
    link: "#",
    destacado: true,
  },
  {
    nombre: "Zapatillas urbanas",
    categoria: "moda",
    precio: "$54.000",
    icono: "ti-shoe",
    link: "#",
    destacado: false,
  },
];
