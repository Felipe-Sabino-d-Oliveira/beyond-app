<template>
	<v-app >
		<v-main class="main">
			<Header v-if="$route.name !== 'login' && $route.name !== 'cadastro'" />
			<router-view></router-view>
			<Footer v-if="$route.name !== 'login' && $route.name !== 'cadastro'" />
		</v-main>
	</v-app>

</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style></style>