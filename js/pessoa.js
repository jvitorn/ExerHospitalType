"use strict";
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        //reescrever construtor
        function Pessoa(nome, cpf) {
            this.nome = nome;
            this.cpf = cpf;
        }
        //Mostrar o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
