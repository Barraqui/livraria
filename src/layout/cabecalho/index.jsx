import { defineComponent, ref } from 'vue';
import Dialog from 'primevue/dialog';
import Menu from 'primevue/menu';
import dadosPessoais from '../dadosPessoais';

import './index.css';

export default defineComponent({
  name: 'Cabecalho',
  setup() {
    const menu = ref();
    const items = ref([
      {
        label: 'Opções da conta',
        items: [
          {
            label: 'Minha Conta',
            icon: 'pi pi-user',
            to: '/dados'

          },
          {
            label: 'Meus Pedidos',
            icon: 'pi pi-cart-minus'
          },
          {
            label: 'Meus Favoritos',
            icon: 'pi pi-heart'
          },
          {
            label: 'Sair',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    const toggleMenu = (event) => {
      menu.value.toggle(event);
    };

    const openMenu = (label) => {
      const menuItem = items.value.find(item => item.label === label);
      if (menuItem) {
        toggleMenu();
      }
    };

    return {
      menu,
      items,
      toggleMenu,
      openMenu,
      toggle
    };
  },

  render() {
    return (
      <header>
        <a href=""><img class="logo" src="https://copias.supermidiapf.com.br/wp-content/uploads/sites/4/manuais-e-livros-passo-fundo-impressao-super-copias-grafica-digital/Livros-e-Manuais-Passo-Fundo-Super-C%C3%B3pias-Gr%C3%A1fica-Digital-2.png" alt="" /></a>

        <nav>
          <div onClick={() => this.openMenu('Home')}>Home</div>
          <div onClick={() => this.openMenu('Livros')}>Livros</div>
          <div onClick={() => this.openMenu('Mais Vendidos')}>Mais Vendidos</div>
          <div onClick={() => this.openMenu('Lançamentos')}>Lançamentos</div>
        </nav>
      
        <div class="cont_login" onClick={(this.toggle)} aria-haspopup="true" aria-controls="overlay_menu">
          <Menu ref="menu" id="overlay_menu" model={this.items} popup="true" />
          <svg class="login_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
          </svg>
          <div>Minha Conta</div>
        </div>
      </header>
    );
  }
});
