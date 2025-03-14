import Calculo from "./calculo";

export default class Bhaskara{
   public calcular(numero1: number, numero2: number, numero3: number): number[] {
       let a = numero1
       let b = numero2
       let c  = numero3

       let delta = (b**2) - 4 * a * c
       if(delta < 0){
        throw new Error('Não existem raízes')
       }

       let raizDelta = Math.sqrt(delta); 
       let x1 = (-b + raizDelta) / (2 * a);
       let x2 = (-b - raizDelta) / (2 * a);

       return [x1,x2]
   }

}