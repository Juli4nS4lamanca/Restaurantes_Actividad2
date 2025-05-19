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
    <transition name="deslizar">
      <RouterView />
    </transition>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>

.deslizar-enter-active,
.deslizar-leave-active{
  transition: transform 0.3s ease;
}

.deslizar-enter-from{
  transform: translateX(-100%);
}

.deslizar-leave-from{
  transform: translateX(100%);
}

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
