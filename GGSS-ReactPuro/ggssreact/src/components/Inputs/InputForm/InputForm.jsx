import React, { useState } from 'react'
import "./InputForm.css"

const InputForm = ({nameInput, messageError, placeHolder, validateNumbers}) => {

    const [inputValue, setInputValue] = useState ();




  return (
    <div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label' for="legajo">{nameInput}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    className='formulario-input-Legajo' 
                    
                                id="legajo" 
                                
                    placeholder={placeHolder}
                                onKeyPress={(e)=>validateNumbers(e)} 
				                value={inputValue} 
				                onChange={(e)=> 
                                setInputValue(e.target.value) 
                                }
                                
                    />
        </div>
        <div className='form__grupo__icons'>
            <i className="fas fa-times-circle form__grupo__icon"></i>            
        </div>  
        <div className='form__grupo__errors'>
            <p className='form__grupo__error'>{messageError}</p>
        </div>    
    </div>
  )
}

export default InputForm