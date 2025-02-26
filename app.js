const Cliente = require("./objetos/Cliente");
const Empresa = require("./objetos/Empresa");
const Endereco = require("./objetos/Endereco");
const Telefone = require("./objetos/Telefone");

const enderecoAbc = new Endereco("SP", "São Paulo", "Av. Andrômeda", 987);
const telefoneAbc1 = new Telefone(11, 11111111);
const telefoneAbc2 = new Telefone(11, 22222222);
const empresaAbc = new Empresa("abc ltda", "Mercado Online", "00.000.001/0001-01", enderecoAbc);
empresaAbc.definirTelefone = telefoneAbc1;
empresaAbc.definirTelefone = telefoneAbc2;

const enderecoJohn = new Endereco("SP", "São Paulo", "Av. Brasil", 111);
const telefoneJohn1 = new Telefone(11, 33333333);
const telefoneJohn2 = new Telefone(11, 44444444);
const clienteJohn = new Cliente("John", "111.111.111-11", enderecoJohn);
clienteJohn.definirTelefone = telefoneJohn1;
clienteJohn.definirTelefone = telefoneJohn2;
empresaAbc.definirCliente = clienteJohn;

const enderecoMaria = new Endereco("RJ", "Rio de Janeiro", "Rua das Flores", 123);
const telefoneMaria1 = new Telefone(21, 55555555);
const telefoneMaria2 = new Telefone(21, 66666666);
const clienteMaria = new Cliente("Maria", "222.222.222-22", enderecoMaria);
clienteMaria.definirTelefone = telefoneMaria1;
clienteMaria.definirTelefone = telefoneMaria2;
empresaAbc.definirCliente = clienteMaria;

const enderecoCarlos = new Endereco("MG", "Belo Horizonte", "Av. Contorno", 456);
const telefoneCarlos1 = new Telefone(31, 77777777);
const telefoneCarlos2 = new Telefone(31, 88888888);
const clienteCarlos = new Cliente("Carlos", "333.333.333-33", enderecoCarlos);
clienteCarlos.definirTelefone = telefoneCarlos1;
clienteCarlos.definirTelefone = telefoneCarlos2;
empresaAbc.definirCliente = clienteCarlos;

const enderecoAna = new Endereco("BA", "Salvador", "Rua do Mar", 789);
const telefoneAna1 = new Telefone(71, 99999999);
const telefoneAna2 = new Telefone(71, 10101010);
const clienteAna = new Cliente("Ana", "444.444.444-44", enderecoAna);
clienteAna.definirTelefone = telefoneAna1;
clienteAna.definirTelefone = telefoneAna2;
empresaAbc.definirCliente = clienteAna;

const enderecoPedro = new Endereco("RS", "Porto Alegre", "Av. Central", 321);
const telefonePedro1 = new Telefone(51, 11112222);
const telefonePedro2 = new Telefone(51, 22223333);
const clientePedro = new Cliente("Pedro", "555.555.555-55", enderecoPedro);
clientePedro.definirTelefone = telefonePedro1;
clientePedro.definirTelefone = telefonePedro2;
empresaAbc.definirCliente = clientePedro;

console.log(empresaAbc.detalhe());