import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./InputDate.css";

const InputDate = ({ nameInput,display, checked, value, disabled,idInput, onChange,datosPersonalesValue, action, setDisable, disable, actionReset }) => {
  
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);
  const [valor, setValor] = useState("");


  const fecha = value && value  ? value.substring(0, value.length -9) : null;
  const dispatch = useDispatch();


  useEffect(()=>{
    setValor(fecha);
  },[fecha])

  useEffect(()=>{
    if(display){
      if(mostrarComponente2 !== mostrarComponente){
        setMostrarComponente2(display)
        return;
      }
      setMostrarComponente(!display)
      setMostrarComponente2(display)
      return;
    }
    setMostrarComponente(display)
    setMostrarComponente2(display)
  },[display])

  function getValue(disable){
    if(disable){
      return dispatch(
        {
          type: action,
          payload : {name : idInput, value : ""}
        })
    }
  }
  useEffect(()=>{
    getValue(disable);
  },[disable])
  

  return (
    <div className="formulario__grupo__inputs mt-2">
        <div className="form-check p-0">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {nameInput}

          </label>
          <input className={mostrarComponente ? "select-date-DatosPerson" : "none"} type="checkbox"  id="flexCheckChecked"  checked={checked} disabled={disabled} />
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <input className={mostrarComponente2 ? "form-check-input " : "none"} value={disable} type="checkbox" onClick={()=> setDisable(!disable)}  id="flexCheckChecked"  checked={checked} disabled={disabled} />
            <input id={idInput} className={mostrarComponente2 ? "secondCheck2" : "secondCheck"} name={idInput} type="date" value={disable ? ()=> dispatch(
          {
            type: action,
            payload : {name : idInput, value : ""}
          }) : fecha} disabled={disabled ? disabled : disable} onChange={(e)=>onChange(e,idInput)} />
            
        </div>
    </div>
  )
}

export default InputDate