import { ref } from "vue";

export const useSuporteAbrirFechar = () => {

    const suporteAberto = ref(false);
    const abrirSuporte = () => {
        suporteAberto.value = !suporteAberto.value;
    }

    return {
        suporteAberto,
        abrirSuporte
    }
}