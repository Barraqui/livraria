import {defineComponent} from 'vue';
import {RouterView} from "vue-router";
import Cabecalho from '@/layout/cabecalho/index.jsx';
import Rodape from '@/layout/rodape/index.jsx';
import Cards from '@/component/cards';
import { useCarrinhoFavorito } from '@/component/javascript/useCarrinhoFavorito';

export default defineComponent({

    setup(){

        const { adicionarAoCarrinho, adicionarAoFavorito, carregarFavoritos, carregarCarrinho } = useCarrinhoFavorito();

        carregarCarrinho();
        carregarFavoritos();

        return {
            adicionarAoCarrinho,
            adicionarAoFavorito
        }
    },
    render(){

        return (
            <main style='display: flex; width: 100%; flex-direction: column'>
                <Cabecalho/>
                <div>
                    <Cards/>
                </div>
                <Rodape/>
            </main>
        )
    }
})
