<script setup>
import imagenTwitter from '@/assets/RedesSociales/Pajarito.png'
import imagenFacebook from '@/assets/RedesSociales/Face.png'
import imagenInstagram from '@/assets/RedesSociales/ins.png'
</script>
<template>
  <footer>
    <p>&copy; 2025 Directorio Gastronómico. Todos los derechos reservados.</p>
    <div class="redes-sociales">
      <a href="https://twitter.com/" target="_blank"><img :src="imagenTwitter" alt="Twitter" /></a>
      <a href="https://facebook.com/" target="_blank"
        ><img :src="imagenFacebook" alt="Facebook"
      /></a>
      <a href="https://instagram.com/" target="_blank"
        ><img :src="imagenInstagram" alt="Instagram"
      /></a>
    </div>
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
.redes-sociales {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.redes-sociales a {
  background-color: transparent;
}
.redes-sociales a img {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Bordes completamente redondeados */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.redes-sociales a:hover img {
  transform: scale(1.2);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3); /* Efecto de sombra al pasar el cursor */
}
</style>
