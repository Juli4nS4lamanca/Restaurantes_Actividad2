<script setup>
import { computed, ref } from "vue";
import { restaurantes as restaurantesIniciales } from '@/assets/restaurantes.js';


const restaurante = ref({
  name: "",
  estrellas:"",
  direccion: "",
  imagen: "",
  categoria:""
});

const mensaje = ref("");
const guardadoExitoso = ref(false);

const regexDirecciones = /^(CR|CL|DG|TV|CQ|AV)\s\d{1,3}[A-Z]{0,2}(BIS)?(NORTE|ESTE|OESTE|SUR)?\s\d{1,3}[A-Z]{0,2}(NORTE|ESTE|OESTE|SUR)?-\d{1,3}$/;
const direccionInvalida = computed(() => !regexDirecciones.test(restaurante.value.direccion));

const guardarRestaurante = () => {
  try {
    if (!restaurante.value.name.trim() || !restaurante.value.direccion.trim() || !restaurante.value.imagen.trim()
        || !restaurante.value.categoria.trim()) {
      mensaje.value = "Todos los campos son obligatorios.";
      guardadoExitoso.value = false;
      setTimeout(() => mensaje.value = "", 3000);
      return;
    }

    const restaurantes = JSON.parse(localStorage.getItem("restaurantes")) || [...restaurantesIniciales];
    const existe = restaurantes.some(r => r.name.trim().toLowerCase() === restaurante.value.name.trim().toLowerCase());

    if (existe) {
      mensaje.value = "Ya existe un restaurante con este nombre.";
      guardadoExitoso.value = false;
      setTimeout(() => mensaje.value = "", 3000);
      return;
    }

    
    if(direccionInvalida.value){
      mensaje.value = "Formato de dirección no valida";
      guardadoExitoso.value = false;
      setTimeout(() => mensaje.value = "", 3000 );
      return;
    }

    restaurantes.push({ ...restaurante.value });
    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));

    restaurante.value = { name: "", direccion: "", imagen: "", estrellas: "", categoria: "" };
    mensaje.value = "¡Restaurante registrado exitosamente!";
    guardadoExitoso.value = true;
    setTimeout(() => mensaje.value = "", 3000);
  } catch (error) {
    console.error("Error al guardar restaurante:", error);
    mensaje.value = "Error al guardar el restaurante";
    guardadoExitoso.value = false;
    setTimeout(() => mensaje.value = "", 3000)
  }
};
</script>
<template>
  <div class="app-container">
    <h1>Registrar Nuevo Restaurante</h1>
    <form @submit.prevent="guardarRestaurante">
      <label for="name">Nombre:</label>
      <input v-model="restaurante.name" type="text" id="name" required>

      <label for="address">Dirección:</label>
      <input v-model="restaurante.direccion" type="text" id="address" required placeholder="CL 10AFBIS NORTE 51BBSUR-15">
      <p v-if="direccionInvalida && restaurante.direccion !=='' " style="color: red;">Formato invalido</p>

      <label for="image">Imagen URL:</label>
      <input v-model="restaurante.imagen" type="url" id="image" required>

      <fieldset>
        <label for="estrellas">Numero Estrellas:</label>
        <input type="number" v-model="restaurante.estrellas" min="0" max="5" id="estrellas" required>
        <label for="categoria">Categoria:</label>
        <select name="categoria" id="categoria" v-model="restaurante.categoria" required>
          <option value="">Categoria...</option>
          <option value="Italiano">Italiano</option>
          <option value="Mexicano">Mexicano</option>
          <option value="Mar">Mar</option>
        </select>
      </fieldset>

      <button type="submit">Guardar Restaurante</button>
    </form>
    <div v-if="mensaje" :class="{'success-message': guardadoExitoso, 'error-message': !guardadoExitoso}">{{ mensaje }}</div>
  </div>
</template>

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
.error-message {
  background-color: #f44336;
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
  margin-top: 15px;
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
  display: block;
  width: 80%;
}

input:focus {
  border-color: #ff5733;
  outline: none;
}

fieldset {
  display: flex;
  border: none;
  padding: 0;
  margin-top: 7px;
}
fieldset label{
  margin-right: 5px;
}
fieldset input{
  width: 50px;
  margin-right: 15px;
}
</style>
