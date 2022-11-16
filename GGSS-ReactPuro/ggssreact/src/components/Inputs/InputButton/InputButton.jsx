import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./InputButton.css";

const InputButton = ({
  nameButton,
  placeholder,
  nameLabel,
  maxLeght,
  value,
  disabled,
  nameInput,
  id,
  onChange,
  funcionCuil,
  nroDocumento,
  genre,
  usaCuil,
  datosPersonalesValue,
  generalState,
  setGeneralState,
  display,
  checked
}) => {
  const [mostrarComponente, setMostrarComponente] = useState (true);
  const [cuil, setCuil] = useState("");
  const [valor, setValor] = useState(0);

  useEffect(() => {
    setValor(datosPersonalesValue);
  }, [datosPersonalesValue]);

  useEffect(() => {
    setValor(value);
  }, [value]);

  useEffect( () =>
  {
    if (display) {
      setMostrarComponente(!display);
      return;
    }
    setMostrarComponente(display);
  }, [display]);




  return (
    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label mt-2" htmlFor={nameInput}>
          {nameLabel}
        </label>


      <input
        className={mostrarComponente ? "form-check-input ml-4" : "none"}
        type="checkbox"
        id=""
        checked={checked}
        disabled={disabled}
      />

      </div>
      <div className="form__grupo-input">
        <input
          type="text"
          value={
            datosPersonalesValue !== undefined && datosPersonalesValue !== ""
            ? datosPersonalesValue
            : valor
          }
          maxLength={maxLeght}
          className="formulario-input-Legajo-Button col ml-0 px-0 mt-0 mb-2 mr-1"
          placeholder={placeholder}
          id={id}
          name={nameInput}
          aria-describedby="inputGroupFileAddon04"
          disabled={disabled}
          onChange={(e) => onChange(e, generalState, setGeneralState)}
        />
      </div>
  
      <button
        type="button"
        onClick={() => setValor(funcionCuil(nroDocumento, genre))}
        className="btn btn-validacion btn-outline-danger ml-2"
        disabled={disabled}
      >
        {nameButton}
      </button>
    </div>
  );
};
export default InputButton;
