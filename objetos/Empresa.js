class Empresa {
    razaoSocial
    nomeFantasia
    #cnpj
    endereco
    
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = new Set()
        this.clientes = new Set()
    }

    get pegarCnpj() {
        return this.#cnpj
    }
    get pegarRazaoSocial(){
        return this.razaoSocial
    }
    get pegarNomeFantasia(){
        return this.nomeFantasia
    }
    get pegarEndereco(){
        return this.endereco.detalhe()
    }
    get pegarTelefones(){
        const detalhe = []
            this.telefones.forEach(telefone => {
            detalhe.push(telefone.detalhe())
    })
    var separador = "\n"
    return detalhe.join(separador);
    }

    get pegarClientes(){
        const detalhe = []
        this.clientes.forEach(cliente => {
            detalhe.push(cliente.detalhe())
        })
        return detalhe.join("\n")
    }
    // ------------------------------------------------ //

    set definirTelefone(telefone){
        this.telefones.add(telefone)
    }

    set definirCliente(cliente){
        this.clientes.add(cliente)
    }


    // ------------------------------------------------ //

    razaoSocialMaiusculo(){
        return this.pegarRazaoSocial.toUpperCase()
    }

    razaoSocialMinusculo(){
        return this.pegarRazaoSocial.toLowerCase()
    }

    nomeFantasiaMaiusculo(){
        return this.pegarNomeFantasia.toUpperCase()
    }

    nomeFantasiaMinusculo(){
        return this.pegarNomeFantasia.toLowerCase()
    }

    enderecoMaiusculo(){
        return this.pegarEndereco.toUpperCase()
    }

    enderecoMinusculo(){
        return this.pegarEndereco.toLowerCase()
    }

    telefonesMaiusculo(){
        return this.pegarTelefones.toUpperCase()
    }

    telefonesMinusculo(){
        return this.pegarTelefones.toLowerCase()
    }

    // ------------------------------------------------ //

    detalhe(){
        return "Razão Social: " + this.razaoSocialMaiusculo() + "\n"
            + "Nome fantasia: " + this.pegarNomeFantasia + "\n"
            + "------------------" + "\n"
            + this.pegarClientes
    }
}
module.exports = Empresa