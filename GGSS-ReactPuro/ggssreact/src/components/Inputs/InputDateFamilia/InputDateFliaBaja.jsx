import React, { useEffect, useState } from 'react'
// import "./InputDateFlia.css";

const InputDateFliaBaja = ({nameInput,display, checked, value, idInput, disable,valueGeneral, onChange,generalState, setGeneralState, familiarSeleccionado, action}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [valor , setValor] = useState("");
  const fecha = value !== undefined && value !== null ? value.substring(0, value.length -9) : null;
  

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  function updateFecha(){
    setValor(fecha);
    return;
  }
  useEffect(()=>{
    updateFecha();
  },[familiarSeleccionado.iDfamiliares])


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
              value={valueGeneral && valueGeneral  ?  valueGeneral : valor} 
              disabled={disable}
              />
          </div>
          <div className="col">
          <input 
          className={mostrarComponente ? " " : "none"} type="checkbox" 
          disabled={disable}
          id="flexCheckChecked" 
          checked={checked}
          />
      </div>
      </div>
    </>
  )
}
export default InputDateFliaBaja;