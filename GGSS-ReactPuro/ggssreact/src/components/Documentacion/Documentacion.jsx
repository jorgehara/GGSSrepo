import React from 'react'
import InputButton from '../Inputs/InputButton/InputButton'
import InputDate from '../Inputs/InputDate/InputDate'
import TextArea from '../Inputs/TextArea/TextArea'
import EmployeData from '../EmployeData/EmployeData';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import TableBasic1 from '../Tables/TableBasic1';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import InputDateDocs from '../Inputs/InputDateDocs/InputDateDocs';

const Documentacion = () => {
    const columns = ["Fecha", "Vencimiento", "Documento", "Liq", "Observaciones", "Incluir Cuota"]
return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={false}/>
            </div>
            <div className='col-xl-12'>
                <InputDate nameInput="Fecha Vencimiento" idInput="inputDatePresentacion" display={true} />
            </div>
            <div className='col-xl-12'>
                <InputButton nameButton="..." nameLabel="Documentación" placeholder="Documentación"/>
            </div>
            <div className='col-xl-12'>
                <TextArea inputName="Observaciones "/>
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputLiquidacion" nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)" />
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputIncluirCuotaAlim" nameLabel="Incluir en cuota Alimentaria" />
            </div>
            <div className='col-xl-12'>
                <ButtonCancelarAceptar cancelar="-" aceptar="+" />
                <TableBasic1 columns={columns} value={[]}/>
            </div>
        </div>
    </div>
)
}

export default Documentacion