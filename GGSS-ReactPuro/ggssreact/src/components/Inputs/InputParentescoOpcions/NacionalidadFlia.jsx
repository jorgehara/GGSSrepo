import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputOpcionsFlia.css";
const NacionalidadFlia = ({
  nameInput,
  array,
  placeHolder,
  nameButton,
  nameCheck,
  checked,
  display,
  sexo,
  masculinos,
  femeninos,
  propArray,
  idModal,
  disable,
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [returnBySexo, setReturnBySexo] = useState([]);
  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);
  useEffect(() => {
    setReturnBySexo(validateSexo(sexo, masculinos, femeninos));
  }, [sexo]);
  const validateSexo = (sexo, masculinos, femeninos) => {
    if (sexo === "M") {
      console.log(masculinos);
      return masculinos;
    }
    if (sexo === "F") {
      console.log(femeninos);
      return femeninos;
    }
  };
  return (
    <div className="formulario__grupo mt-1">
      <div className="">
        <label className="formulario-label-ParentescoFliaOpcions mt-2 ">
          {nameInput}
        </label>
      </div>
      <div className="SelectedFlia px-0">
        <select
          className="form-select mt-1 "
          disabled={disable}
        >
            {/* {
            array.map((op, i) => {
              return propArray === op ?<option selected defaultValue  key={i}>{op}</option> : <option key={i}>{op}</option>
            })
          } */}

          {sexo !== undefined && sexo.length > 0 && returnBySexo !== undefined
            ? returnBySexo.map((op, index) => {
                return propArray === op ? (
                  <option key={index} selected defaultValue value={index}>
                    {op}
                  </option>
                ) : (
                  <option key={index}>{op}</option>
                );
              })
            : array.map((op, i) => {
                return <option key={i}>{op}</option>;
              })}
        </select>
      </div>
      <div className="btn-modal-nacio">
      <div className="d-flex justify-content-center align-items-center mt-1">
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

export default NacionalidadFlia;
