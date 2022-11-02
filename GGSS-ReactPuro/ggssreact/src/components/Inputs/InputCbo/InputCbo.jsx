import React, { useEffect, useState } from "react";
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, fieldName, value, display, nameButton}) => {
  
    
    const [mostrarComponente, setMostrarComponente] = useState(true);

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
                <select className="formulario-input-Estado form-select ml-0 px-0">{fieldName}                    
                    {
                        array.map((op, index)=>{
                            return(
                              value === (op.idEstado) ? <option key={index} defaultValue value={index}>{op.nombreEstado }</option> :
                                <option key={index}>{op.nombreEstado }</option> 


                                // {`op.${propiedad}`}
                            )
                        })
                    }
                </select>
            </div>
            <button type="button" 
              className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"}>
              {nameButton}
            </button>
        </div>
      </div>
  );
};
export default InputCbo;
