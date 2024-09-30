import { defineComponent, onMounted, ref } from 'vue';
import { RouterView } from "vue-router";
import Cabecalho from '@/layout/cabecalho/index.jsx';
import Rodape from '@/layout/rodape/index.jsx';
import './index.css'

export default defineComponent({

    setup() {
        const counter = ref(0);
        const maxSlides = 3;
        const slideInterval = ref(null);

        const slideCarousel = () => {
            const banner = document.querySelector('.banner');
            const width = banner.offsetWidth;
            banner.style.transform = `translateX(-${counter.value * width}px)`;
        }

        const nextSlide = () => {
            counter.value = (counter.value < maxSlides) ? counter.value + 1 : 0;
            slideCarousel();
        }

        const prevSlide = () => {
            counter.value = (counter.value > 0) ? counter.value - 1 : maxSlides;
            slideCarousel();
        }

        const startAutoPlay = () => {
            slideInterval.value = setInterval(nextSlide, 6000);
        }

        const stopAutoPlay = () => {
            clearInterval(slideInterval.value);
        }

        onMounted(() => {
            startAutoPlay();
        })

        return {
            nextSlide,
            prevSlide,
            stopAutoPlay,
            startAutoPlay
        }
    },
    render() {

        return (
            <main>
                <Cabecalho />
                <div class='banner-main-container'>
                    <div class='banner-container' onMouseEnter={this.stopAutoPlay} onMouseLeave={this.startAutoPlay}>
                        <div class='banner'>
                            <div class='banner-slide'>
                                <img src="https://images.tcdn.com.br/img/img_prod/971806/1643655662_emartins-fontes-fullbanner15.jpg" alt="" />
                                <img src="https://images.tcdn.com.br/img/img_prod/1101810/1648057866_emartins-fontes-fullbanner07.jpg" alt="" />
                                <img src="https://images.tcdn.com.br/img/img_prod/971806/1643655606_emartins-fontes-fullbanner13.jpg" alt="" />
                                <img src="https://images.tcdn.com.br/img/img_prod/971806/1643656080_emartins-fontes-fullbanner21.jpg" alt="" />
                            </div>
                        </div>
                        <button id='prevBtn' class='nav-btn' onClick={this.prevSlide}>❮</button>
                        <button id='nextBtn' class='nav-btn' onClick={this.nextSlide}>❯</button>
                    </div>
                </div>
                    <section class='section-middle-banner'>
                        <div class='container'>
                            <div class='wrapper'>
                                <div class='box-banner'>
                                    <img 
                                        src="https://files.oaiusercontent.com/file-gJYBrodey0YczSMckOuNSoaP?se=2024-09-26T17%3A55%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D69f2cb99-02d0-4450-99c4-a15c0da73ab2.webp&sig=MWLkYwtFgJDmh0bycQ/kYxATP6DO7s59OkwhRcu4JSc%3D"
                                        alt="" 
                                    />
                                    <h1>Descubra seu próximo livro favorito</h1>
                                </div>
                                <div class='box-banner'>
                                    <img
                                        src="https://files.oaiusercontent.com/file-QHytlirVYHLbdd11MJbdEo4S?se=2024-09-26T18%3A00%3A50Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4a97c40c-f0d7-4dd7-ab92-44b57c83271f.webp&sig=3yVe6U1xnLBIq4BsK8mPrhzCzIcnTX%2B99icK88T66lQ%3D" 
                                        alt="" 
                                    />
                                    <h1>Perfeitos para ler com um café</h1>
                                </div>
                                <div class='box-banner'>
                                    <img 
                                        src="https://files.oaiusercontent.com/file-uX74N71QEocfJfKSMCu2GlFY?se=2024-09-30T14%3A24%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df178f144-f2cb-4723-a14b-357e050afe0d.webp&sig=2faW8lAXhTxCei%2BWVFpw9u8kvCqdDnt2YncBcmXVdQg%3D" 
                                        alt="" 
                                    />
                                    <h1>Aproveite o clima para se prender em boas histórias</h1>
                                </div>
                                <div class='box-banner'>
                                    <img 
                                        src="https://files.oaiusercontent.com/file-MDIjnNUDZnRUFtCZLUN4josH?se=2024-09-27T14%3A08%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6de60ed0-770f-4765-b703-47e4577767b1.webp&sig=xdle00avAW9iAaTc7CR6fTfoNBSJ5DK1iLLsW38lv4Y%3D" 
                                        alt="" 
                                    />
                                    <h1>A magia da leitura para libertar sua imaginação</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div><p>testando</p></div>
                        <div><p>testando</p></div>
                        <div><p>testando</p></div>
                    </section>
                <Rodape />
            </main>
        )
    }
})
