import React, { createContext, useState } from "react";

const employeContext = createContext();

const EmpleadoContextProvider = (props) => {
  const [emp, setEmp] = useState([]);
  const [saveEmpl, setSaveEmpl] = useState([{}]);
  const [saveDom, setSaveDom] = useState([{}]);
  const [saveDoms, setSaveDoms] = useState([]);
  const [saveEstado, setSaveEstado] = useState([{}]);
  const [saveEstadoCivil, setSaveEstadoCiviles] = useState([{}]);
  const [saveNacionalidad, setSaveNacionalidad] = useState([]);
  const [saveEstudio, setSaveEstudio] = useState([]);
  const [saveCalle, setSaveCalle] = useState([]);
  const [saveDetpo, setSaveDepto] = useState([])
  const [saveProvincia, setSaveProvincia] =  useState([])
  const [saveLocalidad, setSaveLocalidad] = useState([])
  const [saveBarrio, setSaveBarrio] = useState([])
  const [saveTipoDNI, setSaveTiposDNI] = useState([]);
  const [saveParen, setSaveParen] = useState([]);
  const [disable, setDisable] = useState(true);
  const [saveFamiliar, setSaveFamiliar] = useState([]);
  const [ saveFamiliarSelected ,setSaveFamiliarSelected] = useState([]);
  const [ saveFamSelect ,setSaveFamSelect] = useState([]);

    //#region FUNCIONES DE ESTADOS GENERALES
  function saveEstados(estado) {
    setSaveEstado(estado);
  }

  function saveEmploye(empleado) {
    setSaveEmpl(empleado);
  }
  function saveDomicilio(domicilio) {
    setSaveDom(domicilio);
  }
  function saveDomicilios(domicilios) {
    setSaveDoms(domicilios);
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
  function saveTiposDNI(tiposdni){
    setSaveTiposDNI(tiposdni)
  }
  function saveParentescos(paren){
    setSaveParen(paren);
  }
  function saveDisable(disable){
    setDisable(disable)
  }
  function saveFamiliares(familiar){
    setSaveFamiliar(familiar)
  }
  function saveFamiliarPorEmpleado(param){
    setSaveFamiliarSelected(param)
  }
  function saveFamiliarSelec(familiarSeleccionado){
    setSaveFamSelect(familiarSeleccionado);
  }
  //#endregion
  
  


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
        saveBarrio,
        saveTiposDNI,
        saveTipoDNI,
        saveDoms,
        saveDomicilios,
        saveParentescos,
        saveParen,
        saveDisable,
        disable,
        saveFamiliar,
        saveFamiliares,
        saveFamiliarSelected,
        saveFamiliarPorEmpleado,
        saveFamSelect,
        saveFamiliarSelec
      }}
    >
      {props.children}
    </employeContext.Provider>
  );
};

export { employeContext, EmpleadoContextProvider };
