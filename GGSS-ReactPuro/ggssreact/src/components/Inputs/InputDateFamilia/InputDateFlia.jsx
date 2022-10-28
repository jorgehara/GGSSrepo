import React, { useEffect, useState } from 'react'
import "./InputDateFlia.css";

const InputDateFlia = ({nameInput,display, checked}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  console.log(mostrarComponente)

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  return (
    <div className="formulario__grupo__DateFlia mt-2">
        <div class="form-check p-0">
          <label class="form-check-label" for="flexCheckDefault">
            {nameInput}
          </label>
         
        </div>
        <div class="formulario-input-DateFlia">
            <input className='ml-2' id="date" type="date" />
            
        </div>
        <input className={mostrarComponente ? "form-check-inputDateFlia" : "none"} type="checkbox" value="" id="flexCheckChecked" checked={checked} />
    </div>
  )
}

export default InputDateFlia;