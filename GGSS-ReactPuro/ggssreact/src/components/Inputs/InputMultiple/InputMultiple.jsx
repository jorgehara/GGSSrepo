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
  disable,
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
    // <div className="container-flex align-items-center">
    <div className="formulario__grupo ">
      <div className="d-flex justify-content-center align-items-center">
        <label className="form-label-DNIFamilia mt-1 ">{nameInputDNI}</label>
      </div>
      <div className="">
        <select
          // disabled={disabled}
          className="formulario-input-DNI form-select ml-0 px-0"
          // id={selectedId}
          // value={datosPersonalesValue2}
          // name={selectedId}
          // onChange={(e) => onChange(e)}
        >
          {/* {array.map((op, i) => {
            return propArray === op ? (
              <option selected key={i} value={op}>
                {op}
              </option>
            ) : (
              <option key={i} value={op}>
                {op}
              </option>
            );
          })} */}
        </select>
      </div>
      <div className="form__grupo__input2 d-flex justify-content-center align-items-center">
        <input
          type="text"
          maxLength="8"
          value={valueDNI}
          className="form-input-DNIFamilia px-0 mt-0 mb-0"
          placeholder={placeholder}
          disabled={disable}
        ></input>
      </div>
      <div className="form__grupo__icon">
        <i className="fas fa-times-circle"></i>
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
        <div className="d-flex flex-row justify-content-center align-items-center pt-4 pb-4">
          <input
            className="form-check-input"
            type="radio"
            id="inlineCheckbox1"
            name={nameInputRadio}
            checked={valorRadioM}
            onChange={(e) => setValorRadioM(e.target.value)}
            value={valorRadioM}
            disabled={disable}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            {nameFirst}
          </label>
          <input
            className="form-check-input p-1"
            type="radio"
            id="inlineCheckbox2"
            name={nameInputRadio}
            checked={valorRadioF}
            onChange={(e) => setValorRadioF(e.target.value)}
            value={valorRadioF}
            disabled={disable}
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            {nameSecond}
          </label>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default InputMultiple;
