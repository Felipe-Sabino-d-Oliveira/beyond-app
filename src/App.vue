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
		<!-- FOOTER -->
		<!-- <v-footer dark class="d-flex flex-column">
			<div class="bg-teal d-flex w-100 align-center px-4">
				<strong>Mantenha-se conectado por meio das nossas redes sociais!</strong>
				<v-spacer></v-spacer>
				<v-btn
				v-for="icon in icons"
				:key="icon"
				:icon="icon"
				class="mx-4"
				size="small"
				variant="plain"
				></v-btn>
			</div>
			<div class="px-4 py-2 bg-black text-center w-100">
				{{ new Date().getFullYear() }} — <strong>by Felipe Sabino</strong>
			</div>
		</v-footer> -->
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