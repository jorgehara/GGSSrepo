import React from 'react'
import "./InputCbo.css";

const InputCbo = ({nameLabel, array, nameButton, value}) => {
    console.log(value)
  return (
    <div className='formulario__grupo__inputs__cbo'>
        <div className='form__grupo__label__inp'>
            <div className='primero'>
                <label className='form__grupo__label__label' for="legajo">{nameLabel}</label>
            </div>
            <div className='segundo'>
                <button class="btn btn-outline-secondary dropdown-toggle ml-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">{nameButton}</button>
                <ul class="dropdown-menu">
                    {
                        array.map((op, index)=>{
                            return(
                                value === op.nombreEstado ? <li key={index}><a class="dropdown-item active" href="#">{op.nombreEstado}</a></li> :
                                <li key={index}><a class="dropdown-item" href="#">{op.nombreEstado}</a></li>
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