<!-- TablaPersonas.vue -->
<template>
    <!-- Contenedor principal del componente -->
    <div id="tabla-personas">
        <!-- Tabla HTML para mostrar la informacion de personas -->
        <table class="table">
            <!-- Encabezado de la tabla -->
            <thead>
                <!-- nombres de columnas -->
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>
            <!-- Cuerpo de la tabla con datos dinamicos -->
            <tbody>
                <!-- Iteracion sobre el arreglo de personas utilizando v-for -->
                <tr v-for="persona in personas" :key="persona.id">
                    <!-- Celda de datos para el nombre de la persona -->
                    <td>{{ persona.nombre }}</td>
                    <!-- Celda de datos para el apellido de la persona -->
                    <td>{{ persona.apellido }}</td>
                    <!-- Celda de datos para el correo electronico de la persona -->
                    <td>{{ persona.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    // Definicion del componente Vue
    export default {
        name: 'tabla-personas',
        props: {
            // La propiedad 'personas' se espera que sea un array
            personas: Array,
        }
    }
</script>
<style scoped>
</style>