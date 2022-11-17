import React from 'react'
import "./SindicatoLiquidacion.css";

const SindicatoLiquidacion = ({idInput,nameLabel, array, nameButton}) => {
  return (
    <div className='row'>
        <div className='col-xl-3'>
            <label htmlFor={idInput}>{nameLabel}</label>
        </div>
        <div className='col-xl-6'>
            <div className='selectMenuSindicatos border border-1'>
                {
                    array !== undefined && array.map((op, i)=>{
                        return(
                            <>    
                                
                                <div class="d-flex flex-row justify-conent-center align-items-center" key={i} value={op}>
                                    <input type="checkbox" name="optionSindicato" id="checkOption" className='form-check-input checkList'/>
                                    <label class="form-check-label " htmlFor="checkOption">{op}</label>
                                </div>
                            </>                          
                        )
                    })
                }
            </div>
        </div>
        <div className='col-xl-2'>
            <button className='btn btn-danger btn-sm buttonSpace'>{nameButton}</button>
        </div>
    </div>
  )
}

export default SindicatoLiquidacion