namespace hospital{
    let p = pessoa("joao","123");
    let f = funcionario(1,"Yami","123-455-667.00");
    let p1 = paciente(1,"Asta","123.456.789-00","nomepaciente1","cpfpaciente1","codigopaciente1");
    let p2 = paciente(2,"Augustus Kira","133.256.489-10","nomepaciente2","cpfpaciente2","codigopaciente2");
    let p3 = paciente(3,"Acier Silva","123.456.482-13","nomepaciente3","cpfpaciente3","codigopaciente3");
    let m1 = medico(1,"Dr. Yuno","123.456.789-00",1233,"Dermatologista","nomem","codm","crm","especialidade");
    let m2 = medico(2,"Dr. Noelli","134.436.749-00",1234,"Ortopedista","nomem2","codm2","crm2","especialidade2");
    let m3 = medico(3,"Dr. Vanesty","174.437.729-10",1235,"Pedologa","nomem3","codm3","crm3","especialidade3");
    let e1 = enfermeiro(1,"Mereoleona","123.436.786-05",3233,"nomeenfermeiro1","codigoenfermeiro1","corem1");
    let e2 = enfermeiro(2,"Leopold","223.236.286-25",3273,"nomeenfermeiro2","codigoenfermeiro2","corem2");
    let e3 = enfermeiro(3,"Fuegoleon","222.446.766-65",7273,"nomeenfermeiro3","codigoenfermeiro3","corem3");

    //definindo hospital
    const h = new Hospital();
    h.setNome("Hospital Pedro Rangel");
    h.addEnfermeiro(e2);
    h.addEnfermeiro(e3);
    h.addMedicos(m3);
    h.addMedicos(m1);
    h.addPacientes(p2);
    h.addPacientes(p1);
    //vars
    let nome = document.getElementById('nomeH');
    let tbEnfermeiro = document.getElementById('tbEnfermeiro');
    let tbMedicos = document.getElementById("tbMedicos");
    let tbPacientes = document.getElementById("tbPacientes");
    nome.textContent = h.getNome();
    h.getEnfermeiros().forEach(h=>{
        let enfermeiro = h.getNome();
        if(h instanceof Enfermeiro){
            enfermeiro += " - Enfermeiro";
        }
        tbEnfermeiro.innerHTML += "<tr><td>"+enfermeiro+"</td><td>"+h.getCodFuncionario()+"</td></tr>";
    });
    h.getMedicos().forEach(h=>{
        let medico = h.getNome();
        if(h instanceof Medico){
            medico += " - Medico";
        }
        tbMedicos.innerHTML += "<tr><td>"+medico+"</td><td>"+h.getCodFuncionario()+"</td></tr>";
    });
    h.getPacientes().forEach(h=>{
        let paciente  = h.getNome();
        if(h instanceof Paciente){
            paciente += " - Paciente";
        }
        tbPacientes.innerHTML += "<tr><td>"+paciente+"</td><td>"+h.getCpf()+"</td></tr>";

    });
    
}