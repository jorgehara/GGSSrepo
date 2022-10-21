import React from 'react'

const InputButton = ({nameButton, placeholder, nameLabel}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label' for="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo__input'>
            <input type="text" class="form__grupo__input" placeholder={placeholder} id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
        </div>
        <div className='form__grupo__icon'>
            <button class="btn btn-outline-secondary btn-sm" type="button" id="inputGroupFileAddon04">{nameButton}</button>
        </div>
    </div>
  )
}

export default InputButton