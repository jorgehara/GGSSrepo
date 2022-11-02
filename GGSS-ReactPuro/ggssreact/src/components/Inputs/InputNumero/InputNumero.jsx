import React, { useEffect, useState } from "react";
import "./InputNumero.css";
const InputNumero = ({
  nameInput,
  array,
  placeHolder,
  // nameButton,
  nameCheck,
  defaultChecked,
  display,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-ParentescoFlia mt-2 pr-1">{nameInput}</label>
      </div>
      <div className="">
      <input type="text" 
                  className='formulario-input-Legajo ml-4'      
                    // id={inputId}                               
                    placeholder={placeHolder}
				            // value={value} 
                    // onChange={(e)=>
                    //   // onChange(e)
                    // }            
                    />
        {/* <select className="form-select form_select-ParentescoFlia ml-3 px-0 formulario-input-ParentescoFlia">
          {array.map((op) => {
            return <option>{op}</option>;
          })}
        </select> */}
      </div>
      <div className="form__grupo__input2">
        {/* <button type="button" className="tercero btn btn-validacion btn-outline-danger btn-sm ml-2 pl-2 mt-2"> 
          {nameButton} </button> */}
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
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {nameCheck}
        </label>
      </div>
    </div>
  );
};

export default InputNumero;
