import { ref } from "vue";

export const useCarrinhoAbrirFechar = () => {
    
    const carrinhoAberto = ref(false);
    const abrirCarrinho = () => {
        carrinhoAberto.value = !carrinhoAberto.value;
    }
    
    return {
        carrinhoAberto,
        abrirCarrinho
    }
}