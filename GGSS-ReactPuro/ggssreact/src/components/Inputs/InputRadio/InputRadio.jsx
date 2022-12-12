import React, { useEffect, useState } from 'react'
import "./InputRadio.css";



const InputRadio = ({  nameFirst, nameSecond, value,disabled, onChange,idInput,nameLabel ,datosPersonalesValue, action, classes, asidePagos}) => {

    const [valor, setValor] = useState("");
    const [valorRadioM, setValorRadioM] = useState(false);
    const [valorRadioF, setValorRadioF] = useState(false);

    useEffect(() => {
      valueInput();
    }, [valorRadioM, valorRadioF, valor]);

    useEffect(()=>{
      setValor(datosPersonalesValue)
    },[datosPersonalesValue])

    useEffect(()=>{
      setValor(value);
    },[value])


  const valueInput = () => {
    if (valor === "M") {
      setValorRadioM(true);
      setValorRadioF(false);
    }
    if (valor === "F") {
      setValorRadioF(true);
      setValorRadioM(false);
    }
  };
  return (
    classes && classes ? <div className={classes.classOne}>
        <div className={classes.classNine}>
            <label className={classes.classTwo}  htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className={classes.classThree}>
          <input className={classes.classFour}
                 type="radio" 
                 id={idInput} 
                 name={idInput} 
                 checked={valorRadioM} 
                 onChange={(e)=> onChange(e.target.value, idInput)} 
                 value={asidePagos ? 1 : "M"} 
                 disabled={disabled}/>
          <label className={classes.classFive} htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className={classes.classSix}>
          <input 
                className={classes.classSeven} 
                type="radio" 
                id={idInput} 
                name={idInput}                  
                checked={valorRadioF} 
                onChange={(e)=> onChange(e.target.value, idInput)} 
                value={asidePagos ? 2 : "F"} 
                disabled={disabled}/>
        <label className={classes.classEigth} htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div> 
    : 
    <div className="formulario__grupo__inputs__radio">
        <div className="form__grupo__label">
            <label className="formulario-label-Sexo"  htmlFor="legajo">{nameLabel}</label>
        </div>
        <div className="formulario-input-Sexo">
          <input className="form-check-input" 
                 type="radio" 
                 id={idInput} 
                 name={idInput}                   
                 checked={valorRadioM} 
                 onChange={(e)=> onChange(e.target.value, idInput)} 
                 value="M" 
                 disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">{nameFirst}</label>
        </div>
        <div className="formulario-input-SexoF">
          <input 
                className="form-check-input" 
                type="radio" 
                id={idInput} 
                name={idInput}                  
                checked={valorRadioF} 
                onChange={(e)=> onChange(e.target.value, idInput)} 
                value="F" 
                disabled={disabled}/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">{nameSecond}</label>
        </div>
    </div>
  );
};

export default InputRadio;
