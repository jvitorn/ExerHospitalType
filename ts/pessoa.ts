namespace hospital{
    export class Pessoa{
         //caracteristicas da classe
        private nome:string|undefined;
        private cpf:string|undefined;
        //reescrever construtor
        constructor(nome:string,cpf:string){
            this.nome = nome;
            this.cpf= cpf;
        }
        //Mostrar o valor
        getNome():string  | undefined{
            return this.nome;
        }
        getCpf():string | undefined{
            return this.cpf;
        }


    }
}