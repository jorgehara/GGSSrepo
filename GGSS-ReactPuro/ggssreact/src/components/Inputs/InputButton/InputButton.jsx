import React from 'react'

const InputButton = ({nameButton, placeholder, nameLabel, maxLeght}) => {
  return (
    <div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label' for="legajo">{nameLabel}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    maxLength={maxLeght}
                    class="formulario-input-Legajo ml-0 px-0 mt-0 mb-2" 
                    placeholder={placeholder} 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" />
        </div>
			<button type="button" 
              class="btn btn-validacion btn-outline-danger">
              {nameButton}</button>

        {/* <div className='form__grupo__icon'>
            <button class="btn btn-outline-secondary btn-sm" 
                    type="button" 
                    id="inputGroupFileAddon04">{nameButton}
                    </button>
        </div> */}
    </div>
  )
}

export default InputButton