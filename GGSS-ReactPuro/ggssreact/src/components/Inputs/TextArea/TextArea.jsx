import React from 'react'
import './TextArea.css'

const TextArea = ({inputName, maxLength, value, disabled}) => {
  return (
    <div className='row'>
        <div className='form__grupo__label pl-1'>
            <label className='form__grupo__label__label m-0' htmlFor="legajo">{inputName}</label>
        </div>
        {/* ver el height en Boostrap */}
        <div className='form__grupo__inputs_Obs'>
        <textarea className="form-control-obs txtArea" 
                value={value}
                placeholder="Ingrese Observaciones" 
                id="" 
                cols="21" 
                rows="1"
                name="" 
                maxLength={maxLength}
                disabled={disabled}
                >
        </textarea>
    </div>
    </div>
  )
}

export default TextArea