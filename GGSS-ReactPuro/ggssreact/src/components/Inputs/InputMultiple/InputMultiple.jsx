import React, { useEffect, useState } from "react";
// import "./InputMultiple.css";

const InputMultiple = ({
  valueDNI,
  nameInputDNI,
  optionsDNI,
  valueRadio,
  nameFirst,
  nameSecond,
  nameInputRadio,
  placeholder,
  disable,
  propsRadioButton,
  onChange,
  datosFamiliaValue1,
  datosFamiliaRadio,
  action,
  namePropOp,
  idSelected,
  propSelected,
  obligatorio
}) => {
  const [valor, setValor] = useState("");
  const [valorRadioM, setValorRadioM] = useState(false);
  const [valorRadioF, setValorRadioF] = useState(false); 
  
  useEffect(() => {
    valueInput();
  }, [valorRadioM, valorRadioF, valor]);

  useEffect(()=>{
    setValor(valueRadio);
  },[valueRadio])

  useEffect(()=>{
    setValor(datosFamiliaRadio);
  },[datosFamiliaRadio])
  
  


  const valueInput = () => {    
      if(valor === "M"){
        setValorRadioM(true);
        setValorRadioF(false);
      }
      if(valor === "F"){
        setValorRadioF(true);
        setValorRadioM(false);
      } 
    }    

 
  return (
          <>
          <div className="row">
          <div className="col">

            <label className=" ">{nameInputDNI}</label>
            </div>
          <div className="col">
            
            <select className={obligatorio ? "  px-0 obligatorio" : ""} value={datosFamiliaValue1 !== undefined ? datosFamiliaValue1 : null}  disabled={disable} id={propsRadioButton.idCboDni} name={propsRadioButton.idCboDni} onChange={(e)=>onChange(e.target.value,propsRadioButton.idCboDni)}>
              <option value="">Seleccionar</option>
              {optionsDNI && optionsDNI.map((op, i) => {
                return propSelected === op[idSelected] ? <option key={i} selected value={op[idSelected]}>{op[namePropOp]}</option> :
                <option key={i} value={op[idSelected]}>{op[namePropOp]}</option> 
              })}
            </select>
            </div>

          <div className="col">
            
            <input
              type="text"
              maxLength="8"
              value={valueDNI}
              className={obligatorio ? "px-0 mt-0 mb-0 obligatorio" : "px-0 mt-0 mb-0"}
              placeholder={placeholder}
              disabled={disable}
              id={propsRadioButton.idNroDni}
              name={propsRadioButton.idNroDni}
              onChange={(e)=>onChange(e.target.value, propsRadioButton.idNroDni)}
            />
            </div>
            
            <div className="col">
             
            
            <div className="">
              <div className="">
                <input
                  className={obligatorio ? " obligatorio" : ""}
                  type="radio"
                  id={propsRadioButton.idRadioBtn}
                  name={propsRadioButton.idRadioBtn}
                  defaultChecked
                  checked={valorRadioM}
                  onChange={(e)=>onChange(e.target.value, propsRadioButton.idRadioBtn)}
                  value="M"
                  disabled={disable}
                />
                <label className="" htmlFor="inlineCheckbox1">
                  {nameFirst}
                </label>
              </div>
              <div className="">
                <input
                  className={obligatorio ? "obligatorio" : ""}
                  type="radio"
                  id={propsRadioButton.idRadioBtn}
                  defaultChecked
                  name={propsRadioButton.idRadioBtn}
                  checked={valorRadioF}
                  onChange={(e)=>onChange(e.target.value, action)}
                  value="F"
                  disabled={disable}
                />
                <label className="" htmlFor="inlineCheckbox2">
                  {nameSecond}
                </label>
              </div>
              
            </div>
            

              </div>




          </div>





         
          </>
        
  );
};

export default InputMultiple;
