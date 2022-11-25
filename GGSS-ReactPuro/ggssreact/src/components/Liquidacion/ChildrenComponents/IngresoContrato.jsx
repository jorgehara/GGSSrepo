import React from 'react'
import InputDate from '../../Inputs/InputDate/InputDate'
import InputEfectivo from '../../Inputs/InputEfectivo/InputEfectivo'
import InputIngreso from '../../Inputs/InputIngreso/InputIngreso'
import AsignarEsqLiq from '../../Inputs/SelectAsignarEsqLiq/AsignarEsqLiq'
import './Children.css'


const IngresoContrato = () => {
return (
<>
    <div className="row border border-3 p-2 col"> <h5>El contrato finaliza en:"      "Dias.</h5>
        <div className='row'>
                <InputIngreso nameLabel="Ingresó:" nameInput="ingresoInput" />
                <InputEfectivo nameLabel="Efectivo:" idInputCheck ="inputCheckEfectivo"idInputDate="inputDateEfectivo" idInputCheckAsigna="inputCheckAsigna" nameLabelAsigna="Asignar Esquema de Liquidación:" idSelect="selectOptionsId" />
        </div>
    </div>
</>
)
}

export default IngresoContrato