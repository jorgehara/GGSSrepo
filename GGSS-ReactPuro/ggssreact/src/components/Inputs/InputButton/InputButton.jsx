import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./InputButton.css";

const InputButton = ({nameButton, placeholder, nameLabel, maxLeght, value, disabled, nameInput, id,onChange,funcionCuil,nroDocumento,genre, usaCuil,datosPersonalesValue, action,swal , clasess}) => {

  const [valor, setValor] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({
      type : action,
      payload : { name : id, value : valor }
    })
  },[valor])

  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])
  
  useEffect(()=>{
    
    setValor(value);
  },[value])
  console.log(datosPersonalesValue)
  return (
    clasess ? <div className={clasess.classOne}>
    <div className={clasess.classTwo}>
        <label className={clasess.classThree} htmlFor={nameInput}>{nameLabel}</label>
    </div>
    <div className={clasess.classFour}>
        <input type="text" 
                value={ datosPersonalesValue !== undefined && datosPersonalesValue !== "" ? datosPersonalesValue : valor }
                maxLength={maxLeght}
                className={clasess.classFive} 
                placeholder={placeholder} 
                id={id} 
                name={id}
                disabled={disabled}
                onChange={(e)=> onChange(e,action )}
                />
    </div>
    <button type="button" onClick={()=>setValor(funcionCuil(nroDocumento,genre, swal))}
          className={clasess.classSix} disabled={disabled}>
          {nameButton}
    </button>
</div> 
        : 
<div className="formulario__grupo__inputs">
        <div className='formulario__grupo'>
            <label className='formulario__label mt-2' htmlFor={nameInput}>{nameLabel}</label>
        </div>
        <div className='form__grupo-input'>
            <input type="text" 
                    value={ datosPersonalesValue !== undefined && datosPersonalesValue !== "" ? datosPersonalesValue : valor }
                    maxLength={maxLeght}
                    className="formulario-input-Legajo col ml-0 px-0 mt-0 mb-2 mr-1" 
                    placeholder={placeholder} 
                    id={id} 
                    name={id}
                    disabled={disabled}
                    onChange={(e)=> onChange(e,action )}
                    />
        </div>
			  <button type="button" onClick={()=>setValor(funcionCuil(nroDocumento,genre, swal))}
              className="btn btn-validacion btn-outline-danger ml-2" disabled={disabled}>
              {nameButton}
        </button>
    </div>
  );
};
export default InputButton;
