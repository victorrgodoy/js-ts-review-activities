"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const soma_1 = __importDefault(require("./math-operations/soma"));
const subtracao_1 = __importDefault(require("./math-operations/subtracao"));
const divisao_1 = __importDefault(require("./math-operations/divisao"));
const potenciacao_1 = __importDefault(require("./math-operations/potenciacao"));
const radiciacao_1 = __importDefault(require("./math-operations/radiciacao"));
const multiplicacao_1 = __importDefault(require("./math-operations/multiplicacao"));
const bhaskara_1 = __importDefault(require("./math-operations/bhaskara"));
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question(`Quais são seus números e a operação desejada?\nOperações: Soma, Subtracao, Multiplicacao, Divisao, Potencia, Raiz, Bhaskara\n`, (input) => {
        let instrucoes = input.split(' ');
        let numero1 = Number(instrucoes[0]);
        let numero2 = Number(instrucoes[1]);
        let numero3 = 0;
        let operacao;
        if (instrucoes.length == 1) {
            operacao = instrucoes[0];
        }
        else if (instrucoes.length == 4) {
            numero3 = Number(instrucoes[2]);
            operacao = instrucoes[3];
        }
        else {
            operacao = instrucoes[2];
        }
        console.log(`Essas foram as suas instruções: ${instrucoes}\n`);
        let calculo;
        switch (operacao) {
            case 'Soma':
                calculo = new soma_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Subtracao':
                calculo = new subtracao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Multiplicacao':
                calculo = new multiplicacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Divisao':
                calculo = new divisao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Potencia':
                calculo = new potenciacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Raiz':
                calculo = new radiciacao_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
                break;
            case 'Bhaskara':
                calculo = new bhaskara_1.default();
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}\n`);
                break;
            case 'Sair':
                console.log(`Sainda da calculador\n`);
                leitor.close();
                break;
            default:
                console.log(`Erro.Tente novamente!`);
                break;
        }
        leitor.close();
    });
};
iniciar();
