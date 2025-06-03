<script setup>
import { computed, ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/plugins/firebase";


const restaurante = ref({
  name: "",
  estrellas: "",
  direccion: "",
  imagen: "",
  categoria: ""
});

const mensaje = ref("");
const guardadoExitoso = ref(false);
const guardandoRestaurante = ref(false);

// Validacion formato de restaurante
const regexDirecciones = /^(CR|CL|DG|TV|CQ|AV)\s\d{1,3}[A-Z]{0,2}(BIS)?(NORTE|ESTE|OESTE|SUR)?\s\d{1,3}[A-Z]{0,2}(NORTE|ESTE|OESTE|SUR)?-\d{1,3}$/;
const direccionInvalida = computed(() => !regexDirecciones.test(restaurante.value.direccion));

// Validar que los espacios no esten vacios y eliminar espacios en blanco añadidos por error
const camposObligatorios = computed(() => {
  return (
    restaurante.value.name.trim() !== "" &&
    restaurante.value.direccion.trim() !== "" &&
    restaurante.value.imagen.trim() !== "" &&
    restaurante.value.categoria.trim() !== ""
  );
});

// Revisar que las dos validaciones estén de manera correcta
const formatoValido = computed(() => {
  return (
    camposObligatorios.value &&
    !direccionInvalida.value
  );
});


const guardarRestaurante_db = async () => {

  if (!formatoValido.value) {
    mensaje.value = "Corregir los errores del formulario";
    guardandoRestaurante.value = false;
    setTimeout(() => mensaje.value = "", 3000);
    return;
  }

  // Resetear los estados y los mensajes
  mensaje.value = "";
  guardadoExitoso.value = false;
  guardandoRestaurante.value = true;

  try {
    await addDoc(collection(db, 'restaurantes'), {
      name: restaurante.value.name.trim(),
      estrellas: restaurante.value.estrellas,
      direccion: restaurante.value.direccion.trim(),
      imagen: restaurante.value.imagen.trim(),
      categoria: restaurante.value.categoria.trim()
    });

    restaurante.value = { name: "", direccion: "", imagen: "", estrellas: "", categoria: "" };
    mensaje.value = "¡Restaurante registrado exitosamente!";
    guardadoExitoso.value = true;
    setTimeout(() => mensaje.value = "", 3000);

  } catch (error) {
    console.error("Error al guardar restaurante:", error);
    mensaje.value = "Error al guardar el restaurante" + error.message;
    guardadoExitoso.value = false;
    setTimeout(() => mensaje.value = "", 3000)
  } finally {
    guardandoRestaurante.value = false;
  }
};

</script>
<template>
  <div class="app-container">
    <h1>Registrar Nuevo Restaurante</h1>
    <form @submit.prevent="guardarRestaurante_db">
      <label for="name">Nombre:</label>
      <input v-model="restaurante.name" type="text" id="name" required>

      <label for="address">Dirección:</label>
      <input v-model="restaurante.direccion" type="text" id="address" required
        placeholder="CL 10AFBIS NORTE 51BBSUR-15">
      <p v-if="direccionInvalida && restaurante.direccion !== ''" style="color: red;">Formato invalido</p>

      <label for="image">Imagen URL:</label>
      <input v-model="restaurante.imagen" type="url" id="image" required>

      <fieldset>
        <label for="estrellas">Numero Estrellas:</label>
        <input type="number" v-model="restaurante.estrellas" min="0" max="5" id="estrellas" required>
        <label for="categoria">Categoria:</label>
        <select name="categoria" id="categoria" v-model="restaurante.categoria" required>
          <option value="">Categoria...</option>
          <option value="Italiano">Italiano</option>
          <option value="Mexicano">Mexicano</option>
          <option value="Mar">Mar</option>
        </select>
      </fieldset>

      <button type="submit" :disabled="guardandoRestaurante || !formatoValido">
        {{ guardandoRestaurante ? 'Guardando...' : 'Guardar Restaurante' }}</button>
    </form>
    <div v-if="mensaje" :class="{ 'success-message': guardadoExitoso, 'error-message': !guardadoExitoso }">{{ mensaje }}
    </div>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}

.success-message {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
}

.error-message {
  background-color: #f44336;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
}

button {
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #e64a19;
}

/* Mejora en los inputs */
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;
  display: block;
  width: 80%;
}

input:focus {
  border-color: #ff5733;
  outline: none;
}

fieldset {
  display: flex;
  border: none;
  padding: 0;
  margin-top: 7px;
}

fieldset label {
  margin-right: 5px;
}

fieldset input {
  width: 50px;
  margin-right: 15px;
}
</style>
