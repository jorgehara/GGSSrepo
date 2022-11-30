import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './InputModal.css'

const InputModal = ({
    nameLabel,
    placeHolder,
    inputId,
    value,
    action,
    opcionSelected,
    onChange
}) => {


    console.log(value)

    

   
   

    return (

        <div className="inputModalContainer">

            <div className="row mb-3 inputLabelContainer">
                <label for="inputPassword3" className="col-sm-4 col-form-label">{nameLabel}:</label>
                <div className="col-sm-8">
                    <input type="text" className="inputModal" id={inputId} name={inputId} placeholder={placeHolder} value={value} onChange={(e) => onChange(e, action)}/>
                </div>
            </div>

            {/* <label style={{ marginRight: "15px" }} className='labelModal' htmlFor={inputId}>{nameLabel}: </label>

            <input type="text"
                className='inputModal'
                name={nameInput}
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChange(e, generalState, setGeneralState)}>
            </input>

            <br />
            <br /> */}

        </div>
    )
}

export default InputModal