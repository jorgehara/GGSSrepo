import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, fieldName, value, display, nameButton, propArray, sexo, masculinos, femeninos, idModal, disabled, nameInput, idInput,onChange, datosPersonalesValue, action, propArrayOp,propArrayOpFem}) => {
  
    const [mostrarComponente, setMostrarComponente] = useState(true);
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
   
  return (
    <div className='formulario__grupo__inputs__cbo '>
        <div className='form__grupo__label__inp '>
            <div className='primero'>
                <label className='formulario__label mt-2 mb-0' htmlFor="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <select className="formulario-input-Estado form-select ml-0 px-0" onChange={(e)=>onChange(e, action)} value={datosPersonalesValue} id={idInput} disabled={disabled} name={idInput}>{fieldName}                    
                    {
                       sexo !== null && sexo !== undefined && sexo.length > 0  && sexo === "M" ? array !== undefined && array.map((op, index)=>{
                        return(
                          propArray === op[propArrayOp] ? <option key={index} selected defaultValue={op[propArrayOp]} value={op[propArrayOp]}>
                                                            {op[propArrayOp]} 
                                                         </option> :
                                                         <option defaultValue={op[propArrayOp]} value={op[propArrayOp]} key={index}>
                                                            {op[propArrayOp]}
                                                         </option> 
                        )
                    }) :
                        array !== undefined && array.map((op, index)=>{
                            return(
                              propArray === op[propArrayOp] ? <option key={index} selected defaultValue={op[propArrayOp]} value={op[propArrayOp]}>
                                                                {op[propArrayOpFem]} 
                                                             </option> :
                                                             <option defaultValue={op[propArrayOp]} value={op[propArrayOp]} key={index}>
                                                                {op[propArrayOpFem]}
                                                             </option> 
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
