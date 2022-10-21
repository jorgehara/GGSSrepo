import React from 'react'

const InputRadio = ({nameInput, nameFirst, nameSecond}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{nameInput}</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label class="form-check-label" for="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
        <label class="form-check-label" for="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  )
}

export default InputRadio