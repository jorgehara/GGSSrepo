  //#region Imports
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DOMICILIOS } from "../../redux/types/domiciliosTypes";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputNumero from "../Inputs/InputNumero/InputNumero";
import TablaDomicilios from "../Tables/TablaDomicilios";
import './Domicilios.css';
import { addNewDomicilio, deleteOneDomicilioSelect, saveIdsDom, selectedOption, selectedOptionBarrio, selectedOptionDpto } from "../../redux/actions/domiciliosActions";
import swal from "sweetalert";
import InputFormPiso from "../Inputs/InputForm/InputFormPiso";
import { inputClassCalleDomicilios, inputClassProvinciasDomicilios } from "../../classes/classes";
import { useEffect } from "react";
import { setRefetch } from "../../redux/actions/modalesActions";

//#endregion
const Domicilios = ({tabIndex,handleTabChange, responses, disabled, onChangeValues, formDatosPersonales, setFormDatosPersonales, domiciliosEmpleados, setRefectch, refetch}) => {
  const empleadoUno = useSelector((state)=> state.employeStates.employe);

  const [domicilios, setDomicilios] = useState([]);
  const [checked, setChecked] = useState(false);
  const [ formDomicilios, setFormDomicilios ] = useState(responses["formDomicilios"]);

  const generalStateData = useSelector((state)=> state.generalState)
  const provinciaSelected = useSelector((state)=> state.domiciliosStates.provinciaSelected);
  const departamentoSelected = useSelector((state)=> state.domiciliosStates.departamentoSelected);
  const localidadSelected = useSelector((state)=> state.domiciliosStates.localidadSelected);
  const domicilioDelEmpleado = useSelector((state)=> state.domiciliosStates.idDomicilioSelected);

  const empleadoDomicilio = useSelector((state)=> state.domiciliosStates.domicilioEmpleado);

  
  const listDomicilios = useSelector((state)=> state.generalState.domicilios); 

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
  const urlDomicilios = `http://54.243.192.82/api/sp_DomiciliosGuarda?idDomicilio=0&idCalle=${formDatosPersonales?.inputCalleDomicilios}&Numero=${formDatosPersonales?.inputNumCalle}&idBarrio=${formDatosPersonales?.inputBarriosDomicilios}&Dpto=${formDatosPersonales?.inputDepartamentosDomicilios}&Predeterminado=${formDatosPersonales?.inputPredeterminado}&IdEmpleado=${empleadoUno.iDempleado}&IdEmpleador=1&NewId=0`;



  const dispatch = useDispatch();



 
  const arrayDepartamentos = provinciaSelected && provinciaSelected.payload && generalStateData.departamentos !== undefined && generalStateData.departamentos !== "" ? generalStateData.departamentos.filter((departamento) => departamento.idProvincia === provinciaSelected.payload.idProvincia) : null;


  const arrayLocalidades = departamentoSelected && departamentoSelected.payload && generalStateData.localidades !== undefined && generalStateData.localidades !== "" ? generalStateData.localidades.filter((localidad) => localidad.idDepartamento === departamentoSelected.payload.idDepartamento) : null;


  const arrayBarrios = localidadSelected  && localidadSelected.payload &&  generalStateData.barrios !== undefined && generalStateData.barrios !== "" ? generalStateData.barrios.filter((barrio) => barrio.idLocalidad === localidadSelected.payload.idLocalidad) : null;
  const refetching = useSelector((state)=> state.modalState.refetch);
 

  

 

 

  const sendDataDomicilios= async ()=>{
    try{
    let predeterminadoExiste = empleadoDomicilio && empleadoDomicilio.filter((dom) => dom.predeterminado === true );
    
    if(predeterminadoExiste.length > 0 && (formDatosPersonales?.inputPredeterminado === true)){
      return swal({
        title: "Error",
        text: "No puede tener más de un domicilio Predeterminado",
        icon: "error",
      }) 
    }

    await axios.post(urlDomicilios, {
      headers: {
        'Access-Control-Allow-Origin' : '*', 
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials':true
      }})
          .then((res)=> {            
            if(res.status === 200){ 
              dispatch(addNewDomicilio(res.data))  
              setRefectch(!refetch)
              dispatch(setRefetch(!refetching))
              swal({
                title: "Domicilio Agregado",
                text: "Domicilio agregado con éxito",
                icon: "success",
              })          
            }; 
            setRefectch(!refetch)           
          })
    }catch(err){
      return swal({
        title: "Error",
        text: "Debe completar todos los campos",
        icon: "error",
      })
    }
  }
  const deleteDomicilio = (id)=>{
    dispatch(deleteOneDomicilioSelect(Number(id)))
    dispatch(saveIdsDom(Number(id)));   
  }


  const handleChangePredeterminado=(e, key)=>{
    setChecked(!checked)
    const newResponse = {...formDatosPersonales};
      newResponse[key] = e.target.checked;
      setFormDatosPersonales({
        ...newResponse
      });
  }



  return (
    
      //#region Menú Principal
    
    <div to="/domicilios" className="accordion-item" onClick={handleTabChange(8)} >
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
          
          {
            tabIndex === 8 && <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <section className="">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        name="inputPredeterminado"
                        checked={!checked}
                        value ={formDomicilios?.inputPredeterminado ? formDomicilios?.inputPredeterminado : false  }
                        id="inputPredeterminado"
                        onChange={(e)=>handleChangePredeterminado(e, "inputPredeterminado" )}
                      />
                      <label className="ml-2" htmlFor="predeterminado">
                        Predeterminado
                      </label>
                    </div>{
                      //#endregion
                    }
                    <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <InputCbo
                        clasess={inputClassCalleDomicilios}
                        value={formDomicilios?.inputCalleDomicilios ? formDomicilios?.inputCalleDomicilios : empleadoUno.calle}
                        action={ADD_DOMICILIOS}
                        sexo=""
                        nameButton="..."
                        nameLabel="Calle"                    
                        array={generalStateData.calles !== null && generalStateData.calles !== "" ? generalStateData.calles : ["calle", "calle"]}
                        propArrayOp="calle"
                        propArrayOpFem="calle"
                        propArray={empleadoDomicilio !== undefined && empleadoDomicilio !== null ? empleadoDomicilio.idCalle : null}
                        idSelected={formDomicilios?.inputCalleDomicilios ? formDomicilios?.inputCalleDomicilios : empleadoUno.calle}
                        masculinos=""
                        femeninos=""
                        display={false}
                        idModal="calles"
                        disabled={disabled}
                        nameInput="inputCalleDomicilios"
                        idInput="inputCalleDomicilios"
                        onChange={onChangeValues}
                        valueId="idCalle"
                        obligatorio ={true}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
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
                        disabled={disabled}
                        idInput="inputNumCalle"
                        nameLabel="N°"
                        onChange={onChangeValues}
                        inputValueState={formDomicilios?.inputNumCalle ? formDomicilios?.inputNumCalle : empleadoUno.nroCalle}
                      />
                    </div>
                    </div>
                      <InputFormPiso
                        value={
                          formDomicilios?.inputPisoCalle ? formDomicilios?.inputPisoCalle : empleadoUno.pisoCalle
                        }
                        nameInput="inputPisoCalle"
                        idInput="inputPisoCalle"
                        messageError="Solo puede contener números."
                        placeHolder="Piso Dpto"
                        disabled={disabled}
                        generalState={setDomicilios}
                        action={ADD_DOMICILIOS}
                        onChange={onChangeValues}
                        nameLabel="Piso/Dpto/
                        Ofic/Torre"
                        numbers={true}
                      />
                    
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 mx-4 gy-4 py-2">
                    
                      <InputCbo
                      
                      value={
                        formDomicilios?.inputProvinciaDomicilios ? formDomicilios?.inputProvinciaDomicilios : empleadoUno.provincia
                      }
                      action={ADD_DOMICILIOS}
                      sexo=""
                      nameButton="..."
                      nameLabel="Provincia"
                      array={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                      propArrayOp="provincia"
                      propArrayOpFem="provincia"
                      masculinos=""
                      femeninos=""
                      idSelected={formDomicilios?.inputProvinciaDomicilios ? formDomicilios?.inputProvinciaDomicilios : empleadoUno.provincia}
                      display={false}
                      idModal="pdlb"
                      disabled={disabled}
                      nameInput="inputProvinciaDomicilios"
                      idInput="inputProvinciaDomicilios"
                      onChange={onChangeValues}
                      provinciaAction = {selectedOption}
                      valueId="idProvincia"
                      obligatorio ={true}
                    />
                      <InputCbo
                      value={
                        formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.departamento
                      }
                      action={ADD_DOMICILIOS}
                      sexo=""
                      nameButton="..."
                      nameLabel="Departamento"
                      array={ arrayDepartamentos !== null &&  arrayDepartamentos !== undefined  ? arrayDepartamentos : []}
                      propArrayOp="departamento"
                      propArrayOpFem="departamento"
                      //propArray={provinciaDepartamento !== undefined && provinciaDepartamento !== null ? provinciaDepartamento.toString() : null}
                      masculinos=""
                      femeninos=""
                      idSelected={formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.departamento}
                      display={false}
                      idModal="pdlb"
                      disabled={disabled}
                      nameInput="inputDepartamentosDomicilios"
                      idInput="inputDepartamentosDomicilios"
                      onChange={onChangeValues}
                      provinciaAction = {selectedOptionDpto}
                      valueId="idDepartamento"
                      obligatorio ={true}
                    />
                    <InputCbo
                      value={
                        formDomicilios?.inputLocalidadesDomicilios ? formDomicilios?.inputLocalidadesDomicilios : empleadoUno.localidad
                      }
                      action={ADD_DOMICILIOS}
                      sexo=""
                      nameButton="..."
                      nameLabel="Localidad"
                      array={arrayLocalidades !== undefined && arrayLocalidades !== null ? arrayLocalidades : []}
                      propArrayOp="localidad"
                      propArrayOpFem="localidad"
                      masculinos=""
                      femeninos=""
                      idSelected={formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.localidad}
                      display={false}
                      idModal="pdlb"
                      disabled={disabled}
                      nameInput="inputLocalidadesDomicilios"
                      idInput="inputLocalidadesDomicilios"
                      onChange={onChangeValues}
                      provinciaAction = {selectedOptionBarrio}
                      valueId="idLocalidad"
                      obligatorio ={true}
                    />
                    <InputCbo
                      value={
                        formDomicilios?.inputBarriosDomicilios ? formDomicilios?.inputBarriosDomicilios : empleadoUno.barrio
                      }
                      action={ADD_DOMICILIOS}
                      sexo=""
                      nameButton="..."
                      nameLabel="Barrio"
                      array={arrayBarrios !== undefined && arrayBarrios !== null ? arrayBarrios : []}
                      propArrayOp="barrio"
                      propArrayOpFem="barrio"
                      masculinos=""
                      femeninos=""
                      idSelected={formDomicilios?.inputBarriosDomicilios ? formDomicilios?.inputBarriosDomicilios : empleadoUno.barrio}
                      display={false}
                      idModal="pdlb"
                      disabled={disabled}
                      nameInput="inputBarriosDomicilios"
                      idInput="inputBarriosDomicilios"
                      onChange={onChangeValues}
                      valueId="idBarrio"
                      obligatorio ={true}
                    />
                  </div>
                  <ButtonCancelarAceptar idElimiar={domicilioDelEmpleado} refetch={refetch} setRefectch={setRefectch} cancelar="-" aceptar="+"disabled={disabled} functionSend={sendDataDomicilios} functionDelete={deleteDomicilio}/>
                  <TablaDomicilios 
                    columns={columns} 
                    empleadoSelect={empleadoUno && empleadoUno} 
                    value={ empleadoDomicilio && empleadoDomicilio }
                      refetch={refetch}
                      setRefectch={setRefectch}
                  />

                  
                </div>
              </section>
            </div>
          </div>
          }
          
      
      
     
    </div>
  );
};
export default Domicilios;
