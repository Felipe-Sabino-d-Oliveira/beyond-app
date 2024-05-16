<template>
	<v-app v-if="$route.name !== 'login'">
		<v-main class="main">
			<Header />
			<router-view></router-view>
			<Footer />
		</v-main>
	</v-app>
	<v-app v-else>
		<router-view></router-view>
	</v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style></style>