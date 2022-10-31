import React from "react";

const InputEmpData = ({ idInput, inputValue, nameLabel }) => {
  return (
    <div>
      <label className=" mt-1" 
      htmlFor={idInput}>
        {nameLabel}
        </label>
      <input
        className="form-control"
        type="text"
        id={idInput}
        name={idInput}
        value={inputValue}
      />
    </div>
  );
};

export default InputEmpData;
