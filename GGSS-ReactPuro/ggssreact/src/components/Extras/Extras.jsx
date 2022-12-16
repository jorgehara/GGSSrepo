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
      <div className='container-flex  border-top-0'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Datos Extras
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
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
<<<<<<< HEAD
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
            </div>
          </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Adscripto
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
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
=======
              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inpútAdscriptoExtras" nameLabel="Adscripto" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegal" clasess={inputButtonClasessExtrasInstrum} onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
>>>>>>> parent of 003444b (Merge branch 'Rodrigo' into Jorge)
                    </div>
                    <div className='divObservaciones'>
                        <TextArea idInput="inputTextExtrasAdscripto" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>

              </div>
<<<<<<< HEAD
              </div>
            </div>
          </div>  
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Afectaciones
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
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
=======
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegalAfectaciones" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasInstrum} onChange={onChange} />
>>>>>>> parent of 003444b (Merge branch 'Rodrigo' into Jorge)
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
                    
              </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
      </section>  
  )
}

export default Extras