import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import "./InputButtonCUIL.css";

const InputButtonCUIL = ({cancelar, idInput, nameLabel, placeHolder, obligatorio, inputId, value,disabled,onChange,funcionCuil, clasess,nroDocumento,genre, nameButton, datosPersonalesValue, action, id }) => {
    const [valor, setValor] = useState();
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

  return (
    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label" htmlFor={inputId}>
          {nameLabel}
        </label>
      </div>
      <div className="form__grupo-input">
        {
          obligatorio ? 
          <input
          type="text"
          className="legajo__limpia formulario-input-Legajo-cuil obligatorio"
          id={idInput}
          data-bs-toggle="tooltip" 
          autocomplete="off"
          data-bs-placement="top"
          data-bs-title="Campo obligario"
          placeholder={placeHolder}
          value={ cancelar ? null : value  }
          onChange={(e)=>onChange(e.target.value, idInput)}
          disabled={disabled}
          name={idInput}
        /> :
        <input
          type="text"
          className="formulario-input-Legajo-cuil"
          id={idInput}
          autocomplete="off"
          placeholder={placeHolder}
          value={ cancelar ? null : value  }
          onChange={(e)=>onChange(e.target.value, idInput)}
          disabled={disabled}
          name={idInput}
        />
        }
      </div>
      <div className="form__grupo__icons">
        <button type="button" onClick={()=>setValor(funcionCuil(nroDocumento,genre, swal))}
              className="btn btn-validacion btn-sm btn-outline-danger" 
              disabled={disabled}
              // disabled={mostrarAsidePagos}
              >
              {nameButton}
        </button>
    </div>
    </div>
  )}

export default InputButtonCUIL;