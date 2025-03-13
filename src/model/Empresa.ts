import Endereco from './Endereco'
import Funcionario from './Funcionario'

export default class Empresa {
    public razaoSocial:string
    public nomeFantasia:string
    public cnpj:string
    public endereco:Endereco
    public funcionarios:Funcionario[]

    constructor(funcionarios:Funcionario[], endereco: Endereco, razaoSocial:string, nomeFantasia:string, cnpj:string){
        this.funcionarios = funcionarios
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
    }

     public listFuncionarios(): string {
        return this.funcionarios.map(funcionario => 
            funcionario.toString()).join('\n')
    }

    toString() {
        return `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\nCNPJ: ${this.cnpj}\nEndereço:\n${this.endereco}\n\nFuncionários:\n${this.listFuncionarios()}`
    }
}