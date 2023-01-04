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
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import Domicilios from "../Domicilios/Domicilios";
import generateCuil from "./funcGenerarCuil.js";
import TextArea from "../Inputs/TextArea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATOS_PERSONALES } from "../../redux/types/datosPersonalesTypes";
import axios from "axios";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import { addCargos, addEmpleadores, addEstados, addEstadosCiviles, addEstudios, addFamiliares, addFormasPago, addModosContratacion, addModosLiquidacion, addPaises, addParentescos, addTareasDesempeñadas, addTiposDocumento } from "../../redux/actions/fetchActions";

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
  

  //#endregion

  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)
  


  //#region --- IGNORAR --- EN EL PRIMER RENDER, SE BUSCAN LOS DATOS DE LA API PASANDOLE LA URL Y LOS SETEA CON LA FN "saveEstadosCiviles" EN "saveEstadoCivil". ARRIBA SE MAPEAN
  
  //GET DATA EMPLEADOS
 


  useEffect(()=>{
    setDisableEstado(false);
  },[datosPersonalesRedux.inputSexo])

 
 
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
                          nameLabel="D.N.I."
                          onChange={onChange}
                          selectedId="dniSelected"
                          datosPersonalesValue={
                            datosPersonalesRedux !== undefined
                              ? datosPersonalesRedux.documentoInput
                              : null
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
                          nameInput="inputCuil"
                          nameLabel="C.U.I.L"
                          nameButton="Generar"
                          placeholder="##-########-#"
                          idModal="modalCuil"
                          array={[]}
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
                              : null
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
                          masculinos=""
                          femeninos=""
                          onChange={onChange}
                          display={true}
                          idInput="estadosEmpleados"
                          idModal="estadosEmpleados"
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
                          propArrayOpFem="nombrePais"ulinos=""
                          femeninos=""
                          display={true}
                          idModal="paisOrigenInput"
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
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="Estudios"
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
                          action={ADD_DATOS_PERSONALES}
                          onChange={onChange}
                        />
                      </div>



                      <div className="col-xl-3">
                        <InputFile
                          inputName="Arrastre su imagen"
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
        <Domicilios  />
      </div>
      <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>
    </div>
  );
};
export default DatosPersonales;
