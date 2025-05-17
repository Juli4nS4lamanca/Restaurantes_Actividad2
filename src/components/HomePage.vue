<template>
  <main>
    <div class="header-content">
      <div class="slider-text">
        <h1>¡Bienvenido!</h1>
        <p>
          Descubre los mejores restaurantes, donde la calidad, el sabor y la experiencia se combinan
          para ofrecerte momentos inolvidables.
        </p>
        <p>¡Ven y descubre el arte de la buena mesa!</p>
      </div>
    </div>

    <section id="featured-restaurants">
      <h2 class="titulo-restaurantes">🍽️ Restaurantes Destacados</h2>
      <div class="carousel">
        <div v-for="restaurant in restaurantesFiltrados" :key="restaurant.id" class="carousel-item">
          <img :src="restaurant.img" :alt="restaurant.name || 'Imagen no disponible'" loading="lazy" />
          <p><strong>{{ restaurant.name }}</strong></p>
          <p>{{ restaurant.address }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import restaurante1 from "@/assets/restaurantes/restaurante1.png";
import restaurante2 from "@/assets/restaurantes/restaurante2.png";
import restaurante3 from "@/assets/restaurantes/restaurante3.png";

const restaurantes = ref([]);

// Cargar restaurantes desde LocalStorage en `onMounted()`
onMounted(() => {
  const data = JSON.parse(localStorage.getItem("restaurants")) || [];
  restaurantes.value = data.length > 0 ? data : [
    { id: 1, name: "La Pizzería Italiana", address: "Av. 10 # 15 - 80 Bogotá", img: restaurante1 },
    { id: 2, name: "El Sabor Mexicano", address: "Cra 12 # 50 - 15 Barranquilla", img: restaurante2 },
    { id: 3, name: "Sushi House", address: "Cra 20 # 45 - 90 Cali", img: restaurante3 },
  ];
});

// Computed para manejar datos dinámicos
const restaurantesFiltrados = computed(() => restaurantes.value);
</script>

<style scoped>
@keyframes deslizarIzquierda {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.slider-text {
  animation: deslizarIzquierda 1.5s ease-out;
}
.slider-text h1 {
  font-size: 2.5em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.slider-text p {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  font-size: 1.2em;
}
.titulo-restaurantes {
  animation: zoomIn 1.5s ease-in-out;
  margin-left: 50px;
}
.carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.carousel-item {
  text-align: center;
  margin: 1.2rem;
}
.carousel-item img {
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  animation: fadeIn 1.5s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
