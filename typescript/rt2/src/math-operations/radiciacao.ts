import Calculo from "./calculo";

export default class Radiciacao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero1 < 0 && numero2 % 2 === 0) {
            throw new Error('Não é possível calcular a raiz de índice par de um número negativo');
        }
        return numero1 ** (1 / numero2);
    }
}