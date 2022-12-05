import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inputButtonClasessExtras, inputButtonClasessExtrasAfectaciones, inputButtonClasessExtrasInstrum } from '../../classes/classes'
import { GET_INPUT_VALUES_EXTRAS } from '../../redux/types/extrasTypes';
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
    const dispatch = useDispatch();


  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }
  const formulario = useSelector((state)=> state.extrasState.formulario);

  console.log(formulario);



  return (
    <section className='sectionExtras'><div className='container'>
          <div className='row'>
              <EmployeData />
          </div>
      </div>
      <div className='container border border-3 border-top-0'>
              <div className='row  mt-1'>
                  <div className='col-xl-12'>
                      <InputButtonLiquidacion idInput="inputDatosExtrasCbo" nameButton="..." onChange={onChange} nameLabel="Datos Extras" id="inputDatosExtrasExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtras} />
                  </div>
              </div>
              <div className='row'>
                  <div className='col-xl-6'>
                      <InputDate onChange={onChange} idInput="inputFechaExtras" nameInput="Fecha" action={GET_INPUT_VALUES_EXTRAS} />
                  </div>
              </div>
              <div className='row'>
                    <div className='col-xl-12'>
                        <TextArea onChange={onChange} idInput="inputTextExtras"  inputName="Observaciones" action={GET_INPUT_VALUES_EXTRAS} />
                        <ButtonCancelarAceptar cancelar="-" aceptar="+" />
                        <TableExtras columns={columns} />
                    </div>
              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inpútAdscriptoExtras" nameLabel="Adscripto" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegal" clasess={inputButtonClasessExtrasInstrum} onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>
                    <div className='divObservaciones'>
                        <TextArea idInput="inputTextExtrasAdscripto" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>

              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegalAfectaciones" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasInstrum} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Sector" id="inputSectorExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Direcciones" id="inputDireccionesExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacionObs '>
                        <TextArea idInput="inputTextExtrasAfectaciones" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />                          
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