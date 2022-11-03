import React, { useEffect, useState } from "react";
import "./InputParentescoOpcions.css";
const InputParentescoOpcions = ({
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
        <label className="formulario-label-ParentescoFliaOpcions mt-2">{nameInput}</label>
      </div>
      <div className="">
        <select className="form-select form-select-Opcions ml-0 mt-1">
          {array.map((op, i) => {
            return <option key={i}>{op}</option>;
          })}
        </select>
      </div>
      <div className="ml-0">
        <button
          type="button"
          className="tercero btn btn-validacion btn-outline-danger btn-sm ml-2 pl-2 mt-2"
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
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={checked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {nameCheck}
        </label>
      </div>
    </div>
  );
};

export default InputParentescoOpcions;
