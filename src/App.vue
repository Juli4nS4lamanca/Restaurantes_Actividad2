<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-cafe-oscuro);
  color: var(--color-fondo);
  text-align: center;
  padding: 10px;
  margin-top: auto;
}
main{
    max-width: 80%px;
    margin: auto;
    padding: 30px;
} 
</style>
