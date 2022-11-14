import React from 'react'
import CheckLabel from '../Inputs/CheckLabel/CheckLabel'
import InputButton from '../Inputs/InputButton/InputButton'
import InputDate from '../Inputs/InputDate/InputDate'
import InputForm from '../Inputs/InputForm/InputForm'

const DatosCertificado = () => {
  return (
   <>
   <div className="row border p-2 col-xl-12">Datos para Certificado de Oficio
    <div className='row'>
        <div className='col'>
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
    </div>
</>
)
}

export default DatosCertificado;