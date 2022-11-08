import React, { useEffect, useState } from 'react'
import "./InputRadio.css";



const InputRadio = ({  nameFirst, nameSecond, value,disabled, onChange,idInput,nameLabel ,datosPersonalesValue}) => {

  const [valor, setValor] = useState("");
  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false);

  useEffect(() => {
    valueInput();
  }, [valorRadioM, valorRadioF, valor]);
  useEffect(()=>{
    setValor(datosPersonalesValue)
  },[datosPersonalesValue])

  useEffect(()=>{
    setValor(value);
  },[value])

  console.log(valor) 

  const valueInput = () => {
    if (valor === "M") {
      console.log("entro")
      setValorRadioM(true);
      setValorRadioF(false);
    }
    if (valor === "F") {
      console.log("no entro")
      setValorRadioF(true);
      setValorRadioM(false);
    }
  };
  return (
    <div className="formulario__grupo__inputs__radio">
        <div className='form__grupo__label'>
            <label className='formulario-label-Sexo'  htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className="formulario-input-Sexo">
          <input className="form-check-input" type="radio" id={idInput} name={idInput} defaultChecked checked={valorRadioM} onChange={(e)=> onChange(e)} value="M" disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className="formulario-input-SexoF">
          <input className="form-check-input" type="radio" id="inlineCheckbox2" name={idInput} defaultChecked checked={valorRadioF} onChange={(e)=> onChange(e)} value="F" disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  );
};

export default InputRadio;
