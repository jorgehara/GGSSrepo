import React from "react";

const InputEmpData = ({ idInput, inputValue, nameLabel }) => {
  
  
  
  
  return (
    <div>
      <label htmlFor={idInput}>{nameLabel}</label>
      <input
        type="text"
        id={idInput}
        name={idInput}
        value={inputValue}
      />
    </div>
  );
};

export default InputEmpData;
