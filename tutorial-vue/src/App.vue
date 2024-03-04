<!-- App.vue -->
<template>
  <div
    id="app"
    class="container"
  >
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <!-- Inclusion del componente "TablaPersonas" -->
        <tabla-personas
          :personas="personas"
          @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona"
        />
      </div>
    </div>
  </div>
</template>
    
<script>
  // Import the ref function from the Vue library
  import { ref } from 'vue';
  import TablaPersonas from '@/components/TablaPersonas.vue'
  import FormularioPersona from '@/components/FormularioPersona.vue'

  // Define the component
  export default {
    // name del componente principal
    name: 'App',
    // Registro de componentes utilizados en este componente principal
    components: {
        TablaPersonas,
        FormularioPersona,
      },
      // The setup function is part of the Vue 3 Composition API
    setup() {
      // Assuming personas is a ref object initialized as an empty array
      const personas = ref([
        {
          id: 1,
          name: 'Jon',
          surname: 'Nieve',
          email: 'jon@email.com',
        },
        {
          id: 2,
          name: 'Tyrion',
          surname: 'Lannister',
          email: 'tyrion@email.com',
        },
        {
          id: 3,
          name: 'Daenerys',
          surname: 'Targaryen',
          email: 'daenerys@email.com',
        },
      ]);
      // Define a function called agregarPersona that adds a new persona to the personas array
      const agregarPersona = (persona) => {
          // Update the value of personas by creating a new array with existing values and adding the new persona
          let id = 0;

          if (personas.value.length > 0) {
            id = personas.value[personas.value.length - 1].id + 1;
          }
          personas.value = [...personas.value, persona];
      };
      const eliminarPersona = (id) => {
        try {
          personas.value = personas.value.filter(u => u.id !== id);
        }
        catch(error) {
          console.error(error);
        }
      };
      const actualizarPersona = (id, personaActualizada) => {
        try {
          personas.value = personas.value.map(persona =>
          persona.id === id ? personaActualizada : persona);
        }
        catch(error){
          console.error(error);
        }
      };
      // Return the reactive variable personas and the function agregarPersona
      return {
        personas,
        agregarPersona,
        eliminarPersona,
        actualizarPersona
      };
    },
  };
</script>
<style>
/* Estilos globales para todos los elementos button en la aplicacion */
  button {
  background: #009435;
  border: 1px solid #009435;
  }
</style>