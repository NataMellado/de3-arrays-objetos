// importar script inicial de script.js
import { radiologia, traumatologia, dental } from "./data.js";






// Ejercicio 1: agregar horas de atención a Traumatología
const nuevosTraumatologia = [
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE",},
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA",},
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE",},
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE",},
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA",},
  ];
  traumatologia.push(...nuevosTraumatologia);
  
// Agregar filas de datos a la tabla de traumatología
const ejercicio1 = document.querySelector("#tabla-ejercicio1");
for (var i = 0; i < traumatologia.length; i++) {
ejercicio1.innerHTML += `<tr><td>${traumatologia[i].hora}</td><td>${traumatologia[i].especialista}</td><td>${traumatologia[i].paciente}</td><td>${traumatologia[i].rut}</td><td>${traumatologia[i].prevision}</td></tr>`;
}
  





// Ejercicio 2: eliminar el primer y último elemento del arreglo de Radiología
radiologia.shift();
radiologia.pop();

const ejercicio2 = document.querySelector("#tabla-ejercicio2");
for (var i = 0; i < radiologia.length; i++) {
ejercicio2.innerHTML += `<tr><td>${radiologia[i].hora}</td><td>${radiologia[i].especialista}</td><td>${radiologia[i].paciente}</td><td>${radiologia[i].rut}</td><td>${radiologia[i].prevision}</td></tr>`;
}
  
  




// Ejercicio 3:  Imprimir en la página HTML la lista de consultas médicas de Dental
const ejercicio3 = document.querySelector("#ejercicio3");
for (var i =0; i < dental.length; i++) {
    ejercicio3.innerHTML += `<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}</p>`;
}






// Ejercicio 4: Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
const ejercicio4 = document.querySelector("#tabla-ejercicio4");
const pacientes = [...radiologia, ...traumatologia, ...dental];
pacientes.sort((a, b) => a.paciente.localeCompare(b.paciente));
for (var i =0; i < pacientes.length; i++) {
    ejercicio4.innerHTML += `<tr><td>${pacientes[i].paciente}</td><tr>`;
}
 





// Ejercicio 5:  Filtrar pacientes de ISAPRE en la lista de consultas médicas de Dental
const ejercicio5 = document.querySelector("#tabla-ejercicio5");
const pacientesIsapre = dental.filter(paciente => paciente.prevision === "ISAPRE");
for (var i =0; i < pacientesIsapre.length; i++) {
    ejercicio5.innerHTML += `<tr><td>${pacientesIsapre[i].paciente}</td><td>${pacientesIsapre[i].prevision}</td></tr>`;
}






// Ejercicio 6:  Filtrar pacientes de FONASA en la lista de consultas médicas de Traumatología
const ejercicio6 = document.querySelector("#tabla-ejercicio6");
const pacientesFonasa = traumatologia.filter(paciente => paciente.prevision === "FONASA");
for (var i =0; i < pacientesFonasa.length; i++) {
    ejercicio6.innerHTML += `<tr><td>${pacientesFonasa[i].paciente}</td><td>${pacientesFonasa[i].prevision}</td></tr>`;
}
  





// document.write(
  //   `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
  // );
  // document.write(
  //   `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
  // );
  // document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);
  
  // document.write(
  //   `<p>Primera atencion: ${radiologia[0].paciente} - ${
  //     radiologia[0].prevision
  //   } | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
  //     radiologia[radiologia.length - 1].prevision
  //   }.</p>`
  // );
  // document.write(
  //   `<p>Primera atencion: ${traumatologia[0].paciente} - ${
  //     traumatologia[0].prevision
  //   } | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
  //     traumatologia[traumatologia.length - 1].prevision
  //   }.</p>`
  // );
  // document.write(
  //   `<p>Primera atencion: ${dental[0].paciente} - ${
  //     dental[0].prevision
  //   } | Última atención: ${dental[dental.length - 1].paciente} - ${
  //     dental[dental.length - 1].prevision
  //   }.</p>`
  // );
  

