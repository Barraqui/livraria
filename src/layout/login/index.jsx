import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const usuario = ref('');
        const senha = ref('');
        const router = useRouter();

        const realizarLogin = () => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuarioEncontrado = usuarios.find(u => u.usuario === usuario.value && u.senha === senha.value);

            if (usuarioEncontrado) {
                // Armazena o usuário logado para uso na página de perfil
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
                console.log("Login bem-sucedido");
                router.push('/home');
            } else {
                alert("Usuário ou senha incorretos");
            }
        }
        return {
            usuario,
            senha,
            realizarLogin
        };
    },
    render() {


        return (
            <div className="login-body">
                <div className="login-container">
                    <h2>Login</h2>
                    <input type="text" placeholder='Usuário' v-model={this.usuario} />
                    <input type="password" placeholder='Senha' v-model={this.senha}/>
                    <button onClick={this.realizarLogin}>Login</button>
                    <a href="/cadastro" class="link">Criar uma conta</a>
                    <a href="" class="link">Esqueceu sua senha?</a>
                </div>
            </div>
        );
    }
});
