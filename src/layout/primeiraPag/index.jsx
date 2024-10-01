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
                                <img src="src\img\primeira.jpg" alt="" />
                                <h1>Descubra seu próximo livro favorito</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\segunda.JPG" alt="" />
                                <h1>Perfeitos para ler com um café</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\terceira.JPG" alt="" />
                                <h1>Aproveite o clima para se prender em boas histórias</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\quarta.jpg" alt="" />
                                <h1>A magia da leitura para libertar sua imaginação</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <div class='banner-main-hq'>
                    <div class='banner-container'>
                        <img src="https://images.tcdn.com.br/img/img_prod/971806/1643656150_emartins-fontes-fullbanner20.jpg" alt="" />
                    </div>
                </div>
                <section class='section-middle-banner'>
                    <div class='container'>
                        <div class='wrapper'>
                            <div class='box-banner'>
                                <img src="src\img\primeira.jpg" alt="" />
                                <h1>Descubra seu próximo livro favorito</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\segunda.JPG" alt="" />
                                <h1>Perfeitos para ler com um café</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\terceira.JPG" alt="" />
                                <h1>Aproveite o clima para se prender em boas histórias</h1>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\quarta.jpg" alt="" />
                                <h1>A magia da leitura para libertar sua imaginação</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <Rodape />
            </main>
        )
    }
})
