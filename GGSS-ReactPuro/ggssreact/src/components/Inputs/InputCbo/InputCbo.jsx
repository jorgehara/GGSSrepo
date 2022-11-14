import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, fieldName, value, display, nameButton, propArray, sexo, masculinos, femeninos, idModal, disabled, nameInput, idInput,onChange, datosPersonalesValue, generalState, setGeneralState}) => {
  
    
    const [mostrarComponente, setMostrarComponente] = useState(true);
    const [returnBySexo, setReturnBySexo] = useState([]);
    const [valor, setValor] = useState("");

    useEffect(()=>{
      setValor(datosPersonalesValue)
    },[datosPersonalesValue])
  
    useEffect(()=>{
      setValor(value);
    },[value])
    useEffect(()=>{
      setMostrarComponente(display)
      
    },[display])
    useEffect(()=>{
      setReturnBySexo(validateSexo(sexo,masculinos, femeninos));
    },[sexo])

    const validateSexo =(sexo, masculinos, femeninos)=>{
      if(sexo === "M"){
        return masculinos;
      }
      if(sexo === "F"){
        return femeninos
      }
     
  }
  return (
    <div className='formulario__grupo__inputs__cbo '>
        <div className='form__grupo__label__inp '>
            <div className='primero'>
                <label className='formulario__label mt-2 mb-0' htmlFor="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <select className="formulario-input-Estado form-select ml-0 px-0" onChange={(e)=>onChange(e, generalState, setGeneralState)} value={datosPersonalesValue} id={idInput} disabled={disabled} name={idInput}>{fieldName}                    
                    {
                       sexo !== undefined && sexo.length > 0 && returnBySexo !== undefined ? returnBySexo.map((op, index)=>{
                        return(
                          propArray === op ? <option key={index} selected defaultValue value={op}>{op}</option> :
                                <option value={op} key={index}>{op}</option> 
                        )
                      }) :
                        array !== [{}] && array.map((op, index)=>{
                        
                            return(
                              propArray === op ? <option key={index} selected defaultValue value={op}>{op }</option> :
                                <option value={op} key={index}>{op}</option> 
                            )
                        })
                    }
                </select>
            </div>
            {mostrarComponente && <div>
              <ButtonCallModal className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"} idModal={idModal} nameButton={nameButton} useNavbar={false} useButton={true} disabled={disabled}>
                {nameButton}
              </ButtonCallModal>
              {/* <button type="button" 
                className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"}>
                {nameButton}
              </button> */}
            </div>}
            
        </div>
      </div>
  );
};
export default InputCbo;
