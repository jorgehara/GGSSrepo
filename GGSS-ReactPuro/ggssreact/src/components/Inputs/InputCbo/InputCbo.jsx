import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, fieldName, value, display, nameButton, propArray, sexo, masculinos, femeninos, idModal}) => {
  
    
    const [mostrarComponente, setMostrarComponente] = useState(true);
    const [returnBySexo, setReturnBySexo] = useState([]);

    useEffect(()=>{
      setMostrarComponente(display)
      
    },[display])
    useEffect(()=>{
      setReturnBySexo(validateSexo(sexo,masculinos, femeninos));
    },[sexo])

    const validateSexo =(sexo, masculinos, femeninos)=>{
      if(sexo === "M"){
        console.log(masculinos)
        return masculinos;
      }
      if(sexo === "F"){
        console.log(femeninos)
        return femeninos
      }
      console.log("nada")
  }
  return (
    <div className='formulario__grupo__inputs__cbo '>
        <div className='form__grupo__label__inp '>
            <div className='primero'>
                <label className='formulario__label mt-2 mb-0' htmlFor="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <select className="formulario-input-Estado form-select ml-0 px-0">{fieldName}                    
                    {
                       sexo !== undefined && sexo.length > 0 && returnBySexo !== undefined ? returnBySexo.map((op, index)=>{
                        return(
                          propArray === op ? <option key={index} selected defaultValue value={index}>{op }</option> :
                                <option key={index}>{op}</option> 
                        )
                      }) :
                        array !== [{}] && array.map((op, index)=>{
                        
                            return(
                              propArray === op ? <option key={index} selected defaultValue value={index}>{op }</option> :
                                <option key={index}>{op}</option> 
                            )
                        })
                    }
                </select>
            </div>
            <ButtonCallModal className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"} idModal={idModal} nameButton={nameButton} useNavbar={false} useButton={true}>
              {nameButton}
            </ButtonCallModal>
            {/* <button type="button" 
              className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"}>
              {nameButton}
            </button> */}
        </div>
      </div>
  );
};
export default InputCbo;
