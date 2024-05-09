<template>
    <div>
        <v-toolbar class="barra__de__tarefas" dark prominent elevation="4">
            <nav class="barra__d__navegacao text-center">
                <v-btn v-for="link in links" :key="link" class="mx-2" color="white" text>
                    <router-link v-if="link === 'Início'" to="/"> {{ link }} </router-link>
                    <span v-else> {{ link }} </span>
                </v-btn>
            </nav>
        </v-toolbar>
    </div>
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
                    return '/';
                case 'Cursos':
                    return '/cursos';
                case 'Mais Serviços':
                    return '/mais-servicos';
                case 'Blog':
                    return '/blog';
                case 'Sobre Nós':
                    return '/sobre-nos';
                default:
                    return '';
            }
        }
    },
}
</script>

<style>
.barra__de__tarefas,
.footer {
    z-index: 1;
}

.barra__d__navegacao {
    align-self: center;
    width: 100%;
}
</style>