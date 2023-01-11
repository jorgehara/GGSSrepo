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
    <>
      <div className="row">
      <div className="col">
        <label className=" ">
          {nameLabel}
        </label>
      </div>
      <div className="col">
        <select
          className={
            obligatorio
              ? " obligatorio"
              : ""
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
      <div className="col">
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
      <div className="col">
      <div className={
          mostrarComponente
            ? " "
            : "none"
        }
      >
        <input
          className=""
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
    </>
  );
};

export default PaisOrigenFlia;
