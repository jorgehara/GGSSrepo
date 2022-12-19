import React from 'react'
import './TextArea.css'

const TextArea = ({inputName, maxLength, value, disabled, action, onChange, inputId}) => {
  return (
    <div className='row'>
        <div className='form__grupo__label pl-1 mt-3'>
            <label className='form__grupo__label__label m-0' htmlFor="legajo">{inputName}</label>
        </div>

        <div className='form__grupo__inputs_Obs mt-1'>
        <input className="form-control-obs txtArea" 
                value={value}
                placeholder="Ingrese Observaciones" 
                onChange={(e) => onChange(e.target.value, inputId)}
                id={inputId} 
                cols="21" 
                rows="2"
                name={inputId} 
                maxLength={maxLength}
                disabled={disabled}
                >
        </input>
        </div>
        
    </div>
  )
}

export default TextArea