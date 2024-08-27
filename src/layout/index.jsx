import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import Login from './login';
import '@/layout/login/index.css'

export default defineComponent({

    setup() {


    },
    render() {

        return (
            <main style='display: flex; width: 100%; flex-direction: column'>
                <div>
                    <Login/>
                </div>
            </main>
        )
    }
})
