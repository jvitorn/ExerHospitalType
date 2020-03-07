"use strict";
var hospital;
(function (hospital) {
    hospital.pessoa("joao", "123");
    hospital.funcionario(1, "yami", "123-455-667.00");
    hospital.paciente(1, "asta", "123.456.789-00");
    hospital.medico(1, "Dr. Yuno", "123.456.789-00", 1233, "Dermatologista", "nomem", "codm", "crm", "especialidade");
    hospital.medico(2, "Dr. Noelli", "134.436.749-00", 1234, "Ortopedista", "nomem2", "codm2", "crm2", "especialidade2");
    hospital.medico(3, "Dr. Vanesty", "174.437.729-10", 1235, "Pedologa", "nomem3", "codm3", "crm3", "especialidade3");
})(hospital || (hospital = {}));
