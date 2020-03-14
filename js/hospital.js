"use strict";
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        //getters e setters
        Hospital.prototype.getNome = function () {
            return this.nome;
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this.enfermeiros;
        };
        Hospital.prototype.getMedicos = function () {
            return this.medicos;
        };
        Hospital.prototype.getPacientes = function () {
            return this.pacientes;
        };
        //set
        Hospital.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        //adds
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this.enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this.pacientes.push(paciente);
        };
        Hospital.prototype.addMedicos = function (medico) {
            this.medicos.push(medico);
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
