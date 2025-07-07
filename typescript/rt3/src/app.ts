import { Somador, Divisor, Multiplicador, Subtrador } from "./operacoes";
const somar = new Somador()
let a = somar.calcular(10,10)

const subtrair = new Subtrador()
let b = subtrair.calcular(20,10)

const divisor = new Divisor()
let c = divisor.calcular(20,10)

const multiplicador = new Multiplicador()
let d = multiplicador.calcular(10,10)

console.log(`Soma: ${a}`)
console.log(`Subtração: ${b}`)
console.log(`Divisão: ${c}`)
console.log(`Multiplicação: ${d}`)

