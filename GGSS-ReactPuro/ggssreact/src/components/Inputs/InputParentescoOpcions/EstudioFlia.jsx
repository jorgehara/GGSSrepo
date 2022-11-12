import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputOpcionsFlia.css";
const EstudioFlia = ({
  nameInput,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
  propArray,
  idModal,
  disable,
  valueInputEstudios,
  idInput,
  onChange,
  generalState,
  setGeneralState,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo mt-2">
      <div className="row">
        <div className="col-xl-4 ">
          <label className="form-label-EstudiosFlia mt-2">
            {nameInput}
          </label>
        </div>
        <div className="col-xl-3 ">
          <select
            className="form-select ml-4 mt-1 selectFormFlia"
            disabled={disable}
            name={idInput}
            id={idInput}
            value={valueInputEstudios}
            onChange={
            (e)=> onChange(e, generalState, setGeneralState)
          }
          >
            {array.map((op, i) => {
              return propArray == op ? (
                <option key={i} 
                value={op}
                selected defaultValue>
                  {op}
                </option>
              ) : (
                <option key={i} 
                value={op}
                defaultValue>
                  {op}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-xl-3 d-flex justify-content-cener align-items-center btn-modal-estu">
          <ButtonCallModal
            idModal={idModal}
            className={
              mostrarComponente
                ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 "
                : "none"
            }
            nameButton={nameButton}
            useNavbar={false}
            useButton={true}
            disabled={disable}
          />
        </div>
        <div className="radio-Fijar-estu mt-2">
        <div
          className={
            mostrarComponente
              ? "col-xl-2 d-flex align-items-center ml-3 pl-2"
              : "none"
          }
        >
          <input
            className="form-check-input"
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

export default EstudioFlia;