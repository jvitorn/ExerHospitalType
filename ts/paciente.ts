namespace hospital{
    export class Paciente extends Pessoa{
        //caracteristicas da classe
        private codPaciente:number|undefined;
        //reescrever construtor de pessoa
        constructor(nome:string,cpf:string){
            super(nome,cpf);
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