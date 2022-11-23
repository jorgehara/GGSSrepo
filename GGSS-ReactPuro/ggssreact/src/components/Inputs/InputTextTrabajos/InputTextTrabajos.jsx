import React from 'react'
import "./InputTextTrabajos.css";

const InputTextTrabajos = ({nameLabel,inputId}) => {
  return (
    <>
        <div className='col-xl-6 d-flex flex-row justify-content-start align-items-center mt-2'>
            <label htmlFor={inputId}>{nameLabel}</label>
            <input type="text" name={inputId} id={inputId} className="textTrabajos formulario-input-TextTrabajo"/>        
        </div>
        <div className='col-xl-4 d-flex flex-row justify-content-start align-items-center mt-2'>
            <button className='btn btn-outline-success btn-sm buttonAceptarCancelar'>+</button>
            <button className='btn btn-outline-danger btn-sm buttonAceptarCancelar' >-</button>
        </div>
    </>
    
  )
}

export default InputTextTrabajos