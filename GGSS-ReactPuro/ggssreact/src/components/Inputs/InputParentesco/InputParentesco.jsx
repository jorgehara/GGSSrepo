import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputParentesco.css";
const InputParentesco = ({
  nameInput,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
  idModal
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-ParentescoFlia mt-2">{nameInput}</label>
      </div>
      <div className="">
        <select className="form-select form_select-ParentescoFlia ml-3 px-0 formulario-input-ParentescoFlia">
          {array.map((op, i) => {
            return <option key={i}>{op}</option>;
          })}
        </select>
      </div>
      <div className="form__grupo__input2 d-flex justify-content-center align-items-center">
        <ButtonCallModal idModal={idModal} className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"} nameButton={nameButton} useNavbar={false} useButton={true}/>   
      </div>
      <div
        className={
          mostrarComponente
            ? "d-flex align-items-center col-xl-3 ml-3 pl-2"
            : "none"
        }
      >
        <input
          className="form-check-input "
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

export default InputParentesco;
