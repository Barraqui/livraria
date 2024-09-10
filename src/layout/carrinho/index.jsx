import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import '@/layout/carrinho/index.css'

export default defineComponent({

    setup() {
        const livros = [
            {
                titulo: "Sherlock Holmes",
                preco: 35.90,
                imagem: "https://cdn.awsli.com.br/600x700/511/511886/produto/28352062/28022ad3f4.jpg"
            },
            {
                titulo: "Os sete maridos de Evelyn Hugo",
                preco: 35.90,
                imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198374-200-200?v=1774842687&width=200&height=200&aspect=true"
            },
            {
                titulo: "Sherlock Holmes",
                preco: 35.90,
                imagem: "https://cdn.awsli.com.br/600x700/511/511886/produto/28352062/28022ad3f4.jpg"
            },
        ]

        const calcularTotal = () => {
            return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
        }
        return {
            livros,
            calcularTotal
        }
    },
    render() {

        return (
            <main style='display: flex; width: 100%; flex-direction: column'>
                <div class='carrinho-main-container'>
                    <div class='carrinho-header'>
                        <h2>Carrinho</h2>
                        <button class='close-btn' onClick={this.abrirCarrinho}>X</button>
                    </div>
                    <div class='carrinho-container'>
                        <div class='carrinho-body'>
                            {
                                this.livros.map(livro => (
                                    <div class='product-body'>
                                        <img src={livro.imagem} alt="" />
                                        <div>
                                            <h2>{livro.titulo}</h2>
                                        </div>
                                        <div>
                                            <input type="number" />
                                        </div>
                                        <div>
                                            <h2>R$ {livro.preco.toFixed(2)}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class='sidebar-valore'>
                            <div>
                                <h2>valor total</h2>
                            </div>
                            <div>
                                <h2>R$ {this.calcularTotal()}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
})
