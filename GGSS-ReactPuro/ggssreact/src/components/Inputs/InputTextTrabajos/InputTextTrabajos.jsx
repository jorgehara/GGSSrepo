import React from 'react'
import "./InputTextTrabajos.css";

const InputTextTrabajos = ({nameLabel,inputId}) => {
  return (
    <>
        <div className='col-xl-6 d-flex flex-row justify-content-start align-items-center mt-2'>
            <label htmlFor={inputId}>{nameLabel}</label>
            <input type="text" name={inputId} id={inputId} className="textTrabajos formulario-input-Legajo"/>        
        </div>
        <div className='col-xl-4 d-flex flex-row justify-content-start align-items-center mt-2'>
            <button className='btn btn-success btn-sm buttonAceptarCancelar'>+</button>
            <button className='btn btn-danger btn-sm buttonAceptarCancelar' >-</button>
        </div>
    </>
    
  )
}

export default InputTextTrabajos