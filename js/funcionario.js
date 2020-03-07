"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        //reescrever construtor
        function Funcionario(nome, cpf, cod) {
            var _this = _super.call(this, nome, cpf) || this;
            _this.codFuncionario = cod;
            return _this;
        }
        //getters e setters
        Funcionario.prototype.getCodFuncionario = function () {
            return this.codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codPaciente) {
            this.codFuncionario = codPaciente;
        };
        return Funcionario;
    }(hospital.Pessoa));
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
