import React from 'react';
import "./InputButton.css";

const InputButtonLiquidacion = ({nameButton, placeholder, nameLabel, maxLeght, value, disabled, nameInput, id,onChange,funcionCuil,nroDocumento,genre, swal , clasess, array,propArrayOp, propIdOption, idInput}) => {

  


  return (
    clasess ? <div className={`${clasess.classOne}`}>      
    <div className={`${clasess.classTwo}`}>
        <label className={`${clasess.classThree}`} htmlFor={nameInput}>{nameLabel}</label>

       <select name={idInput} id={idInput} disabled={disabled} className={clasess.classFour} onChange={(e)=>onChange(e.target.value, idInput)} value={value && value} >
        <option value="">Seleccionar</option>
        {
            array && array.map((valor,index)=>{
                return(
                    <option key={index} value={valor[propIdOption]}>{valor[propArrayOp]}</option>
                )
            })
        }
       </select>
        <button type="button" onClick={()=>funcionCuil(nroDocumento,genre, swal)}
              className={`${clasess.classFive}`} disabled={disabled}>
              {nameButton}
        </button>
    </div>
    
</div>
        : 
<div className="formulario__grupo__inputs-Button mt-2">      
        <div className='fomulario__container__button'>
            <label className='formulario__label ' htmlFor={nameInput}>{nameLabel}</label>

            <input type="text" 
                    value={ value && value}
                    maxLength={maxLeght}
                    className="formulario-input-Legajo-Button ml-0 px-0 mt-0  mr-1" 
                    placeholder={placeholder} 
                    id={idInput} 
                    name={idInput}
                    disabled={disabled}
                    onChange={(e)=> onChange(e.target.value, idInput )}
                    />
            <button  type="button" onClick={()=>funcionCuil(nroDocumento,genre, swal)}
                  className="btn btn-validacion btn-outline-danger" disabled={disabled}>
                  {nameButton}
            </button>
        </div>
			  
    </div>
  );
};
export default InputButtonLiquidacion;
