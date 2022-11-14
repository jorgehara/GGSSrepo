import React from 'react'
import "./CheckLabel.css";
const CheckLabel = ({idInput,nameLabel}) => {


  return (
    <div className='row mt-2'>
        <div className='d-flex flex-row justify-content-start align-items-center col-xl-12'>
            <input type="checkbox" name={idInput} id={idInput} />
            <label className='labelForCheck' htmlFor={idInput}>{nameLabel}</label>
        </div>
    </div>  
  )
}

export default CheckLabel