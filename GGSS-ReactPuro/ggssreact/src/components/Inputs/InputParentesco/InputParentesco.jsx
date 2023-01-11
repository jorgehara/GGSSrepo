import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
// import "./InputParentesco.css";

//se agregan nuevas props idInput (que nosotros le seteamos), el value(el valor actualizado), el Estado General, y el Set del Estado General por último el onChange para que actualice en Estado General y así cambia la vista
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
  onChange,
  action,
  propArrayOp,
  propIdSelect,
  obligatorio
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <>
      <div className="row">
      <div className="col">
          <label className=" ">
            {nameInput}
          </label>
        </div>
        <div className="col">
          <select
            className={obligatorio ? "form-select px-0 obligatorio" : "form-select px-0 "}
            disabled={disable}
            //name={idInput}
            //id={idInput}
            //value={valueFliaParentesco}
            //onChange={
            //(e)=> onChange(e, generalState, setGeneralState)}
            name={idInput}
            id={idInput}
            value={value}
            onChange={(e)=> onChange(e.target.value, idInput)}
          >
            <option value="">Seleccionar</option>
            {array  &&
              array.map((op, i) => {
                return propArray === op[propIdSelect] ? (
                  <option selected key={i}
                  value={op[propIdSelect]}
                  >
                    {op[propArrayOp]}
                  </option>
                ) : (
                  <option key={i}
                  value={op[propIdSelect]}
                  >
                    {op[propArrayOp]}</option>
                  // <option selected key={i} 
                  // value={op}
                  // >
                  //   {op}
                  // </option>
                ) ;
                // :
                //  (<option key={i} 
                //   value={op}>{op}</option>
                // );
              })}
          </select>
        </div>
        <div className="col">
          <ButtonCallModal
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
          />
        </div>
        <div className="col ">
        <div className={
            mostrarComponente ? "" : "none"
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
          <label className="form-check-label " htmlFor="flexCheckChecked">
            {nameCheck}
          </label>
        </div>
        </div>
</div>
      </>
  );
};

export default InputParentesco;
