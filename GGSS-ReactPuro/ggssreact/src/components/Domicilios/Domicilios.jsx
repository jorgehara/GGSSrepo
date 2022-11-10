//#region Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import { getData } from "../../services/fetchAPI";
import { getEmpleados } from "../../services/mockDataDomicilios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TableBasic1 from "../Tables/TableBasic1";
//#endregion


const Domicilios = () => {

  const [domicilios, setDomicilios ] = useState({
    inputCalleDomicilios : "",
    inputNumCalle : "",
    inputPisoCalle : "",
    inputProvinciaDomicilios : "",
    inputDepartamentosDomicilios : "",
    inputLocalidadesDomicilios : "",
    inputBarriosDomicilios : ""
  })

  const [inputValue, setInputValue] = useState("");
   
  const columns = [
    "Predeterminado",
    "Calle",
    "Número",
    "Barrio",
    "Localidad",
    "Piso/Of/Dpto",
    "Provincia",
    "Obs"
  ];
  
  const paises = ["Argentina", "Uruguay", "Paraguay", "Bolivia", "Peru"];
  
  

  //#region ------------------------------------------------------------------------------URLs
  const urlCalles = "http://54.243.192.82/api/Calles";
  const urlDeptos = "http://54.243.192.82/api/Departamentos";
  const urlProvincias = "http://54.243.192.82/api/Provincias";
  const urlLocalidades = "http://54.243.192.82/api/Localidades";
  const urlBarrios = "http://54.243.192.82/api/Barrios";
  //#endregion
  //#region ------------------------------------------------------------------------------CONTEXT
  const { saveDom,saveDomicilios, saveEmpl, saveCalles,saveCalle,saveDetpos, saveDetpo, saveProvincias, saveProvincia,saveLocalidades, saveLocalidad, saveBarrios, saveBarrio, saveDoms,disable } = useContext(employeContext);
  //#endregion
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const calles = saveCalle !== undefined ? saveCalle.map(res => {return res.calle}) : null;
  const pisoDepto = saveDoms !== undefined ? saveDoms.map(res => {return res.pisoDepto}) : null;
  const deptos = saveDetpo !== undefined ? saveDetpo.map(res => {return res.departamento}) : null;
  const provincias = saveProvincia !== undefined ? saveProvincia.map(res => {return res.provincia}) : null;
  const localidades = saveLocalidad !== undefined ? saveLocalidad.map(res => {return res.localidad}) : null;
  const barrios = saveBarrio !== undefined ? saveBarrio.map(res => {return res.barrio}) : null;
  const pisoSelected = saveDom !== undefined ?  saveDom.map(m=> {return (m.pisoDepto)}) : null;
  const calleSelected = saveDom !== undefined ?  saveDom.map(m=> {return (m.calle)}) : null;
  const numCalleSelected = saveDom !== undefined ?  saveDom.map(m=> {return (m.numCalle)}) : null;
  const provinciaSelected = saveDom !== undefined ?  saveDom.map(m=> {return (m.Provincia)}) : null;
  const provinciaDepartamento = saveDom !== undefined ?  saveDom.map(m=> {return (m.Departamento)}) : null;
  const provinciaLocalidad = saveDom !== undefined ?  saveDom.map(m=> {return (m.Localidad)}) : null;
  const provinciaBarrio = saveDom !== undefined ?  saveDom.map(m=> {return (m.Barrio)}) : null;
  const predeterminado = saveDom !== undefined ?  saveDom.map(m => {return(m.predeterminado)}) : null;
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
  useEffect(()=>{
    getEmpleados().then(res=> saveDomicilios(res))
  },[])
  useEffect(() => {
    setInputValor();
  }, [predeterminado.toString()]);
  //#endregion
 
  function onChange(evt) {
    const name = evt.target.name;
    const value = (evt.target.value);

    let newDomicilios = { ...domicilios };
    newDomicilios[name] = value; 
    setDomicilios(newDomicilios);
  }
  const setInputValor = () => {
    if (predeterminado.toString() === "1") {
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
          <section className="">
            <div className="row">
              <div className="col-xl-6 ">
                <div className="mt-2">
                  <input
                    defaultChecked
                    checked={inputValue}
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
                <div className="row">
                <div className="col-xl-6">
                  <InputCbo
                    value={saveDom[0] !== undefined ? saveDom[0].calle : null}
                    sexo=""
                    nameButton="..."
                    nameLabel="Calle"
                    array={calles}
                    propArray={calleSelected !== undefined ? calleSelected.toString() : null}
                    masculinos=""
                    femeninos=""
                    display={true}
                    idModal="calles"
                    disabled={disable}
                    nameInput="inputCalleDomicilios"
                    idInput="inputCalleDomicilios"
                    onChange={onChange}
                  />
                </div>
                <div className="col-xl-6">
                  <InputNumero
                    nameInput="inputNumCalle"
                    array={paises}
                    placeHolder="N° Calle"
                    nameCheck="Fijar"
                    defaultChecked=""
                    display={true}
                    value={numCalleSelected !== undefined ? numCalleSelected.toString() : null}
                    disabled={disable}
                    idInput="inputNumCalle"
                    nameLabel="N°"
                    onChange={onChange}
                    inputValueState={domicilios !== undefined ?  domicilios.inputNumCalle : null}
                  />
                </div>
                </div>
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom.pisoDepto
                      : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Piso/Dpto/
                          Ofic/Torre"
                          array={pisoDepto}
                  propArray={pisoSelected !== undefined ? pisoSelected.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal=""
                  disabled={disable}
                  nameInput="inputPisoCalle"
                  idInput="inputPisoCalle"
                  onChange={onChange}
                />
              </div>
              <div className="col-xl-6">
                
                  <InputCbo
                  value={
                    saveEmpl[0] !== undefined ? saveEmpl[0].idProvincia : null
                  }
                  sexo=""
                  nameButton="..."
                  nameLabel="Provincia"
                  array={provincias !== undefined ? provincias : null}
                  propArray={provinciaSelected !== undefined ? provinciaSelected.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputProvinciaDomicilios"
                  idInput="inputProvinciaDomicilios"
                  onChange={onChange}
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
                  propArray={provinciaDepartamento !== undefined ? provinciaDepartamento.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputDepartamentosDomicilios"
                  idInput="inputDepartamentosDomicilios"
                  onChange={onChange}
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
                  propArray={provinciaLocalidad !== undefined ?  provinciaLocalidad.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputLocalidadesDomicilios"
                  idInput="inputLocalidadesDomicilios"
                  onChange={onChange}
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
                  propArray={provinciaBarrio !== undefined ? provinciaBarrio.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputBarriosDomicilios"
                  idInput="inputBarriosDomicilios"
                  onChange={onChange}
                />
              </div>
              <ButtonCancelarAceptar cancelar="-" aceptar="+"disabled={disable} />
              <TableBasic1 columns={columns} value={ saveDom !== undefined ? saveDom : null}/>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
