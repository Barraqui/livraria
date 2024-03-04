import { defineComponent } from 'vue';

export default defineComponent({

    name: 'Button',
    setup(){

        const x = 123;

        const handleClick = () => {

            alert(x)
        }

        return {

            handleClick
        }
    },
    render(){

        return (
            <button
                style='background-color: khaki'
                type='button'
                onClick={this.handleClick}
            >
                Clique aqui
            </button>
        );
    }
});
