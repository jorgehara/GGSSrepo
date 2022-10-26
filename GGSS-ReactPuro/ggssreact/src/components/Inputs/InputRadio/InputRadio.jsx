import React from "react";

const InputRadio = ({ nameInput, nameFirst, nameSecond }) => {
  return (
    <div className="formulario__grupo__inputs mt-2">
      <div className="form__grupo__label">
        <label className="form__grupo__label__label " for="legajo">
          {nameInput}
        </label>
      </div>
      <div class="form-check form-check-inline ml-4">
        <input
          class="form-check-input"
          type="radio"
          id=""
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          {nameFirst}
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id=""
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          {nameSecond}
        </label>
      </div>
import React, { useEffect, useState } from 'react'

const InputRadio = ({nameInput, nameFirst, nameSecond, value}) => {

  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false);

  useEffect(()=>{
    valueInput()
  },[valorRadioM,valorRadioF, value])

  const valueInput=()=>{
    if(value === "M"){
      setValorRadioM(true);
      setValorRadioF(false);
    }
    if(value === "F"){
      setValorRadioF(true);
      setValorRadioM(false);
    }
    
  }

  return (
    <div className="formulario__grupo__inputs">
        <div className='form__grupo__label'>
            <label className='form__grupo__label__label'  htmlFor="legajo">{nameInput}</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" id="inlineCheckbox1" name={nameInput} checked={valorRadioM} onChange={(e)=> setValorRadioM(e.target.value)} value={valorRadioM}/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" id="inlineCheckbox2" name={nameInput} checked={valorRadioF} onChange={(e)=> setValorRadioF(e.target.value)} value={valorRadioF}/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  );
};

export default InputRadio;
