<template>
  <div>
    <header>
      <h1>Directorio de Restaurantes Max Food</h1>
    </header>
    <FeaturedRestaurants />
  </div>
</template>

<script>
import FeaturedRestaurants from '@/components/FeaturedRestaurants.vue';

export default {
  components: { FeaturedRestaurants }
};
</script>