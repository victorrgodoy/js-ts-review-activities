import Empresa from "../model/Empresa";

export default class Descritor {
    
    public descrever(empresa:Empresa):void{
        console.log(empresa.toString())
    }
}