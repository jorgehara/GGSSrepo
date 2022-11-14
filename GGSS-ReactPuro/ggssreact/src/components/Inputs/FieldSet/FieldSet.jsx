import React from 'react'
import ButtonCancelarAceptar from '../../Buttons/ButtonCancelarAceptar'
import TableBasic1 from '../../Tables/TableBasic1'
import InputCbo from '../InputCbo/InputCbo'
import InputDate from '../InputDate/InputDate'
import InputForm from '../InputForm/InputForm'

const FieldSet = () => {
    const columns1 =["Año", "Días Totales", "Tomados", "Restan", "Vto", "Prórroga", "Resolución", "Disponibles"]
    const columns2 =["Desde", "Hasta", "Fecha Suspensión"]
  return (
    <>
        <div>
            <fieldset className='border p-2'>
                <legend className='float-none w-auto p-2'>Cargar disponibles por periodo</legend>
                <div className='row'>
                    <div className='col-xl-4'>
                        <InputCbo display={false} value={[]} array={[]} nameLabel="Año:" nameButton="..."/>
                    </div>
                    <div className='col-xl-4'>
                        <InputForm display={false} value={[]} array={[]} nameLabel="Cant Días Disponibles:" nameButton="..."/>
                    </div>
                    <div className='col-xl-4'>
                        <InputDate nameInput="Vencimiento" />
                    </div>
                </div>
            </fieldset>
            <ButtonCancelarAceptar cancelar="-" aceptar="+" />
            <TableBasic1 columns={columns1} value={[]}/>
            <TableBasic1 columns={columns2} value={[]}/>
        </div>
        
    </>
  )
}

export default FieldSet