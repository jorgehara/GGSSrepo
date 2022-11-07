import "./InputForm.css";

const InputForm = ({
  nameInput,
  messageError,
  placeHolder,
  onChange,
  inputId,
  value,
  disabled
}) => {
  return (
    <div className="formulario__grupo__inputs">
      <div className='formulario__grupo'>
        <label className='formulario__label' htmlFor={inputId}>{nameInput}</label>
      </div>
      <div className='form__grupo-input'>
        <input type="text"
          className='formulario-input-Legajo '
          id={inputId}
          placeholder={placeHolder}
          value={value}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />
      </div>
      <div className='form__grupo__icons'>
        <i className="fas fa-times-circle form__grupo__icon"></i>
      </div>
      <div className='form__grupo__errors'>
        <p className='form__grupo__error'>{messageError}</p>
      </div>
    </div>
  )
};
export default InputForm;