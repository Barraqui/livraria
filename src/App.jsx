import { defineComponent, provide, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { useCarrinhoAbrirFechar } from './component/javascript/carrinhoAbrirFechar';

export default defineComponent({

    setup(){
        const carrinhoAbrirFechar = useCarrinhoAbrirFechar();
        provide('carrinhoAbrirFechar', carrinhoAbrirFechar);

        const carrinho = reactive({
            items: []
        });

        provide('carrinho', carrinho);

        return () => (
            <div id='main'>
                <RouterView/>
            </div>
        );
    }
});
