<script setup>
import Navbar from './components/Navbar.vue';
import HomePage from './views/HomePage.vue'; // Verifica que la ruta sea correcta
import Footer from './components/AppFooter.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <HomePage />
  </main>

  <Footer />
</template>
