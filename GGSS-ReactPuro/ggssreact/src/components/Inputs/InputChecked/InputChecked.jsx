import React from "react";
import "./InputChecked.css";

const InputChecked = ({
  nameLabel,
  placeHolder,
  value,
  checked,
  nameCheck,
  disabled,
  idInput,
  nameInput,
  onChange
}) => {
  return (
    <div className="row">
      <div className="col-xl-12 mt-2">
        <div className="row">
          <div className="d-flex align-items-center col-xl-5">
            <label className="formulario__label w-100" htmlFor={idInput}>
              {nameLabel}
            </label>
          </div>
          <div className="d-flex align-items-center col-xl-4 px-0">
            <input
              type="text"
              className="form-control formulario-input-Familia px-0"
              id={idInput}
              placeholder={placeHolder}
              value={value}
              name={nameInput}
              onChange={(e) => 
                onChange(e)}
              disabled={disabled}
            />

          <div className="d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked={checked}
              disabled={disabled}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
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
