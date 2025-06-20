<script setup>
import { ref, computed, onMounted } from 'vue';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from "@/plugins/firebase";

const mensaje_error = ref(null);
const cargandoDatos = ref(true);
const restaurantes = ref([]);
const filtroCategoria = ref('')
const busquedaNombre = ref('')

onMounted(async () => {
  try {
    const q = query(collection(db, 'restaurantes'), orderBy('name', 'asc'));
    const querySalida = await getDocs(q);
    const temporalRestaurantes = [];
    querySalida.forEach((doc) => {
      temporalRestaurantes.push({ id: doc.id, ...doc.data() });
    });
    restaurantes.value = temporalRestaurantes;
  } catch (error) {
    console.error("Error obteniendo los restaurantes de Firestore: " + error);
    mensaje_error.value = "Error cargando los restaurantes";
  }
  finally {
    cargandoDatos.value = false;
  }
})


const restaurantesFiltrados = computed(() => {

  return restaurantes.value.filter((restaurante) => {
    const categoriaCoincide =
      filtroCategoria.value === '' || restaurante.categoria === filtroCategoria.value
    const nombreCoincide = restaurante.name
      .toLowerCase()
      .includes(busquedaNombre.value.toLowerCase())
    return categoriaCoincide && nombreCoincide
  })
})

const limpiarFiltros = () => {
  busquedaNombre.value = ''
  filtroCategoria.value = ''
}


</script>

<template>
  <div>
    <section id="search-container">
      <h2>Encuentra tu Restaurante Favorito</h2>
      <input type="text" id="search" v-model="busquedaNombre" placeholder="Escribe un nombre ..." />
      <select id="category" v-model="filtroCategoria">
        <option value="">Todas las categorías</option>
        <option value="Italiano">Italiano</option>
        <option value="Mexicano">Mexicano</option>
        <option value="Mar">Mar</option>
      </select>
      <button id="search-btn" @click="limpiarFiltros">Limpiar</button>
    </section>

    <!-- 📌 Resultados de búsqueda -->
    <h2>Resultados de Búsqueda</h2>
    <section id="search-results" class="restaurant-container">
      <div v-for="restaurante in restaurantesFiltrados" :key="restaurante.name" class="restaurant-card">
        <img :src="restaurante.imagen" :alt="'Restaurante' + restaurante.name" />
        <h3>{{ restaurante.name }}</h3>
        <p>{{ restaurante.direccion }}</p>
        <p>⭐ {{ restaurante.estrellas }} | {{ restaurante.categoria }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  border-radius: 10%;
  height: 200px;
  width: 200px;
  object-fit: cover;
}

#search-container {
  display: block;
}

#search-container input,
select,
button {
  font-size: 1rem;
  height: 2rem;
}

#search-container input {
  width: 40%;
  border: none;
  border-bottom: 2px solid var(--color-caramel-drizzle);
  background-color: var(--color-fondo);
  transition: border ease-in 300ms;
  margin-right: 15px;
}

#search-container input:focus {
  outline: none;
  border-bottom: 2px solid var(--color-cafe-oscuro);
}

#search-container select {
  border-radius: 5px;
  margin: 5px;
  background-color: var(--color-cafe-semioscuro);
  color: var(--color-fondo);
  margin-right: 15px;
}

#search-container button {
  border-radius: 5px;
  background-color: var(--color-cafe-semioscuro);
  color: var(--color-fondo);
  border: none;
  cursor: pointer;
  font-size: 1em;
}

#search-container button:hover {
  background-color: var(--color-caramel-drizzle);
}

#search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
}

.restaurant-card {
  text-align: center;
  align-items: center;
  margin: 1.2rem;
  animation: fadeIn 1.5s ease-out;
  object-fit: cover;
}

.restaurant-card h3 {
  margin-bottom: 0;
  margin-top: 5px;
}

.restaurant-card p {
  margin: 0;
}

#delate-btn {
  margin-left: 15px;
}
</style>
