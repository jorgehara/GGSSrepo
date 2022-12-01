//#region Imports

import React, { useContext, useEffect, useReducer, useState } from "react";
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
import { addCargos, addEmpleadores, addEstados, addEstadosCiviles, addEstudios, addFamiliares, addFormasPago, addModosContratacion, addModosLiquidacion, addPaises, addParentescos, addTareasDesempeñadas, addTiposDocumento } from "../../redux/actions/fetchActions";
import { classesEstudios } from "./Classes";
import { inputButtonClasess, inputButtonClasessCUIL } from "../../classes/classes";

//#endregion

const DatosPersonales = () => {
  //#region ---------------------------------------------------------ONCHANGE-HANDLER
  const [datosPersonales, setDatosPersonales] = useState({});
  const [disableEstado, setDisableEstado] = useState(false);
  const [imagenSended , setImagenSended] = useState("");
  const [empleados, setEmpleados] = useState([]);
  //#region ------------------------------------------------------------------------------ONCHANGE-HANDLER
  
  //#endregion
  //const [state, dispatch] = useReducer(datosPersonalesReducer, initialState);
  const dispatch = useDispatch();


  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }


  //#region ------------------------------------------------------REDUX
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const datosPersonalesRedux = useSelector((state)=> state.datosPersonalesStates.formulario)
 

  //#endregion
  //------------------------------------------------------CONTEXT
  const {
    saveEmpl,
    saveEstado,
    saveEstadoCivil,
    saveNacionalidad,
    saveEstudio,
    saveTipoDNI,
    disable, 
  } = useContext(employeContext);
  //--------------------------------------------------------------------ESTADOS
  const [image, setImage] = useState("");

  //#region ------------------------------------------------------------------------------URLs (Luego cambiar a archivos Js)
  
  //#region URLS EMPLEADOS
  const urlEstados = "http://54.243.192.82/api/Estados";
  const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
  const urlPaisesNac = "http://54.243.192.82/api/Paises";
  const urlEstudios = "http://54.243.192.82/api/Estudios";
  const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
  const urlCargos = "http://54.243.192.82/api/Cargos"
  const urlTareasDesempeñadas = "http://54.243.192.82/api/TareasDesempeñadas"
  const urlParentescos = "http://54.243.192.82/api/Parentescos"
  const urlFormasDePago = "http://54.243.192.82/api/FormasdePagos"
  const urlModosContratacion = "http://54.243.192.82/api/ModosContratacion"
  const urlModosLiquidacion = "http://54.243.192.82/api/ModosLiquidacion"
  const urlBancos = "http://54.243.192.82/api/Bancos"
  const urlFamiliares = "http://54.243.192.82/api/Familiares";
  //#endregion
 


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
    handleFetch( urlEstados, addEstados);
    handleFetch( urlEstadosCiviles,addEstadosCiviles);
    handleFetch( urlPaisesNac,addPaises);
    handleFetch( urlEstudios,addEstudios);
    handleFetch( urlTiposDNI,addTiposDocumento);
    handleFetch( urlCargos,addCargos);
    handleFetch( urlTareasDesempeñadas,addTareasDesempeñadas);
    handleFetch( urlParentescos,addParentescos);
    handleFetch( urlFormasDePago,addFormasPago);
    handleFetch( urlModosContratacion,addModosContratacion);
    handleFetch( urlModosLiquidacion,addModosLiquidacion);
    handleFetch( urlFamiliares,addFamiliares);
  },[])
 const datosPersonalesState = useSelector((state)=> state.generalState);
  //#endregion


  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  
  //Para Estado Civil
  const idEstadoCivil= saveEstadoCivil!== undefined ? saveEstadoCivil.filter((ec)=> {return( ec.masculino === datosPersonalesRedux.estadoCivilInput || ec.femenino === datosPersonalesRedux.estadoCivilInput)}) : null;
  const idSeleccionadoEC = idEstadoCivil.map((ec)=> {return(ec.idEstadoCivil)})
  //Para Estudios
  const idEstudiuos= saveEstudio!== undefined ? saveEstudio.filter((ec)=> {return( ec.estudiosNivel === datosPersonalesRedux.estudiosInput)}) : null;
  const idEsudiosSelec = idEstudiuos.map((ec)=> {return(ec.iDestudios)})

  //Para Estados
  const idEstados= saveEstado!== undefined ? saveEstado.filter((ec)=> {return( ec.nombreEstado === datosPersonalesRedux.estadosEmpleados)}) : null;
  const idEstadoSelecs = idEstados.map((ec)=> {return(ec.idEstado)})

  //Para PaisOrigen
  const idPaisO= saveNacionalidad!== undefined ? saveNacionalidad.filter((ec)=> {return( ec.nombrePais === datosPersonalesRedux.paisOrigenInput)}) : null;
  const idPaisOSelecs = idPaisO.map((ec)=> {return(ec.idPais)})
   //Para Nacionalidad
   const idNacionalidad= saveNacionalidad!== undefined ? saveNacionalidad.filter((ec)=> {return( ec.nacionalidad_masc === datosPersonalesRedux.nacionalidadesInput || ec.nacionalidad_fem === datosPersonalesRedux.nacionalidadesInput )}) : null;
   const idNacionalidadSelecs = idNacionalidad.map((ec)=> {return(ec.idPais)})
  //Para Tipo DNI
  const idTipoDNI= saveTipoDNI!== undefined ? saveTipoDNI.filter((ec)=> {return( ec.tipoDocumento === datosPersonalesRedux.dniSelected)}) : null;
  const idTiposDNI = idTipoDNI.map((ec)=> {return(ec.iDtipoDocumento)})
  

  
  const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
  const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO";
  const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
  const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";
  const idEstadoSelec = saveEmpl[0] !== undefined ? saveEmpl[0].idEstado : 0;
  const estadoSEleccionado = saveEstado !== undefined ? saveEstado.find(est => est.idEstado === idEstadoSelec) : "ARGENTINO";
  const idTipoSelected = saveEmpl[0] !== undefined ? saveEmpl[0].iDtipoDocumento : 0;
  const dniSelectedOption = saveTipoDNI !== undefined ? saveTipoDNI.find(tipo => tipo.iDtipoDocumento === idTipoSelected) : null;
  const numDoc = saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null;

  //#endregion

  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)
  


  //#region --- IGNORAR --- EN EL PRIMER RENDER, SE BUSCAN LOS DATOS DE LA API PASANDOLE LA URL Y LOS SETEA CON LA FN "saveEstadosCiviles" EN "saveEstadoCivil". ARRIBA SE MAPEAN
  
  //GET DATA EMPLEADOS
 

  //#endregion

  useEffect(() => {
    setImageEmpleado();
  }, [saveEmpl[0].obsFechaIngreso]);

  useEffect(()=>{
    setDisableEstado(false);
  },[datosPersonalesRedux.inputSexo])

  function setImageEmpleado() {
    saveEmpl[0].obsFechaIngreso !== undefined && setImage(saveEmpl[0].obsFechaIngreso);
  }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    function textToBin(text) {
      return (
        Array
          .from(text)
          .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
          .map(bin => '0'.repeat(8 - bin.length) + bin )
          .join(' ')
      );
    }
    useEffect(()=>{
      setImagenSended(textToBin(datosPersonalesRedux.inputImage));
    },[datosPersonalesRedux.inputImage])

  let bodyPostEmploye = {
    "iDempleado" : ((empleados && empleados[empleados.length -1] !== undefined && (empleados[empleados.length -1].iDempleado))+1),
    "legajo": datosPersonalesRedux.numLegajo,
    "apellido": datosPersonalesRedux.apellidoInput,
    "iDtipoDocumento": Number(idTiposDNI[0]),
    "nroDocumento": datosPersonalesRedux.documentoInput,
    "cuil": datosPersonalesRedux.inputCuil,
    "sexo": datosPersonalesRedux.inputSexo,
    "iDestadoCivil": Number(idSeleccionadoEC[0]),
    "iDnacionalidad": Number(idNacionalidadSelecs[0]),
    "fechaNacimiento": datosPersonalesRedux.inputDateNac,
    "iDestudios": Number(idEsudiosSelec[0]),
    "fechaIngreso": today,
    "fechaEfectiva": today,
    "iDcategoria": 5,
    "iDcargo": 11,
    "iDtareaDesempeñada": 30,
    "idCentrodeCosto": 9,
    "iDsectorDpto": 1,
    "iDmodoContratacion": 11,
    "iDmodoLiquidacion": 1,
    "iDformadePago": 1,
    "idbanco": 1,
    "nroCtaBanco": "string",
    "cbu": "string",
    "iDlugardePago": 1,
    "iDobraSocial": 1,
    "iDsindicato": 1,
    "fechaEgreso": "2022-11-16T18:04:19.597Z",
    "iDesquema": 24,
    "iDempleador": 21,
    "nombres": datosPersonalesRedux.nombresInput,
    "idEstado": Number(idEstadoSelecs),
    "rutaFoto": "string",
    "telFijo": datosPersonalesRedux.telefonoInput,
    "acuerdo": 0,
    "neto": true,
    "idPaisOrigen": Number(idPaisOSelecs[0]),
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
    "idDireccion": 9,
    "observacionesAdscripto": "string",
    "idSectorAfectacion": 1,
    "idDireccionAfectacion": 9,
    "obsAfectacion": "string"
  };
 
  //#endregion

  //#region ------------------------------------------------------------------------------VALIDACIONES

  //#endregion
  useEffect(()=>{
    axios.get("http://54.243.192.82/api/Empleados?records=10000")
  .then((res) =>  setEmpleados(res.data.result));
  
  },[])
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
  // console.log(saveEmpl[0] !== undefined ? saveEmpl[0] : null);
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
    //aca hacer otro post a http://54.243.192.82/api/EmpleadosDomicilio pasandole por body el idEmpleado y idDomicilio y si es predeterminado
    //que el predeterminado viene del state del domicilio
  }
  return (
    //#region Menú Principal
    <div className="Lateral-Derecho">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h4 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              // aria-expanded="true"
              // aria-controls="collapseOne"
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
                          value={
                            empleadoUno !== undefined || empleadoUno === null
                              ? empleadoUno.legajo
                              : datosPersonalesRedux.numLegajo
                          }
                          nameInput="numLegajo"
                          idInput="numLegajo"
                          messageError="Solo puede contener números."
                          placeHolder="N° Legajo"
                          disabled={disable}
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          onChange={onChange}
                          nameLabel="Legajo"
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ?datosPersonalesRedux.numLegajo
                              : "N° Legajo"
                          }
                          validateNumbers={validateNumbers}
                          numbers={true}
                        />
                        <InputForm
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.apellido
                              : datosPersonalesRedux.apellidoInput
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="apellidoInput"
                          idInput="apellidoInput"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Apellidos"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Apellidos"
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.apellidoInput
                              : "Apellido"
                          }
                          validateLetters={validateTexts}
                          numbers={false}
                        />
                        <InputForm
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.nombres
                              : datosPersonalesRedux.nombresInput
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="nombresInput"
                          idInput="nombresInput"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Nombres"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Nombres"
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.nombresInput
                              : "Nombres"
                          }
                          validateLetters={validateTexts}
                          numbers={false}
                        />
                        <DNICboBox
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.nroDocumento
                              : datosPersonalesRedux.documentoInput
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="documentoInput"
                          idInput="documentoInput"
                          messageError="Solo puede contener números, sin puntos."
                          placeHolder="23456789"
                          array={datosPersonalesState.tiposDocumento !== undefined && datosPersonalesState.tiposDocumento !== "" ? datosPersonalesState.tiposDocumento : ["no entro"]}
                          propArrayOp="tipoDocumento"
                          disabled={disable}
                          nameLabel="D.N.I."
                          onChange={onChange}
                          selectedId="dniSelected"
                          propArray={
                            dniSelectedOption !== undefined
                              ? dniSelectedOption.tipoDocumento
                              : null
                          }
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.documentoInput
                              : numDoc
                          }
                          datosPersonalesValue2={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.dniSelected
                              : "D.N.I"
                          }
                          validateNumbersDNI={validateNumbersDNI}
                        />


                        <InputButton
                          value={
                            empleadoUno !== undefined ? empleadoUno.cuil : datosPersonales.inputCuil
                          }
                          generalState={datosPersonalesRedux !== undefined && datosPersonalesRedux}
                          action={ADD_DATOS_PERSONALES}
                          id="inputCuil"
                          clasess={inputButtonClasessCUIL}
                          nameInput="inputCuil"
                          nameLabel="C.U.I.L"
                          nameButton="Generar"
                          placeholder="##-########-#"
                          idModal="modalCuil"
                          array={[]}
                          disabled={disable}
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.inputCuil
                              : "N° CUIL"
                          }
                          funcionCuil={generateCuil}
                          nroDocumento={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.documentoInput
                              : numDoc
                          }
                          genre={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.inputSexo
                              : null
                          }
                          usaCuil={true}
                          swal={swal}
                        />



                        <InputForm
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.telFijo
                              : datosPersonalesRedux.telefonoInput
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="telefonoInput"
                          idInput="telefonoInput"
                          messageError="Solo puede contener números."
                          placeHolder="11352458965"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Telefono"
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.telefonoInput
                              : "N° Teléfono"
                          }
                          validateNumbers={validateNumbers}
                          numbers={true}
                        />
                        <InputCbo
                          value={
                            saveEstadoCivil !== undefined
                              ? saveEstadoCivil.idEstadoCivil
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          sexo={
                            empleadoUno !== undefined ? empleadoUno.sexo : datosPersonalesRedux !== undefined && datosPersonalesRedux.inputSexo
                          }
                          nameButton="..." 
                          nameLabel="Estado Civil"
                          array={datosPersonalesState.estadosCiviles !== undefined && datosPersonalesState.estadosCiviles !== "" ? datosPersonalesState.estadosCiviles : ["no entro"]}
                          propArrayOp="masculino"
                          propArrayOpFem="femenino"
                          propArray="Casado"
                          display={true}
                          idModal="EstadoCivil"
                          disabled={((datosPersonalesRedux !== undefined || datosPersonalesRedux.inputSexo === undefined) ||datosPersonalesRedux.inputSexo === null || datosPersonalesRedux.inputSexo === "") ? disableEstado : !disable}
                          nameInput="estadoCivilInput"
                          idInput="estadoCivilInput"
                          onChange={onChange}
                        />
                        <InputCbo
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.idNacionalidad
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          sexo={
                            empleadoUno !== undefined ? empleadoUno.sexo : datosPersonalesRedux !== undefined && datosPersonalesRedux.inputSexo
                          }
                          nameButton="..."
                          nameLabel="Nacionalidad"
                          array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : ["Nacionalidad"]}
                          propArrayOp="nacionalidad_masc"
                          propArrayOpFem="nacionalidad_fem"
                          propArray="Casado"
                          display={true}
                          idModal="nacionalidades"
                          disabled={disable}
                          idInput="nacionalidadesInput"
                          onChange={onChange}
                        />
                      </div>
                      <div className="tercera_columna col-xl-4">
                        <InputCbo
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.idEstado
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          sexo=""
                          nameButton="..."
                          nameLabel="Estado"
                          array={datosPersonalesState.estados !== undefined && datosPersonalesState.estados !== "" ? datosPersonalesState.estados : []}
                          propArrayOp="nombreEstado"
                          propArrayOpFem="nombreEstado"
                          propArray={estadoSEleccionado !== undefined ? estadoSEleccionado.nombreEstado : ""}
                          masculinos=""
                          femeninos=""
                          onChange={onChange}
                          display={true}
                          idInput="estadosEmpleados"
                          idModal="estadosEmpleados"
                          disabled={disable}
                        />
                        <InputRadio
                          value={
                            empleadoUno!== undefined ? empleadoUno.sexo : datosPersonalesRedux.inputSexo
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameFirst="Masculino"
                          nameSecond="Femenino"
                          nameLabel="Sexo"
                          idInput="inputSexo"
                          disabled={disable}
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.inputSexo
                              : ""
                          }
                        />
                        <InputDate
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.fechaNacimiento
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="Nacimiento"
                          disabled={disable}
                          idInput="inputDateNac"
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.inputDateNac
                              : null
                          }
                        />
                        <InputForm
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.telMovil
                              : datosPersonalesRedux.movil
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="movil"
                          idInput="movil"
                          messageError="Solo puede contener números."
                          placeHolder="Ingrese su celular"
                          disabled={disable}
                          nameLabel="Celular"
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.movil
                              : "Movil"
                          }
                          validateNumbers={validateNumbers}
                          numbers={true}
                        />
                        <InputForm
                          value={
                            empleadoUno !== undefined ? empleadoUno.mail : datosPersonalesRedux.email
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          nameInput="email"
                          inputId="email"
                          messageError="Ingrese un email válido."
                          placeHolder="correo@correo.com.ar"
                          disabled={disable}
                          nameLabel="Email"
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.email
                              : "Email"
                          }
                          validateEmails={validateEmails}
                          numbers={false}
                          email={true}
                        />
                        <InputCbo
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.idPaisdeOrigen
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          sexo=""
                          nameButton="..."
                          nameLabel="País de Origen"
                          array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : []}
                          propArrayOp="nombrePais"
                          propArrayOpFem="nombrePais"
                          propArray={
                            paisSelected !== undefined
                              ? paisSelected.nombrePais
                              : ""
                          }
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="paisOrigenInput"
                          disabled={disable}
                          idInput="paisOrigenInput"
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.estadosEmpleados
                              : "Email"
                          }
                        />
                        <InputCbo
                          value={
                            empleadoUno !== undefined
                              ? empleadoUno.idEstudios
                              : null
                          }
                          generalState={datosPersonales}
                          action={ADD_DATOS_PERSONALES}
                          sexo=""
                          nameButton="..."
                          nameLabel="Estudios"
                          array={datosPersonalesState.estudios !== undefined && datosPersonalesState.estudios !== "" ? datosPersonalesState.estudios : []}
                          propArrayOp="estudiosNivel"
                          propArrayOpFem="estudiosNivel"
                          propArray={
                            estudioSelect !== undefined
                              ? estudioSelect.estudiosNivel
                              : "Cursos"
                          }
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="Estudios"
                          disabled={disable}
                          idInput="estudiosInput"
                          onChange={onChange}
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.estudiosInput
                              : "Email"
                          }
                        />
                        <TextArea
                          inputName="Observaciones"
                          idInput="observacionesEstudios"
                          maxLength="255"
                          value={datosPersonales !== undefined && datosPersonales.observacionesEstudios}
                          disabled={disable}
                          action={ADD_DATOS_PERSONALES}
                          onChange={onChange}
                        />
                      </div>



                      <div className="col-xl-3">
                        <InputFile
                          inputName="Arrastre su imagen"
                          disabled={disable}
                          imagen={`data:image/jpeg;base64,${image}`}
                          onChange={onChange}
                          idInput="inputImage"
                          action={ADD_DATOS_PERSONALES}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Domicilios disabled={disable} />
      </div>
      <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" disabled={disable} functionSend={sendDataEmploye}/>
      </div>
    </div>
  );
};
export default DatosPersonales;
