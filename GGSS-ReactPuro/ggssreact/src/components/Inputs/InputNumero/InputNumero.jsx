import React, { useEffect, useState } from "react";
import "./InputNumero.css";
const InputNumero = ({
  nameInput,
  array,
  placeHolder,
  nameCheck,
  defaultChecked,
  display,
  value,
  disabled
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo">
      <div className="w-100 d-flex flex-row justify-content-flex-start align-items-center">
        <label className="label_numeros">{nameInput}</label>
        <div className="d-flex flex-row justify-content-flex-start align-items-center">
          <input type="text" 
                    className='formulario-input-Legajo '                                   
                      placeholder={placeHolder}
                      value={value}  
                      disabled={disabled}         
                      />
        </div>
           
      <div
        className={
          mostrarComponente
            ? "d-flex align-items-center col-xl-3 ml-3 pl-2"
            : "none"
        }
      >
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {nameCheck}
        </label>
      </div> 
      </div> 
    </div>
  );
};

export default InputNumero;
