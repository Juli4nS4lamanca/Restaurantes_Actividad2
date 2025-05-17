import { restaurantes } from "./restaurantes.js";

const SearchResults = document.getElementById("search-results");
const categoria = document.getElementById("category");
const btnBuscar = document.getElementById("search-btn");
const nombreBuscado = document.getElementById("search");

// Función para mostrar restaurantes
const mostrarRestaurantes = (lista = restaurantes) => {
    SearchResults.innerHTML = lista.map(({ name, estrellas, direccion, imagen, categoria }) => `
        <div class="restaurant-card">
            <img src="${imagen}" alt="Restaurante ${name}">
            <h3>${name}</h3>
            <p>${direccion}</p>
            <p>${estrellas} | ${categoria}</p>
        </div>
    `).join("");
};

// Evento para filtrar por categoría
categoria.addEventListener("change", (e) => {
    SearchResults.innerHTML = "";
    const categoriaSeleccionada = e.target.value;
    mostrarRestaurantes(
        categoriaSeleccionada ? restaurantes.filter(restaurante => restaurante.categoria === categoriaSeleccionada)
        : restaurantes
    );
});

// Evento para la búsqueda por nombre
btnBuscar.addEventListener("click", () => {
    const query = nombreBuscado.value.trim().toLowerCase();
    if (!query) return; // Evita búsquedas vacías

    SearchResults.innerHTML = "";
    mostrarRestaurantes(restaurantes.filter(restaurante => restaurante.name.toLowerCase().includes(query)));
    categoria.value = ""; // Resetear categoría después de la búsqueda
});

// Inicializar mostrando todos los restaurantes
mostrarRestaurantes();
