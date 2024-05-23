<template>
    <v-main>
        <v-container class="container d-flex justify-center align-center">
            <div class="conteudo__principal d-flex justify-center align-center">
                <section>
                    <h1 class="titulo__conteudo text-center">Por dentro da FICR</h1>
                </section>

                <section class="secoes__conteudo__principal ">
                    <p>A Faculdade Católica Imaculada Conceição do Recife (FICR), fundada em 2002 e credenciada pelo
                        Ministério da Educação (MEC) em 2003, se destaca como uma instituição de ensino superior
                        comprometida com a formação integral de cidadãos conscientes e profissionais competentes.
                        Localizada na vibrante cidade do Recife, em Pernambuco, a FICR integra o Grupo UBEC, um
                        reconhecido grupo educacional que preza pela qualidade e inovação.
                    </p>
                    <p>Com um corpo docente experiente e altamente qualificado, a FICR oferece uma gama diversificada de
                        cursos de graduação e pós-graduação nas áreas de Ciências Humanas, Exatas, Saúde e Tecnologia.
                        Seus programas de ensino são cuidadosamente elaborados para atender às demandas do mercado de
                        trabalho e às necessidades dos alunos, proporcionando uma formação sólida e atualizada.
                    </p>
                    <p>A FICR se destaca por sua visão holística da educação, que vai além da sala de aula. A
                        instituição promove eventos, workshops e palestras que visam o desenvolvimento de habilidades
                        socioemocionais e a inserção dos alunos na comunidade. A FICR também incentiva a pesquisa e a
                        extensão universitária, proporcionando aos seus alunos oportunidades de aprimorar seus
                        conhecimentos e contribuir para o desenvolvimento da sociedade.
                    </p>
                    <p>Ingressar na FICR significa fazer parte de uma comunidade acolhedora e inclusiva, onde o respeito
                        à diversidade e a promoção da ética são valores fundamentais. A instituição oferece uma
                        infraestrutura moderna e completa, com laboratórios equipados, bibliotecas bem abastecidas e
                        amplos espaços de convivência. A FICR também dispõe de um programa de bolsas de estudo e
                        financiamentos que visa democratizar o acesso ao ensino de qualidade.
                    </p>
                </section>
            </div>
        </v-container>
    </v-main>
</template>

<script>
</script>

<style scoped>
.container {

    max-width: 100%;
    height: 100%;
    background-image: url('https://lh3.googleusercontent.com/p/AF1QipPAbeq77kzNitDnQD4rssOYSjd5xwYpv-ltxQh3=s680-w680-h510');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.conteudo__principal {
    display: flex;
    flex-direction: column;
    width: calc(50% + 150px);
    margin: auto;
    background-color: var(--color-gray-middle);
}

.titulo__conteudo {
    color: var(--color-white);
    font-size: 2.5em;
    font-weight: 500;
    margin: 10% 0;
}

.secoes__conteudo__principal {
    font-size: 1.1em;
    color: var(--color-white);
    text-align: justify;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 5%;
}

.secoes__conteudo__principal p:nth-child(odd) {
    grid-column: 1;
}

.secoes__conteudo__principal p:nth-child(even) {
    grid-column: 2;
}

</style>