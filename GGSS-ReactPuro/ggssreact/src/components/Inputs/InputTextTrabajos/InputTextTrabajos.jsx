import React from 'react'
import "./InputTextTrabajos.css";

const InputTextTrabajos = ({nameLabel,inputId, onChange, value, action, onSend,onDelete, id }) => {
  return (
    <>
        <div className='col-xl-6 d-flex flex-row justify-content-start align-items-center mt-2'>
            <label htmlFor={inputId}>{nameLabel}</label>
            <input type="text" name={inputId} id={inputId} onChange={(e)=> onChange(e.target.value, inputId)} value={value && value} className="textTrabajos formulario-input-TextTrabajo"/>        
        </div>
        <div className='col-xl-4 d-flex flex-row justify-content-start align-items-center mt-2'>
            <button className='btn btn-outline-success btn-sm buttonAceptarCancelar' onClick={onSend}>+</button>
            <button className='btn btn-outline-danger btn-sm buttonAceptarCancelar' onClick={()=>onDelete(id)} >-</button>
        </div>
    </>
    
  )
}

export default InputTextTrabajos