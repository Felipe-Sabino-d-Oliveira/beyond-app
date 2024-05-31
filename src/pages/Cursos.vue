<template>
	<v-main>
		<v-container class="mx-auto d-flex flex-column justify-center align-center"
			style="min-width: 100%; background: var(--gradient-blue-3);">
			<v-btn @click="abrirJanelaAdicionarCurso()" color="white" style="margin: 1% auto;">Adicionar Curso</v-btn>
			<v-dialog v-model="dialogAdicionarCurso" max-width="480px" width="50%">
				<v-card elevation="8" dark class="px-5 d-flex flex-column justify-center mx-auto"
					style="background: var(--gradient-blue-3); overflow-y: auto;">
					<v-card-title>Adicionar curso</v-card-title>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="nome-curso">Nome do Curso</label>
						<input id="nome-curso" v-model="novoCurso.nome" type="text"
							style="background-color: white; border-radius: 5px">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="descricao-curso">Descrição</label>
						<textarea id="descricao-curso" v-model="novoCurso.descricao"
							style="max-width: 70%; background-color: white; border-radius: 5px;"></textarea>
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label>Categoria</label>
						<v-select v-model="novoCurso.categoria" :items="categorias" style="max-width: 70%;">
							<template #selection="{ item }">
								<span>{{ item }}</span>
							</template>
						</v-select>
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="instrutor-curso">Instrutor(a)</label>
						<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text"
							style="background-color: white; border-radius: 5px">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="duracao-semestres">Duração do curso (em semestres)</label>
						<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5" max="12"
							style="background-color: white; border-radius: 5px">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label>Certificação</label>
						<v-radio-group class="d-flex flex-column" v-model="novoCurso.certificacao">
							<v-radio class="certificacao__radio" label="Sim" value="sim"></v-radio>
							<v-radio class="certificacao__radio" label="Não" value="nao"></v-radio>
						</v-radio-group>
					</v-card-text>
					<v-card-actions>
						<v-btn light color="white darken-1"
							@click="adicionarCurso(); dialogAdicionarCurso = false">Adicionar Curso</v-btn>
						<v-btn light color="white darken-1" @click="dialogAdicionarCurso = false">Fechar</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>

			<!-- Displaying each course as a separate card -->
			<v-container elevation="8" v-if="cursos.length > 0" class="d-flex flex-wrap justify-center"
				style="background: var(--gradient-blue-4); width: 50%; border-radius: 5px;">
				<v-card dark v-for="curso in cursos" :key="curso.id" elevation="8" class="ma-3"
					style="background: var(--gradient-blue-3);">
					<v-card-title>{{ curso.nome }}</v-card-title>
					<v-card-subtitle>{{ curso.descricao }}</v-card-subtitle>
					<v-card-text>
						<div>Categoria: {{ curso.categoria }}</div>
						<div>Instrutor: {{ curso.instrutor }}</div>
						<div>Duração em Semestres: {{ curso.duracaoSemestres }}</div>
						<div>Certificação: {{ curso.certificacao }}</div>
					</v-card-text>
					<v-card-actions>
						<v-btn icon @click="abrirJanelaAtualizarCurso(curso)">
							<v-icon>{{ icons.mdiPencil }}</v-icon>
						</v-btn>
						<v-btn icon @click="removerCurso(curso.id)">
							<v-icon>{{ icons.mdiDelete }}</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-container>

			<v-dialog v-model="dialogAtualizarCurso" max-width="480px" width="50%">
				<v-card elevation="8" dark class="px-5 d-flex flex-column justify-center mx-auto"
					style="background: var(--gradient-blue-3); overflow-y: auto;">
					<v-card-title>Atualizar curso</v-card-title>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="nome-curso">Nome do Curso</label>
						<input id="nome-curso" v-model="novoCurso.nome" type="text">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="descricao-curso">Descrição</label>
						<textarea id="descricao-curso" v-model="novoCurso.descricao" style="max-width: 70%;"></textarea>
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label>Categoria</label>
						<v-select v-model="novoCurso.categoria" :items="categorias" style="max-width: 70%;">
							<template #selection="{ item }">
								<span>{{ item }}</span>
							</template>
						</v-select>
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="instrutor-curso">Instrutor(a)</label>
						<input id="instrutor-curso" v-model="novoCurso.instrutor" type="text">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label for="duracao-semestres">Duração do curso (em semestres)</label>
						<input id="duracao-semestres" v-model="novoCurso.duracaoSemestres" type="number" min="5" max="12">
					</v-card-text>
					<v-card-text class="d-flex flex-row align-center justify-space-between">
						<label>Certificação</label>
						<v-radio-group class="d-flex flex-column" v-model="novoCurso.certificacao">
							<v-radio class="certificacao__radio" label="Sim" value="sim"></v-radio>
							<v-radio class="certificacao__radio" label="Não" value="nao"></v-radio>
						</v-radio-group>
					</v-card-text>
					<v-card-actions>
						<v-btn light color="white darken-1" @click="atualizarCurso">Atualizar Curso</v-btn>
						<v-btn light color="white darken-1" @click="dialogAtualizarCurso = false">Fechar</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-container>
	</v-main>
</template>

<script>
import { mdiPencil, mdiDelete } from '@mdi/js';
import axios from 'axios';

export default {
	name: 'PageCursos',
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
		indexAtualizarCurso: -1,
		icons: { mdiPencil, mdiDelete }
	}),
	methods: {
		abrirJanelaAdicionarCurso() {
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
		abrirJanelaAtualizarCurso(curso) {
			this.novoCurso = { ...curso };
			this.dialogAtualizarCurso = true;
		},
		adicionarCurso() {
			axios.post('http://localhost:3000/content', this.novoCurso)
				.then(() => {
					this.dialogAdicionarCurso = false;
					this.carregarCursos();
				})
				.catch(error => {
					console.error(error);
				});
		},
		removerCurso(id) {
			axios.delete(`http://localhost:3000/contents/${id}`)
				.then(() => {
					this.carregarCursos();
				})
				.catch(error => {
					console.error(error);
				});
		},
		atualizarCurso() {
			axios.put(`http://localhost:3000/contents/${this.novoCurso.id}`, this.novoCurso)
				.then(() => {
					this.dialogAtualizarCurso = false;
					this.carregarCursos();
				})
				.catch(error => {
					console.error(error);
				});
		},
		carregarCursos() {
			axios.get('http://localhost:3000/contents')
				.then(response => {
					this.cursos = response.data;
				})
				.catch(error => {
					console.error(error);
				});
		}
	},
	mounted() {
		this.carregarCursos();
	}
}
</script>

<style scoped>
/* Estilos adicionais para os cards e layout geral */
.d-flex.flex-wrap.justify-center {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.v-card.ma-3 {
	margin: 1.5rem;
}

v-card-text {
	display: flex;
	flex-direction: row;
}
</style>