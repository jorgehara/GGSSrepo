import React from "react";
import ButtonLarge from "../Buttons/ButtonLarge";
import InputButton from "../Inputs/InputButton/InputButton";
import InputForm from "../Inputs/InputForm/InputForm";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";

const Domicilios = () => {
  const columns = [
    "Predeterminado",
    "Calle",
    "Número",
    "Barrio",
    "Localidad",
    "Piso/Of/Dpto",
  ];

  return (
    <section className="container">
      <div className="row">
        {/* <div className="formulario__grupo">
                <label for="usuario" className="mainABMTitle">Domicilios</label>
            </div>  */}
        <div className="col-xl-6 ">
          <div className="mt-2">
            <input type="checkbox" name="predeterminado" id="predeterminado" />
            <label className="ml-2" htmlFor="predeterminado">
              Predeterminado
            </label>
          </div>
import React, { useContext, useEffect, useState } from 'react'
import { employeContext } from '../../context/employeContext'
import ButtonLarge from '../Buttons/ButtonLarge'
import InputButton from '../Inputs/InputButton/InputButton'
import InputForm from '../Inputs/InputForm/InputForm'
import TextArea from '../Inputs/TextArea/TextArea'
import TableBasic from '../Tables/TableBasic'

const Domicilios = () => {

    const columns= ["Predeterminado", "Calle", "Número", "Barrio", "Localidad", "Piso/Of/Dpto"]
    const {saveEmpl, saveDom} = useContext(employeContext);
    const [inputValue, setInputValue] = useState ("");

    console.log(saveDom)
    
    useEffect(()=>{

    },[])
    
    useEffect(()=>{
        setInputValor();
    },[(saveDom[0].predeterminado)])

    const setInputValor=()=>{
        debugger;
        if(saveDom.length > 0 && (saveDom[0].predeterminado) === 1){
            setInputValue("checked");  
            return;         
        }
        setInputValue("");
    }
    

  return (
                <div to="/domicilios" class="accordion-item">
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
                                            <input checked={inputValue} type="checkbox" name="predeterminado" id="predeterminado" />
                                            <label className='ml-2' htmlFor="predeterminado">Predeterminado</label>
                                        </div>

                                        <InputForm value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].calle : null} nameInput="Calle"  messageError="Solo puede contener números." placeHolder="Ingrese Calle"/>
                                        <InputButton value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].Barrio : null} nameLabel="Barrio" nameButton="..." placeholder="Ingrese Barrio" />
                                        <InputForm value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].Provincia : null} nameInput="Provincia"  messageError="Solo puede contener letras." placeHolder="Ingrese Provincia"/>
                                        <TextArea value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].Obs : null} inputName="Observaciones" />
                                    </div>
                                    <div className='col-xl-6'>
                                        <InputButton value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].numCalle : null} nameLabel="Número" nameButton="..." placeholder="123456" />
                                        <InputButton value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].pisoDepto : null} nameLabel="Piso/Dpto/Ofic/Torre" nameButton="..." placeholder="Ingrese número" />
                                        <InputForm value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].Departamento : null} nameInput="Departamento"  messageError="Solo puede contener letras." placeHolder="Ingrese Departamento"/>
                                        <InputForm value={saveDom[0] !== undefined || saveDom[0] === null? saveDom[0].Localidad : null} nameInput="Localidad/CP"  messageError="Solo puede contener letras." placeHolder="Ingrese Localidad/CP"/>
                                    </div>
                                </div>
                        {/* "Panel de acceso directo" */}
                            </section>
                        </div>    
                    </div>  
                </div>
  )
}

          <InputForm
            nameInput="Calle"
            messageError="Solo puede contener números."
            placeHolder="Ingrese Calle"
          />
          <InputButton
            nameLabel="Barrio"
            nameButton="..."
            placeholder="Ingrese Barrio"
          />
          <InputForm
            nameInput="Provincia"
            messageError="Solo puede contener letras."
            placeHolder="Ingrese Provincia"
          />
          <TextArea inputName="Observaciones" />
        </div>
        <div className="col-xl-6">
          <InputButton
            nameLabel="Número"
            nameButton="..."
            placeholder="123456"
          />
          <InputButton
            nameLabel="Piso/Dpto/Ofic/Torre"
            nameButton="..."
            placeholder="Ingrese número"
          />
          <InputForm
            nameInput="Departamento"
            messageError="Solo puede contener letras."
            placeHolder="Ingrese Departamento"
          />
          <InputForm
            nameInput="Localidad/CP"
            messageError="Solo puede contener letras."
            placeHolder="Ingrese Localidad/CP"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <TableBasic columns={columns} />
        </div>
        <div className="col-xl-6">
          <ButtonLarge
            color="danger"
            tamaño="lg"
            justyfy="start mt-1"
            nameButton="Imprimir Constancia de Asignaciones Familiares"
          />
          <ButtonLarge
            color="danger"
            tamaño="lg"
            justyfy="start mt-1"
            nameButton="Imprimir Certificado de Convenio/Oficio"
          />
          <ButtonLarge
            color="danger"
            tamaño="lg"
            justyfy="start mt-1"
            nameButton="Imprimir Resumen Legajo Empleado"
          />
          <ButtonLarge
            color="danger"
            tamaño="lg"
            justyfy="start mt-1"
            nameButton="Imprimir Ficha Empleado"
          />
        </div>
        <div className="col-xl-6">
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Licencias Franquicias"
          />
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Agregar"
          />
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Modificar"
          />
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Eliminar"
          />
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Listar"
          />
          <ButtonLarge
            color="danger"
            tamaño=""
            justyfy="end mt-1"
            nameButton="Salir"
          />
        </div>
      </div>
    </section>
  );
};

export default Domicilios;