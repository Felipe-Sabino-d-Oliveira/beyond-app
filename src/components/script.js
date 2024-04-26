export default {
  data: () => ({
    links: [
      'Início',
      'Cursos',
      'Mais Serviços',
      'Blog',
      'Sobre Nós',
    ],
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
    indexAtualizarCurso: -1 // Inicialize com um valor que não interfere nos índices
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