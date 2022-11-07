import React from 'react';
import "./InputButton.css";

const InputButton = ({nameButton, placeholder, nameLabel, maxLeght, value, disabled}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label mt-2' htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    value={value}
                    maxLength={maxLeght}
                    className="formulario-input-Legajo col ml-0 px-0 mt-0 mb-2 mr-1" 
                    placeholder={placeholder} 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04"
                    disabled={disabled}
                    />
        </div>
			  <button type="button" 
              className="btn btn-validacion btn-outline-danger ml-2" disabled={disabled}>
              {nameButton}</button>
    </div>
  )
}
export default InputButton;