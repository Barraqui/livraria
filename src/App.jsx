import { defineComponent, provide, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { useCarrinhoAbrirFechar } from './component/javascript/carrinhoAbrirFechar';
import { useSuporteAbrirFechar } from './component/javascript/suporteAbrirFechar';

export default defineComponent({

    setup(){
        const carrinhoAbrirFechar = useCarrinhoAbrirFechar();
        provide('carrinhoAbrirFechar', carrinhoAbrirFechar);

        const suporteAbrirFechar = useSuporteAbrirFechar();
        provide('suporteAbrirFechar', suporteAbrirFechar);

        const carrinho = reactive({
            items: []
        });

        const favorito = reactive({
            items: []
        });

        provide('carrinho', carrinho);
        provide('favorito',favorito);

        return () => (
            <div id='main'>
                <RouterView/>
            </div>
        );
    }
});
