import React, { useState } from 'react'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import ButtonLarge from '../Buttons/ButtonLarge';
import DNICboBox from '../Inputs/DNICboBox/DNICboBox';
import InputButton from '../Inputs/InputButton/InputButton';
import InputCbo from '../Inputs/InputCbo/InputCbo';
import InputDate from '../Inputs/InputDate/InputDate';
import InputFile from '../Inputs/InputFile/InputFile';
import InputForm from '../Inputs/InputForm/InputForm';
import InputRadio from '../Inputs/InputRadio/InputRadio';
import TextArea from '../Inputs/TextArea/TextArea';
import Navbar from '../Navbar/Navbar';
import printPannel from '../Navbar/printPannel';
// import TableBasic from '../Tables/TableBasic';
import "./DatosPersonales.css";


const DatosPersonales = () => {

    const optionsDNI = [ "DNI", "LC", "LE"]
    const estados = ["Activo", "Baja", "Suspendido", "Anulado"]

    
    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState ();




    const validateNumbers =(e)=>{		
        if (!/[0-9]/.test(e.key)) {
            setError("Ingrese sólo números");
            e.preventDefault();
        }
    }
    const validateNumbersTelefono =(e)=>{		
        if (!/[0-9]/.test(e.key)) {
            setError("Ingrese sólo números");
            e.preventDefault();
        }
    }
    
    const validateNumbersDNI =(e)=>{		
        if (!/^([0-9]?){8}$/.test(e.key)) {
            setError("Ingrese sólo números");
            swal({
                title: "¡Error!",
                text: `${error}`,
                icon: "error",
              });
            e.preventDefault();
        }
    }
    const validateTexts =(e)=>{		
        if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
            setError("Ingrese sólo letras y espacios");
            e.preventDefault();
        }
    }
    const validateEmails =(e)=>{		
        if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(e.key)) {
            setError("Ingrese sólo letras y espacios");
            e.preventDefault();
        }
    }

  return (
        <div className='containter grid px-5'>
        <div class="row">          
            <div className='Lateral-Izquierdo col-3'>
                <InputForm nameInput="Legajo:" messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                <InputForm nameInput="Nombre:" messageError="Solo puede contener letras." placeHolder="Buscar Nombres"/>
                <div class="list-group h-75">
                    <a href="#" class="list-group-item list-group-item-action ">A simple default list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple primary list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple secondary list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple success list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple danger list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple warning list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple info list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple light list group item</a>
                    <a href="#" class="list-group-item list-group-item-action ">A simple dark list group item</a>
                </div>
                <div class="d-inline-flex">
                <ButtonLarge color="danger" tamaño="" justyfy="end m-1" nameButton="Agregar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end m-1" nameButton="Modificar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end m-1" nameButton="Eliminar" />
                </div>
            </div>
            <div className='Lateral-Derecho col-9'>   
            <div className='menuEmpleados'>
                <Navbar />
            </div>
{/*--- Sección de Datos Personales ---*/}
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Datos Personales        
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                    <section className='container'>
                        <div className='row'>
                            <div className="formulario__grupo">
                                {/* <label for="usuario" className="mainABMTitle">Datos Personales</label> */}
                            </div> 
                            <form action="" className='form__datos__personales '>
                            {/* <div class="container text-center"> */}
                                <div class="row row-cols-12">
                                {/* <div className='primera__columna col-3'>
                                    <InputForm validations={validateNumbers} nameInput=" "  messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                                    <InputForm nameInput=" " messageError="Solo puede contener letras." placeHolder="Ingrese Nombres"/>
                                </div> */}
                                <div className='segunda__columna col-4'>
                                    <InputForm nameInput="Legajo N°"  messageError="Solo puede contener números." placeHolder="N° Legajo"/>
                                    <InputForm nameInput="Apellido" messageError="Solo puede contener letras." placeHolder="Ingrese Apellidos"/>
                                    <InputForm nameInput="Nombres" messageError="Solo puede contener letras." placeHolder="Ingrese Nombres"/>
                                    <DNICboBox nameInput="DNI" messageError="Solo puede contener números, sin puntos." placeHolder="23456789" array={optionsDNI}/>
                                    <InputButton nameLabel="C.U.I.L" nameButton="Validar" placeholder="##-########-#" />
                                    <InputForm nameInput="Teléfono"  messageError="Solo puede contener números." placeHolder="11352458965"/>
                                    <InputButton nameLabel="Estado Civil" nameButton="..." placeholder="Ingrese Estado Civil" />
                                    <InputButton nameLabel="Nacionalidad" nameButton="..." placeholder="Ingrese Nacionalidad" />
                                </div>
                                <div className='tercera_columna col-4'>
                                    <InputCbo nameButton="Estados" nameLabel="Estado" array={estados} />
                                    <InputRadio nameFirst="Masculino" nameSecond="Femenino" nameInput="Sexo" />
                                    <InputDate nameInput="Nacimiento" />
                                    <InputForm nameInput="Móvil"  messageError="Solo puede contener números." placeHolder="Ingrese su celular"/>
                                    <InputForm nameInput="E-mail"  messageError="Ingrese un email válido." placeHolder="correo@correo.com.ar"/>
                                    <InputButton nameLabel="País de Origen" nameButton="..." placeholder="Ingrese su País de Origen" />
                                    <InputButton nameLabel="Estudios" nameButton="..." placeholder="Ingrese sus Estudios" />
                                </div>
                                </div>
                                {/* </div> */}
                            </form>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <TextArea inputName="Observaciones"/>
                                </div>
                                <div className='col-xl-6'>
                                    <InputFile inputName="Arrastre su imagen"/>
                                </div>
                            </div>
                        </div>        
                    </section>
                            
                      </div>
                    </div>
                  </div>
{/*--- Sección de Domicilios ---*/}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Domicilios
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='container'>
                                <div className='row'>
                                    <div className="formulario__grupo">
                                        <label for="usuario" className="mainABMTitle">Domicilios</label>
                                    </div> 
                                    <div className='col-xl-6 '>
                                        <div className='mt-2'>
                                            <input type="checkbox" name="predeterminado" id="predeterminado" />
                                            <label className='ml-2' htmlFor="predeterminado">Predeterminado</label>
                                        </div>

                                        <InputForm nameInput="Calle"  messageError="Solo puede contener números." placeHolder="Ingrese Calle"/>
                                        <InputButton nameLabel="Barrio" nameButton="..." placeholder="Ingrese Barrio" />
                                        <InputForm nameInput="Provincia"  messageError="Solo puede contener letras." placeHolder="Ingrese Provincia"/>
                                        <TextArea inputName="Observaciones" />
                                    </div>
                                    <div className='col-xl-6'>
                                        <InputButton nameLabel="Número" nameButton="..." placeholder="123456" />
                                        <InputButton nameLabel="Piso/Dpto/Ofic/Torre" nameButton="..." placeholder="Ingrese número" />
                                        <InputForm nameInput="Departamento"  messageError="Solo puede contener letras." placeHolder="Ingrese Departamento"/>
                                        <InputForm nameInput="Localidad/CP"  messageError="Solo puede contener letras." placeHolder="Ingrese Localidad/CP"/>
                                    </div>
                                </div>
                        {/* "Panel de acceso directo" */}
                            </section>
                        </div>    
                    </div>  
                </div>
            </div>
            <div className= ''> Aca van los botones de aceptar y cancelar solo una vez para todas las solapas</div>
            </div>
        </div>
            {/* 2do corte */}
            <div class="d-flex border row">
            <div className='col-2'>
                <ButtonLarge color="danger" tamaño="" justyfy="cemter m-1" nameButton="Imprimir Constancia de Asignaciones Familiares" />
            </div>
            <div className='col-2'>
            <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Certificado de Convenio/Oficio" />
            </div>
            <div className='col-2'>
            <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Resumen Legajo Empleado" />
            </div>
            <div className='col-2'>
            <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Ficha Empleado" />
            </div>
            <div className='col-2'>
            <ButtonLarge color="danger" tamaño="" justyfy="center mt-1" nameButton="Licencias Franquicias" />
            </div>
            <div className='col-2'>
            <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Salir" />
            </div>
            </div>
    </div>
  )
}
export default DatosPersonales