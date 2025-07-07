function Telefone(ddd, numero){
    this.ddd = ddd
    this.numero = numero

    Object.defineProperty(this, 'getDdd', {
        get: function() {
            return this.ddd
        }
    })
    Object.defineProperty(this, 'getDddUpper', {
        get: function() {
            return this.ddd.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getDddLower', {
        get: function() {
            return this.ddd.toLowerCase()
        }
    })

    Object.defineProperty(this, 'getNumero', {
        get: function() {
            return this.numero
        }
    })
    Object.defineProperty(this, 'getNumeroUpper', {
        get: function() {
            return this.numero.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getNumeroLower', {
        get: function() {
            return this.numero.toLowerCase()
        }
    })

    Object.defineProperty(this, 'setDdd', {
        set: function(ddd) {
            this.ddd = ddd
        }
    })
    Object.defineProperty(this, 'setNumero', {
        set: function(numero) {
            this.numero = numero
        }
    })

    Object.defineProperty(this,'descricao',{
        get: function(){
            return `Telefone:\nDDD: ${this.ddd}\nNúmero: ${this.numero}`
        }
    })
}

module.exports = Telefone