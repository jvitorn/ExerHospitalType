namespace hospital{
    export class Medico extends Funcionario {
        //caracteristicas da classe
        private crm:number|undefined;
        private especialidade:string|undefined;
        //getters e setters
        getCrm():number|undefined{
            return this.crm;
        }
        getEspecialidade():string|undefined{
            return this.especialidade;
        }
        setCrm(crm:number):void{
            this.crm = crm;
        }
        setEspecialidade(especialidade:string):void{
           this.especialidade = especialidade; 
        }

    }
}