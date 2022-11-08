import React, { useEffect, useState } from 'react'
import "./InputDate.css";

const InputDate = ({ nameInput,display, checked, value, disabled,idInput, onChange,datosPersonalesValue }) => {
  
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [valor, setValor] = useState("");
  const fecha = value !== undefined ? value.substring(0, value.length -9) : null;
  
  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])

  useEffect(()=>{
    setValor(fecha);
  },[fecha])

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  
  console.log(datosPersonalesValue)



  return (
    <div className="formulario__grupo__inputs mt-2">
        <div className="form-check p-0">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {nameInput}
          </label>
          <input className={mostrarComponente ? "form-check-input ml-4" : "none"} type="checkbox"  id="flexCheckChecked"  checked={checked} disabled={disabled} />
        </div>
        <div className="formulario-input-Date">
            <input id={idInput} name={idInput} type="date" value={valor} disabled={disabled} onChange={(e)=>onChange(e)} />
        </div>
    </div>
  )
}

export default InputDate