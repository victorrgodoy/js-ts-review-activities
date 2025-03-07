import Empresa from './models/Empresa.js';
import Endereco from './models/Endereco.js';
import Telefone from './models/Telefone.js';
import Cliente from './models/Cliente.js';

const telefoneEmpresa1 = new Telefone("11", "91111-1111");
const telefoneEmpresa2 = new Telefone("11", "92222-2222");
const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Andrômeda", "987");
const empresa = new Empresa("ABC LTDA", "Mercado online", enderecoEmpresa);
empresa.addTelefone(telefoneEmpresa1)
empresa.addTelefone(telefoneEmpresa2)

const enderecoCliente1 = new Endereco("SP", "São Paulo", "Rua Cliente 1", "101");
const cliente1 = new Cliente("Cliente 1", "123.456.789-01", enderecoCliente1);
cliente1.addTelefone(new Telefone("11", "95555-5551"))
cliente1.addTelefone(new Telefone("11", "96666-6661"))

const enderecoCliente2 = new Endereco("SP", "São Paulo", "Rua Cliente 2", "102");
const cliente2 = new Cliente("Cliente 2", "123.456.789-02", enderecoCliente2);
cliente2.addTelefone(new Telefone("11", "95555-5552"));
cliente2.addTelefone(new Telefone("11", "96666-6662"));

const enderecoCliente3 = new Endereco("SP", "São Paulo", "Rua Cliente 3", "103");
const cliente3 = new Cliente("Cliente 3", "123.456.789-03", enderecoCliente3);
cliente3.addTelefone(new Telefone("11", "95555-5553"));
cliente3.addTelefone(new Telefone("11", "96666-6663"));

const enderecoCliente4 = new Endereco("SP", "São Paulo", "Rua Cliente 4", "104");
const cliente4 = new Cliente("Cliente 4", "123.456.789-04", enderecoCliente4);
cliente4.addTelefone(new Telefone("11", "95555-5554"));
cliente4.addTelefone(new Telefone("11", "96666-6664"));

const enderecoCliente5 = new Endereco("SP", "São Paulo", "Rua Cliente 5", "105");
const cliente5 = new Cliente("Cliente 5", "123.456.789-05", enderecoCliente5);
cliente5.addTelefone(new Telefone("11", "95555-5555"));
cliente5.addTelefone(new Telefone("11", "96666-6665"));

empresa.addCliente(cliente1)
empresa.addCliente(cliente2)
empresa.addCliente(cliente3)
empresa.addCliente(cliente4)
empresa.addCliente(cliente5)

console.log(empresa.detalhe());




