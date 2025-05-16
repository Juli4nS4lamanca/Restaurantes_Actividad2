<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
