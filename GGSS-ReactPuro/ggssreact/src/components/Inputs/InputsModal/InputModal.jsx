import React from 'react'
import './InputModal.css'

const InputModal = ({
    nameInput,
    messageError,
    placeHolder,
    onChange,
    inputId,
    value
}) => {
    return (
        <div className="inputModalContainer">

            <label style={{ marginRight: "15px" }} className='labelModal' htmlFor={inputId}>{nameInput}: </label>
        
            <input type="text"
                className='inputModal'
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChange(e)}>
            </input>

            <br />
            <br />

        </div>
    )
}

export default InputModal