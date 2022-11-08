import React, { useEffect, useState } from 'react'
import "./InputRadio.css";



const InputRadio = ({ nameInput, nameFirst, nameSecond, value,disabled }) => {
  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false);

  useEffect(() => {
    valueInput();
  }, [valorRadioM, valorRadioF, value]);

  const valueInput = () => {
    if (value === "M") {
      setValorRadioM(true);
      setValorRadioF(false);
    }
    if (value === "F") {
      setValorRadioF(true);
      setValorRadioM(false);
    }
  };
  return (
    <div className="formulario__grupo__inputs__radio">
        <div className='form__grupo__label'>
            <label className='formulario-label-Sexo'  htmlFor="">{nameInput}</label>
        </div>
        <div className="formulario-input-Sexo">
          <input className="form-check-input" type="radio" id="inlineCheckbox1" name={nameInput} defaultChecked checked={valorRadioM} onChange={(e)=> setValorRadioM(e.target.value)} value={valorRadioM} disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className="formulario-input-SexoF">
          <input className="form-check-input" type="radio" id="inlineCheckbox2" name={nameInput} defaultChecked checked={valorRadioF} onChange={(e)=> setValorRadioF(e.target.value)} value={valorRadioF} disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  );
};

export default InputRadio;
