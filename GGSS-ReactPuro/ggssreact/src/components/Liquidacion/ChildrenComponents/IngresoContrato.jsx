import React from 'react'
import InputDate from '../../Inputs/InputDate/InputDate'
import InputEfectivo from '../../Inputs/InputEfectivo/InputEfectivo'
import InputIngreso from '../../Inputs/InputIngreso/InputIngreso'
import AsignarEsqLiq from '../../Inputs/SelectAsignarEsqLiq/AsignarEsqLiq'
import './Children.css'


const IngresoContrato = ({ingresoTextInput, ingresoDate, esquemas}) => {
return (
<>
    <div className="row border border-3 p-2 col"> <h5>El contrato finaliza en:"      "Dias.</h5>
        <div className='row'>
                <InputIngreso nameLabel="Ingresó:" nameInput="ingresoInput" nameInputDate="ingresoDateInput" valueDate={ingresoDate} value={ingresoTextInput} />
                <InputEfectivo nameLabel="Efectivo:" idInputCheck ="inputCheckEfectivo"idInputDate="inputDateEfectivo" idInputCheckAsigna="inputCheckAsigna" nameLabelAsigna="Asignar Esquema de Liquidación:" idSelect="selectOptionsId" esquemas={esquemas} propArrayOp="nombreEsquema" propArrayId="iDesquema" />
        </div>
    </div>
</>
)
}

export default IngresoContrato