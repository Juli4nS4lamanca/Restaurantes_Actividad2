<template>
  <div class="register-container">
    <h1>Registro</h1>
    <form @submit.prevent="registrarUsuario">
      <label for="name">Nombre:</label>
      <input v-model="user.name" type="text" id="name" required>

      <label for="password">Contraseña:</label>
      <input v-model="user.password" type="password" id="password" required>

      <button type="submit">Registrarse</button>
    </form>
    <div v-if="mensaje" class="success-message">{{ mensaje }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  name: "",
  password: ""
});

const mensaje = ref("");

const registrarUsuario = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el usuario ya existe
  const existe = usuarios.some(u => u.name.toLowerCase() === user.value.name.toLowerCase());
  if (existe) {
    mensaje.value = "El usuario ya está registrado.";
    setTimeout(() => mensaje.value = "", 3000);
    return;
  }

  // Guardar usuario
  usuarios.push({ ...user.value });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  user.value = { name: "", password: "" };
  mensaje.value = "¡Registro exitoso!";
  setTimeout(() => mensaje.value = "", 3000);
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
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
</style>
