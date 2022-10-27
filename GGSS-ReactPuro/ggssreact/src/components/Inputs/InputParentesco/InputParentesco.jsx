import React from 'react'

const InputParentesco = ({nameInput, array, placeHolder, nameButton, nameCheck, checked}) => {
  return (
    <div className="formulario__grupo mt-2">
        <div className="">
            <label class="formulario-label-DNI mt-2">{nameInput}</label>
        </div> 
        <div className=''>
            <select class="form-select form_select px-0 mt-0 mb-0" >
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
            <button type="button" 
              class="btn btn-validacion btn-outline-danger ml-2">
              {nameButton}
            </button>
        </div>
        <div className='d-flex align-items-center col-xl-3 ml-3'>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checked} />
            <label class="form-check-label" for="flexCheckChecked">
                {nameCheck}
            </label>           
        </div>  
    </div>
  )
}

export default InputParentesco