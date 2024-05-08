<template>
	<v-app>
		<v-main class="main">
			<Header />
			<Home />
			<Footer />
		</v-main>
	</v-app>
</template>
<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './pages/Home.vue';
</script>

<style>
</style>