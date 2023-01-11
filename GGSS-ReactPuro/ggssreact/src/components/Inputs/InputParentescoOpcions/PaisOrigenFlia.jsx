import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
// import "./InputOpcionsFlia.css";
const PaisOrigenFlia = ({
  nameLabel,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
  propArray,
  idModal,
  disable,
  action,
  onChange,
  namePropValue,
  idSelected,
  nameInput,
  obligatorio,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className=" ">
      <div className="">
        <label className=" mt-3">
          {nameLabel}
        </label>
      </div>
      <div className=" px-0">
        <select
          className={
            obligatorio
              ? "form-select ml-0 mt-1 obligatorio"
              : "form-select ml-0 mt-1"
          }
          name={nameInput}
          disabled={disable}
          onChange={(e) => onChange(e.target.value, nameInput)}
        >
          <option value="">Seleccionar</option>
          {array &&
            array.map((op, i) => {
              return propArray === op[idSelected] ? (
                <option selected defaultValue value={op[idSelected]} key={i}>
                  {op[namePropValue]}
                </option>
              ) : (
                <option key={i} value={op[idSelected]}>
                  {op[namePropValue]}
                </option>
              );
            })}
        </select>
      </div>
      <div className="ml-0 d-flex justify-content-center align-items-center ">
        {/* <ButtonCallModal
        idModal={idModal}
        className={
          mostrarComponente
            ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2"
            : "none"
        }
        nameButton={nameButton}
        useNavbar={false}
        disableButton={true}
        useButton={false}
        disabled={disable}
        /> */}
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
          disabled={disable}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          {nameCheck}
        </label>
      </div>
    </div>
  );
};

export default PaisOrigenFlia;
