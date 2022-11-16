import React from "react";
import './InputEmpData.css';

const InputEmpData = ({ idInput, inputValue, nameLabel,disabled }) => {
  return (
    <div className="row">
      <label className="col-sm-2 col-form-label " 
      htmlFor={idInput}>
        {nameLabel}
      </label>
      <div class="col-sm-10">
      <input
      readOnly="readonly"
        className="form-input-FliaCabecera"
        type="text"
        id={idInput}
        name={idInput}
        value={inputValue}
        disabled={disabled}
      />
      </div>
    </div>
  );
};

export default InputEmpData;
