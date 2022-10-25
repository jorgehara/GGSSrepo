import React from 'react'

const TextArea = ({inputName}) => {
  return (
    <div className='row'>
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{inputName}</label>
        </div>
        {/* ver el height en Boostrap */}
        <div className='form__grupo__inputs'>
            <textarea name="" 
                      maxLength="255"
                      id="" 
                      cols="61" 
                      rows="2">
                      </textarea>
        </div>
        <div className='form__grupo__icons'>
            <button className='btn btn-danger'>Cancelar</button>
            <button className='btn btn-success ml-2'>Aceptar</button>
        </div>
    </div>
  )
}

export default TextArea