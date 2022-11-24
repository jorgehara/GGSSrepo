//#region Imports
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employeContext } from "../../context/employeContext";
import { ADD_DOMICILIOS, ADD_ONEDOMICILIO } from "../../redux/types/domiciliosTypes";
import { getEmpleados } from "../../services/mockDataDomicilios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TablaDomicilios from "../Tables/TablaDomicilios";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import './Domicilios.css';
import { addBarrios, addCalles, addDepartamentos, addDomicilios, addLocalidades, addProvincias } from "../../redux/actions/fetchActions";
import InputForm from "../Inputs/InputForm/InputForm";
import { addNewDomicilio, addOneDomicilio, deleteOneDomicilio, selectedOption, selectedOptionBarrio, selectedOptionDpto } from "../../redux/actions/domiciliosActions";
import swal from "sweetalert";

//#endregion
const Domicilios = () => {

  const [inputValue, setInputValue] = useState("");
  const [domicilios, setDomicilios] = useState([]);
  const [domiciliosDelEmpleado, setDomiciliosDelEmpleado] = useState([]);
  const [ idEmpleado, setIdEmpleado] = useState(0);
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
  const domicilioDelEmpleado1 = useSelector((state)=> state.generalState.domicilios);
 
  console.log(domicilioDelEmpleado1)
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
  const provinciaSelected = useSelector((state)=> state.domiciliosStates.provinciaSelected);
  const departamentoSelected = useSelector((state)=> state.domiciliosStates.departamentoSelected);
  const localidadSelected = useSelector((state)=> state.domiciliosStates.localidadSelected);
  const domicilioDelEmpleado = useSelector((state)=> state.domiciliosStates.idDomicilioSelected);
  const empleadoDomicilio = useSelector((state)=> state.domiciliosStates.domicilioEmpleado);
 
  //#region ------------------------------------------------------------------------------CONTEXT
  const { saveDom,saveDomicilios, saveEmpl,saveCalle, disable } = useContext(employeContext);

  
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  useEffect(()=>{
    setIdEmpleado(empleadoUno.iDempleado)
  },[empleadoUno])
  //#endregion
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  
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
  
  
  useEffect(()=>{
    setDomiciliosDelEmpleado(domicilios.filter((dom)=> dom.idEmpleado === empleadoUno[0].iDempleado));
  },[idEmpleado])
  //#endregion



  const setInputValor = () => {

    if (predeterminado !== null && predeterminado.toString() === "1") {
      setInputValue("checked");
      return;
    }
    setInputValue("");
  };

 
  console.log(domiciliosDelEmpleado);

  // -----------------------------------------------------LLENAR CAMPOS 

 /*  const idEmpleadoPrueba = empleadoUno[0].iDempleado;
  
  generalStateData.domicilios !== "" && generalStateData.domicilios !== undefined && generalStateData.domicilios.filter((domicilio)=> domicilio.idEmpleado === idEmpleadoPrueba ) 
 */
  const arrayDepartamentos = provinciaSelected && provinciaSelected.payload && generalStateData.departamentos !== undefined && generalStateData.departamentos !== "" ? generalStateData.departamentos.filter((departamento) => departamento.idProvincia === provinciaSelected.payload.idProvincia) : null;


  const arrayLocalidades = departamentoSelected && departamentoSelected.payload && generalStateData.localidades !== undefined && generalStateData.localidades !== "" ? generalStateData.localidades.filter((localidad) => localidad.idDepartamento === departamentoSelected.payload.idDepartamento) : null;


  const arrayBarrios = localidadSelected  && localidadSelected.payload &&  generalStateData.barrios !== undefined && generalStateData.barrios !== "" ? generalStateData.barrios.filter((barrio) => barrio.idLocalidad === localidadSelected.payload.idLocalidad) : null;

  useEffect(()=>{
    getDomicilioEmpleado()
  },[empleadoUno])

  function getDomicilioEmpleado(){
    if(generalStateData.domicilios !== "" && empleadoUno !== undefined){
      let domicilioDelEmpleado = generalStateData.domicilios && generalStateData.domicilios.filter((domicilio)=> domicilio.idEmpleado === empleadoUno.iDempleado ) 


      return dispatch(addOneDomicilio(domicilioDelEmpleado));     
    }
  }
  let idDomicilio = generalStateData.domicilios && generalStateData.domicilios[generalStateData.domicilios.length -1] ? ((generalStateData.domicilios[generalStateData.domicilios.length -1].idDomicilio)+1) : null;


  let bodyPetition = {
    "idDomicilio": idDomicilio,
    "idBarrio": domiciliosState.inputBarriosDomicilios,
    "idCalle": domiciliosState.inputCalleDomicilios,
    "numero": domiciliosState.inputNumCalle,
    "dpto": domiciliosState.inputPisoCalle,
    "predeterminado": false,
    "idEmpleado": empleadoUno && empleadoUno.iDempleado,
    "idEmpleador": 11
  }
  console.log(empleadoUno && empleadoUno.iDempleado)
  const sendDataDomicilios= async ()=>{
    debugger;
    try{
      if(domiciliosState && domiciliosState.inputCalleDomicilios !== "" && domiciliosState.inputNumCalle !== "" && domiciliosState.inputPisoCalle !== "" && domiciliosState.inputProvinciaDomicilios !== "" && domiciliosState.inputDepartamentosDomicilios && domiciliosState.inputLocalidadesDomicilios !== "" && domiciliosState.inputBarriosDomicilios !== ""){
          await axios.post(urlDomicilios, bodyPetition)
          .then((res)=> {
            if(res.status === 200){ 
              dispatch(addNewDomicilio(res.data))  
               swal({
                title: "Domicilio Agregado",
                text: "Domicilio agregado con éxito",
                icon: "success",
              })          
            };            
          })
          
          return;
      }
      return swal({
        title: "Error",
        text: "Debe completar todos los campos",
        icon: "error",
      })
    }catch(err){
      return swal({
        title: "Error",
        text: "Debe completar todos los campos",
        icon: "error",
      })
    }
  }
  const deleteDomicilio =async (id)=>{
    
    await axios.delete(`http://54.243.192.82/api/Domicilios/${id}`)
    .then((res)=> {
      if(res.status === 200){  
        console.log(res)
        dispatch(deleteOneDomicilio(Number(id)))
        return swal({
          title: "Ok",
          text: "Domicilio eliminado con éxito",
          icon: "success",
        })
      }
    }    
    )   
  }

  console.log(typeof(domicilioDelEmpleado))
  console.log(empleadoDomicilio)
 


    //Con este domicilio de los empleados, hay que mandarlo a la TableDomicilios y mapearlo para que muestre los datos por la tabla
    //el problema es que el domicilio solo trae los id, por lo que habria que hacer un filter en la lsita de Provincias con el id que nos trae
    // el domicilio (idBarrio) pegar en el getby id de localidades, con ese pegar en el getbyid de departamentos y con ese id pegar en el get by id
    //de provincias para ver que provincias pertenecen a ese domicilio

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
                    propArrayOpFem="calle"
                    propArray={empleadoDomicilio !== undefined && empleadoDomicilio !== null ? empleadoDomicilio.idCalle : null}
                    selectedProp="idCalle"
                    masculinos=""
                    femeninos=""
                    display={true}
                    idModal="calles"
                    disabled={disable}
                    nameInput="inputCalleDomicilios"
                    idInput="inputCalleDomicilios"
                    onChange={onChange}
                    valueId="idCalle"
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
                      domiciliosState !== null ? domiciliosState.inputPisoCalle : []
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
                  sexo=""
                  nameButton="..."
                  nameLabel="Provincia"
                  array={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                  propArrayOp="provincia"
                  propArrayOpFem="provincia"
                  //propArray={provinciaSelected !== undefined && provinciaSelected !== null ? provinciaSelected.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={true}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputProvinciaDomicilios"
                  idInput="inputProvinciaDomicilios"
                  onChange={onChange}
                  provinciaAction = {selectedOption}
                  valueId="provincia"
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
                  array={ arrayDepartamentos !== null &&  arrayDepartamentos !== undefined  ? arrayDepartamentos : []}
                  propArrayOp="departamento"
                  propArrayOpFem="departamento"
                  //propArray={provinciaDepartamento !== undefined && provinciaDepartamento !== null ? provinciaDepartamento.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={false}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputDepartamentosDomicilios"
                  idInput="inputDepartamentosDomicilios"
                  onChange={onChange}
                  provinciaAction = {selectedOptionDpto}
                  valueId="departamento"
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
                  array={arrayLocalidades !== undefined && arrayLocalidades !== null ? arrayLocalidades : []}
                  propArrayOp="localidad"
                  propArrayOpFem="localidad"
                  //propArray={provinciaLocalidad !== undefined && provinciaLocalidad !== null ?  provinciaLocalidad.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={false}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputLocalidadesDomicilios"
                  idInput="inputLocalidadesDomicilios"
                  onChange={onChange}
                  provinciaAction = {selectedOptionBarrio}
                  valueId="localidad"
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
                  array={arrayBarrios !== undefined && arrayBarrios !== null ? arrayBarrios : []}
                  propArrayOp="barrio"
                  propArrayOpFem="barrio"
                  //propArray={provinciaBarrio !== undefined && provinciaBarrio !== null ? provinciaBarrio.toString() : null}
                  masculinos=""
                          femeninos=""
                  display={false}
                  idModal="pdlb"
                  disabled={disable}
                  nameInput="inputBarriosDomicilios"
                  idInput="inputBarriosDomicilios"
                  onChange={onChange}
                  valueId="idBarrio"
                />
              </div>
              <ButtonCancelarAceptar idElimiar={domicilioDelEmpleado} cancelar="-" aceptar="+"disabled={disable} functionSend={sendDataDomicilios} functionDelete={deleteDomicilio}/>
              <TablaDomicilios 
                columns={columns} 
                empleadoSelect={empleadoUno !== undefined ? empleadoUno : null} 
                value={ empleadoDomicilio!== undefined ? empleadoDomicilio : null}
                provincias={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                departamentos={generalStateData.departamentos !== undefined && generalStateData.departamentos !== "" ? generalStateData.departamentos : []}
                localidades={generalStateData.localidades !== undefined && generalStateData.localidades !== "" ? generalStateData.localidades : []}
                barrios={generalStateData.barrios !== undefined && generalStateData.barrios !== "" ? generalStateData.barrios : []}
                calles={generalStateData.calles !== null && generalStateData.calles !== "" ? generalStateData.calles : ["calle", "calle"]}
              />

              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
