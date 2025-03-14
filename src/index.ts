import * as readline from 'readline'

import Soma from "./math-operations/soma"
import Subtracao from "./math-operations/subtracao"
import Divisao from "./math-operations/divisao"
import Potenciacao from "./math-operations/potenciacao"
import Radiciacao from "./math-operations/radiciacao"
import Multiplicacao from './math-operations/multiplicacao'
import Bhaskara from './math-operations/bhaskara'

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Quais são seus números e a operação desejada?\nOperações: Soma, Subtracao, Multiplicacao, Divisao, Potencia, Raiz, Bhaskara\n`, (input) => {
        let instrucoes = input.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let numero3 = 0
        let operacao 
        if(instrucoes.length == 1){
            operacao = instrucoes[0]
        } else if(instrucoes.length == 4){
            numero3 = Number(instrucoes[2])
            operacao = instrucoes[3]
        }else{
            operacao = instrucoes[2]
        }
        console.log(`Essas foram as suas instruções: ${instrucoes}\n`)

        let calculo
        switch(operacao){
            case 'Soma':
                calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Subtracao':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Multiplicacao':
                    calculo = new Multiplicacao()
                    console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                    break
            case 'Divisao':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Potencia':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Raiz':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Bhaskara':
                calculo = new Bhaskara()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}\n`)
                break
            case 'Sair':
                console.log(`Sainda da calculador\n`)
                leitor.close()
                break
            default:
                console.log(`Erro.Tente novamente!`)
                break
        }
        leitor.close()
    })
}

iniciar()


