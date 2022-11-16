import React from 'react'
import InputButton from '../Inputs/InputButton/InputButton'
import InputDate from '../Inputs/InputDate/InputDate'
import InputForm from '../Inputs/InputForm/InputForm'

const IngresoContrato = () => {
  return (
   <>
   <div className="row border p-2 col-xl-12">El contrato finaliza en:"      "Dias.
    <div className='row'>
        <div className='col-xl-6'>
    <InputDate nameInput="Ingresó" display={false}/>
        </div>
    <div className='col-xl-6'>
    <InputForm 
    nameLabel=" "/>
        </div>
    </div>

    <div className='row'>
        <div className='col-xl-6'>
    <InputDate nameInput="Efectivo" display={true}/>
        </div>
    <div className='col-xl-6'>
    
    <InputForm 
    className="formulario__label w-100"
    nameLabel="Asignar Esquema de Liquidacion"
    />
    </div>
    </div>

    </div>
</>
)
}

export default IngresoContrato