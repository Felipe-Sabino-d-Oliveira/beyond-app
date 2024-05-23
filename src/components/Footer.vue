<template>
  <v-footer class="footer" dark outlined elevation="8">
    <v-row class="d-flex justify-center align-center" no-gutters>

      <v-btn v-for="link in links" :key="link" class="mx-2" color="white">
        <router-link class="text-decoration-none" :to="{ name: getRoute(link) }">{{ link }}</router-link>
      </v-btn>

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Feito por Felipe Sabino</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      'Início',
      'Cursos',
      'Mais Serviços',
      'Blog',
      'Sobre Nós',
    ],
  }),
  methods: {
    getRoute(link) {
      switch (link) {
        case 'Início':
          return 'home';
        case 'Cursos':
          return 'cursos';
        case 'Mais Serviços':
          return 'mais-servicos';
        case 'Blog':
          return 'blog';
        case 'Sobre Nós':
          return 'sobre-nos';
        default:
          return '';
      }
    }
  },
}
</script>

<style>
.footer {
  height: 15%;
  background: var(--gradient-blue-3)
}
</style>