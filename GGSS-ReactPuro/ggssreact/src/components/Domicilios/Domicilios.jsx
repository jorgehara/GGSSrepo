//#region Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeContext } from "../../context/employeContext";
import { ADD_DOMICILIOS } from "../../redux/types/domiciliosTypes";
import { getEmpleados } from "../../services/mockDataDomicilios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TablaDomicilios from "../Tables/TablaDomicilios";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import './Domicilios.css';
import { addBarrios, addCalles, addDepartamentos, addDomicilios, addLocalidades, addProvincias } from "../../redux/actions/fetchActions";
import InputForm from "../Inputs/InputForm/InputForm";

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

  const handleFetch=(url, action )=>{
    dispatch({type: SET_LOADING});
      axios.get(url)
      .then((res)=>{
        dispatch( action(res.data.result));
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
    handleFetch(urlDomicilios, addDomicilios);
    handleFetch(urlCalles, addCalles);
    handleFetch(urlDeptos, addDepartamentos);
    handleFetch(urlProvincias, addProvincias);
    handleFetch(urlLocalidades, addLocalidades);
    handleFetch(urlBarrios, addBarrios);
  },[])
  const generalStateData = useSelector((state)=> state.generalState)



  //#region ------------------------------------------------------------------------------CONTEXT
  const { saveDom,saveDomicilios, saveEmpl, saveCalles,saveCalle,saveDetpos, saveDetpo, saveProvincias, saveProvincia,saveLocalidades, saveLocalidad, saveBarrios, saveBarrio, saveDoms,disable } = useContext(employeContext);


  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  //#endregion
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const calles = generalStateData.calles !== "" && generalStateData.calles !== undefined? generalStateData.calles.map((res) => {return (res.calle)}) : [];
  const pisoDepto = generalStateData.domicilios !== "" && generalStateData.domicilios !== undefined ? generalStateData.domicilios.map(res => {return res.dpto}) : null;
  const deptos = generalStateData.departamentos !== "" && generalStateData.departamentos !== undefined ? generalStateData.departamentos.map(res => {return res.departamento}) : null;
  const provincias = generalStateData.provincias !== "" && generalStateData.provincias !== undefined ? generalStateData.provincias.map(res => {return res.provincia}) : null;
  const localidades = generalStateData.localidades !== "" && generalStateData.localidades !== undefined ? generalStateData.localidades.map(res => {return res.localidad}) : null;
  const barrios = generalStateData.barrios !== "" && generalStateData.barrios !== undefined ? generalStateData.barrios.map(res => {return res.barrio}) : null;  
  const predeterminado = generalStateData.domicilios !== "" && generalStateData.domicilios !== undefined ?  generalStateData.domicilios.map(m => {return(m.predeterminado)}) : null;


  //SELECCIONADOS
  //const provinciaSeleccionada = generalStateData.provincias !== "" && generalStateData.provincias !== undefined ? generalStateData.provincias.filter((provincia)=> provincia.idProvincia === empleadoUno.idProvincia);



  //#endregion
  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)
  const predeterminadoValue = predeterminado !== null ? predeterminado.toString() : "";
  useEffect(()=>{
    getEmpleados().then(res=> saveDomicilios(res))
  },[])
  useEffect(() => {
    setInputValor();
  }, [predeterminadoValue]);
  
  const idEmpleado = empleadoUno[0] !== undefined && empleadoUno.iDempleado;
  
  useEffect(()=>{
    setDomiciliosDelEmpleado(domicilios.filter((dom)=> dom.idEmpleado === empleadoUno[0].iDempleado));
  },[idEmpleado])
  //#endregion


const domicilioEmpleadoSelect = domicilios.filter((dom)=> dom.idEmpleado === (empleadoUno[0] !== undefined && empleadoUno[0].iDempleado));

  const setInputValor = () => {

    if (predeterminado !== null && predeterminado.toString() === "1") {
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
                    array={generalStateData.calles !== null && generalStateData.calles !== "" ? generalStateData.calles : ["calle", "calle"]}
                    propArrayOp="calle"
                    //propArray={calleSelected !== undefined && calleSelected !== null ? calleSelected.toString() : null}
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
                    array={paises !== null ? paises : []}
                    generalState = {domicilios}
                    setGeneralState = {setDomicilios}
                    placeHolder="N° Calle"
                    nameCheck="Fijar"
                    defaultChecked=""
                    display={true}
                    //value={numCalleSelected !== undefined && numCalleSelected !== null ? numCalleSelected.toString() : domiciliosState.inputNumCalle}
                    disabled={disable}
                    idInput="inputNumCalle"
                    nameLabel="N°"
                    onChange={onChange}
                    inputValueState={domiciliosState !== undefined ?  domiciliosState.inputNumCalle : null}
                  />
                </div>
                </div>
                  <InputForm
                    value={
                      pisoDepto !== null ?pisoDepto : []
                    }
                    nameInput="inputPisoCalle"
                    idInput="inputPisoCalle"
                    messageError="Solo puede contener números."
                    placeHolder="Piso Dpto"
                    disabled={disable}
                    generalState={setDomicilios}
                    action={ADD_DOMICILIOS}
                    onChange={onChange}
                    nameLabel="Piso/Dpto/
                    Ofic/Torre"
                    //datosPersonalesValue={
                    //  pisoSelected !== undefined && pisoSelected !== null ? pisoSelected.toString() : null
                    //}
                    numbers={true}
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
                  array={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                  propArrayOp="provincia"
                  //propArray={provinciaSelected !== undefined && provinciaSelected !== null ? provinciaSelected.toString() : null}
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
                  array={generalStateData.departamentos !== undefined && generalStateData.departamentos !== "" ? generalStateData.departamentos : []}
                  propArrayop="departamento"
                  //propArray={provinciaDepartamento !== undefined && provinciaDepartamento !== null ? provinciaDepartamento.toString() : null}
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
                  array={generalStateData.localidades !== undefined && generalStateData.localidades !== "" ? generalStateData.localidades : []}
                  propArrayOp="localidad"
                  //propArray={provinciaLocalidad !== undefined && provinciaLocalidad !== null ?  provinciaLocalidad.toString() : null}
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
                  array={generalStateData.barrios !== undefined && generalStateData.barrios !== "" ? generalStateData.barrios : []}
                  propArrayOp="barrio"
                  //propArray={provinciaBarrio !== undefined && provinciaBarrio !== null ? provinciaBarrio.toString() : null}
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
