<script setup></script>
<template>
  <div class="directorio-restaurantes">
    <img class="logo-1" src="" alt="Logo del directorio" loading="lazy" />
    <h1 class="titulo-directorio">Directorio de Restaurantes Max Food</h1>
  </div>
  <nav class="navbar">
    <div class="lista-1">
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="search.html">Buscar</a></li>
        <li><a href="">Nuevo Restaurante</a></li>
      </ul>
    </div>
  </nav>
</template>
<style>
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
