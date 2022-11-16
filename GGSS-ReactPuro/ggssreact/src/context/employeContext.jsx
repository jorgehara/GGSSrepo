import React, { createContext, useState } from "react";
import { useEffect } from "react";

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
  const [estadoCivilSelected, setEstadoCivilSelected] = useState([]);
  //region ESTADOS GENERALES SOLAPAS
  const [datosPersonales, setDatosPersonales] = useState({
    numLegajo : "",
    apellidoInput : "",
    nombresInput : "",
    documentoInput : "",
    inputcuil : "",
    telefonoInput : "",
    estadoCivilInput : "",
    nacionalidadesInput : "",
    dniSelected : "",
    inputSexo : "",
    inputDateNac : "",
    movil : "",
    email : "",
    estadosEmpleados : "",
    estudiosInput : "",
    nameObs : ""
  })

  //LAUTI
  const [ cargos, setCargos] = useState([])
  const [ tareasDesempeñadas, setTareasDesempeñadas ] = useState([])
  const [ parentescos, setParentescos ] = useState([])
  const [ formasDePago, setFormasDePago] = useState([])
  const [ modosContratacion, setModosContratacion] = useState([])
  const [ modosLiquidacion, setModosLiquidacion] = useState([])
  // const [ motivosEgreso, setMotivosEgreso ] = useState([])
  const [ empleadores, setEmpleadores ] = useState([])
   // const [ alicuotas, setAlicuotas ] = useState([])

  // GETS LAUTI
  function saveCargos(cargos) {
    setCargos(cargos)
  }

  function saveTareas(tareas) {
    setTareasDesempeñadas(tareas)
  }

  function saveParentescos(parentescos) {
    setParentescos(parentescos)
  }

  function saveFormasDePago(formas) {
    setFormasDePago(formas)
  }

  function saveModosContratacion(modos) {
    setModosContratacion(modos)
  }

  function saveModosLiquidacion(modos) {
    setModosLiquidacion(modos)
  }

  // function saveMotivosEgreso(motivos) {
  //   setMotivosEgreso(motivos)
  // }

  function saveEmpleadores(emplead) {
    setEmpleadores(emplead)
  }

  // function saveAlicuotas(alicuotas) {
  //   setAlicuotas(alicuotas)
  // }

  // ---------------

    //#region FUNCIONES DE ESTADOS GENERALES
    function saveEstadoCivilSelected(estado){
      setEstadoCivilSelected(estado);
    }
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
  // function saveParentescos(paren){
  //   setSaveParen(paren);
  // }
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
        saveDisable,
        disable,
        saveFamiliar,
        saveFamiliares,
        saveFamiliarSelected,
        saveFamiliarPorEmpleado,
        saveFamSelect,
        saveFamiliarSelec,
        saveCargos,
        cargos,
        saveTareas,
        tareasDesempeñadas,
        parentescos,
        saveParentescos,
        formasDePago,
        saveFormasDePago,
        modosContratacion,
        saveModosContratacion,
        modosLiquidacion,
        saveModosLiquidacion,
        // motivosEgreso,
        // saveMotivosEgreso,
        empleadores,
        saveEmpleadores,
        // alicuotas,
        // saveAlicuotas

      }}
    >
      {props.children}
    </employeContext.Provider>
  );
};

export { employeContext, EmpleadoContextProvider };
