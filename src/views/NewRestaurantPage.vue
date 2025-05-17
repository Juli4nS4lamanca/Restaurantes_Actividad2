<template>
  <div class="app-container">
    <h1>Registrar Nuevo Restaurante</h1>
    <form @submit.prevent="guardarRestaurante">
      <label for="name">Nombre:</label>
      <input v-model="restaurante.name" type="text" id="name" required>

      <label for="address">Dirección:</label>
      <input v-model="restaurante.address" type="text" id="address" required>

      <label for="image">Imagen URL:</label>
      <input v-model="restaurante.image" type="url" id="image" required>

      <button type="submit">Guardar Restaurante</button>
    </form>
    <div v-if="mensaje" class="success-message">{{ mensaje }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const restaurante = ref({
  name: "",
  address: "",
  image: ""
});

const mensaje = ref("");

const guardarRestaurante = () => {
  try {
    if (!restaurante.value.name.trim() || !restaurante.value.address.trim() || !restaurante.value.image.trim()) {
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

    restaurante.value = { name: "", address: "", image: "" };
    mensaje.value = "¡Restaurante registrado exitosamente!";
    setTimeout(() => mensaje.value = "", 3000);
  } catch (error) {
    console.error("Error al guardar restaurante:", error);
  }
};
</script>

<style scoped>
.app-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
}
button {
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background-color: #e64a19;
}

/* Mejora en los inputs */
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #ff5733;
  outline: none;
}
</style>
