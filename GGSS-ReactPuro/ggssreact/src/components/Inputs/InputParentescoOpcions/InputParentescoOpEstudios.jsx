import React, { useEffect, useState } from "react";
import "./InputParentescoOpcions.css";
const InputParentescoOpEstudios = ({
  nameInput,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo mt-1">
      <div className="">
        <label class="formulario-label-ParentescoFliaOpEstudios mt-2">{nameInput}</label>
      </div>
      <div className="">
        <select class="form-select ml-4 mt-1">
          {array.map((op) => {
            return <option>{op}</option>;
          })}
        </select>
      </div>
      <div className="ml-4 pl-1">
        <button
          type="button"
          class="tercero btn btn-validacion btn-outline-danger btn-sm ml-2 pl-2 mt-2"
        >
          {nameButton}
        </button>
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

export default InputParentescoOpEstudios;
