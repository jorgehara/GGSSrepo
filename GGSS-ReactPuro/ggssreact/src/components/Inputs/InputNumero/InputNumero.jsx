import React, { useEffect, useState } from "react";
import "./InputNumero.css";
const InputNumero = ({
  nameInput,
  array,
  placeHolder,
  // nameButton,
  nameCheck,
  checked,
  display,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo">
      <div className="">
        <label class="formulario-label-ParentescoFlia mt-2 pr-1">{nameInput}</label>
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
        {/* <select class="form-select form_select-ParentescoFlia ml-3 px-0 formulario-input-ParentescoFlia">
          {array.map((op) => {
            return <option>{op}</option>;
          })}
        </select> */}
      </div>
      <div className="form__grupo__input2">
        {/* <button type="button" class="tercero btn btn-validacion btn-outline-danger btn-sm ml-2 pl-2 mt-2"> 
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
  );
};

export default InputNumero;
