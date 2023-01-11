import React, { useEffect, useState } from "react";
import ButtonCallModal from "../../Buttons/ButtonCallModal";
// import "./InputOpcionsFlia.css";
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
  action,
  namePropOp,
  idSelect,
  obligatorio
}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  useEffect(() => {
    setMostrarComponente(display);
  }, [display]);

  return (
    <>
    <div className="row">
    <div className="col">

          <label className=" mt-2">
            {nameInput}
          </label>
      </div>
        
        <div className="col">
          <select
            className={obligatorio ? "form-select ml-4 mt-1 obligatorio" : "form-select ml-4 mt-1"}
            disabled={disable}
            name={idInput}
            id={idInput}
            value={valueInputEstudios}
            onChange={
            (e)=> onChange(e.target.value, idInput)
          }
          >
            <option value="">Seleccionar</option>
            {array && array.map((op, i) => {
              return propArray === op[idSelect] ? (
                <option key={i} 
                value={op[idSelect]}
                selected defaultValue>
                  {op[namePropOp]}
                </option>
              ) : (
                <option key={i} 
                value={op[idSelect]}
                defaultValue>
                  {op[namePropOp]}
                </option>
              );
            })}
          </select>
        </div>

    <div className="col">


        <div className="">
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
            useButton={true}
            disabled={disable}
          /> */}
        </div>

        </div>

        <div className="col">
        <div className={
            mostrarComponente
              ? "col-xl-2 d-flex align-items-center ml-3 pl-2"
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
          <label className="form-check-label " htmlFor="flexCheckChecked">
            {nameCheck}
          </label>
        </div>
        </div>
      </div>
    </>
  );
};

export default EstudioFlia;
