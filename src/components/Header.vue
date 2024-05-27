<template>
    <v-toolbar class="barra__de__tarefas d-flex justify-center " dark outlined dense prominent elevation="8">
            <v-btn v-for="link in links" :key="link" class="mx-2" color="white" style="margin-top: 4.5%;">
                <router-link class="text-decoration-none" :to="{ name: getRoute(link) }">{{ link }}</router-link>
            </v-btn>
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
    background: var(--gradient-blue-3)
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