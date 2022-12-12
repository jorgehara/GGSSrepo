import React, { useState } from 'react'
import "./CheckLabel.css";


const CheckLabel = ({idInput, nameLabel, value, onChange}) => {

  const [checked, setChecked] = useState(value ? value : false)

  return (
    <div className='row mt-2'>
        <div className='d-flex flex-row justify-content-start align-items-center col-xl-12'>
            <input type="checkbox" checked={checked} onChange={(e)=> { setChecked(!checked); onChange(e.target.checked, idInput);}} name={idInput} id={idInput} />
            <label className='labelForCheck' htmlFor={idInput}>{nameLabel}</label>
        </div>
    </div>  
  )
}

export default CheckLabel