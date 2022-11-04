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

const Familia = () => {
  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI} = useContext(employeContext);
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
  const parentesco = [
    "Primo",
    "Hijo",
    "Padre",
    "Madre",
    "Tio",
    "Sobrino",
    "Nieto",
  ];
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
        <EmployeData />
        <div className="col-xl-6">
          <div className="container-flex">
            <div className="container mt-2">
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
                />
                <InputParentesco
                  nameInput="Parentesco"
                  array={parentesco}
                  placeHolder="Parentesco"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={true}
                  idModal="Parentescos"
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
                />
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
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
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
          />
          <InputDateFlia
            value={
              saveEmpl[0] !== undefined ? saveEmpl[0].fechaEgreso : null
            }
            display={true}
            checked={false}
            nameInput="Fecha Baja"
            idInput="fechaBaja"
          />
          <TextArea inputName="Observaciones" maxLength="255" value="" />
          {/* <ButtonCancelarAceptar 
          // cancelar="" 
          // aceptar=""  /> */}
        </div>
        <TableBasic columns={columns} />
        <ButtonCancelarAceptar cancelar="Quitar" aceptar="Agregar" />
      </div>
    </div>


 <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>


    </div>

  );
};
export default Familia;
