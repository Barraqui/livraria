import { defineComponent, inject, onMounted } from 'vue';
import './index.css'
import { useCarrinhoFavorito } from '../javascript/useCarrinhoFavorito';

export default defineComponent({

    setup() {

        const livros = [
            {
                titulo: "Sherlock Holmes",
                preco: 35.90,
                imagem: "https://cdn.awsli.com.br/600x700/511/511886/produto/28352062/28022ad3f4.jpg"
            },
            {
                titulo: "Toda luz que não podemos ver",
                preco: 40.90,
                imagem: "https://livrariacultura.vteximg.com.br/arquivos/ids/151565568-300-300/42886880.jpg?v=638181074767270000"
            },
            {
                titulo: "O homem de giz",
                preco: 44.90,
                imagem: "https://livrariacultura.vteximg.com.br/arquivos/ids/152580679-300-300/2000038178.jpg?v=638188886711230000"
            },
            {
                titulo: "Passaporte 2030",
                preco: 35.90,
                imagem: "https://livrariacultura.vteximg.com.br/arquivos/ids/148206760-300-300/2112320644.jpg?v=638144345198500000"
            },
            {
                titulo: "A garota do lado",
                preco: 35.90,
                imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198589-200-200?v=1774878503&width=200&height=200&aspect=true"
            },
            {
                titulo: "Rita Lee",
                preco: 35.90,
                imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/290769-200-200?v=1774819714&width=200&height=200&aspect=true"
            },
            {
                titulo: "IT",
                preco: 30.90,
                imagem: "https://m.media-amazon.com/images/I/91g9Dvtf+jL._AC_UL320_.jpg"
            },
            {
                titulo: "Bird Box",
                preco: 33.90,
                imagem: "https://leitura.com.br/image/cache/products/9788580576528-228x228.jpg"
            },
            {
                titulo: "As Crônicas de Narnia",
                preco: 29.90,
                imagem: "https://a-static.mlcdn.com.br/350x350/livro-as-cronicas-de-narnia-volume-unico/magazineluiza/084525200/6b2ae6ddef10a19b4dca3fa5877d8eba.png"
            },
            {
                titulo: "A menina que roubava livros",
                preco: 45.90,
                imagem: "https://m.media-amazon.com/images/I/41pVlY-bbaL._SS135_.jpg"
            },
            {
                titulo: "Dracula",
                preco: 40.90,
                imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/200231-200-200?v=1774576065&width=200&height=200&aspect=true"
            },
            {
                titulo: "Os sete maridos de Evelyn Hugo",
                preco: 35.90,
                imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198374-200-200?v=1774842687&width=200&height=200&aspect=true"
            },
            {
                titulo: "O nome do vento",
                preco: 25.90,
                imagem: "https://leitura.com.br/image/cache/products/9788599296493-228x228.jpg"
            },
            {
                titulo: "A maldição do mar",
                preco: 35.90,
                imagem: "https://leitura.com.br/image/cache/products/9788501119469-228x228.jpg"
            },
            {
                titulo: "Uma breve história do tempo",
                preco: 55.90,
                imagem: "https://leitura.com.br/image/cache/products/9788580576467-228x228.jpg"
            },
            {
                titulo: "A Metamorfose",
                preco: 36.85,
                imagem: "https://m.media-amazon.com/images/I/71QLwli7GUL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                titulo: "A lógica do cisne negro",
                preco: 75.65,
                imagem: "https://m.media-amazon.com/images/I/71XoEZS6W+L._AC_UF1000,1000_QL80_.jpg"
            },
            {
                titulo: "Senhor das moscas",
                preco: 33.29,
                imagem: "https://m.media-amazon.com/images/I/81QwcdCwp0L._SY466_.jpg"
            },
            {
                titulo: "1984",
                preco: 16.09,
                imagem: "https://m.media-amazon.com/images/I/61M9jDcsl2L._SY466_.jpg"
            },
            {
                titulo: "Antifrágil",
                preco: 64.66,
                imagem: "https://m.media-amazon.com/images/I/8119xmkJ3IL._SY466_.jpg"
            },
            {
                titulo: "O Efeito Borboleta",
                preco: 30.40,
                imagem: "https://m.media-amazon.com/images/I/8101x+ALKoL._AC_UY218_.jpg"
            },
            {
                titulo: "SQL Para Análise de Dados",
                preco: 84.10,
                imagem: "https://m.media-amazon.com/images/I/711T0a2CUCL._SY466_.jpg"
            },
            {
                titulo: "Entendendo Algoritmos",
                preco: 58.50,
                imagem: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY466_.jpg"
            },
            {
                titulo: "Dom Casmurro",
                preco: 17.43,
                imagem: "https://m.media-amazon.com/images/I/61Z2bMhGicL._SY466_.jpg"
            },
            {
                titulo: "Box Harry Potter vermelho",
                preco: 293.40,
                imagem: "https://m.media-amazon.com/images/I/51Z9WDGB17L._SX342_SY445_.jpg"
            },
        ]
        
        const {adicionarAoCarrinho, adicionarAoFavorito, carregarFavoritos, carregarCarrinho} = useCarrinhoFavorito();

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