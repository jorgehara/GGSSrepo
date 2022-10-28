import React from 'react'
import "./DNICboBox.css"
const DNICboBox = ({nameInput, messageError, placeHolder, array}) => {

  return (
    <div className="formulario__grupo">
        <div className="">
            <label class="formulario-label-DNI mt-2">{nameInput}</label>
        </div> 
        <div className=''>
            <select class="formulario-input-DNI form-select ml-0 px-0">
                {
                    array.map(op=>{
                        return (
                            <option>{op}</option>
                        )
                    })
                }
            </select>
        </div>                   
        <div className='form__grupo__input2'>
            <input type="text" 
				    maxlength="8"
                    className='formulario-input-DNI px-0 mt-0 mb-0' 
                    placeholder={placeHolder}>                        
            </input>
        </div>
        <div className='form__grupo__icon'>
            <i class="fas fa-times-circle"></i>
        </div>
        <div className='form__grupo__error'>
            <p>{messageError}</p>
        </div>   
    </div>
  )
}

export default DNICboBox