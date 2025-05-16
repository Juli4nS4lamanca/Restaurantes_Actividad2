<script setup>
import { restaurantes } from '@/assets/restaurantes.js'
import { ref, computed } from 'vue'

const listaRestaurantes = ref([...restaurantes])
const filtroCategoria = ref('')
const busquedaNombre = ref('')

const restaurantesFiltrados = computed(() => {
  return listaRestaurantes.value.filter((restaurante) => {
    const categoriaCoincide =
      filtroCategoria.value === '' || restaurante.categoria === filtroCategoria.value
    const nombreCoincide = restaurante.name
      .toLowerCase()
      .includes(busquedaNombre.value.toLowerCase())
    return categoriaCoincide && nombreCoincide
  })
})

const filtrarPorCategoria = () => {
  busquedaNombre.value = ''
}

const buscarPorNombre = () => {
  filtroCategoria.value = ''
}
</script>

<template>
  <section id="search-container">
    <h2>Encuentra tu Restaurante Favorito</h2>
    <input type="text" id="search" v-model="busquedaNombre" placeholder="Escribe un nombre ..." />
    <select id="category" v-model="filtroCategoria" @change="filtrarPorCategoria">
      <option value="">Todas las categorías</option>
      <option value="Italiano">Italiano</option>
      <option value="Mexicano">Mexicano</option>
      <option value="Mar">Mar</option>
    </select>
    <button id="search-btn" @click="buscarPorNombre">Buscar</button>
  </section>

  <!-- 📌 Resultados de búsqueda -->
  <h2>Resultados de Búsqueda</h2>
  <section id="search-results" class="restaurant-container">
    <div
      v-for="restaurante in restaurantesFiltrados"
      :key="restaurante.name"
      class="restaurant-card"
    >
      <img :src="restaurante.imagen" :alt="'Restaurante' + restaurante.name" />
      <h3>{{ restaurante.name }}</h3>
      <p>{{ restaurante.direccion }}</p>
      <p>{{ restaurante.estrellas }} | {{ restaurante.categoria }}</p>
    </div>
  </section>
</template>
