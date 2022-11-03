import React, { createContext, useState } from "react";

const employeContext = createContext();

const EmpleadoContextProvider = (props) => {
  const [emp, setEmp] = useState([]);
  const [saveEmpl, setSaveEmpl] = useState([{}]);
  const [saveDom, setSaveDom] = useState([{}]);
  const [saveEstado, setSaveEstado] = useState([{}]);
  const [saveEstadoCivil, setSaveEstadoCiviles] = useState([{}]);
  const [saveNacionalidad, setSaveNacionalidad] = useState([]);
  const [saveEstudio, setSaveEstudio] = useState([]);
  const [saveCalle, setSaveCalle] = useState([]);
  const [saveDetpo, setSaveDepto] = useState([])
  const [saveProvincia, setSaveProvincia] =  useState([])
  const [saveLocalidad, setSaveLocalidad] = useState([])
  const [saveBarrio, setSaveBarrio] = useState([])

  function saveEstados(estado) {
    setSaveEstado(estado);
  }

  function saveEmploye(empleado) {
    setSaveEmpl(empleado);
  }
  function saveDomicilio(domicilio) {
    setSaveDom(domicilio);
  }

  function saveEstadosCiviles(estadoCiviles) {
    setSaveEstadoCiviles(estadoCiviles);
  }
  function saveNacionalidades(nacionalidad) {
    setSaveNacionalidad(nacionalidad);
  }
  function saveEstudios(estudios){
    setSaveEstudio(estudios);
  }
  function saveCalles(calles){
    setSaveCalle(calles);
  }
  function saveDetpos(deptos){
    setSaveDepto(deptos);
  }
  function saveProvincias(provincias){
    setSaveProvincia(provincias);
  }
  function saveLocalidades(localidades){
    setSaveLocalidad(localidades);
  }
  function saveBarrios(barrios){
    setSaveBarrio(barrios);
  }
  return (
    <employeContext.Provider
      value={{
        emp,
        saveEmpl,
        saveEmploye,
        saveDomicilio,
        saveDom,
        saveEstados,
        saveEstado,
        saveEstadosCiviles,
        saveEstadoCivil,
        saveNacionalidades,
        saveNacionalidad,
        saveEstudio,
        saveEstudios,
        saveCalles,
        saveCalle,
        saveDetpos,
        saveDetpo,
        saveProvincias,
        saveProvincia,
        saveLocalidades,
        saveLocalidad,
        saveBarrios,
        saveBarrio
      }}
    >
      {props.children}
    </employeContext.Provider>
  );
};

export { employeContext, EmpleadoContextProvider };
