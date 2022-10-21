import React from 'react'

const InputDate = ({nameInput}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{nameInput}</label>
        </div>
        <div class="form-check form-check-inline">
            <input id="datetime-local" type="datetime-local" />
        </div>
    </div>
  )
}

export default InputDate