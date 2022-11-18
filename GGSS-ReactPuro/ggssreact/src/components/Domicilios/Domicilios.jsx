//#region Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeContext } from "../../context/employeContext";
import { ADD_DOMICILIOS } from "../../redux/types/domiciliosTypes";
import { getData } from "../../services/fetchAPI";
import { getEmpleados } from "../../services/mockDataDomicilios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TablaDomicilios from "../Tables/TablaDomicilios";
import TableBasic1 from "../Tables/TableBasic1";
import { AXIOS_ERROR, AXIOS_SUCCESS, SET_LOADING } from "../../redux/types/fetchTypes";
import './Domicilios.css';

//#endregion
const Domicilios = () => {

  const [inputValue, setInputValue] = useState("");
  const [domicilios, setDomicilios] = useState([]);
  const [domiciliosDelEmpleado, setDomiciliosDelEmpleado] = useState([]);
  const columns = [
    "Predeterminado",
    "Calle",
    "Barrio",
    "Localidad",
    "Piso/Of/Dpto",
    "Provincia",
  ];
  
  const paises = ["Argentina", "Uruguay", "Paraguay", "Bolivia", "Peru"];
  //#region ------------------------------------------------------------------------------REDUX
  const dispatch = useDispatch();
  const handleFetch=(url, name )=>{
    dispatch({type: SET_LOADING});
      axios.get(url)
      .then((res)=>{
        dispatch({type: AXIOS_SUCCESS, payload :{ name: name, value : res.data.result}});
      })
      .catch((err)=>{
        dispatch({type:AXIOS_ERROR});
      })
   }
  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }
  const domiciliosState = useSelector((state)=> state.domiciliosStates)
  
  //#endregion
  

  //#region ------------------------------------------------------------------------------URLs
  const urlDomicilios = "http://54.243.192.82/api/Domicilios";
  const urlCalles = "http://54.243.192.82/api/Calles";
  const urlDeptos = "http://54.243.192.82/api/Departamentos";
  const urlProvincias = "http://54.243.192.82/api/Provincias";
  const urlLocalidades = "http://54.243.192.82/api/Localidades";
  const urlBarrios = "http://54.243.192.82/api/Barrios";
  //#endregion

  useEffect(()=>{
    handleFetch(urlDomicilios, "domicilios");
    handleFetch(urlCalles, "calles");
    handleFetch(urlDeptos, "departamentos");
    handleFetch(urlProvincias, "provincias");
    handleFetch(urlLocalidades, "localidades");
    handleFetch(urlBarrios, "barrios");
  },[])
  const generalStateData = useSelector((state)=> state.generalState)

  console.log(generalStateData)

  //#region ------------------------------------------------------------------------------CONTEXT
  const { saveDom,saveDomicilios, saveEmpl, saveCalles,saveCalle,saveDetpos, saveDetpo, saveProvincias, saveProvincia,saveLocalidades, saveLocalidad, saveBarrios, saveBarrio, saveDoms,disable } = useContext(employeContext);


  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  //#endregion
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const calles = generalStateData.calles !== undefined ? generalStateData.data.calles.map((res) => {return (res.calle)}) : null;
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
    getEmpleados().then(res=> saveDomicilios(res))
  },[])
  useEffect(() => {
    setInputValor();
  }, [predeterminado.toString()]);
  
  const idEmpleado = empleadoUno[0] !== undefined && empleadoUno.iDempleado;
  
  useEffect(()=>{
    setDomiciliosDelEmpleado(domicilios.filter((dom)=> dom.idEmpleado === empleadoUno[0].iDempleado));
  },[idEmpleado])
  //#endregion


const domicilioEmpleadoSelect = domicilios.filter((dom)=> dom.idEmpleado === (empleadoUno[0] !== undefined && empleadoUno[0].iDempleado));

  const setInputValor = () => {

    if (predeterminado.toString() === "1") {
      setInputValue("checked");
      return;
    }
    setInputValue("");
  };

  //para CAlles:
  let calleEmpleado = saveCalle!== undefined && domiciliosDelEmpleado[0] !== undefined &&  saveCalle.filter(((item)=>{ return(item.idCalle === domiciliosDelEmpleado[0].idCalle)}));


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
                    generalState = {domicilios}
                    setGeneralState = {setDomicilios}
                    action={ADD_DOMICILIOS}
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
                    action={ADD_DOMICILIOS}
                    array={paises}
                    generalState = {domicilios}
                    setGeneralState = {setDomicilios}
                    placeHolder="N° Calle"
                    nameCheck="Fijar"
                    defaultChecked=""
                    display={true}
                    value={numCalleSelected !== undefined ? numCalleSelected.toString() : domiciliosState.inputNumCalle}
                    disabled={disable}
                    idInput="inputNumCalle"
                    nameLabel="N°"
                    onChange={onChange}
                    inputValueState={domiciliosState !== undefined ?  domiciliosState.inputNumCalle : null}
                  />
                </div>
                </div>
                <InputCbo
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom.pisoDepto
                      : null
                  }
                  action={ADD_DOMICILIOS}
                  generalState = {domicilios}
                  setGeneralState = {setDomicilios}
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
                  action={ADD_DOMICILIOS}
                  generalState = {domicilios}
                  setGeneralState = {setDomicilios}
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
                  action={ADD_DOMICILIOS}
                  generalState = {domicilios}
                  setGeneralState = {setDomicilios}
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
                  action={ADD_DOMICILIOS}
                  generalState = {domicilios}
                  setGeneralState = {setDomicilios}
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
                  action={ADD_DOMICILIOS}
                  generalState = {domicilios}
                  setGeneralState = {setDomicilios}
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
              <TablaDomicilios columns={columns} value={ domicilioEmpleadoSelect!== undefined ? domicilioEmpleadoSelect : null}/>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
