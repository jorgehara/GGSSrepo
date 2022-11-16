import React from 'react'
import './Checkbox.css'

const Checkbox = ({
    nameCheckbox,
    messageError,
    placeHolder,
    onChange,
    inputId,
    value
}) => {
    return (
        <div className="inputModalContainer">

            <input type="checkbox"
                className='inputModal'
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => onChange(e)}>
            </input>

            <label style={{ marginLeft: "15px" }} className='labelModal' htmlFor={inputId}>{nameCheckbox}: </label>

            <br />
            <br />

        </div>
    )
}

export default Checkbox