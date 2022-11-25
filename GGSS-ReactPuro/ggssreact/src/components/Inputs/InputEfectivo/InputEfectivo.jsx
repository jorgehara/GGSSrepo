import React from 'react'
import "./InputEfectivo.css";

const InputEfectivo = ({nameLabel, idInputCheck,idInputDate, idInputCheckAsigna, nameLabelAsigna, idSelect}) => {
  return (
    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center mt-2'>
        <label className='' htmlFor="">{nameLabel}</label>
        <input className='checkEfectivo' type="checkbox" name={idInputCheck} id={idInputCheck}  />
        <input className='inputdates' type="date" name={idInputDate} id={idInputDate} />
        <input className=' checkAsigna' type="checkbox" name={idInputCheckAsigna} id={idInputCheckAsigna}  />
        <label className='labelAsigna' htmlFor="">{nameLabelAsigna}</label>
        <select className='selectAsigna' name={idSelect} id={idSelect}>
            <option value="">Seleccionar</option>
        </select>
    </div>
  )
}

export default InputEfectivo