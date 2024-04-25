<template>
	<v-app>
		<v-main class="body">
		<!-- ------ BARRA DE FERRAMENTAS ------ -->
			<div class="background"></div>
			<div>
				<v-toolbar class="barra__de__tarefas" dark prominent>
					<div>
						<v-row justify="center" no-gutters>
							<nav class="barra__d__navegacao text-center">
								<v-btn
								v-for="link in links"
								:key="link"
								class="mx-2"
								color="white"
								text>
									{{ link }}
								</v-btn>
							</nav>
						</v-row>
					</div>
				</v-toolbar>
			</div>
			
			<div class="container">
				<v-container class="adicionar__curso">
					<h2 class="titulo__container">Adicionar curso</h2>
					<div class="agrupamento__container">
						<label for="nome-curso">Nome do Curso</label>
						<input id="nome-curso" v-model="novoCurso.nome" type="text">
					</div>

					<div class="agrupamento__container">
						<label for="descricao-curso">Descrição</label>
						<textarea id="descricao-curso" v-model="novoCurso.descricao"></textarea>
					</div>

					<div class="agrupamento__container">
						<label>Categoria</label>
						<v-select v-model="novoCurso.categoria" :items="categorias" class="categoria-select">
							<template #selection="{ item }">
								<div class="v-select__selection v-input__slot">
								<span>{{ item }}</span>
								</div>
							</template>
						</v-select>
					</div>

					<div class="agrupamento__container">
						<label for="instrutor-curso">Instrutor</label>
						<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text">
					</div>

					<div class="agrupamento__container">
						<label for="duracao-semestres">Duração do curso (em semestres)</label>
						<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5">
					</div>

					<div class="agrupamento__container">
						<label>Certificação</label>
						<v-radio-group v-model="novoCurso.certificacao">
							<v-radio label="Sim" value="sim"></v-radio>
							<v-radio label="Não" value="nao"></v-radio>
						</v-radio-group>
					</div>


					<v-btn @click="adicionarCurso">Adicionar Curso</v-btn>
				</v-container>

				<v-container class="listar__curso">
					<h2 class="titulo__container">Lista de cursos</h2>
					<div v-for="(curso, index) in cursos" :key="index">
						<p>Nome: {{ curso.nome }}</p>
						<p>Descrição: {{ curso.descricao }}</p>
						<p>Categoria: {{ curso.categoria }}</p>
						<p>Instrutor: {{ curso.instrutor }}</p>
						<p>Duração (semestres): {{ curso.duracaoSemestres }}</p>
						<p>Certificação: {{ curso.certificacao }}</p>
						<v-btn @click="removerCurso(index)">Remover</v-btn>
						<v-btn @click="atualizarCurso(index)">Atualizar</v-btn>
					</div>
				</v-container>
			</div>
		</v-main>
		<v-footer class="bg-grey-lighten-1">
			<v-row justify="center" no-gutters>

			<v-btn
                v-for="link in links"
                :key="link"
                class="mx-2"
                color="black"
				text
            >
                {{ link }}
            </v-btn>

			<v-col class="text-center mt-4" cols="12">
				{{ new Date().getFullYear() }} — <strong>Feito por Felipe Sabino</strong>
			</v-col>
			</v-row>
		</v-footer>
	</v-app>
</template>

<script src="./components/script"></script>

<style src="./components/style.css"></style>