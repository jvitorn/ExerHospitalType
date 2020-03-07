"use strict";
var hospital;
(function (hospital_1) {
    var hospital = /** @class */ (function () {
        function hospital() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        //getters e setters
        hospital.prototype.getNome = function () {
            return this.nome;
        };
        hospital.prototype.getEnfermeiros = function () {
            return this.enfermeiros;
        };
        hospital.prototype.getMedicos = function () {
            return this.medicos;
        };
        hospital.prototype.getPacientes = function () {
            return this.pacientes;
        };
        //set
        hospital.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        //adds
        hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this.enfermeiros.push(enfermeiro);
        };
        hospital.prototype.addPacientes = function (paciente) {
            this.pacientes.push(paciente);
        };
        hospital.prototype.addMedicos = function (medico) {
            this.medicos.push(medico);
        };
        return hospital;
    }());
    hospital_1.hospital = hospital;
})(hospital || (hospital = {}));
