import React from 'react'
import InputDate from '../../InputDate/InputDate'

const NuevaLicencia = ({idInput, nameLAbel, onChange, valueForm}) => {


  const fechaInicio = new Date(valueForm?.inputDesdeSolicitaLic && valueForm?.inputDesdeSolicitaLic).getTime();
  const fechaFin = new Date(valueForm?.inputHastaSolicitaLic && valueForm?.inputHastaSolicitaLic).getTime();

  var diff = fechaFin - fechaInicio;


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                <InputDate nameInput="Desde" onChange={onChange} valueCheck={true} idInput="inputDesdeSolicitaLic" value={valueForm?.inputDesdeSolicitaLic && valueForm?.inputDesdeSolicitaLic} />
                <InputDate nameInput="Hasta" onChange={onChange} valueCheck={true} idInput="inputHastaSolicitaLic" value={valueForm?.inputHastaSolicitaLic && valueForm?.inputHastaSolicitaLic} />
                <label htmlFor=""> Cantidad : {diff/(1000*60*60*24)}</label>
            </div>
        </div>        
    </div>
  )
}

export default NuevaLicencia