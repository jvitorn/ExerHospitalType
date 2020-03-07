namespace hospital{
    export class Funcionario extends Pessoa{
        //caracteristicas da classe
        private codFuncionario:number | undefined;
        //reescrever construtor
        constructor(nome:string,cpf:string,cod:number){
            super(nome,cpf);
            this.codFuncionario = cod;
        }
        //getters e setters
        getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }
        setCodFuncionario(codPaciente:number):void{
            this.codFuncionario = codPaciente;
        }

    }
   
}