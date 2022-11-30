import React from 'react'
import { inputButtonClasessExtras, inputButtonClasessExtrasAfectaciones, inputButtonClasessExtrasInstrum } from '../../classes/classes'
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import EmployeData from '../EmployeData/EmployeData'
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import InputButton from '../Inputs/InputButton/InputButton';
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate';
import TextArea from '../Inputs/TextArea/TextArea';
import TableExtras from '../Tables/TableExtras';
import "./Extras.css";

const Extras = () => {
    const columns = ["Fecha", "Descripción", "Observaciones"]
  return (
    <section className='sectionExtras'><div className='container'>
          <div className='row'>
              <EmployeData />
          </div>
      </div>
      <div className='container border border-3 border-top-0'>
              <div className='row  mt-1'>
                  <div className='col-xl-12'>
                      <InputButtonLiquidacion nameButton="..." nameLabel="Datos Extras" id="inputDatosExtrasExtras" action="ACTION" clasess={inputButtonClasessExtras} />
                  </div>
              </div>
              <div className='row'>
                  <div className='col-xl-6'>
                      <InputDate nameInput="Fecha" />
                  </div>
              </div>
              <div className='row'>
                    <div className='col-xl-12'>
                        <TextArea inputName="Observaciones" />
                        <ButtonCancelarAceptar cancelar="-" aceptar="+" />
                        <TableExtras columns={columns} />
                    </div>
              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inpútAdscriptoExtras" nameLabel="Adscripto" />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegal" action="ACTION" clasess={inputButtonClasessExtrasInstrum} />
                    </div>
                    <div className='divObservaciones'>
                        <TextArea inputName="Observaciones" />
                    </div>

              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegalAfectaciones" action="ACTION" clasess={inputButtonClasessExtrasInstrum} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Sector" id="inputSectorExtras" action="ACTION" clasess={inputButtonClasessExtrasAfectaciones} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Direcciones" id="inputDireccionesExtras" action="ACTION" clasess={inputButtonClasessExtrasAfectaciones} />
                    </div>
                    <div className='divObservacionesAfectacionObs '>
                        <TextArea inputName="Observaciones" />                          
                    </div>
                    <div className='d-flex flex-row-reverse justify-content-start align-items-center'>
                        <button className='btn btn-outline-success'>Aceptar</button>
                        <button className='btn btn-outline-danger ml-2'>Cancelar</button>
                    </div>
              </div>
          </div>
      </section>  
  )
}

export default Extras