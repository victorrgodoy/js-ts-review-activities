const Cliente = require('./models/Cliente')
const Endereco = require('./models/Endereco')
const Telefone = require('./models/Telefone')


//------------ Part 1 --------------
const telefoneCelular = new Telefone('11', '999999999')
const endereco = new Endereco('Av. Paulista', '987', 'São Paulo', 'SP')
const cliente = new Cliente('Carlos Conrado Heinz', telefoneCelular, 'john@gmail.com', endereco)
console.log(cliente.descricao)

//------------ Part 2 --------------
const telefoneAna = new Telefone('21', '222222222');
const enderecoAna = new Endereco('Rua das Flores', 123, 'Rio de Janeiro', 'RJ');
const clienteAna = new Cliente('Ana Maria Silva', telefoneAna, 'ana.silva@app.com', enderecoAna);

const telefoneBruno = new Telefone('31', '333333333');
const enderecoBruno = new Endereco('Avenida Brasil', 456, 'Belo Horizonte', 'MG');
const clienteBruno = new Cliente('Bruno Henrique Souza',telefoneBruno,'bruno.souza@app.com', enderecoBruno);

const telefoneCarol = new Telefone('41', '444444444');
const enderecoCarol = new Endereco('Rua 7 de Setembro', 789, 'Curitiba', 'PR');
const clienteCarol = new Cliente('Carol Oliveira',telefoneCarol,'carol.oliveira@app.com', enderecoCarol);

const telefoneDouglas = new Telefone('51', '555555555');
const enderecoDouglas = new Endereco('Rua São João', 321, 'Porto Alegre', 'RS');
const clienteDouglas = new Cliente('Douglas Martins',telefoneDouglas,'douglas.martins@app.com', enderecoDouglas);

const clientes = [clienteDouglas, clienteCarol, clienteBruno, clienteAna]

function ordenar(clientes){
    return clientes.sort((a,b) => a.getNome.localeCompare(b.getNome))
}

const clientesOrdenados = ordenar(clientes)

for(let i = 0; i < clientesOrdenados.length; i++){
    console.log(clientesOrdenados[i].getNome)
}


 