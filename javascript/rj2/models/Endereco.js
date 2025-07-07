function Endereco(rua, numero, cidade, estado){
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    Object.defineProperty(this, 'getRua', {
        get: function() {
            return this.rua
        }
    })
    Object.defineProperty(this, 'getRuaUpper', {
        get: function() {
            return this.rua.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getRuaLower', {
        get: function() {
            return this.rua.toLowerCase()
        }
    })

    Object.defineProperty(this, 'getNumero', {
        get: function() {
            return this.numero
        }
    })
    Object.defineProperty(this, 'getNumeroUpper', {
        get: function() {
            return this.numer.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getNumeroLower', {
        get: function() {
            return this.numero.toLowerCase()
        }
    })

    Object.defineProperty(this, 'getCidade', {
        get: function() {
            return this.cidade
        }
    })
    Object.defineProperty(this, 'getCidadeUpper', {
        get: function() {
            return this.cidade.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getCidadeLower', {
        get: function() {
            return this.cidade.toLowerCase()
        }
    })

    Object.defineProperty(this, 'getEstado', {
        get: function() {
            return this.estado
        }
    })
    Object.defineProperty(this, 'getEstadoUpper', {
        get: function() {
            return this.estado.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getEstadoLower', {
        get: function() {
            return this.estado.toLowerCase()
        }
    })

    Object.defineProperty(this, 'setRua', {
        set: function(rua) {
            this.rua = rua
        }
    })
    Object.defineProperty(this, 'setNumero', {
        set: function(numero) {
            this.numero = numero
        }
    })
    Object.defineProperty(this, 'setCidade', {
        set: function(cidade) {
            this.cidade = cidade
        }
    })
    Object.defineProperty(this, 'setEstado', {
        set: function(estado) {
            this.estado = estado
        }
    })

    Object.defineProperty(this,'descricao',{
        get: function(){
            return `Endereço:\nRua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}`
        }
    })
}

module.exports = Endereco