import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./CheckLabel.css";
const CheckLabel = ({idInput, nameLabel, action, value}) => {
  const [checked , setChecked] = useState(false);
  const dispatch = useDispatch();
  
  function onChange(e, action){
    setChecked(!checked);
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });  
  }

  return (
    <div className='row mt-2'>
        <div className='d-flex flex-row justify-content-start align-items-center col-xl-12'>
            <input type="checkbox" checked={checked} onChange={(e)=> onChange(e, action)} value={!checked && !checked} name={idInput} id={idInput} />
            <label className='labelForCheck' htmlFor={idInput}>{nameLabel}</label>
        </div>
    </div>  
  )
}

export default CheckLabel