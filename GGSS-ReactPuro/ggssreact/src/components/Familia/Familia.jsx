// import axios from "axios";
import React, { useContext } from "react";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import EmployeData from "../EmployeData/EmployeData";
import InputChecked from "../Inputs/InputChecked/InputChecked";
import InputDate from "../Inputs/InputDate/InputDate";
import InputDateFlia from "../Inputs/InputDateFamilia/InputDateFlia";
import InputMultiple from "../Inputs/InputMultiple/InputMultiple";
import InputParentesco from "../Inputs/InputParentesco/InputParentesco";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";

const Familia = () => {
  const { saveEmpl } = useContext(employeContext);
  const tipoDNI = ["D.N.I", "L.E", "L.C", "Pasaporte", "Visa"];
  const parentesco = [
    "Primo",
    "Hijo",
    "Padre",
    "Madre",
    "Tio",
    "Sobrino",
    "Nieto",
  ];
  const paises = [
    "Argentina",
    "Uruguay",
    "Paraguay",
    "Bolivia",
    "Peru"
  ];
  const columns = [
    "Nombre Apellido",
    "Tipo/N° DNI",
    "Parentesco",
    "Nacimiento",
    "Pais Origen",
    "Nacionalidad",
    "Estudios",
    "Fecha Baja",
    "Obs",
  ];
  return (
    <div className="container-sm">
      <div class="row border border-3 p-3">
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
                  nameInputDNI="Tipo y N° Documento"
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
                />
                <InputParentesco
                  nameInput="Pais de Origen"
                  array={paises}
                  placeHolder="Paises"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={false}
                />
                <InputParentesco
                  nameInput="Nacionalidad"
                  array={paises}
                  placeHolder="Nacionalidad"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <InputParentesco
            nameInput="Estudios"
            array={paises}
            placeHolder="Estudios"
            nameButton="..."
            nameCheck="Fijar"
            checked=""
            display={true}
          />
          <InputDateFlia
            value={
              saveEmpl[0] !== undefined ? saveEmpl[0].fechaNacimiento : null
            }
            display={true}
            checked={false}
            nameInput="Fecha Baja"
          />
          <TextArea inputName="Observaciones" maxLength="255" value="" />
          <ButtonCancelarAceptar cancelar="Quitar" aceptar="Agregar" />
        </div>
        <TableBasic columns={columns} />
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>
    </div>
  );
};
export default Familia;
