import React from 'react'
// import styled from 'styled-components';
import './TextArea.css'

const TextArea = ({inputName, maxLength, value, disabled, action, onChange, idInput}) => {
  return (
    <div className='row'>
        <div className='form__grupo__label pl-1 mt-3'>
            <label className='form__grupo__label__label m-0' htmlFor="legajo">{inputName}</label>
        </div>
        <form>
        <div className='form__grupo__inputs_Obs mt-1'>
        <input className="form-control-obs txtArea" 
                value={value}
                placeholder="Ingrese Observaciones" 
                onChange={(e)=>onChange(e, action)}
                id={idInput} 
                cols="21" 
                rows="2"
                name={idInput} 
                maxLength={maxLength}
                disabled={disabled}
                >
        </input>
        </div>
        </form>
        {/* <input 
              className="form-control-obs txtArea" 
              value={value}
              placeholder="Ingrese Observaciones" 
              onChange={(e)=>onChange(e, action)}
              id={idInput} 
              cols="21" 
              rows="2"
              name={idInput} 
              maxLength={maxLength}
              disabled={disabled}
              >
        </input> */}
        
    </div>
  )
}

export default TextArea


