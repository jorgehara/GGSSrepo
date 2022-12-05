import "./InputForm.css";

const InputForm = ({
  messageError,
  placeHolder,
  inputId,
  value,
  disabled,
  onChange,
  nameLabel,
  validateNumbers,
  validateLetters,
  numbers,
  idInput,
  cancelar
}) => {
  console.log(cancelar)
  return (
    <div className="formulario__grupo__inputs">
      <div className="formulario__grupo">
        <label className="formulario__label" htmlFor={inputId}>
          {nameLabel}
        </label>
      </div>
      <div className="form__grupo-input">
        <input
          type="text"
          className="formulario-input-Legajo"
          id={idInput}
          placeholder={placeHolder}
          value={ cancelar ? null : value  }
          onChange={(e)=>onChange(e, idInput)}
          disabled={disabled}
          name={idInput}
          onKeyPress={(numbers && validateNumbers) || (!numbers && validateLetters)}
        />
      </div>
      <div className="form__grupo__icons">
        <i className="fas fa-times-circle form__grupo__icon"></i>
      </div>
      <div className="form__grupo__errors">
        <p className="form__grupo__error">{messageError}</p>
      </div>
    </div>
  );
};
export default InputForm;
