import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_INPUTS_VALUE } from '../../../redux/types/liquidacionTypes';
import "./InputIngreso.css";

const InputIngreso = ({nameLabel,nameInputDate, nameInput,  value, valueDate}) => {
  const dispatch = useDispatch();



  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }
  console.log(valueDate && valueDate);
  return (
    <div className='col-xl-12 d-flex fle-row justify-content-start align-items-center'>
        <label htmlFor="">{nameLabel}</label>
        <input type="date" onChange={(e)=> onChange(e, GET_INPUTS_VALUE)} value={valueDate && valueDate} className='inputDates' name={nameInputDate} id={nameInputDate} />
        <input type="text" onChange={(e)=> onChange(e, GET_INPUTS_VALUE)} value={value} className="textboxIngreso" name={nameInput} id={nameInput} />
    </div>
  )
}

export default InputIngreso