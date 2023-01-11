import React, { useEffect, useState } from 'react'
// import "./InputDateFlia.css";

const InputDateFlia = ({nameInput,display, checked, value, idInput, disable, valueGeneral, onChange,generalState, setGeneralState, familiarSeleccionado,action}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;
  return (
    <>
      <div className="row">
      <div className="col">

            <label className="" htmlFor="flexCheckDefault">
              {nameInput}
            </label>
        </div>
          <div className="col">
              <input 
              className='' 
              id={idInput} 
              name={idInput}
              onChange={(e)=> onChange(e.target.value, idInput)}
              type="date" 
              value={fecha} 
              disabled={disable}
              />
          </div>
      <div className="col">

          <input 
          className={mostrarComponente ? "col-xl-6 form-check-input-date" : "none"} type="checkbox" 
          disabled={disable}
          id="flexCheckChecked" 
          checked={checked}
          />
          </div>

      </div>
      </>
  )
}
export default InputDateFlia;