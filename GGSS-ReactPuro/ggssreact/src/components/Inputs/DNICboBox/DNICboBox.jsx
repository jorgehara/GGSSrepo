import React from "react";
import "./DNICboBox.css";
const DNICboBox = ({ nameInput, messageError, placeHolder, array, value }) => {
  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-DNI mt-2">{nameInput}</label>
      </div>
      <div className="">
        <select className="formulario-input-DNI form-select ml-0 px-0">
          {array.map((op, i) => {
            return <option key={i}>{op}</option>;
          })}
        </select>
      </div>
      <div className="form__grupo__input2">
        <input
          type="text"
          maxLength="8"
          className="formulario-input-DNI px-0 mt-0 mb-0"
          placeholder={placeHolder}
          value={value}
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
