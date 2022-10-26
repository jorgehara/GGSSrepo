import React from 'react';
import "./InputButton.css";

const InputButton = ({nameButton, placeholder, nameLabel, maxLeght}) => {
const InputButton = ({nameButton, placeholder, nameLabel, maxLeght, className, value}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label mt-2' for="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    value={value}
                    maxLength={maxLeght}
                    class="formulario-input-Legajo col ml-0 px-0 mt-0 mb-2 mr-1" 
                    placeholder={placeholder} 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" />
        </div>
			  <button type="button" 
              class="btn btn-validacion btn-outline-danger ml-2">
              {nameButton}</button>
    </div>
  )
}

export default InputButton;