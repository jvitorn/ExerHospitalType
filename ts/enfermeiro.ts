namespace hospital{
    export class Enfermeiro extends Funcionario{
         //caracteristicas da classe
        private coren:number|undefined;
        //getters e setters
        getCoren():number|undefined{
            return this.coren;
        }
        setCoren(coren:number):void{
            this.coren = coren;
        }

    } 
}