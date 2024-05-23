<template>
    <v-toolbar class="barra__de__tarefas d-flex justify-center align-center" dark prominent elevation="4">
        <v-tolbar-items class="barra__d__navegacao">
            <v-btn v-for="link in links" :key="link" class="mx-2" color="white">
                <router-link class="text-decoration-none" :to="{ name: getRoute(link) }">{{ link }}</router-link>
            </v-btn>
        </v-tolbar-items>
    </v-toolbar>
</template>

<script>

export default {
    name: 'Header',
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
.barra__de__tarefas {
    z-index: 1;
    background: var(--gradient-blue-light)
}

.barra__d__navegacao {
    align-self: center;
    justify-self: center;
    width: 100%;
}

.botao__cad__ou__log:first-child {
    margin-right: 10px;
}
</style>