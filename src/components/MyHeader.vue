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

<style src="../components/style.css"></style>
<script src="../components/script"></script>