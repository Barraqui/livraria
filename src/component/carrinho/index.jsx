import { defineComponent, inject, ref } from 'vue';
import { RouterView } from "vue-router";
import './index.css'

export default defineComponent({

    setup() {

        const carrinhoAbrirFechar = inject('carrinhoAbrirFechar');
        const { abrirCarrinho, carrinhoAberto } = carrinhoAbrirFechar;

        const carrinho = inject('carrinho');

        const calcularTotal = () => {
            return carrinho.items.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2);
        }

        const atualizarQuantidade = (item, novaQuantidade) => {
            const quantidade = parseInt(novaQuantidade, 10);
            if(quantidade > 0) {
                item.quantidade = quantidade;
                localStorage.setItem('carrinho', JSON.stringify(carrinho.items));
            }
        }

        const removerItem = (item) => {
            const index = carrinho.items.findIndex(carrinhoItem => carrinhoItem.id === item.id);
            if(index !== -1) {
                carrinho.items.splice(index, 1);
                localStorage.setItem('carrinho', JSON.stringify(carrinho.items));
            }
        }

        return {
            abrirCarrinho,
            carrinhoAberto,
            carrinho,
            calcularTotal,
            atualizarQuantidade,
            removerItem
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
                                this.carrinho.items.map(item => (
                                    <div class='product-body'>
                                        <img src={item.imagem} />
                                        <div>
                                            <h2>{item.titulo}</h2>
                                        </div>
                                        <div>
                                            <input 
                                                class="livros-quantidades" 
                                                type="number"
                                                value={item.quantidade}
                                                min={1}
                                                onInput={(event) => this.atualizarQuantidade(item, event.target.value)}
                                            />
                                            <button onClick={() => this.removerItem(item)}>Remover</button>
                                        </div>
                                        <div>
                                            <h2>R$ {item.preco.toFixed(2)}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class='sidebar-valore'>
                            <div>
                                <h2>Valor Total:</h2>
                            </div>
                            <div>
                                <h2>R$ {this.calcularTotal()}</h2>
                            </div>
                        </div>
                        <div class='finalizar-compra'>
                            <button > Finalizar Compra</button>
                        </div>
                    </div>
                </div>
                {this.carrinhoAberto && (
                    <div>
                        <Carrinho />
                    </div>
                )
                }
            </main>
        )
    }
})
