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
                                <div className="espaco"></div>
                                <span>Descubra seu próximo livro favorito</span>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\segunda.JPG" alt="" />
                                <div className="espaco"></div>
                                <span>Perfeitos para ler com um café</span>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\terceira.JPG" alt="" />
                                <div className="espaco"></div>
                                <span>Aproveite o clima para se prender em boas histórias</span>
                            </div>
                            <div class='box-banner'>
                                <img src="src\img\quarta.jpg" alt="" />
                                <div className="espaco"></div>
                                <span>A magia da leitura para libertar sua imaginação</span>
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
                            <div class='box-banner-hqs'>
                                <img src="https://m.media-amazon.com/images/I/81JTNoJKKaL._AC_UF894,1000_QL80_.jpg" alt="" />
                                <div className="espaco"></div>
                                <span>Mangás</span>
                            </div>
                            <div class='box-banner-hqs'>
                                <img src="https://filfelix.com.br/wp-content/uploads/2012/06/The-Man-of-Steel-231-capa-by-Dick-Giordano.jpg" alt="" />
                                <div className="espaco"></div>
                                <span>HQs</span>
                            </div>
                            <div class='box-banner-hqs'>
                                <img src="https://a-static.mlcdn.com.br/450x450/25-gibis-turma-da-monica-nao-repetidos-panini/gardenprodutos/bfe11d9e1b6d11eb99564201ac18502e/9509e74ec22a7daf4defc8fb59eb7b56.jpeg" alt="" />
                                <div className="espaco"></div>
                                <span>Gibis</span>
                            </div>
                            <div class='box-banner-hqs'>
                                <img src="https://editoracastelo.com.br/cdn/shop/files/ED_EDITORA_COL_ZAP_CIRCO_DIVERTIDO_ED_074_A23_FECHAMENTO-1.jpg?v=1704990056" alt="" />
                                <div className="espaco"></div>
                                <span>Para colorir</span>
                            </div>
                        </div>
                    </div>
                </section>
                <Rodape />
            </main>
        )
    }
})