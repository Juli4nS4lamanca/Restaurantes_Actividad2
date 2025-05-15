<script setup>
import logo from '@/assets/Imagen0.png'
</script>
<template>
  <div class="directorio-restaurantes">
    <img class="logo-1" :src="logo" alt="Logo del directorio" loading="lazy" />
    <h1 class="titulo-directorio">Directorio de Restaurantes Max Food</h1>

    <nav class="navbar">
      <div class="lista-1">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="search.html">Buscar</a></li>
          <li><a href="">Nuevo Restaurante</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.directorio-restaurantes {
  background-color: var(--color-cafe-oscuro);
  color: var(--color-fondo);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-width: 1000px;
}

.logo-1 {
  width: 100px;
  height: auto;
  margin-right: 15px;
}
.navbar {
  display: flex;
  justify-content: flex-end; /* Alinea el menú a la derecha */
  align-items: center;
  width: 100%;
}

.lista-1 ul {
  list-style: none;
  display: flex;
  gap: 10px;
}

.lista-1 li a {
  text-decoration: none;
  font-weight: bold;
  color: var(--color-fondo);
  padding: 8px 15px;
  background-color: var(--color-cafe-oscuro);
  border-radius: 5px;
}

.lista-1 ul li a:hover {
  background-color: var(--color-cafe-semioscuro);
}
</style>
