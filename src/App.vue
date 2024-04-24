<template>
	<v-app>
		<v-main class="body">
		<!-- ------ BARRA DE FERRAMENTAS ------ -->
			<div class="background"></div>
			<div>
				<v-toolbar dark prominent>
					<v-app-bar-nav-icon></v-app-bar-nav-icon>

					<v-toolbar-title>Tela de Cursos</v-toolbar-title>

					<v-spacer></v-spacer>

					<v-btn icon>
						<v-icon>mdi-export</v-icon>
					</v-btn>
				</v-toolbar>
			</div>
			<div class="container">
				<v-container class="adicionar__curso">
					<h2 class="titulo__container">Adicionar curso</h2>

				</v-container>

				<v-container class="adicionar__curso">
					<h2 class="titulo__container">Adicionar curso</h2>

				</v-container>

				<v-container class="adicionar__curso">
					<h2 class="titulo__container">Adicionar curso</h2>
					
				</v-container>
			</div>
		</v-main>
		<v-footer class="bg-grey-lighten-1">
			<v-row justify="center" no-gutters>
			<v-btn
				v-for="link in links"
				:key="link"
				class="mx-2"
				color="white"
				rounded="xl"
				variant="text"
			>
				{{ link }}
			</v-btn>
			<v-col class="text-center mt-4" cols="12">
				{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
			</v-col>
			</v-row>
		</v-footer>
	</v-app>
</template>

<script src="./components/script"></script>

<style src="./components/style.css"></style>