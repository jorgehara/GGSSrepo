import React, { useEffect, useState } from "react";
import Familia from "../../Familia/Familia";
import "./InputMultiple.css";

const InputMultiple = ({
  valueDNI,
  nameInputDNI,
  optionsDNI,
  valueRadio,
  nameFirst,
  nameSecond,
  nameInputRadio,
  placeholder,
  disable,
  propsRadioButton,
  onChange,
  datosFamiliaValue1,
  datosFamiliaRadio1,
  datosFamiliaRadio2
}) => {
  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false); 


  useEffect(()=>{
    initialValue(valueRadio);
  },[valueRadio])
  
  function initialValue(valueRadio){
    if(valueRadio === "M"){
      setValorRadioM(true);
      setValorRadioF(false);
      return;
    }
    if(valueRadio === "F"){
      setValorRadioF(true);
      setValorRadioM(false);
      return;
    }
  }
  const valueInput = (valor) => {
    
      if(valor === "M"){
        setValorRadioM(true);
        setValorRadioF(false);
        return;
      }
      if(valor === "F"){
        setValorRadioF(true);
        setValorRadioM(false);
        return;
      } 
    }    
  
  console.log(valueRadio)
  return (
    // <div className="container-flex align-items-center">
      <div className="formulario__grupo ">
        <div className=" d-flex flex-row justify-content-start align-items-center">
          <div className="col-xl-6  d-flex justify-content-start align-items-center">
            <label className="formulario-label-DNIFamilia mt-1 ">{nameInputDNI}</label>
          </div>
          <div>
            
          </div>
          <div className="col-xl-4   d-flex justify-content-center align-items-center">
            <select className="formulario-input-DNI-familia form-select  px-0" value={datosFamiliaValue1 !== undefined ? datosFamiliaValue1 : null}  disabled={disable} id={propsRadioButton.idCboDni} name={propsRadioButton.idCboDni} onChange={(e)=>onChange(e)}>
              {optionsDNI.map((op, i) => {
                return <option key={i} value={op}>{op}</option>;
              })}
            </select>
          </div>
          <div className="col-xl-2 d-flex justify-content-center align-items-center">
            <input
              type="text"
              maxLength="8"
              value={valueDNI}
              className="formulario-input-DNI-input px-0 mt-0 mb-0"
              placeholder={placeholder}
              disabled={disable}
              id={propsRadioButton.idNroDni}
              name={propsRadioButton.idNroDni}
              onChange={(e)=>onChange(e)}
            ></input>
          </div>
          <div className="form__grupo__icon">
            <i className="fas fa-times-circle"></i>
          </div>
          <div className="form__grupo__error">
            <p></p>
          </div>
          <div className="col-xl-4  form-inputs-radio">
            <div className="form__grupo__label">
              <label className="form__grupo__label__label" htmlFor="legajo">
                {nameInputRadio}
              </label>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  id={propsRadioButton.idRadioBtnMasc}
                  name={propsRadioButton.idRadioBtnMasc}
                  checked={valorRadioM}
                  onChange={(e)=>onChange(e)}
                  onClick={(e)=>valueInput(e.target.value)}
                  value="M"
                  disabled={disable}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  {nameFirst}
                </label>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <input
                  className="form-check-input p-1"
                  type="radio"
                  id={propsRadioButton.idRadioBtnMasc}
                  name={propsRadioButton.idRadioBtnFem}
                  checked={valorRadioF}
                  onChange={(e)=>onChange(e)}
                  onClick={(e)=>valueInput(e.target.value)}
                  value="F"
                  disabled={disable}
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  {nameSecond}
                </label>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    // </div>
  );
};

export default InputMultiple;
