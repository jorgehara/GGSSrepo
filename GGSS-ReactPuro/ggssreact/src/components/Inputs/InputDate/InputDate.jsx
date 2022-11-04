import React, { useEffect, useState } from 'react'
import "./InputDate.css";

const InputDate = ({nameInput,display, checked, value, disabled}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  

  const fecha = value !== undefined ? value.substring(0, value.length -9) : null;



  return (
    <div className="formulario__grupo__inputs mt-2">
        <div className="form-check p-0">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {nameInput}
          </label>
          <input className={mostrarComponente ? "form-check-input ml-4" : "none"} type="checkbox"  id="flexCheckChecked" checked={checked} disabled={disabled} />
        </div>
        <div className="formulario-input-Date">
            <input id="date" type="date" value={fecha} disabled={disabled} />
        </div>
    </div>
  )
}

export default InputDate