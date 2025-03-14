"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Radiciacao extends calculo_1.default {
    calcular(numero1, numero2) {
        if (numero1 < 0 && numero2 % 2 === 0) {
            throw new Error('Não é possível calcular a raiz de índice par de um número negativo');
        }
        return Math.pow(numero1, (1 / numero2));
    }
}
exports.default = Radiciacao;
