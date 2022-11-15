import React, { useEffect, useState } from "react";
import "./DNICboBox.css";
const DNICboBox = ({ nameInput, messageError, placeHolder, array, value , disabled, idInput, nameLabel, onChange, selectedId, datosPersonalesValue, propArray, datosPersonalesValue2, generalState, action, validateNumbersDNI}) => {


  const [valor, setValor] = useState("");
  

  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])
  
  useEffect(()=>{
    console.log(`entro con valor ${value}`);
    setValor(value);
  },[value])


  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-DNI mt-2 ml-4">{nameLabel}</label>
      </div>
      <div className="">
        <select disabled={disabled} className="formulario-input-DNI form-select ml-0 px-0" id={selectedId} value={datosPersonalesValue2} name={selectedId} onChange={(e)=> onChange(e, action)}>
          {array.map((op, i) => {
            return (propArray === op ? <option selected key={i} value={op}>{op}</option> : <option key={i} value={op}>{op}</option>);
          })}
        </select>
      </div>
      <div className="ml-3">
        <input
          type="text"
          id={idInput}
          maxLength="8"
          name={nameInput}
          className="formulario-input-DNI  mx-1"
          placeholder={placeHolder}
          value={ valor}
          disabled={disabled}
          onChange={(e)=> onChange(e,action)}
          onKeyPress={(e)=>validateNumbersDNI(e)}
        ></input>
      </div>
      <div className="form__grupo__icon">
        <i className="fas fa-times-circle"></i>
      </div>
      <div className="form__grupo__error">
        <p>{messageError}</p>
      </div>
    </div>
  );
};

export default DNICboBox;
