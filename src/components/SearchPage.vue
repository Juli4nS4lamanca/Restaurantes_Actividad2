<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Busqueda from '@/components/Busqueda.vue';
</script>

<template>
  <div>
    <Navbar /> <!-- ✅ Se incluye el Navbar -->
    <main>
      <h1>Buscar Restaurantes</h1>
      <p>Aquí puedes encontrar restaurantes por nombre o categoría.</p>
      <Busqueda /> <!-- ✅ Se incluye la búsqueda correctamente -->
    </main>
    <Footer /> <!-- ✅ Se incluye el Footer -->
  </div>
</template>
