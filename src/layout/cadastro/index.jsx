import { defineComponent, ref } from 'vue';
import './index.css'
import router from '@/router';

export default defineComponent({
    setup() {
        const usuario = ref('');
        const senha = ref('');
        const nome = ref('');
        const sobrenome = ref('');
        const email = ref('');
        const cpf = ref('')
        const dataNasc =  ref('');
        const genero = ref('');
        const telefone = ref('');
        const pais = ref('');
        const cidade = ref('');
        const rua = ref('');
        const bairro = ref('');
        const numeroCasa = ref('');
        const complemento = ref('');
        const destinatario = ref('');

        const salvarDados = () => {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const novoUsuario = {
                usuario: usuario.value,
                senha: senha.value,
                nome: nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                cpf: cpf.value,
                dataNasc: dataNasc.value,
                genero: genero.value,
                telefone: telefone.value,
                pais: pais.value,
                cidade: cidade.value,
                rua: rua.value,
                bairro: bairro.value,
                numeroCasa: numeroCasa.value,
                complemento: complemento.value,
                destinatario: destinatario.value,
            };

            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            usuario.value = '';
            senha.value = '';
            nome.value = '';
            sobrenome.value = '';
            email.value = '';
            cpf.value = '';
            dataNasc.value = '';
            genero.value = '';
            telefone.value = '';
            pais.value = '';
            cidade.value = '';
            rua.value = '';
            bairro.value = '';
            numeroCasa.value = '';
            complemento.value = '';
            destinatario.value = '';

            alert("Usuário cadastrado com sucesso:", novoUsuario);
            router.push("/")
        };

        return {
            usuario,
            senha,
            nome,
            sobrenome,
            email,
            cpf,
            dataNasc,
            genero,
            telefone,
            pais,
            cidade,
            rua,
            bairro,
            numeroCasa,
            complemento,
            destinatario,
            salvarDados
        }
    },
    render() {
        return (
            <div>
                <div class="main-container-reg">
                    <div class="main-content-reg">
                        <h1>Cadastro De Usuário</h1>
                        <div class="profile-info">
                            <div>
                                <label for="usuario">Usuário</label>
                                <input type="text" id="usuario" v-model={this.usuario} />
                            </div>
                            <div>
                                <label for="senha">Senha</label>
                                <input type="password" id="senha" v-model={this.senha} />
                            </div>
                            <div>
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" v-model={this.nome} />
                            </div>
                            <div>
                                <label for="sobrenome">Sobrenome</label>
                                <input type="text" id="sobrenome" v-model={this.sobrenome} />
                            </div>
                            <div class="full-width">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model={this.email}/>
                            </div>
                            <div>
                                <label for="cpf">CPF</label>
                                <input type="number" id="cpf" v-model={this.cpf}/>
                            </div>
                            <div>
                                <label for="data-nascimento">Data de nascimento</label>
                                <input type="date" id="data-nascimento" min="1920-01-01" max="2008-12-31" v-model={this.dataNasc}/>
                            </div>
                            <div>
                                <label for="genero">Gênero</label>
                                <input type="text" id="genero" v-model={this.genero}/>
                            </div>
                            <div>
                                <label for="telefone">Telefone</label>
                                <input type="number" id="telefone" v-model={this.telefone}/>
                            </div>
                            <div>
                                <label for="pais">País</label>
                                <input type="text" id="pais" v-model={this.pais}/>
                            </div>
                            <div>
                                <label for="cidade">Cidade</label>
                                <input type="text" id="cidade" v-model={this.cidade}/>
                            </div>
                            <div class="full-width">
                                <label for="rua">Nome da Rua</label>
                                <input type="text" id="rua" v-model={this.rua}/>
                            </div>
                            <div>
                                <label for="bairro">Bairro</label>
                                <input type="text" id="bairro" v-model={this.bairro}/>
                            </div>
                            <div>
                                <label for="numeroCasa">N°</label>
                                <input type="number" id="numeroCasa" v-model={this.numeroCasa}/>
                            </div>
                            <div>
                                <label for="ref">Complemento e referência </label>
                                <input type="text" id="ref" v-model={this.complemento}/>
                            </div>
                            <div>
                                <label for="destinatario">Destinatário</label>
                                <input type="text" id="destinatario" v-model={this.destinatario}/>
                            </div>
                        </div>
                        <div class="containerButton">
                            <div class="buttonCadastro">
                                <a href="/"><button>Voltar</button></a>
                                <button onClick={this.salvarDados}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
