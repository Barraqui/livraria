import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({

    setup(){

        return () => (
            <div id='main'>
                <RouterView/>
            </div>
        );
    }
});
