"use strict";
var hospital;
(function (hospital) {
    function pessoa(nome, cpf) {
        //definindo uma nova pessoa
        var p = new hospital.Pessoa(nome, cpf);
        //capturando id
        var mostrarpessoa = document.getElementById('nomepessoa');
        var mostrarpessoacpf = document.getElementById('cpfpessoa');
        //puxando informaçoes da classe e inserindo no id
        mostrarpessoa.textContent = p.getNome();
        mostrarpessoacpf.textContent = p.getCpf();
        return p;
    }
    hospital.pessoa = pessoa;
    function funcionario(codigo, nome, cpf) {
        //definindo uma nova pessoa
        var f = new hospital.Funcionario(nome, cpf, codigo);
        //capturando id
        var mostrarfuncionario = document.getElementById('nomefuncionario');
        var mostrarfuncionariocpf = document.getElementById('cpffuncionario');
        var mostrarfuncionariocodigo = document.getElementById('codigofuncionario');
        //puxando informaçoes da classe e inserindo no id
        mostrarfuncionario.textContent = f.getNome();
        mostrarfuncionariocpf.textContent = f.getCpf();
        mostrarfuncionariocodigo.textContent = f.getCodFuncionario().toString();
        return f;
    }
    hospital.funcionario = funcionario;
    function paciente(codigo, nome, cpf, nomepaciente, cpfpaciente, codigopaciente) {
        //definindo uma nova pessoa
        var pa = new hospital.Paciente(nome, cpf, codigo);
        //capturando id
        var mostrarpaciente = document.getElementById(nomepaciente);
        var mostrarpacientecpf = document.getElementById(cpfpaciente);
        var mostrarpacientecodigo = document.getElementById(codigopaciente);
        //puxando informaçoes da classe e inserindo no id
        mostrarpaciente.textContent = pa.getNome();
        mostrarpacientecpf.textContent = pa.getCpf();
        mostrarpacientecodigo.textContent = pa.getCodPaciente().toString();
        return pa;
    }
    hospital.paciente = paciente;
    function medico(codigo, nome, cpf, crm, especial, idnome, idcod, idcrm, idespe) {
        //definindo uma nova pessoa
        var m = new hospital.Medico(nome, cpf, codigo);
        m.setCrm(crm);
        m.setEspecialidade(especial);
        //capturando id
        var mostrarnomeM = document.getElementById(idnome);
        var mostrarcodM = document.getElementById(idcod);
        var mostrarCrm = document.getElementById(idcrm);
        var mostrarEspecialidade = document.getElementById(idespe);
        //puxando informaçoes da classe e inserindo no id
        mostrarnomeM.textContent = m.getNome();
        mostrarCrm.textContent = m.getCrm().toString();
        mostrarcodM.textContent = m.getCodFuncionario().toString();
        mostrarEspecialidade.textContent = m.getEspecialidade();
        return m;
    }
    hospital.medico = medico;
    function enfermeiro(codigo, nome, cpf, coren, idnomeE, idcodE, idcoremE) {
        //definindo uma nova pessoa
        var e = new hospital.Enfermeiro(nome, cpf, codigo);
        e.setCoren(coren);
        //capturando id
        var mostrarnomeE = document.getElementById(idnomeE);
        var mostrarcodE = document.getElementById(idcodE);
        var mostrarCorem = document.getElementById(idcoremE);
        //puxando informaçoes da classe e inserindo no id
        mostrarnomeE.textContent = e.getNome();
        mostrarcodE.textContent = e.getCodFuncionario().toString();
        mostrarCorem.textContent = e.getCoren().toString();
        return e;
    }
    hospital.enfermeiro = enfermeiro;
    /*export function hospital(){
    //definindo hospital
    const h = new Hospital();
    let nomeH = document.getElementById(nome);
    let enfermeiros = document.getElementById(enfermeiro);
    let medicos = document.getElementById(medico);
    let pacientes = document.getElementById(paciente);
    }*/
})(hospital || (hospital = {}));
