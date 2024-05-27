<template>
    <v-container class="d-flex justify-center align-center">
        <v-card dark class="card__login d-flex flex-column justify-center align-center" width="500" height="550">
            <h1>LOGIN</h1>
            <v-form class="formulario__login">
                <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                    @input="$v.email.$touch()" @blur="$v.email.$touch()">
                </v-text-field>
                <v-text-field v-model="password" :error-messages="passwordErrors" label="Senha" type="password" required
                    @input="$v.password.$touch()" @blur="$v.password.$touch()">
                </v-text-field>

            </v-form>
            <v-card-actions class="d-flex flex-column">
                <v-btn light class="mb-4" width="150" min-width="75" v-on:click="login()">
                    Entrar
                </v-btn>
                <p style="margin: 0;">Não tem uma conta? <router-link style="color: var(--color-white);"
                        to="cadastro">Cadastre-se</router-link></p>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
  
<script>
import { required, email } from 'vuelidate/lib/validators'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: '',
        emailErrors: [],
        passwordErrors: [],
        
    }),
    validations: {
        email: { required, email },
        password: { required },
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
                this.$router.push('/home');
            } catch (error) {
                alert('Erro ao realizar login:', error.message);
                console.error('Erro ao realizar login:', error.message);
            }

        },
    },
}
</script>


<style scoped>
/* classes comuns */

.container {
    max-width: 100%;
    height: 100% !important;
    background: var(--gradient-blue-3);
}

.card__login {
    background: var(--gradient-blue-4);
}

.formulario__login {
    width: 60%;
}
</style>