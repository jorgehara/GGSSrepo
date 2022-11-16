import React from 'react'
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar'
import EmployeData from '../EmployeData/EmployeData'
import InputAdicLiquidacion from '../Inputs/InputAdiqLiquidacion/InputAdicLiquidacion'
import TableAdicLiquidacion from '../Tables/TableAdicLiquidacion';
import "./AdicLiquidacion.css";

const AdicLiquidacion = () => {
  return (
    <div className='container-flex'>
        <div className='row'>
            <div className='col-xl-12'>
                <EmployeData />
            </div>
        </div>
        <div className='row'>
                <p>Concepto: (Son los conceptos marcados como condicionales en el esquema correspondiente al empleado)</p>
                <InputAdicLiquidacion />
                <div className='col-xl-2'>
                    <button className='btn btn-danger btn-sm'>Datos adicionales...</button>
                </div>
                <div className='col-xl-4 '>
                    <button className='btn btn-outline-success btn-sm buttonAceptarCancelar'>+</button>
                    <button className='btn btn-outline-danger btn-sm buttonAceptarCancelar' >-</button>
                </div>
        </div>
        <div className='row'>
            <TableAdicLiquidacion />
        </div>
        <div className='row'>
            <div className='col-xl-3 mt-2'>
                <button className='btn btn-danger btn-sm'>
                    Asignar Masivamente
                </button>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-12 mt-2'>
                <ButtonCancelarAceptar aceptar="Aceptar" cancelar="Cancelar" />
            </div>
        </div>
    </div>
  )
}

export default AdicLiquidacion