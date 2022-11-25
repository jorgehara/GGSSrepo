import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
import "./InputOpcionsFlia.css";
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
  nameInput
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <div className="formulario__grupo mt-1">
      <div className="">
        <label className="formulario-label-ParentescoFliaOpcions mt-2">{nameLabel}</label>
      </div>
      <div className="SelectedFliaPais px-0">
        <select className="form-select ml-0 mt-1" name={nameInput} disabled={disable} onChange={(e)=> onChange(e,action)}>
          <option value="">Seleccionar</option>
          {
           array && array.map((op, i) => {
              return propArray === op ?<option selected defaultValue value={op[idSelected]}  key={i}>{op[namePropValue]}</option> : <option key={i} value={op[idSelected]}>{op[namePropValue]}</option>
            })
          }
        </select>
      </div>
      <div className="ml-0 d-flex justify-content-cener align-items-center btn-modal-nacio">
        <ButtonCallModal idModal={idModal} className={mostrarComponente ? "tercero btn btn-validacion btn-outline-danger btn-sm ml-2 " : "none"} nameButton={nameButton} useNavbar={false} useButton={true} disabled={disable}/> 
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
