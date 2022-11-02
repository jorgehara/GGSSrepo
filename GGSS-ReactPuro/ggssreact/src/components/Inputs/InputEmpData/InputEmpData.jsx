import React from "react";

const InputEmpData = ({ idInput, inputValue, nameLabel }) => {
  return (
    <div>
      <label className=" m-0" 
      htmlFor={idInput}>
        {nameLabel}
        </label>
      <input
        className="form-control-sm"
        type="text"
        id={idInput}
        name={idInput}
        value={inputValue}
      />
    </div>
  );
};

export default InputEmpData;
