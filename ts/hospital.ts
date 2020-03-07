namespace hospital{
    export class hospital {
        //caracteristicas da classe
        private nome:string|undefined;
        private enfermeiros:Array<Enfermeiro> = [];
        private medicos:Array<Medico> = [];
        private pacientes:Array<Paciente> = [];  
        //getters e setters
        getNome():string  | undefined{
            return this.nome;
        }
        getEnfermeiros(){
            return this.enfermeiros;
        }
        getMedicos(){
            return this.medicos;
        }
        getPacientes(){
            return this.pacientes;
        }
        //set
        setNome(nome:string):void{
            this.nome = nome;
        }
        //adds
        addEnfermeiro(enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(enfermeiro);
        }
        addPacientes(paciente:Paciente):void{
            this.pacientes.push(paciente);
        }
        addMedicos(medico:Medico){
            this.medicos.push(medico);
        }

    }
}