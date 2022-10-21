import React from 'react'
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, nameButton}) => {
  return (
    <div className='formulario__grupo__inputs__cbo'>
        <div className='form__grupo__label__inp'>
            <div className='primero'>
                <label className='form__grupo__label__label' for="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{nameButton}</button>
                <ul class="dropdown-menu">
                    {
                        array.map(op=>{
                            return(
                                <li><a class="dropdown-item" href="#">{op}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default InputCbo