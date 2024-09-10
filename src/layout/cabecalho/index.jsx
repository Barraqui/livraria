import { defineComponent, ref } from 'vue';
import router from '@/router';
import '@/layout/cabecalho/index.css'
import Menu from 'primevue/menu';
import Carrinho from '../carrinho';

export default defineComponent({
  name: 'Cabecalho',
  components: {
    Menu,
    Carrinho
  },

  setup() {

    const logout = () => {
      localStorage.removeItem('usuarioLogado');
      router.push('/')
    }

    const menu = ref();
    const items = ref([
      {
        label: 'Opções da conta',
        items: [
          {
            label: 'Minha Conta',
            icon: 'pi pi-user',
            command: () => router.push('/dadosPessoais')
          },
          {
            label: 'Meus Favoritos',
            icon: 'pi pi-heart'
          },
          {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: logout
          }
        ]
      }
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    const carrinhoAberto = ref(false);

    const abrirCarrinho = () => {
      carrinhoAberto.value = !carrinhoAberto.value;
    }

    return {
      menu,
      items,
      toggle,
      logout,
      carrinhoAberto,
      abrirCarrinho
    };
  },

  render() {
    return (
      <header>
        <a href="/"><img class="logo" src="" alt="" /></a>

        <nav>
          <div><a href="/home">Home</a></div>
          <div>Livros</div>
          <div>Mais Vendidos</div>
          <div>Lançamentos</div>
        </nav>

        <div class='main-container-opcoes'>
          <div class="cont-login" onClick={(this.toggle)} aria-haspopup="true" aria-controls="overlay_menu">
            <Menu ref="menu" id="overlay_menu" model={this.items} popup="true" />
            <svg class="login-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
            <div>Minha Conta</div>
          </div>
          <div class="carrinho-vendas" onClick={this.abrirCarrinho}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z">
              </path>
            </svg>
          </div>
        </div>
        {this.carrinhoAberto && (
          <div class="body-teste active">
            <Carrinho />
          </div>
        )}
      </header>
    );
  }
});