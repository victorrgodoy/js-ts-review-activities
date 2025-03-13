"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }
    listFuncionarios() {
        return this.funcionarios.map(funcionario => funcionario.toString()).join('\n');
    }
    toString() {
        return `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\nCNPJ: ${this.cnpj}\nEndereço:\n${this.endereco}\n\nFuncionários:\n${this.listFuncionarios()}`;
    }
}
exports.default = Empresa;
