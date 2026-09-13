(function () {
  const nav = document.getElementById("nav-categorias");
  const grid = document.getElementById("grid-productos");
  const titulo = document.getElementById("titulo-categoria");

  let categoriaActiva = "todos";

  function renderNav() {
    nav.innerHTML = "";
    CATEGORIAS.forEach((cat) => {
      const btn = document.createElement("button");
      btn.textContent = cat.nombre;
      if (cat.id === categoriaActiva) btn.classList.add("activo");
      btn.addEventListener("click", () => {
        categoriaActiva = cat.id;
        titulo.textContent = cat.id === "todos" ? "Destacados" : cat.nombre;
        renderNav();
        renderGrid();
      });
      nav.appendChild(btn);
    });
  }

  function renderGrid() {
    grid.innerHTML = "";
    const lista = PRODUCTOS.filter(
      (p) => categoriaActiva === "todos" || p.categoria === categoriaActiva
    );

    if (lista.length === 0) {
      grid.innerHTML = '<p style="color:var(--ink-soft);">Todavía no hay productos en esta categoría.</p>';
      return;
    }

    lista.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="icono"><i class="ti ${p.icono}" aria-hidden="true"></i></div>
        ${p.destacado ? '<span class="badge">destacado</span>' : ""}
        <div class="nombre">${p.nombre}</div>
        <div class="precio">${p.precio}</div>
        <a class="boton" href="${p.link}" target="_blank" rel="noopener sponsored">ver oferta</a>
      `;
      grid.appendChild(card);
    });
  }

  renderNav();
  renderGrid();
})();
