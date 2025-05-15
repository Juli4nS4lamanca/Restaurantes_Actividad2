<template>
  <header>
    <div class="directorio-restaurantes">
      <img class="logo-1" src="@/assets/Imagen0.png" alt="Logo del directorio" loading="lazy">
      <h1 class="titulo-directorio">Directorio de Restaurantes Max Food</h1>
    </div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/search">Buscar</router-link></li>
        <li><router-link to="/new">Nuevo Restaurante</router-link></li>
      </ul>
    </nav>
    <div class="idioma-selector">
      <label for="idioma">🌍 Idioma:</label>
      <select id="idioma" v-model="selectedLanguage">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  </header>

  <main>
    <div class="header-content">
      <div class="slider-text">
        <h1>¡Bienvenido!</h1>
        <p>Descubre los mejores restaurantes, donde la calidad, el sabor y la experiencia se combinan para ofrecerte momentos inolvidables.</p>
        <p>¡Ven y descubre el arte de la buena mesa!</p>
      </div>
    </div>

    <section id="featured-restaurants">
      <h2 class="titulo-restaurantes">🍽️ Restaurantes Destacados</h2>
      <div class="carousel">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="carousel-item">
          <img :src="restaurant.img" :alt="restaurant.name" loading="lazy">
          <p><strong>{{ restaurant.name }}</strong></p>
          <p>{{ restaurant.address }}</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Directorio Gastronómico. Todos los derechos reservados.</p>
    <div class="redes-sociales">
      <a href="https://twitter.com/" target="_blank"><img src="@/assets/Pajarito.png" alt="Twitter"></a>
      <a href="https://facebook.com/" target="_blank"><img src="@/assets/Face.png" alt="Facebook"></a>
      <a href="https://instagram.com/" target="_blank"><img src="@/assets/ins.png" alt="Instagram"></a>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selectedLanguage = ref('es');
    const restaurants = ref([
      { id: 1, name: "La Pizzería Italiana", address: "Av. 10 # 15 - 80 Bogotá", img: "@/assets/restaurante1.png" },
      { id: 2, name: "El Sabor Mexicano", address: "Cra 12 # 50 - 15 Barranquilla", img: "@/assets/restaurante2.png" },
      { id: 3, name: "Sushi House", address: "Cra 20 # 45 - 90 Cali", img: "@/assets/restaurante3.png" }
    ]);

    return { selectedLanguage, restaurants };
  }
};
</script>

<style scoped>
/* Estilos adaptados */
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}
nav a {
  color: white;
  text-decoration: none;
}
.titulo-restaurantes {
  text-align: center;
  font-size: 1.8rem;
}
.carousel {
  display: flex;
  gap: 15px;
  justify-content: center;
}
.carousel-item {
  text-align: center;
}
</style>