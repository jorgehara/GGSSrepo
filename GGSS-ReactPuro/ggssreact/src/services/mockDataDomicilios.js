const domicilios = [
    {
        "idDomicilio" : 1,
        "iDempleado" : 1,
        "predeterminado" : 1,
        "calle" : "Córdoba",
        "numCalle" : 251,
        "pisoDepto" : "1A",
        "Departamento" : "Santa María",
        "Localidad" : "Alta Gracia",
        "Barrio" : "Norte",
        "Provincia" : "Córdoba",
        "Obs" : "Domicilio de residencia"
    },
    {
        "idDomicilio" : 2,
        "iDempleado" : 2,
        "predeterminado" : 0,
        "calle" : "Catamarca",
        "numCalle" : 25321,
        "pisoDepto" : "-",
        "Departamento" : "Santa María",
        "Localidad" : "Alta Gracia",
        "Barrio" : "Norte",
        "Provincia" : "Córdoba",
        "Obs" : "Domicilio de residencia"
    },
    {
        "idDomicilio" : 3,
        "iDempleado" : 3,
        "predeterminado" : 1,
        "calle" : "San Martín",
        "numCalle" : 451,
        "pisoDepto" : "2B",
        "Departamento" : "Santa María",
        "Localidad" : "Alta Gracia",
        "Barrio" : "Norte",
        "Provincia" : "Córdoba",
        "Obs" : "Domicilio de residencia"
    },
    {
        "idDomicilio" : 4,
        "iDempleado" : 4,
        "predeterminado" : 0,
        "calle" : "Córdoba",
        "numCalle" : 551,
        "pisoDepto" : "1",
        "Departamento" : "Santa María",
        "Localidad" : "Alta Gracia",
        "Barrio" : "Norte",
        "Provincia" : "Córdoba",
        "Obs" : "Domicilio de residencia"
    },
    {
        "idDomicilio" : 5,
        "iDempleado" : 5,
        "predeterminado" : 1,
        "calle" : "Córdoba",
        "numCalle" : 1251,
        "pisoDepto" : "1A",
        "Departamento" : "Santa María",
        "Localidad" : "Alta Gracia",
        "Barrio" : "Norte",
        "Provincia" : "Córdoba",
        "Obs" : "Domicilio de residencia"
    }
]

export function getEmpleados(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(domicilios), 2000);
    });
}

export function getDomicilioEmpleado(idEmpleado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(domicilios.filter(d=> d.iDempleado === idEmpleado)),0);
    });
}

export function getEmployeByLegajo( legajo){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(domicilios.filter(e=> e.legajo.includes(legajo))),0);
}); 
}

export function getEmployeByName( name){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(domicilios.filter(e=> e.apellido.includes(name) || e.nombres.includes(name))),0);
}); 
}