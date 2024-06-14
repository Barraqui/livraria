import {defineComponent} from 'vue';
import {RouterView} from "vue-router";
import Cabecalho from '@/layout/cabecalho/index.jsx';
import Rodape from '@/layout/rodape/index.jsx';
import Cards from '@/component/cards';

export default defineComponent({

    setup(){


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
