// import axios from "axios";
import React, { useContext } from "react";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import EmployeData from "../EmployeData/EmployeData";
import InputChecked from "../Inputs/InputChecked/InputChecked";
// import InputDate from "../Inputs/InputDate/InputDate";
import InputDateFlia from "../Inputs/InputDateFamilia/InputDateFlia";
import InputMultiple from "../Inputs/InputMultiple/InputMultiple";
import InputParentescoOpcions from "../Inputs/InputParentescoOpcions/InputParentescoOpcions";
import InputParentesco from "../Inputs/InputParentesco/InputParentesco";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";
import InputParentescoOpNac from "../Inputs/InputParentescoOpcions/InputParentescoOpNac";
import InputParentescoOpEstudios from "../Inputs/InputParentescoOpcions/InputParentescoOpEstudios";
import { useEffect } from "react";
import { getData, getFamiliarByIdEmpleado, getFamiliarByIdFamiliar } from "../../services/fetchAPI";
import { useState } from "react";

const Familia = () => {
  const { saveEmpl, saveFamiliar, saveEstado,  saveFamiliares,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI, saveParentescos,saveParen,disable,saveFamiliarSelected,saveFamiliarPorEmpleado,saveFamSelect,saveFamiliarSelec} = useContext(employeContext);
  const [familiarSeleccionado, setFamiliarSeleccionado] = useState({});
  const [familia , setFamilia] = useState({
    inputApellidoNombres : "",
    inputCmbDni : "",
    inputNroDni : "",
    inputRadioBtnMasc : false,
    inputRadioBtnFem : true
  });
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
    const estadosCivilesMasculinos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.masculino); }) : []; 
    const estadosCivilesFemeninos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.femenino); }) : [];
    const estadosCiviles = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (`Masculino: ${estado.masculino}, Femenino: ${estado.femenino}`); }) : [];    
    const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_masc); }) : []; 
    const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_fem); }) : []; 
    const nacionalidades = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (`Masculino: ${nac.nacionalidad_masc}, Femenino: ${nac.nacionalidad_fem}`); }) : [];
    const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nombrePais); }) : [];
    const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
    const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO"; 
    const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i)=>{ return (nac.estudiosNivel); }) : [];
    const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
    const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";
    const estadosArray = saveEstado.map((m,i)=>{return (m.nombreEstado)});
    const estadosEmpleado = saveEstado !== undefined ? saveEstado.map(est => {return (est.nombreEstado)}) : null;
    const idEstadoSelec = saveEmpl[0] !== undefined ? saveEmpl[0].idEstado : 0;
    const estadoSEleccionado = saveEstado !== undefined ? saveEstado.find(est => est.idEstado === idEstadoSelec) : "ARGENTINO"; 
    const tiposDNI = saveTipoDNI !== undefined ? saveTipoDNI.map(tdni=> {return tdni.tipoDocumento}) : null;
    const idEmpleadoSelected = saveEmpl[0] !== undefined ? saveEmpl[0].iDempleado  : 0;
    const parentesco = saveParen !== undefined ? saveParen.map((par,i)=> {return(par.nombreParentesco)}) : null;
    const parentSelected = familiarSeleccionado!== undefined ? familiarSeleccionado.iDparentesco : null;
    const parenSeleccionado = saveParen !== undefined ? saveParen.find((par)=> par.iDparentesco === parentSelected) : null;
    //#endregion
 
  //#region ------------------------------------------------------------------------------URLs
    const tipoDNI = ["D.N.I", "L.E.", "L.C.", "Pasaporte", "Visa"];
  const urlParentesco = "http://54.243.192.82/api/Parentescos";
  const urlFamiliares = "http://54.243.192.82/api/Familiares";
  //#endregion
  //#region ------------------------------------------------------------------------------USEEFFECTS
  useEffect(()=>{
    getData(urlParentesco, saveParentescos);
  },[])
  useEffect(()=>{
    getData(urlFamiliares, saveFamiliares);
  },[])
  useEffect(()=>{
    getFamiliarByIdEmpleado(saveFamiliar, idEmpleadoSelected).then(res=> saveFamiliarPorEmpleado(res));

  },[idEmpleadoSelected])
  useEffect(()=>{

  },[parenSeleccionado])
  //#endregion
  //#region ------------------------------------------------------------------------------Objetos de props
  const propsRadioButton = {
    idCboDni : "inputCmbDni",
    idNroDni : "inputNroDni",
    idRadioBtnMasc : "inputRadioBtnMasc",
    idRadioBtnFem : "inputRadioBtnFem"
  }
  //#endregion
  
  const columns = [
    "Apellido y Nombre",
    "Tipo",
    "N°Documento",
    "Sexo",
    "Parentesco",
    "Nacimiento",
    "País Origen",
    "Nacionalidad",
    "Estudios",
    "Fecha Baja",
    "No Deducir",
    "Incluir Cuota",
    "Obs"
  ];
  function onSelect( saveFamiliar, idFamiliar) {
    getFamiliarByIdFamiliar(saveFamiliar, idFamiliar).then((res) => {
      setFamiliarSeleccionado(res);
    });
  }
  function onChange(evt) {
    const name = evt.target.name;
    const value = (evt.target.value);
    let newFamilia = { ...familia };
    newFamilia[name] = value;
    setFamilia(newFamilia);
  }
  console.log(familia.inputRadioBtnMasc)
  console.log(familia.inputRadioBtnFem)
  return (
    <div className="Lateral-Derecho">
  <div className="container-fluid">
      <div className="row border border-3">
        <EmployeData disabled={disable}/>
        <div className="col-xl-6">
          <div className="container-fluid m-0">
            <div className="container-fluid">
              <div className="row">
                <InputChecked
                  value={familiarSeleccionado === undefined ? 
                    (saveEmpl[0] !== undefined
                      ? `${saveEmpl[0].apellido}, ${saveEmpl[0].nombres}`
                      : null) : familiarSeleccionado.apellidoyNombres
                  }
                  nameLabel="Apellido y Nombres"
                  nameCheck="Fijar"
                  placeHolder="Apellido y Nombres"
                  disabled={disable}
                  idInput="inputApellidoNombres"
                  nameInput="inputApellidoNombres"
                  onChange={onChange}
                />
                <InputMultiple
                  optionsDNI={tipoDNI}
                  nameInputDNI="Documento"
                  valueRadio={
                    familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null) : familiarSeleccionado.sexo
                  }
                  valueDNI={
                    familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null) : familiarSeleccionado.nroDocumento
                  }
                  nameFirst="Masculino"
                  nameSecond="Femenino"
                  nameInputRadio=""
                  placeholder="17654987"
                  disable={disable}
                  propsRadioButton={propsRadioButton}
                  onChange={onChange}
                  datosFamiliaValue1 = {familia.inputCmbDni !== undefined ? familia.inputCmbDni : null}
                  datosFamiliaRadio1 = {familia.inputRadioBtnMasc !== undefined ? familia.inputRadioBtnMasc : null}
                  datosFamiliaRadio2 = {familia.inputRadioBtnFem !== undefined ? familia.inputRadioBtnFem : null}
                />
                <InputParentesco
                  nameInput="Parentesco"
                  array={parentesco!== undefined ? parentesco : null}
                  placeHolder="Parentesco"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={true}
                  idModal="Parentescos"
                  propArray={parenSeleccionado !== undefined ? parenSeleccionado.nombreParentesco : null}
                  disable={disable}
                />
                <InputDateFlia
                  value={
                    familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined
                      ? saveEmpl[0].fechaNacimiento
                      : null) : familiarSeleccionado.fechaNacimiento
                  }
                  display={true}
                  checked={false}
                  nameInput="Nacimiento"
                  idInput="fechaNac"
                  disable={disable}
                />
                <InputParentescoOpEstudios
                  nameInput="Estudios"
                  array={estudios}
                  propArray={estudioSelect !== undefined ? estudioSelect.estudiosNivel : "Cursos"}
                  placeHolder="Estudios"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={true}
                  idModal="Estudios"
                  disable={disable}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          
          <InputParentescoOpcions
                  nameInput="Pais de Origen"
                  array={paises}
                  placeHolder="Paises"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={false}
                  propArray={paisSelected !== undefined ? paisSelected.nombrePais : ""}
                  idModal="paises"
                  disable={disable}
                />
                <InputParentescoOpNac
                  nameInput="Nacionalidad"
                  array={nacionalidades !== undefined ? nacionalidades : "Nacionalidad"}
                  placeHolder="Nacionalidad"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={false}
                  masculinos={nacionalidadesMasculinas}
                  femeninos={nacionalidadesFemeninas}
                  sexo={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null}
                  propArray="ARGENTINO"
                  idModal="nacionalidades"
                  disable={disable}
                />
          <InputDateFlia
            value={
              familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined ? saveEmpl[0].fechaEgreso : null) : familiarSeleccionado.fBaja
            }
            display={true}
            checked={false}
            nameInput="Fecha Baja"
            idInput="fechaBaja"
            disable={disable}
          />
            <TextArea inputName="Observaciones" maxLength="255" value="" disabled={disable}/>
          
          
          {/* <ButtonCancelarAceptar 
          // cancelar="" 
          // aceptar=""  /> */}
        </div>
        <div className="d-flex flex-row align-items-center">
          <TableBasic onSelect={onSelect} columns={columns} disabled={disable} array={saveFamiliarSelected !== undefined && saveFamiliarSelected !== null ? saveFamiliarSelected : []} parentescos={saveParen!== undefined ? saveParen : null} seleccionado={saveFamSelect}/>
          <ButtonCancelarAceptar cancelar="-" aceptar="+" disabled={disable}/>            
        </div>
      </div>
    </div>


 <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>


    </div>

  );
};
export default Familia;
