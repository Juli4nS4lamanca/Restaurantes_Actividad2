
<script setup>
import CarouselHome from '@/components/CarouselHome.vue';
</script>
<template>
  <div>
 <div class="header-content">
      <div class="slider-text">
        <h1>¡Bienvenido!</h1>
        <p>
          Descubre los mejores restaurantes, donde la calidad, el sabor y la experiencia se combinan
          para ofrecerte momentos inolvidables.
        </p>
        <p>¡Ven y descubre el arte de la buena mesa!</p>
      </div>
    </div>
  <CarouselHome/>
  </div>
</template>

<style scoped>
.slider-text {
  animation: deslizarIzquierda 1.5s ease-out;
}
.slider-text h1 {
  font-size: 2.5em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.slider-text p {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  font-size: 1.2em;
}
</style>

