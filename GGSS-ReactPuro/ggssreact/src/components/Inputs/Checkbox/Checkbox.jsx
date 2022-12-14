import React from 'react'
import './Checkbox.css'

const Checkbox = ({
    nameCheckbox,
    messageError,
    placeHolder,
    inputId,
    value,
    onChange
}) => {
    return (
        <div className="inputModalContainer">

            <input type="checkbox"
                className='inputModal'
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChange(e, inputId )}
            >
            </input>

            <label style={{ marginLeft: "15px" }} className='labelModal' htmlFor={inputId}>{nameCheckbox}: </label>

            <br />
            <br />

        </div>
    )
}

export default Checkbox