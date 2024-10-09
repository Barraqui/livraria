import { defineComponent } from 'vue';
import { useCarrinhoFavorito } from '../javascript/useCarrinhoFavorito';
import livros from '@/Json/livros.json'
import './index.css'

export default defineComponent({

    setup() {
        const { adicionarAoCarrinho, adicionarAoFavorito, carregarFavoritos, carregarCarrinho } = useCarrinhoFavorito();

        carregarCarrinho();
        carregarFavoritos();

        return {
            livros,
            adicionarAoCarrinho,
            adicionarAoFavorito
        }
    },
    render() {

        return (
            <div id="card">
                {
                    this.livros.map(livro => (
                        <div class="espaco-livros">
                            <img id="livro" src={livro.imagem} />
                            <div onClick={() => this.adicionarAoFavorito(livro)} class="fav">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path></svg>
                            </div>
                            <h1>{livro.titulo}</h1>
                            <p class="preco">R$ {livro.preco.toFixed(2)}</p>
                            <p>
                                <button onClick={() => this.adicionarAoCarrinho(livro)}>Adicionar ao carrinho</button>
                            </p>
                        </div>
                    ))
                }
            </div>
        );
    }
});