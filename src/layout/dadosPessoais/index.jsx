import { defineComponent, ref, onMounted } from 'vue';
import router from '@/router';
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';

import './index.css'

export default defineComponent({

    setup() {
        const nome = ref('')
        const sobrenome = ref('');
        const email = ref('');
        const cpf = ref('');
        const dataNasc = ref('');
        const genero = ref('');
        const telefone = ref('');

        onMounted(() => {
            const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
            if(usuarioLogado) {
                nome.value = usuarioLogado.nome;
                sobrenome.value = usuarioLogado.sobrenome;
                email.value = usuarioLogado.email;
                cpf.value = usuarioLogado.cpf;
                dataNasc.value = usuarioLogado.dataNasc;
                genero.value = usuarioLogado.genero;
                telefone.value = usuarioLogado.telefone;
            }
        })

        const logout = () => {
            localStorage.removeItem('usuarioLogado');
            router.push("/");
        }
        return {
            nome,
            sobrenome,
            email,
            cpf,
            dataNasc,
            genero,
            telefone,
            logout
        }
    },
    render() {
        return (
            <div>
                <Cabecalho />
                <div class="main-container">
                    <div class="container">
                        <div class="sidebar">
                            <img src="https://via.placeholder.com/50" alt="Avatar" />
                            <h2>Olá, {this.nome}!</h2>
                            <ul>
                                <li><a href="/dadosPessoais">Dados pessoais</a></li>
                                <li><a href="/endereco">Endereços</a></li>
                                <li><a href="#" onClick={this.logout}>Sair</a></li>
                            </ul>
                        </div>
                        <div class="main-content">
                            <h1>Dados pessoais</h1>
                            <div class="profile-info">
                                <div>
                                    <label for="nome">Nome</label>
                                    <input type="text" id="nome" value={this.nome} disabled/>
                                </div>
                                <div>
                                    <label for="sobrenome">Sobrenome</label>
                                    <input type="text" id="sobrenome" value={this.sobrenome} disabled/>
                                </div>
                                <div class="full-width">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" value={this.email} disabled/>
                                </div>
                                <div>
                                    <label for="cpf">CPF</label>
                                    <input type="number" id="cpf" value={this.cpf} disabled/>
                                </div>
                                <div>
                                    <label for="data-nascimento">Data de nascimento</label>
                                    <input type="date" id="data-nascimento" min="1920-01-01" max="2008-12-31" value={this.dataNasc} disabled/>
                                </div>
                                <div>
                                    <label for="genero">Gênero</label>
                                    <input type="text" id="genero" value={this.genero} disabled/>
                                </div>
                                <div>
                                    <label for="telefone">Telefone</label>
                                    <input type="number" id="telefone" value={this.telefone} disabled/>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <Rodape />
            </div>
        );
    }
});
