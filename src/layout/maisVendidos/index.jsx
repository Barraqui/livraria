import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import Cabecalho from '../cabecalho';

import "@/layout/maisVendidos/index.css"
import Rodape from '../rodape';

export default defineComponent({

    setup() {


    },
    render() {

        return (
            <main>
                <Cabecalho/>
                <div> 
                      
                </div>
                <Rodape/>
            </main>
        )
    }
})
