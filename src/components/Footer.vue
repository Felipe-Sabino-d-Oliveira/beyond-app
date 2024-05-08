<template>
    <v-footer class="footer bg-grey-lighten-1">
        <v-row justify="center" no-gutters>

            <v-btn v-for=" link  in  links " :key="link" class="mx-2" color="black" text>
                {{ link }}
            </v-btn>

            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Feito por Felipe Sabino</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Início',
      'Cursos',
      'Mais Serviços',
      'Blog',
      'Sobre Nós',
    ],
  }
  ),
}
</script>

<style>
.footer {
    z-index: 5;
}
</style>