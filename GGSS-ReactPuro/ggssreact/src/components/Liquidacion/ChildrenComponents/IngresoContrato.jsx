import React from 'react'
import InputDate from '../../Inputs/InputDate/InputDate'
import InputForm from '../../Inputs/InputForm/InputForm'


const IngresoContrato = () => {
return (
<>
<div className="row border p-2 col">El contrato finaliza en:"      "Dias.
    <div className='row'>
        <div className='col'>
    <InputDate nameInput="Ingresó" display={false}/>
        </div>
    <div className='col'>
    <InputForm 
    nameLabel=" "/>
        </div>
    </div>

    <div className='row'>
        <div className='col'>
    <InputDate nameInput="Efectivo" display={true}/>
        </div>
    <div className='col'>
    
    <InputForm 
    className="formulario__label"
    nameLabel="Asignar Esquema de Liquidacion"
    />
    </div>
    </div>

    </div>
</>
)
}

export default IngresoContrato