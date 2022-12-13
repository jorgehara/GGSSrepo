import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inputButtonClasessExtras, inputButtonClasessExtrasAfectaciones, inputButtonClasessExtrasInstrum } from '../../classes/classes'
import { addDatosExtras, addInstrumLegales } from '../../redux/actions/fetchActions';
import { GET_INPUT_VALUES_EXTRAS } from '../../redux/types/extrasTypes';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import EmployeData from '../EmployeData/EmployeData'
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import InputButton from '../Inputs/InputButton/InputButton';
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate';
import TextArea from '../Inputs/TextArea/TextArea';
import TableExtras from '../Tables/TableExtras';
import "./Extras.css";

const Extras = ({responses, setResponses}) => {

    const columns = ["Fecha", "Descripción", "Observaciones"]
    const dispatch = useDispatch();
    const [ formDatosExtras, setFormDatosExtras ] = useState(responses["formDatosExtras"]);
    const deshabilitar = useSelector((state)=> state.employeStates.disable);
    const urlDatosExtras = `http://54.243.192.82/api/DatosExtras/0,%201`;
    const urlInstrumLegal = "http://54.243.192.82/api/InstrumentosLegales/0?modo=1"
    const datosExtras = useSelector((state)=> state.generalState.datosExtras);
    const instrumLegales = useSelector((state)=> state.generalState.instrumLegales);

    function onChangeValues(e, key){
        const newResponse = {...formDatosExtras};
        newResponse[key] = e;
        setFormDatosExtras({
          ...newResponse
        });
    };
    console.log(instrumLegales);
    const handleFetch=(url, action )=>{
        dispatch({type: SET_LOADING});
          axios.get(url)
          .then((res)=>{
            dispatch( action(res.data));
          })
          .catch((err)=>{
            dispatch({type:AXIOS_ERROR});
          })
       }
       useEffect(()=>{
        handleFetch( urlDatosExtras, addDatosExtras);  
        handleFetch( urlInstrumLegal, addInstrumLegales);      
      },[deshabilitar])
  
    useEffect(() => {    
        setResponses({
          ...responses,
          formDatosExtras
        });    
    },[formDatosExtras]);

  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }




  return (
    <section className='sectionExtras'><div className='container'>
          <div className='row'>
              <EmployeData />
          </div>
      </div>
      <div className='container border border-3 border-top-0'>
              <div className='row  mt-1'>
                  <div className='col-xl-12'>
                      <InputButtonLiquidacion 
                      idInput="inputDatosExtrasCbo" 
                      nameButton="..." 
                      onChange={onChangeValues} 
                      value={formDatosExtras?.inputDatosExtrasCbo && formDatosExtras?.inputDatosExtrasCbo}
                      propArrayOp="descripcion"
                      array={datosExtras && datosExtras}
                      propIdOption="idDatoExtra"
                      nameLabel="Datos Extras" 
                      action={GET_INPUT_VALUES_EXTRAS} 
                      clasess={inputButtonClasessExtras} />
                  </div>
              </div>
              <div className='row'>
                  <div className='col-xl-6'>
                      <InputDate valueCheck={true} value={formDatosExtras?.inputFechaExtras && formDatosExtras?.inputFechaExtras} onChange={onChangeValues} idInput="inputFechaExtras" nameInput="Fecha" action={GET_INPUT_VALUES_EXTRAS} />
                  </div>
              </div>
              <div className='row'>
                    <div className='col-xl-12'>
                        <TextArea onChange={onChangeValues} idInput="inputTextExtras" value={formDatosExtras?.inputTextExtras && formDatosExtras?.inputTextExtras} inputName="Observaciones" action={GET_INPUT_VALUES_EXTRAS} />
                        <ButtonCancelarAceptar cancelar="-" aceptar="+" />
                        <TableExtras columns={columns} />
                    </div>
              </div>
              <div className='linea'/>
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAdscriptoExtras" nameLabel="Adscripto" value={formDatosExtras?.inputAdscriptoExtras && formDatosExtras?.inputAdscriptoExtras} onChange={onChangeValues}  />
                        <InputButtonLiquidacion 
                        disabled={!formDatosExtras?.inputAdscriptoExtras} 
                        value={formDatosExtras?.inputInstrumLegal && formDatosExtras?.inputInstrumLegal} 
                        nameButton="..." 
                        nameLabel="Instrum. Legal" 
                        array={instrumLegales && instrumLegales}
                        propArrayOp="descripcion"
                        propIdOption="idInstrumentoLegal"
                        idInput="inputInstrumLegal" 
                        id="inputInstrumLegal" 
                        clasess={inputButtonClasessExtrasInstrum} 
                        onChange={onChangeValues} 
                        action={GET_INPUT_VALUES_EXTRAS} />
                    </div>
                    <div className='divObservaciones'>
                        <TextArea disabled={!formDatosExtras?.inputAdscriptoExtras} idInput="inputTextExtrasAdscripto" inputName="Observaciones" onChange={onChangeValues} action={GET_INPUT_VALUES_EXTRAS} value={formDatosExtras?.inputTextExtrasAdscripto && formDatosExtras?.inputTextExtrasAdscripto} />
                    </div>
              </div>
              <div className='linea'/>
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" value={formDatosExtras?.inputAfectacionesExtras && formDatosExtras?.inputAfectacionesExtras} onChange={onChangeValues}  />
                        <InputButtonLiquidacion 
                        disabled={!formDatosExtras?.inputAfectacionesExtras} 
                        value={formDatosExtras?.inputInstrumLegalAfectaciones && formDatosExtras?.inputInstrumLegalAfectaciones} 
                        nameButton="..." 
                        nameLabel="Instrum. Legal" 
                        array={instrumLegales && instrumLegales}
                        propArrayOp="descripcion"
                        propIdOption="idInstrumentoLegal"
                        id="inputInstrumLegalAfectaciones" 
                        idInput="inputInstrumLegalAfectaciones" 
                        action={GET_INPUT_VALUES_EXTRAS} 
                        clasess={inputButtonClasessExtrasInstrum} 
                        onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion 
                        disabled={!formDatosExtras?.inputAfectacionesExtras} 
                        value={formDatosExtras?.inputSectorExtras && formDatosExtras?.inputSectorExtras} 
                        nameButton="..." 
                        nameLabel="Sector" 
                        id="inputSectorExtras" 
                        idInput="inputSectorExtras" 
                        action={GET_INPUT_VALUES_EXTRAS} 
                        clasess={inputButtonClasessExtrasAfectaciones} 
                        onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion 
                        disabled={!formDatosExtras?.inputAfectacionesExtras} 
                        value={formDatosExtras?.inputDireccionesExtras && formDatosExtras?.inputDireccionesExtras} 
                        nameButton="..." 
                        nameLabel="Direcciones" 
                        id="inputDireccionesExtras" 
                        idInput="inputDireccionesExtras" 
                        action={GET_INPUT_VALUES_EXTRAS} 
                        clasess={inputButtonClasessExtrasAfectaciones} 
                        onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacionObs '>
                        <TextArea disabled={!formDatosExtras?.inputAfectacionesExtras} idInput="inputTextExtrasAfectaciones" inputName="Observaciones" onChange={onChangeValues} action={GET_INPUT_VALUES_EXTRAS} value={formDatosExtras?.inputTextExtrasAfectaciones && formDatosExtras?.inputTextExtrasAfectaciones} />                          
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