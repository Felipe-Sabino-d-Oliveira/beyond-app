<template>
    <div>
        <v-toolbar class="barra__de__tarefas" dark prominent elevation="4">
            <nav class="barra__d__navegacao text-center">
                <v-btn v-for="link in links" :key="link" class="mx-2" color="white" text>
                    {{ link }}
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
}
</script>

<style>

.barra__de__tarefas, .footer{
	z-index: 1;
}

.barra__d__navegacao{
	align-self: center;
	width: 2500px; 
}

</style>