"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Divisao extends calculo_1.default {
    calcular(numero1, numero2) {
        if (numero2 == 0) {
            throw new Error('Não é possível dividir por zero');
        }
        return numero1 / numero2;
    }
}
exports.default = Divisao;
