<template>
  <section id="featured-restaurants">
    <h2 class="titulo-restaurantes">🍽️ {{ traducciones[selectedLanguage].destacados }}</h2>
    <div class="carousel">
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="carousel-item">
        <img :src="restaurant.img" :alt="restaurant.name" loading="lazy">
        <p><strong>{{ restaurant.name }}</strong></p>
        <p>{{ restaurant.address }}</p>
      </div>
    </div>

    <div class="idioma-selector">
      <label for="idioma">🌍 Idioma:</label>
      <select v-model="selectedLanguage">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const selectedLanguage = ref(localStorage.getItem("idioma") || "es");

    const restaurants = ref([
      { id: 1, name: "La Pizzería Italiana", address: "Av. 10 # 15 - 80 Bogotá", img: "/restaurantes/restaurante1.png" },
      { id: 2, name: "El Sabor Mexicano", address: "Cra 12 # 50 - 15 Barranquilla", img: "/restaurantes/restaurante2.png" },
      { id: 3, name: "Sushi House", address: "Cra 20 # 45 - 90 Cali", img: "/restaurantes/restaurante3.png" }
    ]);

    const traducciones = {
      es: { destacados: "🍽️ Restaurantes Destacados" },
      en: { destacados: "🍽️ Featured Restaurants" },
      fr: { destacados: "🍽️ Restaurants en Vedette" }
    };

    onMounted(() => {
      const storedLanguage = localStorage.getItem("idioma");
      if (storedLanguage) selectedLanguage.value = storedLanguage;
    });

    return { selectedLanguage, restaurants, traducciones };
  }
};
</script>

<style scoped>
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