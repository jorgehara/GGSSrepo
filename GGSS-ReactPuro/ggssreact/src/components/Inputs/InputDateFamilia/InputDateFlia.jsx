import React, { useEffect, useState } from 'react'
import "./InputDateFlia.css";

const InputDateFlia = ({nameInput,display, checked, value, idInput, disable}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  console.log(mostrarComponente)

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;
  return (
    <div className="formulario__grupo__DateFlia mt-2">
        <div className="form-check p-0">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {nameInput}
          </label>
        </div>
        <div className="formulario-input-DateFlia">
            <input 
            className='ml-2' 
            id={idInput} 
            type="date" 
            value={fecha} 
            disabled={disable}
            />
        </div>
        <input 
        className={mostrarComponente ? "form-check-inputDateFlia" : "none"} type="checkbox" 
        disabled={disable}
        id="flexCheckChecked" 
        checked={checked}
        />
    </div>
  )
}
export default InputDateFlia;