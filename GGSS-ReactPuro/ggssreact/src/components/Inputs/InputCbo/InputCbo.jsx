import React from "react";
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, fieldName, value}) => {
    console.log(value)
  return (
    <div className='formulario__grupo__inputs__cbo'>
        <div className='form__grupo__label__inp'>
            <div className='primero'>
                <label className='form__grupo__label__label' for="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <select class="form-select form-select-sm">{fieldName}
                    <option selected>{value}</option>
                    {
                        array.map((op, index)=>{
                            return(
                                
                                value === op.nombreEstado ? <option value={index}>{op.nombreEstado }</option> :
                                <option key={index}>{op.nombreEstado }</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
     </div>
  );
};
export default InputCbo;