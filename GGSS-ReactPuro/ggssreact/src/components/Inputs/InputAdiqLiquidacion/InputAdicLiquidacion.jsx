import React from 'react'
import "./InputAdicLiquidacion.css";

const InputAdicLiquidacion = ({onChangeValues, idInput}) => {
  return (
        <div className='col-xl-6'>
            <select className='formulario-input-Estado2 form-select ml-0 px-0' name={idInput} id={idInput} onChange={(e)=> onChangeValues(e, idInput)} vale>
                <option  value="1">Concepto</option>
            </select>
        </div>
  )
}

export default InputAdicLiquidacion