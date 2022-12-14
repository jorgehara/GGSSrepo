//#region Imports

import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import DNICboBox from "../Inputs/DNICboBox/DNICboBox";
import InputButton from "../Inputs/InputButton/InputButton";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputDate from "../Inputs/InputDate/InputDate";
import InputFile from "../Inputs/InputFile/InputFile";
import InputForm from "../Inputs/InputForm/InputForm";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import "./DatosPersonales.css";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import Domicilios from "../Domicilios/Domicilios";
import generateCuil from "./funcGenerarCuil.js";
import TextArea from "../Inputs/TextArea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATOS_PERSONALES } from "../../redux/types/datosPersonalesTypes";
import axios from "axios";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import {  addEstados, addEstadosCiviles, addEstudios, addFamiliares, addNumeradores, addPaises, addParentescos, addTiposDocumento } from "../../redux/actions/fetchActions";
import {  inputButtonClasessCUIL } from "../../classes/classes";
import { disableFunctions } from "../../redux/actions/employeActions";
import EmployeData from "../EmployeData/EmployeData";

//#endregion

const DatosPersonales = ({responses, setResponses, cancelar}) => {
  //#region ---------------------------------------------------------ONCHANGE-HANDLER
  const [disableEstado, setDisableEstado] = useState(false);
  const [imagenSended , setImagenSended] = useState("");
  const [empleados, setEmpleados] = useState([]);
  const [image, setImage] = useState("");
  const [ formDatosPersonales, setFormDatosPersonales ] = useState(responses["formDatosPersonales"]);

   const dispatch = useDispatch();


  //#region ------------------------------------------------------REDUX
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const datosPersonalesRedux = useSelector((state)=> state.datosPersonalesStates.formulario)
  const deshabilitar = useSelector((state)=> state.employeStates.disable);
  const datosPersonalesState = useSelector((state)=> state.generalState);
  const numeradores = useSelector((state)=> state.generalState.numeradores);
  const disable = useSelector((state)=> state.generalState.disabled);
  //#endregion

  //#region URLS EMPLEADOS
   const urlEstados = "http://54.243.192.82/api/Estados";
   const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
   const urlPaisesNac = "http://54.243.192.82/api/Paises";
   const urlEstudios = "http://54.243.192.82/api/Estudios";
   const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
   const urlParentescos = "http://54.243.192.82/api/Parentescos"
   const urlFamiliares = "http://54.243.192.82/api/Familiares";
   const urlNumeradores = "http://54.243.192.82/api/Numeradores";
  //#endregion

  
  function onChangeValues(e, key){
      const newResponse = {...formDatosPersonales};
      newResponse[key] = e;
      setFormDatosPersonales({
        ...newResponse
      });
  };


  useEffect(() => {    
      setResponses({
        ...responses,
        formDatosPersonales
      });    
  },[formDatosPersonales]);
  
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
   useEffect(()=>{
    axios.get("http://54.243.192.82/api/Empleados?records=10000")
  .then((res) =>  setEmpleados(res.data.result));
  
  },[])
  
   useEffect(()=>{
     handleFetch( urlEstados, addEstados);
     handleFetch( urlEstadosCiviles,addEstadosCiviles);
     handleFetch( urlPaisesNac,addPaises);
     handleFetch( urlEstudios,addEstudios);
     handleFetch( urlTiposDNI,addTiposDocumento);
     handleFetch( urlParentescos,addParentescos);
     handleFetch( urlFamiliares,addFamiliares);
     handleFetch( urlNumeradores,addNumeradores);
    
   },[deshabilitar])
    

  useEffect(()=>{
    setDisableEstado(false);
  },[formDatosPersonales?.inputSexo])

   function getNumeradorId(tabla){
    return numeradores && numeradores.filter((num)=>{
      return (num.tabla === tabla)
    })
  }

  
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

  
    

  let bodyPostEmploye = {
    "iDempleado" : ((empleados && empleados[empleados.length -1] !== undefined && (empleados[empleados.length -1].iDempleado))+1),
    "legajo": datosPersonalesRedux.numLegajo,
    "apellido": datosPersonalesRedux.apellidoInput,
    "iDtipoDocumento": datosPersonalesRedux.dniSelected,
    "nroDocumento": datosPersonalesRedux.documentoInput,
    "cuil": datosPersonalesRedux.inputCuil,
    "sexo": datosPersonalesRedux.inputSexo,
    "iDestadoCivil": datosPersonalesRedux.estadoCivilInput,
    "iDnacionalidad": datosPersonalesRedux.nacionalidadesInput,
    "fechaNacimiento": datosPersonalesRedux.inputDateNac,
    "iDestudios": datosPersonalesRedux.estudiosInput,
    "fechaIngreso": today,
    "fechaEfectiva": today,
    "iDcategoria": 9,
    "iDcargo": 11,
    "iDtareaDesempeñada": 30,
    "idCentrodeCosto": 26,
    "iDsectorDpto": 1,
    "iDmodoContratacion": 11,
    "iDmodoLiquidacion": 1,
    "iDformadePago": 1,
    "idbanco": 4,
    "nroCtaBanco": "string",
    "cbu": "string",
    "iDlugardePago": 1,
    "iDobraSocial": 1,
    "iDsindicato": 1,
    "fechaEgreso": "2022-11-16T18:04:19.597Z",
    "iDesquema": 1,
    "iDempleador": 1,
    "nombres": datosPersonalesRedux.nombresInput,
    "idEstado": datosPersonalesRedux.estadosEmpleados,
    "rutaFoto": "string",
    "telFijo": datosPersonalesRedux.telefonoInput,
    "acuerdo": 0,
    "neto": 0,
    "idPaisOrigen": datosPersonalesRedux.paisOrigenInput,
    "mail": datosPersonalesRedux.email,
    "telMovil": datosPersonalesRedux.movil,
    "adicObraSocial": true,
    "idConceptoAdicObraSocial": 44,
    "adicAfjp": true,
    "idConceptoAdicAfjp": 48,
    "adicSindicato": true,
    "idConceptoAdicSindicato": 49,
    "tipoCuenta": 0,
    "legajoAnterior": "string",
    "imagen": imagenSended,
    "totalRemuneracion": 0,
    "totalNeto": 0,
    "tieneEmbargos": true,
    "tieneSumarioAdministrativo": true,
    "tieneLicenciaSinGoceHaberes": true,
    "obsEstudios": datosPersonalesRedux.observacionesEstudios,
    "obsFechaIngreso": "string",
    "idAgrupamiento": 1,
    "idDireccion": 1,
    "observacionesAdscripto": "string",
    "idSectorAfectacion": 1,
    "idDireccionAfectacion": 1,
    "obsAfectacion": "string"
  };
 

 const bodyNumeradores = {
  tabla : "Empleados",
  ultimovalor : ((empleados && empleados[empleados.length -1] !== undefined && (empleados[empleados.length -1].iDempleado))+1)
 }
  
  
  //#region ------------------------------------------------------------------------------VALIDACIONES

  const validateNumbers = (e) => {
    if (!/[0-9]/.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar sólo números",
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateNumbersDNI = (e) => {
    if (!/^([0-9]?){8}$/.test(e.key)) {
      swal({
        title: "¡Error!",
        text: `Ingrese número de DNI válido`,
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateTexts = (e) => {
    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar sólo letras",
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateEmails = (e) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar un email válido",
        icon: "error",
      });
      e.preventDefault();
    }
  };
  //#endregion
  
  async function sendDataEmploye(){
    
    if(Object.values(bodyPostEmploye) === "" || Object.values(bodyPostEmploye) === null){
      swal({
        title: "Error",
        text: "Debe llenar todos los campos",
        icon: "error",
      })
      return;
    }
    await axios
    .post('http://54.243.192.82/api/Empleados', bodyPostEmploye)
    .then((res)=> {
      try{
        if(res.status === 200){
          const idEmpleado = getNumeradorId("Empleados");
           axios.put(`http://54.243.192.82/api/Numeradores/${idEmpleado[0].tabla}`, bodyNumeradores)
          .then((res)=> console.log(res));
          return (swal({
            title: "Ok",
            text: "Empleado guardado con exito",
            icon: "success",
          }))
        }
      }catch(ex){
        return (swal({
          title: "Error",
          text: `Error: ${ex}`,
          icon: "error",
        }))
      }  
    }) 
  }

  function cancelButton(){
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    if(formDatosPersonales && formDatosPersonales){
      const inputsArray = Object.entries(formDatosPersonales);

      const clearInputs = inputsArray.map(([key])=> [key, '']);

      const inputsJson = Object.fromEntries(clearInputs);

      setFormDatosPersonales(inputsJson);
    }
    dispatch(disableFunctions(false));
     
  }


  return (
      //#region Menú Principal

    <>
      <EmployeData /><div className="Lateral-Derecho">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Datos Personales
              </button>
            </h4>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <section className="container">
                  <div className="row">
                    <div className="formulario__grupo"></div>
                    <form action="" className="form__datos__personales ">
                      <div className="row row-cols-12">
                        <div className="segunda__columna col-xl-4">
                          {
                            //#endregion
                          }
                          <InputForm
                            value={formDatosPersonales?.numLegajo ? formDatosPersonales?.numLegajo : empleadoUno.legajo}
                            idInput="numLegajo"
                            messageError="Solo puede contener números."
                            placeHolder="N° Legajo"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Legajo"
                            validateNumbers={validateNumbers}
                            numbers={true}
                            cancelar={cancelar} />
                          <InputForm
                            value={formDatosPersonales?.apellidoInput ? formDatosPersonales?.apellidoInput : empleadoUno.apellido}
                            idInput="apellidoInput"
                            messageError="Solo puede contener letras."
                            placeHolder="Ingrese Apellidos"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Apellidos"
                            validateLetters={validateTexts}
                            numbers={false} />
                          <InputForm
                            value={formDatosPersonales?.nombresInput ? formDatosPersonales?.nombresInput : empleadoUno.nombres}
                            action={ADD_DATOS_PERSONALES}
                            idInput="nombresInput"
                            messageError="Solo puede contener letras."
                            placeHolder="Ingrese Nombres"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Nombres"
                            validateLetters={validateTexts}
                            numbers={false} />
                          <DNICboBox
                            value={formDatosPersonales?.documentoInput ? formDatosPersonales?.documentoInput : empleadoUno.nroDocumento}
                            action={ADD_DATOS_PERSONALES}
                            idInput="documentoInput"
                            messageError="Solo puede contener números, sin puntos."
                            placeHolder="23456789"
                            array={datosPersonalesState.tiposDocumento && datosPersonalesState.tiposDocumento !== "" ? datosPersonalesState.tiposDocumento : ["no entro"]}
                            propArrayOp="tipoDocumento"
                            propArrayId="iDtipoDocumento"
                            disabled={disable}
                            nameLabel="D.N.I."
                            onChange={onChangeValues}
                            selectedId="dniSelected"
                            idSelected={formDatosPersonales?.dniSelected && formDatosPersonales?.dniSelected}
                            validateNumbersDNI={validateNumbersDNI} />
                          <InputButton
                            value={formDatosPersonales?.inputCuil ? formDatosPersonales?.inputCuil : empleadoUno.cuil}
                            action={ADD_DATOS_PERSONALES}
                            id="inputCuil"
                            clasess={inputButtonClasessCUIL}
                            nameInput="inputCuil"
                            nameLabel="C.U.I.L"
                            nameButton="Generar"
                            placeholder="##-########-#"
                            idModal="modalCuil"
                            disabled={disable}
                            onChange={onChangeValues}
                            datosPersonalesValue={formDatosPersonales?.inputCuil && formDatosPersonales?.inputCuil}
                            funcionCuil={generateCuil}
                            nroDocumento={formDatosPersonales?.documentoInput && formDatosPersonales?.documentoInput}
                            genre={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                            usaCuil={true}
                            swal={swal} />
                          <InputForm
                            value={formDatosPersonales?.telefonoInput ? formDatosPersonales?.telefonoInput : empleadoUno.telFijo}
                            action={ADD_DATOS_PERSONALES}
                            nameInput="telefonoInput"
                            idInput="telefonoInput"
                            messageError="Solo puede contener números."
                            placeHolder="11352458965"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Telefono"
                            datosPersonalesValue={formDatosPersonales?.telefonoInput && formDatosPersonales?.telefonoInput}
                            validateNumbers={validateNumbers}
                            numbers={true} />
                          <InputCbo
                            action={ADD_DATOS_PERSONALES}
                            sexo={empleadoUno && empleadoUno ? empleadoUno.sexo : formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                            nameButton="..."
                            nameLabel="Estado Civil"
                            array={datosPersonalesState.estadosCiviles && datosPersonalesState.estadosCiviles && datosPersonalesState.estadosCiviles !== "" ? datosPersonalesState.estadosCiviles : ["no entro"]}
                            propArrayOp="masculino"
                            propArrayOpFem="femenino"
                            idSelected={formDatosPersonales?.estadoCivilInput ? formDatosPersonales?.estadoCivilInput : empleadoUno.iDestadoCivil}
                            valueId="idEstadoCivil"
                            display={true}
                            idModal="EstadoCivil"
                            disabled={(formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo === "") ? disableEstado : disable}
                            nameInput="estadoCivilInput"
                            idInput="estadoCivilInput"
                            onChange={onChangeValues} />
                          <InputCbo
                            value={empleadoUno && empleadoUno
                              ? empleadoUno.idNacionalidad
                              : null}
                            action={ADD_DATOS_PERSONALES}
                            sexo={empleadoUno && empleadoUno ? empleadoUno.sexo : formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                            nameButton="..."
                            nameLabel="Nacionalidad"
                            array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : ["Nacionalidad"]}
                            propArrayOp="nacionalidad_masc"
                            propArrayOpFem="nacionalidad_fem"
                            idSelected={formDatosPersonales?.nacionalidadesInput ? formDatosPersonales?.nacionalidadesInput : empleadoUno.iDnacionalidad}
                            valueId="idPais"
                            propArray="Casado"
                            display={true}
                            idModal="nacionalidades"
                            disabled={disable}
                            idInput="nacionalidadesInput"
                            onChange={onChangeValues} />
                        </div>
                        <div className="tercera_columna col-xl-4">
                          <InputCbo
                            value={empleadoUno !== undefined
                              ? empleadoUno.idEstado
                              : null}
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="Estado"
                            array={datosPersonalesState.estados !== undefined && datosPersonalesState.estados !== "" ? datosPersonalesState.estados : []}
                            propArrayOp="nombreEstado"
                            propArrayOpFem="nombreEstado"
                            idSelected={formDatosPersonales?.estadosEmpleados ? formDatosPersonales?.estadosEmpleados : empleadoUno.idEstado}
                            valueId="idEstado"
                            masculinos=""
                            femeninos=""
                            onChange={onChangeValues}
                            display={true}
                            idInput="estadosEmpleados"
                            idModal="estadosEmpleados"
                            disabled={disable} />
                          <InputRadio
                            value={formDatosPersonales?.inputSexo ? formDatosPersonales?.inputSexo : empleadoUno.sexo}
                            action={ADD_DATOS_PERSONALES}
                            nameFirst="Masculino"
                            nameSecond="Femenino"
                            nameLabel="Sexo"
                            idInput="inputSexo"
                            disabled={disable}
                            onChange={onChangeValues}
                            datosPersonalesValue={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo} />
                          <InputDate
                            value={formDatosPersonales?.inputDateNac ? formDatosPersonales?.inputDateNac : empleadoUno.fechaNacimiento}
                            action={ADD_DATOS_PERSONALES}
                            nameInput="Nacimiento"
                            disabled={disable}
                            idInput="inputDateNac"
                            onChange={onChangeValues} />
                          <InputForm
                            value={formDatosPersonales?.movil ? formDatosPersonales?.movil : empleadoUno.movil}
                            action={ADD_DATOS_PERSONALES}
                            nameInput="movil"
                            idInput="movil"
                            messageError="Solo puede contener números."
                            placeHolder="Ingrese su celular"
                            disabled={disable}
                            nameLabel="Celular"
                            onChange={onChangeValues}
                            validateNumbers={validateNumbers}
                            numbers={true} />
                          <InputForm
                            value={formDatosPersonales?.email ? formDatosPersonales?.email : empleadoUno.email}
                            action={ADD_DATOS_PERSONALES}
                            nameInput="email"
                            idInput="email"
                            messageError="Ingrese un email válido."
                            placeHolder="correo@correo.com.ar"
                            disabled={disable}
                            nameLabel="Email"
                            onChange={onChangeValues}
                            validateEmails={validateEmails}
                            numbers={false}
                            email={true} />
                          <InputCbo
                            value={formDatosPersonales?.inputSexo ? formDatosPersonales?.inputSexo : empleadoUno.idPaisdeOrigen}
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="País de Origen"
                            array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : []}
                            propArrayOp="nombrePais"
                            propArrayOpFem="nombrePais"
                            idSelected={formDatosPersonales?.paisOrigenInput ? formDatosPersonales?.paisOrigenInput : empleadoUno.idPaisOrigen}
                            valueId="idPais"
                            masculinos=""
                            femeninos=""
                            display={true}
                            idModal="paisOrigenInput"
                            disabled={disable}
                            idInput="paisOrigenInput"
                            onChange={onChangeValues} />
                          <InputCbo
                            value={formDatosPersonales?.estudiosInput ? formDatosPersonales?.estudiosInput : empleadoUno.idEstudios}
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="Estudios"
                            array={datosPersonalesState.estudios !== undefined && datosPersonalesState.estudios !== "" ? datosPersonalesState.estudios : []}
                            propArrayOp="estudiosNivel"
                            propArrayOpFem="estudiosNivel"
                            idSelected={formDatosPersonales?.estudiosInput ? formDatosPersonales?.estudiosInput : empleadoUno.iDestudios}
                            valueId="iDestudios"
                            masculinos=""
                            femeninos=""
                            display={true}
                            idModal="Estudios"
                            disabled={disable}
                            idInput="estudiosInput"
                            onChange={onChangeValues} />
                          <TextArea
                            inputName="Observaciones"
                            idInput="observacionesEstudios"
                            maxLength="255"
                            value={formDatosPersonales?.observacionesEstudios ? formDatosPersonales?.observacionesEstudios : empleadoUno.obsEstudios}
                            disabled={disable}
                            action={ADD_DATOS_PERSONALES}
                            onChange={onChangeValues} />
                        </div>



                        <div className="col-xl-3">
                          <InputFile
                            inputName="Arrastre su imagen"
                            disabled={disable}
                            imagen={`data:image/jpeg;base64,${image}`}
                            onChange={onChangeValues}
                            idInput="inputImage"
                            action={ADD_DATOS_PERSONALES} />
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <Domicilios formDatosPersonales={formDatosPersonales} setFormDatosPersonales={setFormDatosPersonales} disabled={disable} deshabilitar={deshabilitar} responses={responses} setResponses={setResponses} />
        </div>
        <div className="d-flex justify-content-end">
          <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" disabled={disable} functionSend={sendDataEmploye} functionDelete={cancelButton} />
        </div>
      </div></>
  );
};
export default DatosPersonales;
