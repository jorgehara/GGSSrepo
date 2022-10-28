import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
// import ButtonLarge from '../Buttons/ButtonLarge'
import InputButton from "../Inputs/InputButton/InputButton";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputForm from "../Inputs/InputForm/InputForm";
import InputParentesco from "../Inputs/InputParentesco/InputParentesco";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";
import TableBasic1 from "../Tables/TableBasic1";
// import TableBasic from '../Tables/TableBasic'

const Domicilios = () => {
  const tipoDNI = ["D.N.I", "L.E", "L.C", "Pasaporte", "Visa"];
  
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
  
  const parentesco = [
    "Primo",
    "Hijo",
    "Padre",
    "Madre",
    "Tio",
    "Sobrino",
    "Nieto",
  ];
  const paises = ["Argentina", "Uruguay", "Paraguay", "Bolivia", "Peru"];

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const url = "http://54.243.192.82/api/Estados";

  const estadosCiviles = ["Soltero", "Casado", "Viudo", "Divorciado"];

  const { saveDom, saveEmpl, saveEstados, saveEstado } =
    useContext(employeContext);

  // console.log(saveDom)
  useEffect(() => {
    setInputValor();
  }, [saveDom[0].predeterminado]);

  const setInputValor = () => {
    if (saveDom.length > 0 && saveDom[0].predeterminado === 1) {
      setInputValue("checked");
      return;
    }
    setInputValue("");
  };
  return (
    <div to="/domicilios" class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Domicilios
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <section
            className=""

            //   "container"
          >
            <div className="row">
              {/* <div className="formulario__grupo">
                <label for="usuario" className="mainABMTitle">
                  Domicilios
                </label>
              </div> */}
              <div className="col-xl-6 ">
                <div className="mt-2">
                  <input
                    checked={inputValue}
                    type="radio"
                    name="predeterminado"
                    id="predeterminado"
                  />
                  <label className="ml-2" htmlFor="predeterminado">
                    Predeterminado
                  </label>
                </div>
                <InputCbo
                  value={saveEmpl[0] !== undefined ? saveEmpl[0].idCalle : null}
                  nameButton="..."
                  nameLabel="Calle"
                  array={saveEstado}
                  display={true}
                />
                <InputCbo
                  value={
                    saveEmpl[0] !== undefined ? saveEmpl[0].idProvincia : null
                  }
                  nameButton="..."
                  nameLabel="Provincia"
                  array={saveEstado}
                  display={true}
                />
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  nameButton="..."
                  nameLabel="Departamento"
                  array={saveEstado}
                  display={true}
                />
                
        <TableBasic1 columns={columns} />
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      
              </div>
              <div className="col-xl-6">
                <InputParentesco
                  nameInput="Número"
                  array={paises}
                  placeHolder="Estudios"
                  nameButton="..."
                  nameCheck="Fijar"
                  checked=""
                  display={true}
                />
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  nameButton="..."
                  nameLabel="Piso/Dpto/
                          Ofic/Torre"
                  array={saveEstado}
                  display={true}
                />
                <InputCbo
                  value={
                  saveDom[0] !== undefined || saveDom[0] === null
                  ? saveDom[0].Provincia
                  : null
                  }
                  nameButton="..."
                  nameLabel="Localidad"
                  array={saveEstado}
                  display={true}
                />
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  nameButton="..."
                  nameLabel="Barrio"
                  array={saveEstado}
                  display={true}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
