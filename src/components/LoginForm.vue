<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="iniciarSesion">
      <label for="name">Usuario:</label>
      <input v-model="user.name" type="text" id="name" required>

      <label for="password">Contraseña:</label>
      <input v-model="user.password" type="password" id="password" required>

      <button type="submit">Ingresar</button>
    </form>
    <div v-if="mensaje" class="error-message">{{ mensaje }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const user = ref({
  name: "",
  password: ""
});

const mensaje = ref("");
const router = useRouter();

const iniciarSesion = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u =>
    u.name.toLowerCase() === user.value.name.toLowerCase() &&
    u.password === user.value.password
  );

  if (!usuario) {
    mensaje.value = "Usuario o contraseña incorrectos.";
    setTimeout(() => mensaje.value = "", 3000);
    return;
  }

  localStorage.setItem("usuarioActual", JSON.stringify(usuario));
  mensaje.value = "¡Inicio de sesión exitoso!";

  setTimeout(() => router.push("/dashboard"), 2000); // Redirigir tras login exitoso
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
.error-message {
  background-color: #e64a19;
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
