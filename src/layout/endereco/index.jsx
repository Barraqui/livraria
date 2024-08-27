import { defineComponent, ref, onMounted } from 'vue';
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';

import './index.css'
import router from '@/router';

export default defineComponent({

    setup() {
        const nome = ref('');
        const pais = ref('');
        const cidade = ref('');
        const rua = ref('');
        const bairro = ref('');
        const numeroCasa = ref('');
        const complemento = ref('');
        const destinatario = ref('');

        onMounted(() => {
            const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
            if (usuarioLogado) {
                nome.value = usuarioLogado.nome;
                pais.value = usuarioLogado.pais;
                cidade.value = usuarioLogado.cidade;
                rua.value = usuarioLogado.rua;
                bairro.value = usuarioLogado.bairro;
                numeroCasa.value = usuarioLogado.numeroCasa;
                complemento.value = usuarioLogado.complemento;
                destinatario.value = usuarioLogado.destinatario;
            }
        })

        const logout = () => {
            localStorage.removeItem('usuarioLogado');
            router.push('/')
        }

        return {
            nome,
            pais,
            cidade,
            rua,
            bairro,
            numeroCasa,
            complemento,
            destinatario,
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
                            <h1>Endereço</h1>
                            <div class="profile-info">
                                <div>
                                    <label for="pais">País</label>
                                    <input type="text" id="pais" value={this.pais} disabled/>
                                </div>
                                <div>
                                    <label for="cidade">Cidade</label>
                                    <input type="text" id="cidade" value={this.cidade} disabled/>
                                </div>
                                <div class="full-width">
                                    <label for="rua">Nome da Rua</label>
                                    <input type="text" id="rua" value={this.rua} disabled/>
                                </div>
                                <div>
                                    <label for="bairro">Bairro</label>
                                    <input type="text" id="bairro" value={this.bairro} disabled/>
                                </div>
                                <div>
                                    <label for="numeroCasa">N°</label>
                                    <input type="number" id="numeroCasa" value={this.numeroCasa} disabled/>
                                </div>
                                <div>
                                    <label for="ref">Complemento e referência </label>
                                    <input type="text" id="ref" value={this.complemento} disabled/>
                                </div>
                                <div>
                                    <label for="destinatario">Destinatário</label>
                                    <input type="text" id="destinatario" value={this.destinatario} disabled/>
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
