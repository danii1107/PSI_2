<template>
    <!-- Contenedor principal del componente -->
    <div id="formulario-persona">
    <!-- Formulario con campos para ingresar informacion de una persona -->
    <form>
    <div class="container">
    <!-- Primera fila con campos de nombre, apellido y email -->
    <div class="row">
    <div class="col-md-4">
    <div class="form-group">
    <!-- Etiqueta y campo de entrada para el nombre -->
    <label>Nombre</label>
<input type="text" class="form-control" />
</div>
</div>
<div class="col-md-4">
<div class="form-group">
<!-- Etiqueta y campo de entrada para el apellido -->
<label>Apellido</label>
<input type="text" class="form-control" />
</div>
</div>
<div class="col-md-4">
<div class="form-group">
<!-- Etiqueta y campo de entrada para el correo electronico -->
<label>Email</label>
<input type="email" class="form-control" />
</div>
</div>
</div>
<!-- Segunda fila con un boton para agregar persona -->
<div class="row">
<div class="col-md-4">
<div class="form-group">
<!-- Boton para agnadir persona -->
<button class="btn btn-primary">Agnadir persona</button>
</div>
</div>
</div>
</div>
</form>
</div>
</template>
<script>
// Importacion de la funcion "ref" de Vue 3
import { ref } from 'vue';
// Exportacion del componente "FormularioPersona"
export default {
// Nombre del componente
name: 'formulario-persona',
// Configuracion del componente usando el sistema "setup"
setup() {
// Declaracion de una variable reactiva "persona" con propiedades
↪→ nombre, apellido y email
const persona = ref({
nombre: '',
apellido: '',
email: '',
});
// Retorno de las variables o funciones que el componente va a exponer
return {
persona,
};
},
};
</script>
<style scoped>
/* Estilos especificos del componente con el modificador "scoped" */
form {
margin-bottom: 2rem;
}
</style>