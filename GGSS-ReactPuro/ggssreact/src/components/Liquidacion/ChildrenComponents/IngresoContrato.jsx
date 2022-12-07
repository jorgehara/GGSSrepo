import React from 'react'
import InputDate from '../../Inputs/InputDate/InputDate'
import InputEfectivo from '../../Inputs/InputEfectivo/InputEfectivo'
import InputIngreso from '../../Inputs/InputIngreso/InputIngreso'
import AsignarEsqLiq from '../../Inputs/SelectAsignarEsqLiq/AsignarEsqLiq'
import './Children.css'


const IngresoContrato = ({ esquemas, onChange, formLiquidacion}) => {
return (
<>
    <div className="row border border-3 p-2 col"> <h5>El contrato finaliza en:"      "Dias.</h5>
        <div className='row'>
                <InputIngreso nameLabel="Ingresó:" nameInput="ingresoInput" nameInputDate="ingresoDateInput" valueDate={formLiquidacion?.ingresoDateInput && formLiquidacion?.ingresoDateInput} value={formLiquidacion?.ingresoInput && formLiquidacion?.ingresoInput} onChange={onChange} formLiquidacion={formLiquidacion} />
                <InputEfectivo nameLabel="Efectivo:" idInputCheck ="inputCheckEfectivo"idInputDate="inputDateEfectivo" idInputCheckAsigna="inputCheckAsigna" nameLabelAsigna="Asignar Esquema de Liquidación:" idSelect="selectOptionsId" esquemas={esquemas} propArrayOp="nombreEsquema" propArrayId="iDesquema" onChange={onChange} />
        </div>
    </div>
</>
)
}

export default IngresoContrato