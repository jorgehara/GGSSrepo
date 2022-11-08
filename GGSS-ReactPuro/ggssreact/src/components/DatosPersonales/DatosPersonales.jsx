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
import TextArea from "../Inputs/TextArea/TextArea";
import Navbar from "../Navbar/Navbar";
import "./DatosPersonales.css";
import { employeContext } from "../../context/employeContext";
import axios from "axios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import Domicilios from "../Domicilios/Domicilios";
import { getData } from "../../services/fetchAPI";
import generateCuil from "./funcGenerarCuil.js";

  //#endregion

const DatosPersonales = () => {






  const optionsDNI = ["D.N.I.", "L.C.", "L.E."];
  const [datosPersonales, setDatosPersonales] = useState({
    numLegajo : "",
    apellidoInput : "",
    nombresInput : "",
    documentoInput : "",
    inputcuil : "",
    telefonoInput : "",
    estadoCivilInput : "",
    nacionalidadesInput : "",
    dniSelected : "",
    inputSexo : "",
    inputDateNac : "",
    movil : "",
    email : "",
    estadosEmpleados : "",
    estudiosInput : ""
  })
  console.log(datosPersonales.apellidoInput);
  console.log(datosPersonales.nombresInput);
  console.log(datosPersonales.documentoInput);
  console.log(datosPersonales.inputcuil);
  console.log(datosPersonales.telefonoInput);
  console.log(datosPersonales.estadoCivilInput);
  console.log(datosPersonales.nacionalidadesInput);
  console.log(datosPersonales.dniSelected);
  console.log(datosPersonales.inputDateNac);

  //#region ------------------------------------------------------------------------------ONCHANGE-HANDLER
  function onChange(evt) {
    const name = evt.target.name;
    const value = (evt.target.value);

    let newDatosPersonales = { ...datosPersonales };
    newDatosPersonales[name] = value;
    setDatosPersonales(newDatosPersonales);
  }
  //#endregion
  //------------------------------------------------------------------------------CONTEXT
  const { saveEmpl, saveEstados, saveEstado,  saveEstadosCiviles,  saveEstadoCivil, saveNacionalidades, saveNacionalidad ,saveEstudios, saveEstudio, saveTipoDNI, saveTiposDNI, saveDisable, disable} = useContext(employeContext);
  //------------------------------------------------------------------------------ESTADOS
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  //#region ------------------------------------------------------------------------------URLs (Luego cambiar a archivos Js)
  const url = "http://54.243.192.82/api/Estados";
  const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
  const urlPaisesNac = "http://54.243.192.82/api/Paises";
  const urlEstudios = "http://54.243.192.82/api/Estudios";
  const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
  //#endregion

  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const estadosCivilesMasculinos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.masculino); }) : []; 
  const estadosCivilesFemeninos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.femenino); }) : [];
  const estadosCiviles = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (`Masculino: ${estado.masculino}, Femenino: ${estado.femenino}`); }) : [];    
  const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_masc); }) : []; 
  const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_fem); }) : []; 
  const nacionalidades = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (`Masculino: ${nac.nacionalidad_masc}, Femenino: ${nac.nacionalidad_fem}`); }) : [];
  const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nombrePais); }) : [];
  const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
  const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO"; 
  const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i)=>{ return (nac.estudiosNivel); }) : [];
  const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
  const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";
  const estadosArray = saveEstado.map((m,i)=>{return (m.nombreEstado)});
  const estadosEmpleado = saveEstado !== undefined ? saveEstado.map(est => {return (est.nombreEstado)}) : null;
  const idEstadoSelec = saveEmpl[0] !== undefined ? saveEmpl[0].idEstado : 0;
  const estadoSEleccionado = saveEstado !== undefined ? saveEstado.find(est => est.idEstado === idEstadoSelec) : "ARGENTINO"; 
  const tiposDNI = saveTipoDNI !== undefined ? saveTipoDNI.map(tdni=> {return tdni.tipoDocumento}) : null;
  const idTipoSelected = saveEmpl[0] !== undefined ? saveEmpl[0].iDtipoDocumento : 0;
  const dniSelectedOption = saveTipoDNI !== undefined ? saveTipoDNI.find(tipo => tipo.iDtipoDocumento === idTipoSelected) : null;
  const numDoc = saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null;
 
  //#endregion
  
  //#region ------------------------------------------------------------------------------USEEFFECTS (Queda mejorarlos para que no sean muchos)

  useEffect(() => {
    getData(url, saveEstados);
    }, []);
  useEffect(() => {
    getData(urlEstadosCiviles, saveEstadosCiviles);    
  }, [ ]);
  useEffect(() => {
    getData(urlPaisesNac, saveNacionalidades);
  }, [ ]);
  useEffect(()=>{
    getData(urlEstudios, saveEstudios);
  },[])
  useEffect(()=>{
    getData(urlTiposDNI, saveTiposDNI);
  },[])
  useEffect(()=>{

  },[disable])
  useEffect(() => {
    setImageEmpleado()
  }, [saveEmpl[0].obsFechaIngreso]);

    function setImageEmpleado(){
      saveEmpl[0].obsFechaIngreso !== undefined && setImage(saveEmpl[0].obsFechaIngreso);
    }
  
  //#endregion
  
  //#region ------------------------------------------------------------------------------VALIDACIONES


  const validateNumbers = (e) => {
    if (!/[0-9]/.test(e.key)) {
      setError("Ingrese sólo números");
      e.preventDefault();
    }
  };
  const validateNumbersTelefono = (e) => {
    if (!/[0-9]/.test(e.key)) {
      setError("Ingrese sólo números");
      e.preventDefault();
    }
  };
  const validateNumbersDNI = (e) => {
    if (!/^([0-9]?){8}$/.test(e.key)) {
      setError("Ingrese sólo números");
      swal({
        title: "¡Error!",
        text: `${error}`,
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateTexts = (e) => {
    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
      setError("Ingrese sólo letras y espacios");
      e.preventDefault();
    }
  };
  const validateEmails = (e) => {
    if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
      setError("Ingrese sólo letras y espacios");
      e.preventDefault();
    }
  };
  //#endregion
  console.log(saveEmpl[0] !== undefined ? saveEmpl[0] : null);
  
  return (
    //#region Menú Principal
    <div className="Lateral-Derecho">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Datos Personales
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <section className="container">
                <div className="row">
                  <div className="formulario__grupo">

                  </div>
                  <form action="" className="form__datos__personales ">
                    <div className="row row-cols-12">
                      <div className="segunda__columna col-xl-4">
                        {
                          //#endregion

                        }
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined || saveEmpl[0] === null
                              ? saveEmpl[0].legajo
                              : null
                          }
                          nameInput="numLegajo"
                          idInput="numLegajo"
                          messageError="Solo puede contener números."
                          placeHolder="N° Legajo"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Legajo"
                          datosPersonalesValue={datosPersonales.numLegajo !== undefined ? datosPersonales.numLegajo : "N° Legajo"}
                        />
                        <InputForm
                          value={

                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].apellido
                              : null
                          }
                          nameInput="apellidoInput"
                          idInput="apellidoInput"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Apellidos"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Apellidos"
                          datosPersonalesValue={datosPersonales.apellidoInput !== undefined ? datosPersonales.apellidoInput : "Apellido"}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nombres
                              : null
                          }
                          nameInput="nombresInput"
                          idInput="nombresInput"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Nombres"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Nombres"
                          datosPersonalesValue={datosPersonales.nombresInput !== undefined ? datosPersonales.nombresInput : "Nombres"}
                        />
                        <DNICboBox
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nroDocumento
                              : null
                          }
                          nameInput="documentoInput"
                          idInput="documentoInput"
                          messageError="Solo puede contener números, sin puntos."
                          placeHolder="23456789"
                          array={tiposDNI}
                          disabled={disable}
                          nameLabel="D.N.I."
                          onChange={onChange}
                          selectedId="dniSelected"
                          propArray={dniSelectedOption !== undefined ? dniSelectedOption.tipoDocumento : null}
                          datosPersonalesValue={datosPersonales.documentoInput !== undefined ? datosPersonales.documentoInput : numDoc}
                          datosPersonalesValue2={datosPersonales.dniSelected !== undefined ? datosPersonales.dniSelected :"D.N.I"}
                        />
                        <InputButton
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].cuil : null
                          }
                          id="inputCuil"
                          nameInput="inputCuil"
                          nameLabel="C.U.I.L"
                          nameButton="Generar"
                          placeholder="##-########-#"
                          idModal="modalCuil"
                          array={[]}
                          disabled={disable}
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.inputcuil !== undefined ? datosPersonales.inputcuil : "N° CUIL"}
                          funcionCuil={generateCuil}
                          nroDocumento = {datosPersonales.documentoInput !== undefined ? datosPersonales.documentoInput : numDoc}
                          genre={saveEmpl[0] !== undefined || saveEmpl[0] === null
                            ? saveEmpl[0].sexo
                            : null}
                            usaCuil = {true}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telFijo
                              : null
                          }
                          nameInput="telefonoInput"
                          idInput="telefonoInput"
                          messageError="Solo puede contener números."
                          placeHolder="11352458965"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Telefono"
                          datosPersonalesValue={datosPersonales.telefonoInput !== undefined ? datosPersonales.telefonoInput : "N° Teléfono"}
                        />
                       <InputCbo
                          value={
                            saveEstadoCivil[0] !== undefined
                              ? saveEstadoCivil[0].idEstadoCivil
                              : null
                          }
                          sexo={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null}
                          nameButton="..."
                          nameLabel="Estado Civil"
                          array={estadosCiviles}
                          propArray="Casado"
                          masculinos={estadosCivilesMasculinos}
                          femeninos={estadosCivilesFemeninos}
                          display={true}
                          idModal="EstadoCivil"
                          disabled={disable}
                          nameInput="estadoCivilInput"
                          idInput="estadoCivilInput"
                          onChange={onChange}
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idNacionalidad
                              : null
                          }
                          sexo={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null}
                          nameButton="..."
                          nameLabel="Nacionalidad"
                          array={ nacionalidades !== undefined ? nacionalidades : ["Nacionalidad"]}
                          propArray="Casado"
                          masculinos={nacionalidadesMasculinas}
                          femeninos={nacionalidadesFemeninas}
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
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstado
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="Estado"
                          array={estadosArray !== undefined  ? estadosArray : ["Activo"]}
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
                            saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null
                          }
                          nameFirst="Masculino"
                          nameSecond="Femenino"
                          nameLabel="Sexo"
                          idInput="inputSexo"
                          disabled={disable}
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.inputSexo !== undefined ? datosPersonales.inputSexo : null}
                        />
                        <InputDate
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].fechaNacimiento
                              : null
                          }
                          nameInput="Nacimiento"
                          disabled={disable}
                          idInput="inputDateNac"
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.inputDateNac !== undefined ? datosPersonales.inputDateNac : null}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telMovil
                              : null
                          }
                          nameInput="movil"
                          idInput="movil"
                          messageError="Solo puede contener números."
                          placeHolder="Ingrese su celular"
                          disabled={disable}
                          nameLabel="Celular"
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.movil !== undefined ? datosPersonales.movil : "Movil"}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].mail : null
                          }
                          nameInput="email"
                          inputId="email"
                          messageError="Ingrese un email válido."
                          placeHolder="correo@correo.com.ar"
                          disabled={disable}
                          nameLabel="Email"
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.email !== undefined ? datosPersonales.email : "Email"}
                        />
                        <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idPaisdeOrigen
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="País de Origen"
                          array={paises}
                          propArray={paisSelected !== undefined ? paisSelected.nombrePais : ""}
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="estadosEmpleados"
                          disabled={disable}
                          idInput="estadosEmpleados"
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.estadosEmpleados !== undefined ? datosPersonales.estadosEmpleados : "Email"}
                        />
                      <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstudios
                              : null
                          }
                          sexo=""
                          nameButton="..."
                          nameLabel="Estudios"
                          array={estudios}
                          propArray={estudioSelect !== undefined ? estudioSelect.estudiosNivel : "Cursos"}
                          masculinos=""
                          femeninos=""
                          display={true}
                          idModal="Estudios"
                          disabled={disable}
                          idInput="estudiosInput"
                          onChange={onChange}
                          datosPersonalesValue={datosPersonales.estudiosInput !== undefined ? datosPersonales.estudiosInput : "Email"}
                        />



                        <InputForm
                          // value={
                          //   saveEmpl[0] !== undefined || saveEmpl[0] === null
                          //     ? saveEmpl[0].legajo
                          //     : null
                          // }
                          nameInput="nameObs"
                          idInput="nameObs"
                          messageError="Solo puede contener números."
                          placeHolder="Ingrese Observaciones"
                          disabled={disable}
                          onChange={onChange}
                          nameLabel="Observaciones"
                          datosPersonalesValue={datosPersonales.obsEstudio !== undefined ? datosPersonales.obsEstudio : "Sin Observaciones"}
                        />

                        {/* <TextArea inputName="Obs. Estudios" maxLength="55" disabled={disable} /> */}



                      </div>
                      
                      
                      
                      <div className="col-xl-3">
                        
                        <InputFile inputName="Arrastre su imagen" disabled={disable} imagen={`data:image/jpeg;base64,${image}`}/>
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
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" disabled={disable}/>
      </div>
    </div>
  );
};
export default DatosPersonales;
