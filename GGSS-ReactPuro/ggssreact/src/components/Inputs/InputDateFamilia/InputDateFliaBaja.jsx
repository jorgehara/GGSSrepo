import React, { useEffect, useState } from 'react'
import "./InputDateFlia.css";

const InputDateFliaBaja = ({nameInput,display, checked, value, idInput, disable}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  console.log(mostrarComponente)

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;
  return (
    <div className="mt-2">
      <div className='row d-flex flex-row justify-content-start formularioDate align-items-center'>
          <div className="col-xl-2 p-0">
            <label className="" htmlFor="flexCheckDefault">
              {nameInput}
            </label>
          </div>
          <div className="col-xl-1 form-input-DateFlia">
              <input 
              className='inputDateBaja' 
              id={idInput} 
              type="date" 
              value={fecha} 
              disabled={disable}
              />
          </div>
          <input 
          className={mostrarComponente ? "col-xl-3 form-check-input-date bajaFlia" : "none"} type="checkbox" 
          disabled={disable}
          id="flexCheckChecked" 
          checked={checked}
          />
      </div>
        
    </div>
  )
}
export default InputDateFliaBaja;