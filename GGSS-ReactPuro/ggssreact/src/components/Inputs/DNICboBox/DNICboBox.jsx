import React from 'react'
import "./DNICboBox.css"
const DNICboBox = ({nameInput, messageError, placeHolder, array}) => {

  return (
    <div className="formulario__grupo__inputs2">
        <div className="form__grupo__labels">
            <label class="form__grupo__label__label">{nameInput}</label>
        </div> 
        <div className='form__grupo__input1'>
            <select class=" " >
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
            <input type="text" className='form__input' placeholder={placeHolder}></input>
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