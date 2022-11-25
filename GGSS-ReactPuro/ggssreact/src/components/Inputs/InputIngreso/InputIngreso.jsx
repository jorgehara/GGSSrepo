import React from 'react'
import "./InputIngreso.css";

const InputIngreso = ({nameLabel,nameInput}) => {
  return (
    <div className='col-xl-12 d-flex fle-row justify-content-start align-items-center'>
        <label htmlFor="">{nameLabel}</label>
        <input type="date" className='inputDates' name={nameInput} id={nameInput} />
        <input type="text" className="textboxIngreso" name={nameInput} id={nameInput} />
    </div>
  )
}

export default InputIngreso