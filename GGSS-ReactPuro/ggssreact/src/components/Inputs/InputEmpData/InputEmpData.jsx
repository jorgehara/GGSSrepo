import React from 'react'

const InputEmpData = ({idInput,inputValue, nameLabel}) => {
  return (
    <div>
        <label htmlFor={idInput}>{nameLabel}</label>
        <input className='ml-2' type="text" id={idInput} name={idInput} value={inputValue}/>
    </div>
  )
}

export default InputEmpData