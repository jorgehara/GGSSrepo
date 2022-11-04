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
import { getData } from "../../services/fetchAPI";
import { useState } from "react";

const Familia = () => {
  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI, saveParentescos,saveParen,disable} = useContext(employeContext);

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
    //#endregion
  const tipoDNI = ["D.N.I", "L.E.", "L.C.", "Pasaporte", "Visa"];
  const urlParentesco = "http://54.243.192.82/api/Parentescos";

  useEffect(()=>{
    getData(urlParentesco, saveParentescos);
  },[])
  
  const parentesco = saveParen !== undefined ? saveParen.map((par,i)=> {return(par.nombreParentesco)}) : null;
  console.log(parentesco)
  const paisess = [
    "Argentina",
    "Uruguay",
    "Paraguay",
    "Bolivia",
    "Peru"
  ];
  const columns = [
    "Apellido y Nombre",
    "Tipo",
    "N°Documento",
    "Sexo",
    "Parentesco",
    "Nacimiento",
    "Pais de Origen",
    "Nacionalidad",
    "Estudios",
    "Fecha Baja",
    "Obs",
  ];
  return (
    <div className="Lateral-Derecho">
   
   <div className="container-sm">
      <div className="row border border-3 p-3">
        <EmployeData disabled={disable}/>
        <div className="col-xl-6">
          <div className="container-flex m-0">
            <div className="container ">
              <div className="row">
                <InputChecked
                  value={
                    saveEmpl[0] !== undefined
                      ? `${saveEmpl[0].apellido}, ${saveEmpl[0].nombres}`
                      : null
                  }
                  nameInput="Apellido y Nombres"
                  nameCheck="Fijar"
                  placeHolder="Apellido y Nombres"
                  disabled={disable}
                />
                <InputMultiple
                  optionsDNI={tipoDNI}
                  nameInputDNI="Documento"
                  valueRadio={
                    saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null
                  }
                  valueDNI={
                    saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null
                  }
                  nameFirst="Masculino"
                  nameSecond="Femenino"
                  nameInputRadio=""
                  placeholder="17654987"
                  disable={disable}
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
                  disable={disable}
                />
                <InputDateFlia
                  value={
                    saveEmpl[0] !== undefined
                      ? saveEmpl[0].fechaNacimiento
                      : null
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
              saveEmpl[0] !== undefined ? saveEmpl[0].fechaEgreso : null
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
          <TableBasic columns={columns} disabled={disable}/>
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
