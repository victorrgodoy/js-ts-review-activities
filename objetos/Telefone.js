class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    // ------------------------------------------------ //

    get pegarDdd(){
        return this.ddd
    }
    get pegarNumero(){
        return this.numero
    }

    // ------------------------------------------------ //

    dddMaiusculo(){
        return this.pegarDdd.toUpperCase()
    }

    dddMinusculo(){
        return this.pegarDdd.toLowerCase()
    }

    numeroMaiusculo(){
        return this.pegarNumero.toUpperCase()
    }

    numeroMinusculo(){
        return this.pegarNumero.toLowerCase()
    }

    detalhe(){
        return `ddd: ${this.pegarDdd} número: ${this.pegarNumero}`
    }
}
module.exports = Telefone