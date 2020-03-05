namespace hospital{
    export class Funcionario extends Pessoa{
        //caracteristicas da classe
        private codFuncionario:number | undefined;
        //reescrever construtor
        constructor(nome:string,cpf:string){
            super(nome,cpf);
        }
        //getters e setters
        getCodFuncionario():number{
            return this.codFuncionario;
        }
        setCodFuncionario(codPaciente:number):void{
            this.codFuncionario = codPaciente;
        }

    }
   
}