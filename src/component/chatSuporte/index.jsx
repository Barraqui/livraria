import { defineComponent } from 'vue';
import './index.css';

export default defineComponent({

    name: 'chatSuporte',
    setup() {

    },
    render() {

        return (
            <div>
                <div className="suporte-main-container">
                    <button class="close-btn">X</button>
                    <h2>Central de Atendimento</h2>
                    <p>Como podemos te ajudar?</p>
                    <p>Utilize um de nossos canais de atendimento</p>

                    <a href="" class="btn-contato btn-whatsapp">Fale pelo WhatsApp</a>
                    <a href="" class="btn-contato btn-email">Envie um E-mail</a>
                    <div class="phone-number">
                        <p>Compre também pelo <span>Televendas:</span></p>
                        <p>(44) 9953-3254</p>

                        <p><span>SAC - Serviço de Atendimento ao Cliente:</span></p>
                        <p>(44) 9921-3446</p>
                    </div>
                    <div class="hours">
                        <p>Horário de Atendimento</p>
                        <p>Segunda a Sexta - das 8h às 18h</p>
                    </div>
                </div>
            </div>
        );
    }
});
