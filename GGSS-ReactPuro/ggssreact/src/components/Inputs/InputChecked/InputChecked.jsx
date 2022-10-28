import React from "react";
import "./InputChecked.css";

const InputChecked = ({
  inputId,
  nameInput,
  placeHolder,
  value,
  onChange,
  checked,
  nameCheck,
}) => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="row">
          <div className="d-flex align-items-center col-xl-3">
            <label className="formulario__label" htmlFor={inputId}>
              {nameInput}
            </label>
          </div>
          <div className="d-flex align-items-center col-xl-6 px-0">
            <input
              type="text"
              className="form-control formulario-input-Familia px-0"
              id={inputId}
              placeholder={placeHolder}
              value={value}
              onChange={(e) => 
                onChange(e)}
            />
          <div className="d-flex align-items-center col-xl-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked={checked}
            />
            <label class="form-check-label" for="flexCheckChecked">
              {nameCheck}
            </label>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InputChecked;
