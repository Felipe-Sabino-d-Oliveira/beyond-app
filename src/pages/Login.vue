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
                    <div class="botoes__login">
                        <v-btn class="mr-4" @click="submit()">
                            logar
                        </v-btn>
                        <v-btn @click="clear">
                            limpar
                        </v-btn>
                    </div>
                </form>
            </div>
        </section>
        <section class="conteudo__login">

            <div class="metade__dois__do__conteudo">
                <h1 class="titulo__login text-white">CADASTRO</h1>
                <form>
                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()">
                    </v-text-field>
                    <v-text-field v-model="password" :error-messages="passwordErrors" label="Senha" type="password" required
                        @input="$v.password.$touch()" @blur="$v.password.$touch()">
                    </v-text-field>
                    <div class="botoes__login">
                        <v-btn class="mr-4" @click="submit()">
                            cadastrar
                        </v-btn>
                        <v-btn @click="clear">
                            limpar
                        </v-btn>
                    </div>
                </form>
                <v-dialog class="container__cadastro" v-model="showRegisterDialog" max-width="600px">
                    <v-card>
                        <v-container>
                            <h2 class="titulo__container">Cadastro</h2>
                            <div class="agrupamento__container">
                                <v-text-field id="email-registro" v-model="registerEmail" :error-messages="emailErrors"
                                    label="E-mail" required @input="$v.registerEmail.$touch()"
                                    @blur="$v.registerEmail.$touch()">
                                </v-text-field>
                            </div>

                            <div class="agrupamento__container">
                                <v-text-field id="senha-registro" v-model="registerPassword"
                                    :error-messages="passwordErrors" label="Senha" type="password" required
                                    @input="$v.registerPassword.$touch()" @blur="$v.registerPassword.$touch()">
                                </v-text-field>
                            </div>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="white darken-1"
                                    @click="register(); showRegisterDialog = false">Registrar</v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-dialog>
            </div>
            <div class="metade__um__do__conteudo">
                <img class="imagem__login" src="../assets/login.png" alt="imagem login">
            </div>
        </section>
    </div>
</template>
  
<script>
import { required, email } from 'vuelidate/lib/validators'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../config/index'
import router from '../route/router'

export default {
    data: () => ({
        email: '',
        password: '',
        agree: false,
        emailErrors: [],
        passwordErrors: [],
        checkboxErrors: [],
        formValid: false,
        showRegisterDialog: false,
        registerEmail: '',
        registerPassword: '',
    }),
    validations: {
        email: { required, email },
        password: { required },
        agree: { checked: (val) => val },
        registerEmail: { required, email },
        registerPassword: { required },
    },
    methods: {
        async submit() {
            this.$v.$touch();
            this.formValid = !this.$v.$invalid;

            if (this.$v.$invalid) {
                console.warn('Formulário inválido. Valide os campos antes de enviar.');
                return;
            }

            try {
                const auth = getAuth(app);
                const { email, password } = this;
                await signInWithEmailAndPassword(auth, email, password);
                console.log('Login realizado!');
                this.formValid = true;
                router.push('/');
            } catch (error) {
                console.error('Erro ao realizar login:', error.message);
                router.push('/login');
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
        goToRegister() {
            this.showRegisterDialog = true;
        },
        register() {
            this.$v.$touch()
            this.formValid = !this.$v.$invalid

            if (this.formValid) {
                const auth = getAuth(app)
                createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword)
                    .then(() => {
                        console.log('Usuário registrado com sucesso!')
                        this.showRegisterDialog = false;
                    })
                    .catch((error) => {
                        console.error('Erro ao registrar usuário:', error.message)
                    })
            }
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

.conteudo__login:last-child{
    margin-bottom: 10%;
}

.metade__um__do__conteudo,
.metade__dois__do__conteudo {
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
}

.metade__um__do__conteudo {
    background: var(--color-gray-dark);

}

.metade__dois__do__conteudo {
    background: var(--color-gray-light);
    flex-direction: column;
}

.titulo__login {
    color: var(--color-white);
    font-size: 2.5em;
}

.imagem__login {
    width: 500px;
}

.botoes__login {
    display: flex;
    margin-bottom: 10%;
}

.container__cadastro {
    height: 5000000px;
}
</style>