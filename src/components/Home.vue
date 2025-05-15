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
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="carousel-item">
          <img :src="restaurant.img" :alt="restaurant.name" loading="lazy" />
          <p>
            <strong>{{ restaurant.name }}</strong>
          </p>
          <p>{{ restaurant.address }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import restaurante1 from '@/assets/restaurantes/restaurante1.png'
import restaurante2 from '@/assets/restaurantes/restaurante2.png'
import restaurante3 from '@/assets/restaurantes/restaurante3.png'

const restaurants = ref([
  { id: 1, name: 'La Pizzería Italiana', address: 'Av. 10 # 15 - 80 Bogotá', img: restaurante1 },
  { id: 2, name: 'El Sabor Mexicano', address: 'Cra 12 # 50 - 15 Barranquilla', img: restaurante2 },
  { id: 3, name: 'Sushi House', address: 'Cra 20 # 45 - 90 Cali', img: restaurante3 },
])
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
  font-size: 2.5em; /* Ajusta el tamaño según prefieras */
  font-weight: bold; /* Hace que se vea más llamativo */
  text-transform: uppercase; /* Opcional, pone el texto en mayúsculas */
  text-align: center;
  display: block;
}
.slider-text p {
  text-align: center;
  max-width: 80%; /* Limita el ancho */
  margin: 0 auto;
  font-size: 1.2em;
}

.restaurante-img img {
  width: 220px; /* Reduce el tamaño de la imagen */
  height: auto; /* Mantiene la proporción */
  margin-top: -20px; /* Mueve la imagen hacia arriba */
  margin-left: -160px; /* Mueve la imagen más hacia la izquierda */
  border: 3px solid #000; /* Borde negro */
}
@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
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
  align-items: center;
  margin: 1.2rem;
}

.carousel-item p {
  margin-bottom: 0;
}

.carousel-item p:last-of-type {
  margin: 0;
}

.carousel-item img {
  width: 300px; /* Ajusta el ancho */
  height: 250px; /* Ajusta la altura */
  object-fit: cover; /* Asegura que las imágenes mantengan proporción */
  border-radius: 10px; /* Bordes redondeados */
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
