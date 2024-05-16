<template>
    <v-container class="container">
        <section class="conteudo">
            <div class="conteudo__login__cadastro">
                <div class="metade__um__do__conteudo">
                    <img class="imagem__login" src="../assets/login.png" alt="imagem login">
                </div>
                <div class="metade__dois__do__conteudo">
                    <v-title class="titulo__login text-white">LOGIN</v-title>
                    <v-form>
                        <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                            @input="$v.email.$touch()" @blur="$v.email.$touch()">
                        </v-text-field>
                        <v-text-field v-model="password" :error-messages="passwordErrors" label="Senha" type="password"
                            required @input="$v.password.$touch()" @blur="$v.password.$touch()">
                        </v-text-field>
                        <div class="botoes__login">
                            <v-btn class="mr-4" v-on:click="login()">
                                Entrar
                            </v-btn>

                        </div>
                    </v-form>
                </div>
            </div>
            <div class="conteudo__login__cadastro">
                <div class="metade__dois__do__conteudo">
                    <v-title class="titulo__login text-white">CADASTRO</v-title>
                    <v-form>
                        <v-text-field v-model="registerEmail" :error-messages="emailErrors" label="E-mail" required
                            @input="$v.email.$touch()" @blur="$v.email.$touch()">
                        </v-text-field>
                        <v-text-field v-model="registerPassword" :error-messages="passwordErrors" label="Senha"
                            type="password" required @input="$v.password.$touch()" @blur="$v.password.$touch()">
                        </v-text-field>
                        <div class="botoes__login">
                            <v-btn class="mr-4" v-on:click="register()">
                                cadastrar
                            </v-btn>
                        </div>
                    </v-form>

                </div>
                <div class="metade__um__do__conteudo">
                    <img class="imagem__login" src="../assets/login.png" alt="imagem login">
                </div>
            </div>

        </section>
    </v-container>
</template>
  
<script>
import { required, email } from 'vuelidate/lib/validators'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../config/index'

export default {
    data: () => ({
        email: '',
        password: '',
        emailErrors: [],
        passwordErrors: [],
        registerEmail: '',
        registerPassword: '',
    }),
    validations: {
        email: { required, email },
        password: { required },
        registerEmail: { required, email },
        registerPassword: { required },
    },
    methods: {
        async login() {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, this.email, this.password);
                alert('Login realizado!');
                this.mail = '';
                this.password = '';
                // Redirecionar para a página de início
                this.$router.push('/01101000011011110110111001100101');
            } catch (error) {
                alert('Erro ao realizar login:', error.message);
                console.error('Erro ao realizar login:', error.message);
            }
        },
        async register() {
            // Use createUserWithEmailAndPassword for registration
            try {
                const { registerEmail, registerPassword } = this;
                const auth = getAuth(app);
                await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
                alert('Usuário registrado com sucesso!');
                this.registerEmail = '';
                this.registerPassword = '';
            } catch (error) {
                alert('Erro ao registrar usuário:', error.message);
                console.error('Erro ao registrar usuário:', error.message);
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

.conteudo {

    justify-content: center;
    height: 100%;
    width: 1200px;
    display: flex;
    flex-direction: column;
}

.conteudo__login__cadastro {
    margin-top: 10%;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.conteudo__login__cadastro:last-child {
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
    height: 100%;
}

.metade__dois__do__conteudo {
    height: 100%;
    background: var(--color-gray-light);
    flex-direction: column;
    display: flex;
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
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
}

.container__cadastro {
    height: 5000000px;
}
</style>