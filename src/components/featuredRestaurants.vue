<template>
  <div>
    <h1 class="titulo-directorio">{{ traducciones[idioma].titulo }}</h1>

    <select v-model="idioma" @change="guardarIdioma">
      <option value="Español">Español</option>
      <option value="English">English</option>
      <option value="fr">Français</option>
    </select>

    <h2 class="titulo-restaurantes">{{ traducciones[idioma].destacados }}</h2>

    <div class="restaurant-container">
      <div v-for="rest in restaurantes" :key="rest.id" class="restaurant-item">
        <h3>{{ rest[`name_${idioma}`] || rest.name }}</h3>
        <p>{{ rest[`description_${idioma}`] || rest.description }}</p>
        <p>{{ rest[`address_${idioma}`] || rest.address }}</p>
        <img :src="rest.image" :alt="rest.name">
      </div>
    </div>

    <footer>
      <p>{{ traducciones[idioma].footer }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const idioma = ref(localStorage.getItem("idioma") || "Español");

const traducciones = {
  Español: {
    titulo: "Directorio de Restaurantes Max Food",
    destacados: "🍽️ Restaurantes Destacados",
    footer: "© 2025 Directorio Gastronómico. Todos los derechos reservados."
  },
  English: {
    titulo: "Max Food Restaurant Directory",
    destacados: "🍽️ Featured Restaurants",
    footer: "© 2025 Gastronomic Directory. All rights reserved."
  },
  fr: {
    titulo: "Annuaire des Restaurants Max Food",
    destacados: "🍽️ Restaurants en Vedette",
    footer: "© 2025 Annuaire Gastronomique. Tous droits réservés."
  }
};

const restaurantes = ref([]);

const cargarRestaurantes = () => {
  restaurantes.value = JSON.parse(localStorage.getItem("restaurants")) || [];
};

const guardarIdioma = () => {
  localStorage.setItem("idioma", idioma.value);
  cargarRestaurantes();
};

onMounted(() => {
  cargarRestaurantes();
});
</script>
