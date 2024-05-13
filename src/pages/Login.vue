<template>
    <div class="container">
        <section class="conteudo__login">
            <div class="metade__um__do__conteudo">
                <img class="imagem__login" src="../assets/login.png" alt="imagem login">
            </div>
            <div class="metade__dois__do__conteudo">
                <h1 class="titulo__login text-white">LOGIN</h1>
                <form>
                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()">
                    </v-text-field>
                    <v-text-field v-model="password" :error-messages="passwordErrors" label="Senha" type="password" required
                        @input="$v.password.$touch()" @blur="$v.password.$touch()">
                    </v-text-field>
                    <v-checkbox v-model="agree" label="Do you agree?" required @change="$v.agree.$touch()"
                        @blur="$v.agree.$touch()">
                    </v-checkbox>
                    <div class="botoes__login">
                        <v-btn class="mr-4" @click="submit(app)" :disabled="!formValid">
                            submit
                        </v-btn>
                        <v-btn @click="clear">
                            clear
                        </v-btn>
                    </div>
                    <v-btn text @click="goToRegister">
                        Não tenho conta
                    </v-btn>
                </form>
            </div>
        </section>
    </div>
</template>
  
<script>
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { app, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import router from '../route/router' // import the router module here

export default {
    mounted() {
        this.$v = new Vuelidate(this)
    },
    data: () => ({
        email: '',
        password: '',
        agree: false,
        emailErrors: [],
        passwordErrors: [],
        checkboxErrors: [],
        formValid: false,
    }),
    validations: {
        email: { required, email },
        password: { required },
        agree: { checked: (val) => val },
    },
    methods: {
        async submit() {
            this.$v.$touch()
            this.formValid = !this.$v.$invalid

            if (this.formValid) {
                try {
                    const auth = getAuth(app)
                    const { email, password } = this
                    await signInWithEmailAndPassword(auth, email, password)

                    // Login efetuado com sucesso! (redirecionar para página principal, etc.)
                    console.log('Login realizado!')
                    router.push('/')
                } catch (error) {
                    console.error('Erro ao realizar login:', error.message)
                    // Exibir mensagem de erro para o usuário
                    router.push('/login')
                }
            }
        },
        clear() {
            if (this.$v) {
                this.$v.$reset()
            }
            this.email = ''
            this.password = ''
            this.agree = false
        },
    },
}
</script>

<style>
/* classes generalizadoras */

.text-white {
    color: var(--color-white);
}


/* classes comuns */
.container {
    max-width: 100%;
    height: 100%;
    background-image: url('https://lh3.googleusercontent.com/p/AF1QipPAbeq77kzNitDnQD4rssOYSjd5xwYpv-ltxQh3=s680-w680-h510');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(100%);
}

.div__transparente {
    height: 50%;
    width: 1200px;
    background: var(--color-white);
}

.conteudo__login {
    margin-top: 10%;
    height: 50%;
    width: 1200px;
    display: flex;
    flex-direction: row;
    background: rgb(214, 214, 16);
}

.metade__um__do__conteudo,
.metade__dois__do__conteudo {
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
}

.metade__um__do__conteudo {
    /* background: var(--color-gray-dark); */

}

.metade__dois__do__conteudo {
    /* background: var(--color-gray-middle); */
    flex-direction: column;
}

.titulo__login {
    color: var(--color-white);
    font-size: 2.5em;
}

.imagem__login {
    width: 500px;
}

.botoes__login{
    display: flex;
    margin-bottom: 10%;
}
</style>