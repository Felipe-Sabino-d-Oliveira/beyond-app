<template>
  <v-app>

    <v-main class="body">
      <div>
        <!-- ------ BARRA DE FERRAMENTAS ------ -->
        <v-toolbar
          image="https://ficr.catolica.edu.br/portal/wp-content/uploads/2019/07/Fachada-FICR.jpg"
          dark
          prominent
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Tela de Cursos</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </div>

      <!-- ------------------- BODY ------------------- -->

      <div class="container">
        <v-container class="adicionar__curso">
          Inserir cursos
        </v-container>

        <v-container class="adicionar__curso">
          Inserir cursos
        </v-container>

        <v-container class="adicionar__curso">
          Inserir cursos
        </v-container>
      </div>

    </v-main>

    <!-- FOOTER -->

    <v-footer class="d-flex flex-column">
      <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>

  </v-app>
</template>


<!-- ----------------------- SCRIPT ----------------------- -->

<script>




/* ----- FOOTER ----- */

export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }

</script>

<style>

.body{
  font-size: 62.5%;
}

.container{
  align-items: center;
  
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.adicionar__curso{
  font-size: 5.0em;
}

</style>