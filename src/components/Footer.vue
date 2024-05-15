<template>
  <v-footer class="footer bg-grey-lighten-1">
    <v-row justify="center" no-gutters>

      <v-btn v-for="link in links" :key="link" class="mx-2" color="white" text>
        <router-link :to="{ name: getRoute(link) }">{{ link }}</router-link>
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
  height: 10%;
}
</style>