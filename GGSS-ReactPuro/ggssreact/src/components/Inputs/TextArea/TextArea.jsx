import React from 'react'

const TextArea = ({inputName, maxLength}) => {
  return (
    <div className='row'>
        <div className='form__grupo__label mt-2 pl-1'>
            <label className='form__grupo__label__label' for="legajo">{inputName}</label>
        </div>
        {/* ver el height en Boostrap */}
        <div className='form__grupo__inputs_Obs mt-2'>
        <textarea  class="form-control-obs" 
                placeholder="Ingrese Observaciones" 
                id="" 
                cols="61" 
                rows="5"
                name="" 
                maxLength={maxLength}
                ></textarea>
    </div>
    </div>
  )
}

export default TextArea