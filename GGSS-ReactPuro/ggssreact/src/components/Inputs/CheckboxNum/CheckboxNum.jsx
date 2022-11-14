import React from 'react'
import './CheckboxNum.css'
import { useState } from 'react';

const CheckboxNum = ({
    nameCheckbox,
    nameInputNum,
    messageError,
    placeHolder,
    onChange,
    inputId,
}) => {

    const [checked, setChecked] = useState(false);
    const [inputNum, setInputNum] = useState("");

    return (

        <div className='checkboxNumContainer'>
            <div className="inputModalContainer">

                <input type="checkbox"
                    className='inputModal'
                    id={inputId}
                    placeholder={placeHolder}
                    checked={checked}
                    onChange={() => {
                        setChecked(!checked)
                    }}>
                </input>

                <label style={{ marginLeft: "15px" }} className='labelModal' htmlFor={inputId}>{nameCheckbox} </label>

                <br />
                <br />

            </div>

            <div className="inputModalContainer">

                <label style={{ marginRight: "6px", marginBottom: "8px" }} className='labelModal' htmlFor={inputId}>{nameInputNum}: </label>

                <input style={{ width: "50px", marginRight: "7px", textAlign: "center" }} type="number" min={"0"} max={"100"}
                    className='inputModal'
                    id={inputId}
                    placeholder={placeHolder}
                    disabled={!checked}
                    onChange={(e) => onChange(e)}>
                </input>

                <br />
                <br />

            </div>
        </div>
    )
}

export default CheckboxNum