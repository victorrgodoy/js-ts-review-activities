class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get pegarEstado(){
        return this.estado
    }
    get pegarCidade(){
        return this.cidade
    }
    get pegarRua(){
        return this.rua
    }
    get pegarNumero(){
        return this.numero
    }

    // --------------------------------------------//

    estadoMaiusculo(){
        return this.pegarEstado.toUpperCase()
    }

    estadoMinusculo(){
        return this.pegarEstado.toLowerCase()
    }

    cidadeMaiusculo(){
        return this.pegarCidade.toUpperCase()
    }

    cidadeMinusculo(){
        return this.pegarCidade.toLowerCase()
    }

    ruaMaiusculo(){
        return this.pegarRua.toUpperCase()
    }

    ruaMinusculo(){
        return this.pegarRua.toLowerCase()
    }

    numeroMaiusculo(){
        return this.pegarNumero.toUpperCase()
    }

    numeroMinusculo(){
        return this.pegarNumero.toLowerCase()
    }

    detalhe(){
        return `Estado: ${this.estadoMaiusculo()} cidade: ${this.pegarCidade} rua: ${this.pegarRua} número: ${this.pegarNumero}`
    }
}
module.exports = Endereco