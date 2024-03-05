<template>
  <div id="formulario-persona">
    <form @submit.prevent="enviarFormulario">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>name</label>
              <input
                ref="name"
                v-model="persona.name"
                data-cy="name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': procesando && nameInvalido }"
                @focus="resetEstado"
                @keypress="resetEstado"
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>surname</label>
              <input
                v-model="persona.surname"
                data-cy="surname"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': procesando && surnameInvalido }"
                @focus="resetEstado"
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="persona.email"
                data-cy="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': procesando && emailInvalido }"
                @focus="resetEstado"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group"></div>
          </div>
          <br>
          <div><button data-cy="add-button" class="btn btn-primary">
                Agnadir persona
              </button></div>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              v-if="error && procesando"
              class="alert alert-danger"
              role="alert"
            >
              Debes rellenar todos los campos!
            </div>
            <div
              v-if="correcto"
              class="alert alert-success"
              role="alert"
            >
              La persona ha sido agregada correctamente!
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: "FormularioPersona",
    emits: ['add-persona'],
    data() {
        return {
            procesando: false,
            correcto: false,
            error: false,
            persona: {
                name: "",
                surname: "",
                email: "",
            },
        };
    },
    computed: {
        nameInvalido() {
            return this.persona.name.length < 1;
        },
        surnameInvalido() {
            return this.persona.surname.length < 1;
        },
        emailInvalido() {
            return this.persona.email.length < 1;
        },
    },
    methods: {
        enviarFormulario() {
            this.procesando = true;
            this.resetEstado();
            // Comprobamos la presencia de errores
            if (this.nameInvalido || this.surnameInvalido || this.emailInvalido) {
                this.error = true;
                return;
            }
            this.$emit('add-persona', this.persona);
            this.$refs.name.focus();
            this.error = false;
            this.correcto = true;
            this.procesando = false;
            // Restablecemos el valor de la variables
            this.persona = {
                name: "",
                surname: "",
                email: "",
            };
        },
        resetEstado() {
            this.correcto = false;
            this.error = false;
        },
    },
};
</script>
<style scoped>
form {
    margin-bottom: 2rem;
}
</style>