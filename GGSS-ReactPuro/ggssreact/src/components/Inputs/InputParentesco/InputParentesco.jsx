import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputParentesco.css";
const InputParentesco = ({
  nameInput,
  array,
  nameButton,
  nameCheck,
  checked,
  display,
  idModal,
  disable,
  propArray,
  idInput,
  value,
  generalState,
  setGeneralState,
  onChange
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo">
      <div className="row">
        <div className="col-xl-4    ">
          <label className="formulario-label-ParentescoFlia mt-2">
            {nameInput}
          </label>
        </div>
        <div className="col-xl-3">
          <select
            className="form-select px-0 form-input-ParentescoFlia"
            disabled={disable}
            name={idInput}
            id={idInput}
            value={value}
            onChange={(e)=> onChange(e, generalState, setGeneralState)}
          >
            {array !== undefined &&
              array !== null &&
              array.map((op, i) => {
                return propArray === op ? (
                  <option selected key={i} value={op}>
                    {op}
                  </option>
                ) : (
                  <option key={i} value={op}>{op}</option>
                );
              })}
          </select>
        </div>
        <div className="col-xl-3 d-flex justify-content-end align-items-center btn-modal-miau">
          <ButtonCallModal
            idModal={idModal}
            className={
              mostrarComponente
                ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2"
                : "none"
            }
            nameButton={nameButton}
            useNavbar={false}
            useButton={true}
            disabled={disable}
          />
        </div>
        <div className="col-xl-2 form-inputs-radioFijar mt-2">
        <div 
          className={
            mostrarComponente ? "d-flex align-items-center " : "none"
          }
        >
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={checked}
            disabled={disable}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            {nameCheck}
          </label>
        </div>


</div>
        
      </div>
    </div>
  );
};

export default InputParentesco;
