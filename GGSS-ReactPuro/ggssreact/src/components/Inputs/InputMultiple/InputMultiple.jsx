import React, { useEffect, useState } from "react";
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
}) => {
  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false);

  useEffect(() => {
    valueInput();
  }, [valorRadioM, valorRadioF, valueRadio]);

  console.log(valueRadio);

  const valueInput = () => {
    if (valueRadio === "M") {
      setValorRadioM(true);
      setValorRadioF(false);
    }
    if (valueRadio === "F") {
      setValorRadioF(true);
      setValorRadioM(false);
    }
  };
  return (
    <div className="container-flex align-items-center">
      <div className="formulario__grupo">
        <div className="">
          <label class="formulario-label-DNIFamilia">{nameInputDNI}</label>
        </div>
        <div className="">
          <select class="form-select form_select px-0 mt-0 mb-0">
            {optionsDNI.map((op) => {
              return <option>{op}</option>;
            })}
          </select>
        </div>
        <div className="form__grupo__input2">
          <input
            type="text"
            maxlength="8"
            value={valueDNI}
            className="formulario-input-DNI px-0 mt-0 mb-0"
            placeholder={placeholder}
          ></input>
        </div>
        <div className="form__grupo__icon">
          <i class="fas fa-times-circle"></i>
        </div>
        <div className="form__grupo__error">
          <p></p>
        </div>
        <div className="formulario__grupo__inputs__radio">
          <div className="form__grupo__label">
            <label className="form__grupo__label__label" htmlFor="legajo">
              {nameInputRadio}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              name={nameInputRadio}
              checked={valorRadioM}
              onChange={(e) => setValorRadioM(e.target.value)}
              value={valorRadioM}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              {nameFirst}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              name={nameInputRadio}
              checked={valorRadioF}
              onChange={(e) => setValorRadioF(e.target.value)}
              value={valorRadioF}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              {nameSecond}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMultiple;
