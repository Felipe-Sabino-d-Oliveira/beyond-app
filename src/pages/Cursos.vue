<template>
	<v-main>
		<v-container class="container mx-auto d-flex flex-column align-center">
			<v-btn class="botao__adicionar__curso" @click="abrirJanelaAdicionarCurso()">Adicionar Curso</v-btn>
			<v-dialog v-model="dialogAdicionarCurso" max-width="750px">
				<v-card class=".adicionar__curso"><!-- lembrar do ponto impedindo execução da classe -->
					<v-card-title class="titulo__container">Adicionar curso</v-card-title>
					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label for="nome-curso">Nome do Curso</label>
						<input id="nome-curso" v-model="novoCurso.nome" type="text">
					</v-row>

					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label for="descricao-curso">Descrição</label>
						<textarea id="descricao-curso" v-model="novoCurso.descricao"></textarea>
					</v-row>

					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label>Categoria</label>
						<v-select v-model="novoCurso.categoria" :items="categorias" class="categoria-select">
							<template #selection="{ item }">
								<div class="v-select__selection v-input__slot">
									<span>{{ item }}</span>
								</div>
							</template>
						</v-select>
					</v-row>

					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label for="instrutor-curso">Instrutor(a)</label>
						<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text">
					</v-row>

					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label for="duracao-semestres">Duração do curso (em semestres)</label>
						<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5" max="12">
					</v-row>

					<v-row class=".agrupamento__container"><!-- lembrar do ponto impedindo execução da classe -->
						<label>Certificação</label>
						<v-radio-group v-model="novoCurso.certificacao">
							<v-radio class="certificacao__radio" label="Sim" value="sim"></v-radio>
							<v-radio class="certificacao__radio" label="Não" value="nao"></v-radio>
						</v-radio-group>
					</v-row>

					<v-card-actions>
						<v-btn color="white darken-1" @click="adicionarCurso(); dialogAdicionarCurso = false">Adicionar
							Curso
						</v-btn>
					</v-card-actions>
					<v-card-actions>
						<v-btn color="white darken-1" @click="dialogAdicionarCurso = false">Fechar</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-card v-if="cursos.length > 0" class="listar__curso">
				<v-card-title class=".titulo__container">Lista de Cursos Cadastrados</v-card-title><!-- lembrar do ponto impedindo execução da classe -->
				<!-- FALTA MUDAR DAQUI PARA BAIXO!! -->
				<v-list class="lista__dos__cursos">
					<v-list-item v-for="(curso, index) in cursos" :key="curso.id">
						<v-list-item-content>
							<v-list-item-title>{{ curso.nome }}</v-list-item-title>
							<v-list-item-subtitle>Descrição: {{ curso.descricao }}</v-list-item-subtitle>
							<v-list-item-subtitle class="categoria__cursos">Categoria: {{ curso.categoria
							}}</v-list-item-subtitle>
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
			</v-card>
			<v-dialog v-model="dialogAtualizarCurso" max-width="750px">
				<v-card>
					<v-container class="adicionar__curso">
						<vue-h2 class="titulo__container">Atualizar curso</vue-h2>
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
		</v-container>
	</v-main>
</template>

<script>
import { mdiPencil, mdiDelete, } from '@mdi/js'

export default {
	name: 'Cursos',
	data: () => ({

		cursos: [],
		novoCurso: {
			nome: '',
			descricao: '',
			categoria: '',
			instrutor: '',
			duracaoSemestres: 0,
			certificacao: ''
		},
		categorias: ['Tecnologia', 'Saúde', 'Educação', 'Negócios', 'Artes'],
		dialogAdicionarCurso: false,
		dialogAtualizarCurso: false,
		indexAtualizarCurso: -1, // Inicialize com um valor que não interfere nos índices
		index: 0,

		icons: {
			mdiPencil,
			mdiDelete,
		},
	}),
	methods: {
		abrirJanelaAdicionarCurso() {
			// Limpa o estado novoCurso
			this.novoCurso = {
				nome: '',
				descricao: '',
				categoria: '',
				instrutor: '',
				duracaoSemestres: 0,
				certificacao: ''
			};
			this.dialogAdicionarCurso = true;
		},

		abrirJanelaAtualizarCurso(curso, index) {
			// Copia os detalhes do curso para novoCurso
			this.novoCurso = { ...curso };
			this.dialogAtualizarCurso = true;
			this.indexAtualizarCurso = index;
		},

		adicionarCurso() {
			this.cursos.push(this.novoCurso);
			this.dialogAdicionarCurso = false;
		},
		removerCurso(index) {
			this.cursos.splice(index, 1);
		},

		atualizarCurso() {
			if (this.indexAtualizarCurso !== -1) {
				this.cursos.splice(this.indexAtualizarCurso, 1, this.novoCurso);
				this.dialogAtualizarCurso = false;
			}
		},
	}
}
</script>

<style scoped>
.container {
	max-width: 100%;
	background: var(--gradient-blue-3);
}


.botao__adicionar__curso {
	margin: 150px 0;
}

.adicionar__curso {
	max-width: 100%;
}

.adicionar__curso div label {
	font-size: 0.6em;
}

.adicionar__curso,
.listar__curso {
	border: 7.5px solid;
	margin-bottom: 50px;
	color: var(--color-white);
	background: var(--color-gray-dark);
	border-radius: 10px;
	animation: spin 2.5s linear infinite;
	font-size: 2em;
	width: 800px;
}

.adicionar__curso .v-select .v-input__slot {
	color: var(--color-white);
}

.adicionar__curso input[type="text"],
.adicionar__curso textarea,
.adicionar__curso select {
	background-color: var(--color-white);
	border: 1px solid var(--color-gray-light);
	margin-bottom: 10px;
	border-radius: 10px;
}

.adicionar__curso input[type="number"] {
	max-width: 45px;
}

.adicionar__curso v-select {
	height: auto;
}

.categoria-select .v-select__selection {
	color: var(--color-white);

}

.categoria-select .v-input__slot {
	background-color: var(--color-gray-dark);
}

.agrupamento__container {
	width: 75%;
	display: flex;

	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
}


.agrupamento__container label {
	flex: 1;
	margin-right: 1rem;
}

.agrupamento__container input,
.agrupamento__container textarea,
.agrupamento__container v-select,
.agrupamento__container v-radio-group {
	flex: 2;
}

.certificacao__radio .v-label {
	font-size: 1.2em !important;
}



.lista__dos__cursos {
	border-radius: 10px;
	width: 500px;
}

.titulo__container {
	margin-top: 10%;
	margin-bottom: 15%;
	animation: spin 2.5s linear infinite;
}

@keyframes spin {
	0% {
		border-color: var(--color-white);
	}

	25% {
		border-color: #E0E0E0;
	}

	50% {
		border-color: #909090;
	}

	75% {
		border-color: var(--color-gray-dark);
	}

	100% {
		border-color: var(--color-white);
	}
}
</style>