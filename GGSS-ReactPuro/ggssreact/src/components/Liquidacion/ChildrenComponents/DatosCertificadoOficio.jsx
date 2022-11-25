import React from 'react'
import InputForm from '../../Inputs/InputForm/InputForm';
import CheckLabel from '../../Inputs/CheckLabel/CheckLabel'


const DatosCertificado = ({nameLabel}) => {
  return (
   <>
   <div className="row border border-3 p-2 mt-1">
            <label htmlFor="">{nameLabel}</label> 
          <div className='col  d-flex flex-row justify-content-start align-items-center'>
            <InputForm 
              nameLabel="Total Remuneración: "/>
            <InputForm 
              nameLabel="Total Neto: "/>     
          </div>
          <div className='col'>
            <CheckLabel nameLabel="Tiene Embargos" />
            <CheckLabel nameLabel="Tiene Sumario Administrativos" />
            <CheckLabel nameLabel="Tiene Licencia Sin Goce de Haberes" />
        
          </div>
    </div>
</>
)
}

export default DatosCertificado;