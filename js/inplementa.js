"use strict";
var hospital;
(function (hospital) {
    var p = hospital.pessoa("joao", "123");
    var f = hospital.funcionario(1, "Yami", "123-455-667.00");
    var p1 = hospital.paciente(1, "Asta", "123.456.789-00", "nomepaciente1", "cpfpaciente1", "codigopaciente1");
    var p2 = hospital.paciente(2, "Augustus Kira", "133.256.489-10", "nomepaciente2", "cpfpaciente2", "codigopaciente2");
    var p3 = hospital.paciente(3, "Acier Silva", "123.456.482-13", "nomepaciente3", "cpfpaciente3", "codigopaciente3");
    var m1 = hospital.medico(1, "Dr. Yuno", "123.456.789-00", 1233, "Dermatologista", "nomem", "codm", "crm", "especialidade");
    var m2 = hospital.medico(2, "Dr. Noelli", "134.436.749-00", 1234, "Ortopedista", "nomem2", "codm2", "crm2", "especialidade2");
    var m3 = hospital.medico(3, "Dr. Vanesty", "174.437.729-10", 1235, "Pedologa", "nomem3", "codm3", "crm3", "especialidade3");
    var e1 = hospital.enfermeiro(1, "Mereoleona", "123.436.786-05", 3233, "nomeenfermeiro1", "codigoenfermeiro1", "corem1");
    var e2 = hospital.enfermeiro(2, "Leopold", "223.236.286-25", 3273, "nomeenfermeiro2", "codigoenfermeiro2", "corem2");
    var e3 = hospital.enfermeiro(3, "Fuegoleon", "222.446.766-65", 7273, "nomeenfermeiro3", "codigoenfermeiro3", "corem3");
    //definindo hospital
    var h = new hospital.Hospital();
    h.setNome("Hospital Pedro Rangel");
    h.addEnfermeiro(e2);
    h.addEnfermeiro(e3);
    h.addMedicos(m3);
    h.addMedicos(m1);
    h.addPacientes(p2);
    h.addPacientes(p1);
    //vars
    var nome = document.getElementById('nomeH');
    var tbEnfermeiro = document.getElementById('tbEnfermeiro');
    var tbMedicos = document.getElementById("tbMedicos");
    var tbPacientes = document.getElementById("tbPacientes");
    nome.textContent = h.getNome();
    h.getEnfermeiros().forEach(function (h) {
        var enfermeiro = h.getNome();
        if (h instanceof hospital.Enfermeiro) {
            enfermeiro += " - Enfermeiro";
        }
        tbEnfermeiro.innerHTML += "<tr><td>" + enfermeiro + "</td><td>" + h.getCodFuncionario() + "</td></tr>";
    });
    h.getMedicos().forEach(function (h) {
        var medico = h.getNome();
        if (h instanceof hospital.Medico) {
            medico += " - Medico";
        }
        tbMedicos.innerHTML += "<tr><td>" + medico + "</td><td>" + h.getCodFuncionario() + "</td></tr>";
    });
    h.getPacientes().forEach(function (h) {
        var paciente = h.getNome();
        if (h instanceof hospital.Paciente) {
            paciente += " - Paciente";
        }
        tbPacientes.innerHTML += "<tr><td>" + paciente + "</td><td>" + h.getCpf() + "</td></tr>";
    });
})(hospital || (hospital = {}));
