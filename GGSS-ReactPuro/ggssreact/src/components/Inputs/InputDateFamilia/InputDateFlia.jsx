import React, { useEffect, useState } from 'react'
import "./InputDateFlia.css";

const InputDateFlia = ({nameInput,display, checked, value, idInput, disable}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;
  return (
    <div className=" mt-2">
      <div className='row d-flex flex-row justify-content-start formularioDate align-items-center'>
          <div className="col-xl-4 form-check p-0">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {nameInput}
            </label>
          </div>
          <div className="col-xl-1 form-input-DateFlia">
              <input 
              className='inputDate' 
              id={idInput} 
              type="date" 
              value={fecha} 
              disabled={disable}
              />
          </div>
          <input 
          className={mostrarComponente ? "col-xl-3 form-check-input-date dateFlia" : "none"} type="checkbox" 
          disabled={disable}
          id="flexCheckChecked" 
          checked={checked}
          />
      </div>
        
    </div>
  )
}
export default InputDateFlia;