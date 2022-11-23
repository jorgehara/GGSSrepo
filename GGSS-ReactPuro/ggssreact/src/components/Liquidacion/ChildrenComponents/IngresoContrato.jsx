import React from 'react'
import InputDate from '../../Inputs/InputDate/InputDate'
import AsignarEsqLiq from '../../Inputs/SelectAsignarEsqLiq/AsignarEsqLiq'
import './Children.css'


const IngresoContrato = () => {
return (
<>
<div className="row border border-bottom-0 p-2 col">El contrato finaliza en:"      "Dias.
    <div className='row'>
        <div className='col'>
        <InputDate nameInput="Ingresó" idInput="inputDatePresentacion" display={true} />
        </div>
    <div className='col'>
    <InputDate nameInput="Efectivo" idInput="inputDatePresentacion" display={true} />
        </div>
    </div>
    
    <div className='col'>
    <AsignarEsqLiq nameInput="Asignar Esquema de Liquidacion"
    //  array={estudios}
    //  propArray={estudioSelect !== undefined ? estudioSelect.estudiosNivel : "Cursos"}
    nameCheck=""
    checked=""
    display={true}
    />
    </div>
    </div>
</>
)
}

export default IngresoContrato