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
// import Domicilios from '../Domicilios/Domicilios';
import axios from "axios";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import Domicilios from "../Domicilios/Domicilios";
// import InputForm2daColumn from "../Inputs/InputForm2daColumn/InputForm2daColumn";

const DatosPersonales = () => {
  const optionsDNI = ["DNI", "LC", "LE"];
  const estados = ["Activo", "Baja", "Suspendido", "Anulado"];

  const { saveEmpl, saveEstados, saveEstado } = useContext(employeContext);

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const url = "http://54.243.192.82/api/Estados";

  const estadosCiviles = ["Soltero", "Casado", "Viudo", "Divorciado"];

  useEffect(() => {
    axios.get(url).then((res) => saveEstados(res.data));
  }, []);

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

  return (
    <div className="Lateral-Derecho">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <section className="container">
                <div className="row">
                  <div className="formulario__grupo"></div>
                  <form action="" className="form__datos__personales ">
                    <div class="row row-cols-12">
                      <div className="segunda__columna col-5">
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined || saveEmpl[0] === null
                              ? saveEmpl[0].legajo
                              : null
                          }
                          nameInput="Legajo N°"
                          messageError="Solo puede contener números."
                          placeHolder="N° Legajo"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].apellido
                              : null
                          }
                          nameInput="Apellido"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Apellidos"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nombres
                              : null
                          }
                          nameInput="Nombres"
                          messageError="Solo puede contener letras."
                          placeHolder="Ingrese Nombres"
                        />
                        <DNICboBox
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].nroDocumento
                              : null
                          }
                          nameInput="Documento"
                          messageError="Solo puede contener números, sin puntos."
                          placeHolder="23456789"
                          array={optionsDNI}
                        />
                        <InputButton
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].cuil : null
                          }
                          id="inputCuil"
                          nameLabel="C.U.I.L"
                          nameButton="Generar"
                          placeholder="##-########-#"
                          idModal="modalCuil"
                          array={[]}
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telFijo
                              : null
                          }
                          nameInput="Teléfono"
                          messageError="Solo puede contener números."
                          placeHolder="11352458965"
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstadoCivil
                              : null
                          }
                          nameButton="..."
                          nameLabel="Estado Civil"
                          array={saveEstado}
                          display={true}
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idNacionalidad
                              : null
                          }
                          nameButton="..."
                          nameLabel="Nacionalidad"
                          array={saveEstado}
                          display={true}
                        />
                      </div>
                      <div className="tercera_columna col-5">
                        <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstado
                              : null
                          }
                          nameButton="..."
                          nameLabel="Estado"
                          array={saveEstado}
                          display={true}
                        />
                        <InputRadio
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null
                          }
                          nameFirst="Masculino"
                          nameSecond="Femenino"
                          nameInput="Sexo"
                        />
                        <InputDate
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].fechaNacimiento
                              : null
                          }
                          nameInput="Nacimiento"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].telMovil
                              : null
                          }
                          nameInput="Móvil"
                          messageError="Solo puede contener números."
                          placeHolder="Ingrese su celular"
                        />
                        <InputForm
                          value={
                            saveEmpl[0] !== undefined ? saveEmpl[0].mail : null
                          }
                          nameInput="E-mail"
                          messageError="Ingrese un email válido."
                          placeHolder="correo@correo.com.ar"
                        />
                        <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idPaisdeOrigen
                              : null
                          }
                          nameButton="..."
                          nameLabel="País de Origen"
                          array={saveEstado}
                          display={true}
                        />
                       <InputCbo
                          value={
                            saveEmpl[0] !== undefined
                              ? saveEmpl[0].idEstudios
                              : null
                          }
                          nameButton="..."
                          nameLabel="Estudios"
                          array={saveEstado}
                          display={true}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-xl-5 mr-4">
                      <TextArea inputName="Observaciones" maxLength="255" />
                    </div>
                    <div className="col-xl-6 mt-2">
                      <InputFile inputName="Arrastre su imagen" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Domicilios />
      </div>
      <div className="d-flex justify-content-end">
        <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
      </div>
    </div>
  );
};
export default DatosPersonales;
