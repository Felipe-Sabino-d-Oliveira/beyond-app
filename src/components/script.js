export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
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

  }),
  
  methods: {
    adicionarCurso() {
      this.cursos.push({...this.novoCurso});
      this.novoCurso = {
        nome: '',
        descricao: '',
        categoria: '',
        instrutor: '',
        duracaoSemestres: 0,
        certificacao: ''
      };
    },
    removerCurso(index) {
      this.cursos.splice(index, 1);
    },
    // atualizarCurso(index) {
    //   // Lógica de atualização aqui
    // }
  }
}
