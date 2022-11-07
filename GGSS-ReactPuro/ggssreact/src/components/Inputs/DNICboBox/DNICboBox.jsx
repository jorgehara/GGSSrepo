import React, { useEffect, useState } from "react";
import "./DNICboBox.css";
const DNICboBox = ({ nameInput, messageError, placeHolder, array, value , disabled, idInput, nameLabel, onChange, selectedId, datosPersonalesValue, propArray, datosPersonalesValue2}) => {


  const [valor, setValor] = useState("");
  

  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])
  
  useEffect(()=>{
    console.log(`entro con valor ${value}`);
    setValor(value);
  },[value])


  console.log(valor)
  console.log(datosPersonalesValue)

  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-DNI mt-2">{nameLabel}</label>
      </div>
      <div className="">
        <select disabled={disabled} className="formulario-input-DNI form-select ml-0 px-0" id={selectedId} value={datosPersonalesValue2} name={selectedId} onChange={(e)=> onChange(e)}>
          {array.map((op, i) => {
            return (propArray === op ? <option selected key={i} value={op}>{op}</option> : <option key={i} value={op}>{op}</option>);
          })}
        </select>
      </div>
      <div className="form__grupo__input2">
        <input
          type="text"
          id={idInput}
          name={nameInput}
          maxLength="8"
          className="formulario-input-DNI px-0 mt-0 mb-0"
          placeholder={placeHolder}
          value={ valor}
          disabled={disabled}
          onChange={(e)=> onChange(e)}
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
