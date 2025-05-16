<template>
  <div class="app-container">
    <header>
      <h1 class="title">¡Registra un Restaurante!</h1>
      <nav>
        <ul class="menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/search">Buscar</router-link></li>
          <li><router-link to="/new">Nuevo Restaurante</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="form-section">
        <h2>Registra tu Restaurante</h2>
        <form @submit.prevent="guardarRestaurante">
          <fieldset>
            <legend>Información del Restaurante</legend>

            <div class="form-group">
              <label for="name">Nombre:</label>
              <input v-model="restaurante.name" type="text" id="name" placeholder="Ej. La Pizzería Italiana" required maxlength="100">
            </div>

            <div class="form-group">
              <label for="description">Descripción:</label>
              <textarea v-model="restaurante.description" id="description" placeholder="Breve descripción..." required maxlength="300"></textarea>
            </div>

            <div class="form-group">
              <label for="address">Dirección:</label>
              <input v-model="restaurante.address" type="text" id="address" placeholder="Ej. Calle 20 # 15 - 80, Bogotá" required maxlength="150">
            </div>

            <div class="form-group">
              <label for="image">Imagen URL:</label>
              <input v-model="restaurante.image" type="url" id="image" placeholder="https://ejemplo.com/imagen.jpg" required>
            </div>

            <button type="submit" class="submit-button">Guardar Restaurante</button>
          </fieldset>
        </form>
      </section>
    </main>

    <footer>
      <p>© 2025 Directorio Gastronómico. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const restaurante = ref({
  name: '',
  description: '',
  address: '',
  image: ''
});

const guardarRestaurante = () => {
  const restaurantes = JSON.parse(localStorage.getItem('restaurants')) || [];
  restaurantes.push({ ...restaurante.value });
  localStorage.setItem('restaurants', JSON.stringify(restaurantes));
  alert('Restaurante guardado exitosamente!');
};
</script>

<style scoped>
.app-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.menu {
  display: flex;
  gap: 15px;
}
</style>
