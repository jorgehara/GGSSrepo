import React from 'react'
import InputDate from '../../InputDate/InputDate'

const NuevaLicencia = ({idInput, nameLAbel}) => {





  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                <InputDate nameInput="Desde" />
                <InputDate nameInput="Hasta" />
                <label htmlFor=""> Cantidad : 20</label>
            </div>
        </div>        
    </div>
  )
}

export default NuevaLicencia