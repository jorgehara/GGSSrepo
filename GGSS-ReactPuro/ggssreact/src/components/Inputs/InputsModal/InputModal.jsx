import React from 'react'
import { useEffect } from 'react'
import './InputModal.css'

const InputModal = ({
    nameInput,
    nameLabel,
    messageError,
    placeHolder,
    onChange,
    inputId,
    value,
    generalState,
    setGeneralState,
    selectedOption
}) => {


    return (
        <div className="inputModalContainer">

            <label style={{ marginRight: "15px" }} className='labelModal' htmlFor={inputId}>{nameLabel}: </label>
        
            <input type="text"
                className='inputModal'
                name={nameInput}
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChange(e,generalState, setGeneralState)}>
            </input>

            <br />
            <br />

        </div>
    )
}

export default InputModal