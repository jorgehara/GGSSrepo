import React, { useEffect, useState } from 'react'
import "./InputDateFlia.css";

const InputDateFlia = ({nameInput,display, checked, value, idInput, disable, valueGeneral, onChange,generalState, setGeneralState, familiarSeleccionado,action}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [valor , setValor] = useState("");
  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  function updateFecha(){
    setGeneralState({ idInput : ""});
    setValor(fecha);
    return;
  }
  useEffect(()=>{
    updateFecha();
  },[familiarSeleccionado.iDfamiliares])

  

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
              name={idInput}
              onChange={(e)=> onChange(e, action)}
              type="date" 
              value={valueGeneral !== null && valueGeneral.length > 0 ? valueGeneral : valor} 
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