namespace hospital {
    export function pessoa(nome:string,cpf:string){
    //definindo uma nova pessoa
    const p = new Pessoa(nome,cpf);
    //capturando id
    let mostrarpessoa = document.getElementById('nomepessoa');
    let mostrarpessoacpf = document.getElementById('cpfpessoa');
    //puxando informaçoes da classe e inserindo no id
    mostrarpessoa.textContent = p.getNome();
    mostrarpessoacpf.textContent = p.getCpf();
    }
    export function funcionario(codigo:number,nome:string,cpf:string){
      //definindo uma nova pessoa
    const f = new Funcionario(nome,cpf,codigo);
    //capturando id
    let mostrarfuncionario = document.getElementById('nomefuncionario');
    let mostrarfuncionariocpf = document.getElementById('cpffuncionario');
    let mostrarfuncionariocodigo = document.getElementById('codigofuncionario');
    //puxando informaçoes da classe e inserindo no id
    mostrarfuncionario.textContent = f.getNome();
    mostrarfuncionariocpf.textContent = f.getCpf();  
    mostrarfuncionariocodigo.textContent = f.getCodFuncionario().toString();  
    }
    export function paciente(codigo:number,nome:string,cpf:string,nomepaciente:string,cpfpaciente:string,codigopaciente:string){
      //definindo uma nova pessoa
    const pa = new Paciente(nome,cpf,codigo);
    //capturando id
    let mostrarpaciente = document.getElementById(nomepaciente);
    let mostrarpacientecpf = document.getElementById(cpfpaciente);
    let mostrarpacientecodigo = document.getElementById(codigopaciente);
    //puxando informaçoes da classe e inserindo no id
    mostrarpaciente.textContent = pa.getNome();
    mostrarpacientecpf.textContent = pa.getCpf();  
    mostrarpacientecodigo.textContent = pa.getCodPaciente().toString();  
    }
    export function medico(codigo:number,nome:string,cpf:string,crm:number,especial:string,idnome:string,idcod:string,idcrm:string,idespe:string){
      //definindo uma nova pessoa
    const m = new Medico(nome,cpf,codigo);
    m.setCrm(crm);
    m.setEspecialidade(especial);
    //capturando id
    let mostrarnomeM = document.getElementById(idnome);
    let mostrarcodM = document.getElementById(idcod);
    let mostrarCrm = document.getElementById(idcrm);
    let mostrarEspecialidade = document.getElementById(idespe);
    //puxando informaçoes da classe e inserindo no id
    mostrarnomeM.textContent = m.getNome();
    mostrarCrm.textContent = m.getCrm().toString();
    mostrarcodM.textContent = m.getCodFuncionario().toString();
    mostrarEspecialidade.textContent = m.getEspecialidade();  
    }
    export function enfermeiro(codigo:number,nome:string,cpf:string,coren:number,idnomeE:string,idcodE:string,idcoremE:string){
    //definindo uma nova pessoa
    const e = new Enfermeiro(nome,cpf,codigo);
    e.setCoren(coren);
    //capturando id
    let mostrarnomeE = document.getElementById(idnomeE);
    let mostrarcodE = document.getElementById(idcodE);
    let mostrarCorem = document.getElementById(idcoremE);
    //puxando informaçoes da classe e inserindo no id
    mostrarnomeE.textContent = e.getNome();
    mostrarcodE.textContent = e.getCodFuncionario().toString();  
    mostrarCorem.textContent = e.getCoren().toString();      
    }
    export funcionario hospital()
}