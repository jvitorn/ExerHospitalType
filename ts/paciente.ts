namespace hospital{
    export class Paciente extends Pessoa{
        //caracteristicas da classe
        private codPaciente:number|undefined;
        //reescrever construtor de pessoa
        constructor(nome:string,cpf:string,cod:number){
            super(nome,cpf);
            this.codPaciente = cod;
        }
        //getters e setters
        getCodPaciente(){
            return this.codPaciente;
        }
        setCodPaciente(codPaciente:number):void{
            this.codPaciente = codPaciente;
        }

    }
}