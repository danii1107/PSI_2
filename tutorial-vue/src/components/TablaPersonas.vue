<!-- TablaPersonas.vue -->
<template>
  <div id="tabla-personas">
    <div
      v-if="!personas.length"
      class="alert alert-info"
      role="alert"
    >
      No se han encontrado personas
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="persona in personas"
            :key="persona.id"
          >
            <td v-if="editando === persona.id">
              <input
                id="persona.name"
                v-model="persona.name"
                type="text"
                class="form-control"
                data-cy="persona-name"
              >
            </td>
            <td v-else>
              {{ persona.name }}
            </td>
            <td v-if="editando === persona.id">
              <input
                v-model="persona.surname"
                type="text"
                class="form-control"
              >
            </td>
            <td v-else>
              {{ persona.surname }}
            </td>
            <td v-if="editando === persona.id">
              <input
                v-model="persona.email"
                type="email"
                class="form-control"
              >
            </td>
            <td v-else>
              {{ persona.email }}
            </td>
            <td v-if="editando === persona.id">
              <button
                class="btn btn-success"
                data-cy="save-button"
                @click="guardarPersona(persona)"
              >
                &#x1F5AB; Guardar
              </button>
              <button
                class="btn btn-secondary ml-2"
                data-cy="cancel-button"
                @click="cancelarEdicion(persona)"
              >
                &#x1F5D9; Cancelar
              </button>
            </td>
            <td v-else>
              <button
                class="btn btn-info"
                data-cy="edit-button"
                @click="editarPersona(persona)"
              >
                &#x1F58A; Editar
              </button>
              <button
                class="btn btn-danger ml-2"
                @click="$emit('delete-persona', persona.id)"
              >
                &#x1F5D1; Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  

<script>
    import { ref } from 'vue';

    export default {
        name: 'TablaPersonas',
        props: {
            // La propiedad 'personas' se espera que sea un array
            personas: {
              type: Array,
              default: () => []
            }
        },
        emits: ['delete-persona', 'actualizar-persona'],
        setup(props, ctx) {
            const editando = ref(null);
            const personaEditada = ref(null);

            const editarPersona = (persona) => {
                personaEditada.value = { ...persona };
                editando.value = persona.id;
            };

            const guardarPersona = (persona) => {
                if (!persona.name.length || !persona.surname.length || !persona.email.length) {
                    return;
                }
                ctx.emit('actualizar-persona', persona.id, persona);
                editando.value = null;
            };

            const cancelarEdicion = (persona) => {
                Object.assign(persona, personaEditada.value);
                editando.value = null;
            };

            return {
                editando,
                editarPersona,
                guardarPersona,
                cancelarEdicion,
                personaEditada
            };
        }
    }
</script>
<style scoped>
</style>

