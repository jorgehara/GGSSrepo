import React from 'react'
import "./SindicatoLiquidacion.css";

const SindicatoLiquidacion = ({idInput,nameLabel, array, nameButton}) => {
  return (
    <div className='row'>
        <div className='col-xl-3'>
            <label htmlFor={idInput}>{nameLabel}</label>
        </div>
        <div className='col-xl-6'>
            <select className="form-select row mt-1 selectMenuSindicatos ml-4"
            multiple
            aria-label="multiple select example" 
            name={idInput} id={idInput}>
                {
                    array !== undefined && array.map((op, i)=>{
                        return(
                            <>
                            
                            <option key={i} id="optionSindicato" value={op}><input type="checkbox" name="optionSindicato" id="optionSindicato" className='checkList'/>{op}</option>  
                            </>                          
                        )
                    })
                }
            </select>
        </div>
        <div className='col-xl-2'>
            <button className='btn btn-danger btn-sm'>{nameButton}</button>
        </div>
    </div>
  )
}

export default SindicatoLiquidacion