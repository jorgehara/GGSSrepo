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
  action,
  onChange,
  idInput,
  namePropOp,
  propArrayOpMasc,
  propArrayOpFem,
  propIdSelect
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [returnBySexo, setReturnBySexo] = useState([]);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);
  console.log(femeninos)
  useEffect(() => {
    setReturnBySexo(validateSexo(sexo, masculinos, femeninos, propArrayOpMasc, propArrayOpFem));
  }, [sexo]);

  const validateSexo = (sexo, masculinos, femeninos, propMAsc, propFem) => {
    if (sexo === "M") {
      return masculinos && masculinos.map((item)=> {return {...item, masculino : item[propMAsc] } });
    }
    if (sexo === "F") {
      console.log(femeninos);
      return femeninos && femeninos.map((item)=> {return {...item, femeino : item[propFem]}});
    }
  };
  console.log(propArrayOpMasc)

  return (
    <div className="formulario__grupo mt-2">
      <div className="">
        <label className="formulario-label-ParentescoFliaOpcions mt-2 ">
          {nameInput}
        </label>
      </div>
      <div className="SelectedFlia px-0">
        <select
          className="form-select mt-1 "
          disabled={disable}
          id={idInput}
          name={idInput}
          onChange={(e)=> onChange(e, action)}
        >
          <option value="">Seleccionar</option>
            {/* {
            array.map((op, i) => {
              return propArray === op ?<option selected defaultValue  key={i}>{op}</option> : <option key={i}>{op}</option>
            })
          } */}

          {sexo  && sexo.length > 0 && returnBySexo 
            ? returnBySexo.map((op, index) => {
                return propArray === op ? (
                  <option key={index} selected defaultValue value={op[propIdSelect]}>
                    {sexo && sexo === "M" ? op[namePropOp] : op[propArrayOpFem] } 
                  </option>
                ) : (
                  <option key={index} value={op[propIdSelect]}>{sexo && sexo === "M" ? op[namePropOp] : op[propArrayOpFem]}</option>
                );
              })
            : array && array.map((op, i) => {
                return <option value={op[propIdSelect]} key={i}>{op[namePropOp]}</option>;
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
  );
};

export default NacionalidadFlia;
