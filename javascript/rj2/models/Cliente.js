function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    Object.defineProperty(this,'getNome', {
            get: function(){
                return this.nome
            }
    })
    Object.defineProperty(this,'getNomeUpper',{
        get: function(){
            return this.nome.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getNomeLower',{
        get: function(){
            return this.nome.toLowerCase()
        }
    })
    
    Object.defineProperty(this,'getTelefoneCelular',{
        get:function(){
            return this.telefoneCelular
        }
    })
    Object.defineProperty(this,'getTelefoneCelularUpper',{
        get: function(){
            return this.telefoneCelular.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getTelefoneCelularLower',{
        get: function(){
            return this.telefoneCelular.toLowerCase()
        }
    })

    Object.defineProperty(this,'getEmail',{
        get:function(){
            return this.email
        }
    })
    Object.defineProperty(this,'getEmailUpper',{
        get:function(){
            return this.email.toUpperCase()
        }
    })
    Object.defineProperty(this,'getEmailLower',{
        get:function(){
            return this.email.toLowerCase()
        }
    })

    Object.defineProperty(this, 'getEndereco',{
        get: function(){
            return this.endereco
        }
    })
    Object.defineProperty(this, 'getEnderecoUpper',{
        get: function(){
            return this.endereco.toUpperCase()
        }
    })
    Object.defineProperty(this, 'getEnderecoLower',{
        get: function(){
            return this.endereco.toLowerCase()
        }
    })

    Object.defineProperty(this,'setNome',{
        set: function(nome){
            this.nome = nome
        }
    })
    Object.defineProperty(this,'setTelefoneCelular',{
        set: function(telefoneCelular){
            this.telefoneCelular = telefoneCelular
        }
    })
    Object.defineProperty(this,'setEmail',{
        set:function(email){
            this.email = email
        }
    })
    Object.defineProperty(this,'setEndereco', {
        set: function(endereco){
            this.endereco = endereco
        }
    })

    Object.defineProperty(this,'descricao',{
        get: function(){
            return '----------------' + '\n' + 
            'Informações do Cliente:' + '\n' + 
            this.nome + '\n' +  
            '----------------' + '\n' + 
            '----------------' + '\n' + 
            this.telefoneCelular.descricao + '\n' + 
            '----------------' + '\n' + 
            this.endereco.descricao + '\n' + 
            '----------------'
        }
    })
}

module.exports = Cliente
