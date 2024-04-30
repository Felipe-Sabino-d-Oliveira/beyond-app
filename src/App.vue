<template>
	<v-app>
		<v-main class="body">
			<!-- ------ BARRA DE FERRAMENTAS ------ -->
			<div class="background"></div>
			<div>
				<v-toolbar class="barra__de__tarefas" dark prominent elevation="4">
					<nav class="barra__d__navegacao text-center">
						<v-btn v-for="link in links" :key="link" class="mx-2" color="white" text>
							{{ link }}
						</v-btn>
					</nav>
				</v-toolbar>
			</div>

			<div class="container">
				<v-btn class="botao__adicionar__curso" @click="abrirJanelaAdicionarCurso()">Adicionar Curso</v-btn>
				<v-dialog v-model="dialogAdicionarCurso" max-width="750px">
					<v-card>
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
								<label for="instrutor-curso">Instrutor(a)</label>
								<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text">
							</div>

							<div class="agrupamento__container">
								<label for="duracao-semestres">Duração do curso (em semestres)</label>
								<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5"
									max="12">
							</div>

							<div class="agrupamento__container">
								<label>Certificação</label>
								<v-radio-group v-model="novoCurso.certificacao">
									<v-radio class="certificacao__radio" label="Sim" value="sim"></v-radio>
									<v-radio class="certificacao__radio" label="Não" value="nao"></v-radio>
								</v-radio-group>
							</div>

							<div class="agrupamento__container">
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="white darken-1"
										@click="adicionarCurso(); dialogAdicionarCurso = false">Adicionar Curso</v-btn>
								</v-card-actions>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="white darken-1" @click="dialogAdicionarCurso = false">Fechar</v-btn>
								</v-card-actions>
							</div>
						</v-container>
					</v-card>
				</v-dialog>
				<v-container v-if="cursos.length > 0" class="listar__curso">
					<h2>Lista de Cursos Cadastrados</h2>
					<v-list class="lista__dos__cursos">
						<v-list-item v-for="curso in cursos" :key="curso.id">
							<v-list-item-content>
								<v-list-item-title>{{ curso.nome }}</v-list-item-title>
								<v-list-item-subtitle>Descrição: {{ curso.descricao }}</v-list-item-subtitle>
								<v-list-item-subtitle>Categoria: {{ curso.categoria }}</v-list-item-subtitle>
								<v-list-item-subtitle>Instrutor: {{ curso.instrutor }}</v-list-item-subtitle>
								<v-list-item-subtitle>Duração em Semestres: {{ curso.duracaoSemestres
								}}</v-list-item-subtitle>
								<v-list-item-subtitle>Certificação: {{ curso.certificacao }}</v-list-item-subtitle>
							</v-list-item-content>
							<v-btn icon @click="abrirJanelaAtualizarCurso(curso, index)">
								<v-icon>{{ icons.mdiPencil }}</v-icon>
							</v-btn>
							<v-btn depressed icon @click="removerCurso(index)">
								<v-icon>
									{{ icons.mdiDelete }}
								</v-icon>

							</v-btn>
						</v-list-item>
					</v-list>
				</v-container>
				<v-dialog v-model="dialogAtualizarCurso" max-width="750px">
					<v-card>
						<v-container class="adicionar__curso">
							<h2 class="titulo__container">Atualizar curso</h2>
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
								<label for="instrutor-curso">Instrutor(a)</label>
								<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text">
							</div>

							<div class="agrupamento__container">
								<label for="duracao-semestres">Duração do curso (em semestres)</label>
								<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5"
									max="12">
							</div>

							<div class="agrupamento__container certificacao__container">
								<label>Certificação</label>
								<div class="certificacao__options">
									<v-radio v-model="novoCurso.certificacao" class="certificacao__radio sim" label="Sim"
										value="sim"></v-radio>
									<v-radio v-model="novoCurso.certificacao" class="certificacao__radio sim" label="Não"
										value="nao"></v-radio>
								</div>
							</div>

							<div class="agrupamento__container">
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="white darken-1"
										@click="atualizarCurso(index); dialogAtualizarCurso = false">Atualizar Curso</v-btn>
								</v-card-actions>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="white darken-1" @click="dialogAtualizarCurso = false">Fechar</v-btn>
								</v-card-actions>
							</div>
						</v-container>
					</v-card>
				</v-dialog>
			</div>
		</v-main>
		<v-footer class="bg-grey-lighten-1">
			<v-row justify="center" no-gutters>

				<v-btn v-for=" link  in  links " :key="link" class="mx-2" color="black" text>
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