import React from 'react'
import './InputModal.css'

const InputNumModal = ({
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
        
            <input style={{ width: "50px" }} type="number" min={"0"} max={"100"}
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

export default InputNumModal