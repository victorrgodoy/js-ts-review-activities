import Descritor from "./utils/Descritor";
import Empresa from "./model/Empresa";
import Endereco from "./model/Endereco";
import Funcionario from "./model/Funcionario";
import Telefone from "./model/Telefone";


let endereco = new Endereco(123,"Av. Paulista", "Jardim Paulista", "São Paulo")
let telefone = new Telefone('011', '9-9999-9999')
let funcionario = new Funcionario('Huck', '123456789', '111.111.111-11',endereco, telefone)
let funcionarios = [funcionario]
// let telefones = [telefone] --> No desafio RT1 UML não contém esse atríbuto na classe Empresa
let empresa = new Empresa(funcionarios, endereco, 'ABC LTDA', 'Mercado Livre', '111-111-111-111-11')

let descritor = new Descritor()
descritor.descrever(empresa)


