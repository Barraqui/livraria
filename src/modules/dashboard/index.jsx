import {defineComponent, ref} from 'vue';
import Button from 'primevue/button'
import './index.css';

export default defineComponent({

    setup(){

        const count = ref(0);

        const handleClick = () => {

            count.value++;
        }

        return {

            handleClick,
            count
        }
    },
    render(){

        return (
            <div
                style={{

                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                }}
            >
                <Button

                    style='background-color: khaki'
                    onClick={this.handleClick}
                >

                    Click

                </Button>

                <div
                    class='total'
                >
                    {this.count}
                </div>

            </div>
        )
    }
})
