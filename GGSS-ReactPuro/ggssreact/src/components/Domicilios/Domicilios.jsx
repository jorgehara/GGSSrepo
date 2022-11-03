//#region Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import { getData } from "../../services/fetchAPI";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TableBasic1 from "../Tables/TableBasic1";
//#endregion


const Domicilios = () => {

   
  const columns = [
    "Predeterminado",
    "Calle",
    "Número",
    "Barrio",
    "Localidad",
    "Piso/Of/Dpto",
  ];
  
  const paises = ["Argentina", "Uruguay", "Paraguay", "Bolivia", "Peru"];

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  //#region ------------------------------------------------------------------------------URLs
  const urlCalles = "http://54.243.192.82/api/Calles";
  const urlDeptos = "http://54.243.192.82/api/Departamentos";
  const urlProvincias = "http://54.243.192.82/api/Provincias";
  const urlLocalidades = "http://54.243.192.82/api/Localidades";
  const urlBarrios = "http://54.243.192.82/api/Barrios";
  //#endregion
  
  //#region ------------------------------------------------------------------------------CONTEXT
  const { saveDom, saveEmpl, saveEstados, saveEstado, saveCalles,saveCalle,saveDetpos, saveDetpo, saveProvincias, saveProvincia,saveLocalidades, saveLocalidad, saveBarrios, saveBarrio } =
    useContext(employeContext);
  //#endregion

  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)
  useEffect(()=>{
    getData(urlCalles, saveCalles);
  },[])
  useEffect(()=>{
    getData(urlDeptos, saveDetpos);
  },[])
  useEffect(()=>{
    getData(urlProvincias, saveProvincias);
  },[])
  useEffect(()=>{
    getData(urlLocalidades, saveLocalidades);
  },[])
  useEffect(()=>{
    getData(urlBarrios, saveBarrios);
  },[])
  useEffect(() => {
    setInputValor();
  }, [saveDom[0].predeterminado]);
  //#endregion
 
   //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const calles = saveCalle !== undefined ? saveCalle.map(res => {return res.calle}) : null;
  const deptos = saveDetpo !== undefined ? saveDetpo.map(res => {return res.departamento}) : null;
  const provincias = saveProvincia !== undefined ? saveProvincia.map(res => {return res.provincia}) : null;
  const localidades = saveLocalidad !== undefined ? saveLocalidad.map(res => {return res.localidad}) : null;
  const barrios = saveBarrio !== undefined ? saveBarrio.map(res => {return res.barrio}) : null;
  //#endregion

  const setInputValor = () => {
    if (saveDom.length > 0 && saveDom[0].predeterminado === 1) {
      setInputValue("checked");
      return;
    }
    setInputValue("");
  };

  return (
    
      //#region Menú Principal
    
    <div to="/domicilios" className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
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
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
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
                    defaultChecked={inputValue}
                    type="checkbox"
                    name="predeterminado"
                    id="predeterminado"
                  />
                  <label className="ml-2" htmlFor="predeterminado">
                    Predeterminado
                  </label>
                </div>{
                  //#endregion
                }
                <InputCbo
                  value={saveDom[0] !== undefined ? saveDom[0].calle : null}
                  sexo=""
                  nameButton="..."
                  nameLabel="Calle"
                  array={calles}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
                 <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Piso/Dpto/
                          Ofic/Torre"
                          array={[]}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
              </div>
              <div className="col-xl-6">
                <InputNumero
                  nameInput="Número"
                  array={paises}
                  placeHolder="N° Calle"
                  nameCheck="Fijar"
                  defaultChecked=""
                  display={true}
                />
                  <InputCbo
                  value={
                    saveEmpl[0] !== undefined ? saveEmpl[0].idProvincia : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Provincia"
                  array={provincias !== undefined ? provincias : null}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
                  <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Departamento"
                  array={deptos !== undefined ? deptos : null}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
                <InputCbo
                  value={
                  saveDom[0] !== undefined || saveDom[0] === null
                  ? saveDom[0].Provincia
                  : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Localidad"
                  array={localidades !== undefined ? localidades : null}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Barrio"
                  array={barrios !== undefined ? barrios : null}
                  propArray="Casado"
                  masculinos=""
                          femeninos=""
                  display={true}
                />
              </div>
              <TableBasic1 columns={columns} />
              <ButtonCancelarAceptar cancelar="Quitar" aceptar="Agregar" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
