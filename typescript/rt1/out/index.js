"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Descritor_1 = __importDefault(require("./utils/Descritor"));
const Empresa_1 = __importDefault(require("./model/Empresa"));
const Endereco_1 = __importDefault(require("./model/Endereco"));
const Funcionario_1 = __importDefault(require("./model/Funcionario"));
const Telefone_1 = __importDefault(require("./model/Telefone"));
let endereco = new Endereco_1.default(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
let telefone = new Telefone_1.default('011', '9-9999-9999');
let funcionario = new Funcionario_1.default('Huck', '123456789', '111.111.111-11', endereco, telefone);
let funcionarios = [funcionario];
// let telefones = [telefone] --> No desafio RT1 UML não contém esse atríbuto na classe Empresa
let empresa = new Empresa_1.default(funcionarios, endereco, 'ABC LTDA', 'Mercado Livre', '111-111-111-111-11');
let descritor = new Descritor_1.default();
descritor.descrever(empresa);
