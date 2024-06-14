import { defineComponent } from 'vue';
import './index.css'
import { ref } from "vue";

export default defineComponent({

    name: 'modal',
    setup(){

        return {
            
        }
    },
    render(){

        return (
            
            <div class="login_modal">
            <div class="body_modal">
                <h1 class="title-login">Olá, seja bem-vindo</h1>

                <div class="first_block">
                    <div class="my_acont">
                        <div class="imagem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <path
                                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z">
                                </path>
                            </svg>
                        </div>
                        <div class="texto-login">
                            Minha conta
                        </div>
                    </div>
                    <div class="my_acont">
                        <div class="imagem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <path
                                    d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z">
                                </path>
                            </svg>
                        </div>
                        <div class="texto-login">
                            Meus pedidos
                        </div>
                    </div>
                    <div class="my_acont">
                        <div class="imagem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <path
                                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z">
                                </path>
                            </svg>
                        </div>
                        <div class="texto-login">
                            Lista de desejos
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});