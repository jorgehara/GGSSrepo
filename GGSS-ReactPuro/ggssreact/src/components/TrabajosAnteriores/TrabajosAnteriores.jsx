import React from 'react';
import EmployeData from '../EmployeData/EmployeData';
import InputDateFlia from '../Inputs/InputDateFamilia/InputDateFlia';
import InputTextTrabajos from '../Inputs/InputTextTrabajos/InputTextTrabajos';
import TableTrabajosAnteriores from '../Tables/TableTrabajosAnteriores';
import "./TrabajosAnteriores.css";

const TrabajosAnteriores = () => {
  return (
    <div className='container-flex'>
        <div className='row'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-4'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Desde:</label>
                    <input type="date" name="idDateDesde" id="idDateDesde" className='dateTrabajos '/>
                </div>
            </div>        
        </div>
        <div className='row'>
            <div className='col-xl-4'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Hasta:</label>
                    <input type="date" name="idDateDesde" id="idDateDesde" className='dateTrabajos2 '/>
                    <input type="checkbox" name="idCheckTrabajos" id="idCheckTrabajos" className='checkTrabajos'/>
                    <label htmlFor="idDateDesde" className='labelTrabajos'>Hasta la Actualidad:</label>
                </div>
            </div>        
        </div>
        <div className='row'>
            <InputTextTrabajos nameLabel="Descripción" inputId="idDescripcionTrabajos" />
        </div>
        <div className='row'>
            <TableTrabajosAnteriores nameLabel="Historial:" />
        </div>
    </div>
  )
}

export default TrabajosAnteriores