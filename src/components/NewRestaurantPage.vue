<script setup>
import { ref } from "vue";

const restaurante = ref({
  name: "",
  description: "",
  address: "",
  image: ""
});

const mensaje = ref(""); // ✅ Maneja los mensajes de éxito o error

const guardarRestaurante = () => {
  try {
    if (!restaurante.value.name || !restaurante.value.address || !restaurante.value.image) {
      mensaje.value = "Todos los campos son obligatorios.";
      setTimeout(() => mensaje.value = "", 3000);
      return;
    }

    const restaurantes = JSON.parse(localStorage.getItem("restaurants")) || [];
    const existe = restaurantes.some(r => r.name.trim().toLowerCase() === restaurante.value.name.trim().toLowerCase());

    if (existe) {
      mensaje.value = "Ya existe un restaurante con este nombre.";
      setTimeout(() => mensaje.value = "", 3000);
      return;
    }

    restaurantes.push({ ...restaurante.value });
    localStorage.setItem("restaurants", JSON.stringify(restaurantes));

    restaurante.value = { name: "", description: "", address: "", image: "" };
    mensaje.value = "¡Restaurante registrado exitosamente!";
    setTimeout(() => mensaje.value = "", 3000);
  } catch (error) {
    console.error("Error al guardar restaurante:", error);
  }
};
</script>

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

        <div v-if="mensaje" class="success-message">{{ mensaje }}</div> <!-- ✅ Mensaje agregado -->

        <form @submit.prevent="guardarRestaurante">
          <fieldset>
            <legend>Información del Restaurante</legend>

            <div class="form-group">
              <label for="name">Nombre:</label>
              <input v-model="restaurante.name" type="text" id="name" required maxlength="100">
            </div>

            <div class="form-group">
              <label for="description">Descripción:</label>
              <textarea v-model="restaurante.description" id="description" required maxlength="300"></textarea>
            </div>

            <div class="form-group">
              <label for="address">Dirección:</label>
              <input v-model="restaurante.address" type="text" id="address" required maxlength="150">
            </div>

            <div class="form-group">
              <label for="image">Imagen URL:</label>
              <input v-model="restaurante.image" type="url" id="image" required>
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

<style scoped>
.app-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
}
.submit-button {
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}
.submit-button:hover {
  background-color: #e64a19;
}
</style>
