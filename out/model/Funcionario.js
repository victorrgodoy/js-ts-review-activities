"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    toString() {
        return `Nome: ${this.nome}\nMatrícula: ${this.matricula}\nCPF: ${this.cpf}\n${this.endereco}\n`;
    }
}
exports.default = Funcionario;
