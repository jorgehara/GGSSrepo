import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./InputDate.css";

const InputDate = ({ nameInput,display, checked, value, disabled,idInput, onChange,datosPersonalesValue, action, setDisable, disable, actionReset }) => {
  
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [mostrarComponente2, setMostrarComponente2] = useState(true);
  const [valor, setValor] = useState("");
  const fecha = value !== null && value !== undefined ? value.substring(0, value.length -9) : null;
  const dispatch = useDispatch();
  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])

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
  
  console.log(idInput)

  return (
    <div className="formulario__grupo__inputs mt-2">
        <div class="form-check p-0">
          <label class="form-check-label" for="flexCheckDefault">
            {nameInput}

          </label>
          <input className={mostrarComponente ? "select-date-DatosPerson" : "none"} type="checkbox"  id="flexCheckChecked"  checked={checked} disabled={disabled} />
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
            <input className={mostrarComponente2 ? "form-check-input " : "none"} type="checkbox" onClick={()=> setDisable(!disable)}  id="flexCheckChecked"  checked={checked} disabled={disabled} />
            <input id={idInput} className={mostrarComponente2 ? "secondCheck2" : "secondCheck"} name={idInput} type="date" value={disable ? ()=> dispatch(
          {
            type: action,
            payload : {name : idInput, value : ""}
          }) : valor} disabled={disabled ? disabled : disable} onChange={(e)=>onChange(e,action)} />
            
        </div>
    </div>
  )
}

export default InputDate