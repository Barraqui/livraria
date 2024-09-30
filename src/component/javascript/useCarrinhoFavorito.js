import { inject } from "vue"

export const useCarrinhoFavorito = () => {
    const carrinho = inject('carrinho');
    const favorito = inject('favorito');

    const adicionarAoCarrinho = (livro) => {
        const itemExistente = carrinho.items.find(item => item.titulo === livro.titulo);
        if(itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.items.push({...livro, quantidade: 1});
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho.items));
    }

    const carregarCarrinho = () => {
        const carrinhoSalvo = localStorage.getItem('carrinho');
        if(carrinhoSalvo) {
            carrinho.items = JSON.parse(carrinhoSalvo);
        } else {
            carrinho.items = [];
        }
    }

    const adicionarAoFavorito = (livro) => {
        const itemExistente = favorito.items.find(item => item.titulo === livro.titulo);
        if(!itemExistente) {
            favorito.items.push({...livro});
        }
        localStorage.setItem('favorito', JSON.stringify(favorito.items));
    }

    const carregarFavoritos = () => {
        const favoritoSalvo = localStorage.getItem('favorito');
            if(favoritoSalvo) {
                favorito.items = JSON.parse(favoritoSalvo);
            }
            localStorage.setItem('favorito', JSON.stringify(favorito.items))
        }

    return {
        adicionarAoCarrinho,
        adicionarAoFavorito,
        carregarFavoritos,
        carregarCarrinho
    }
}