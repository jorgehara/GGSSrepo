import React, { useEffect, useState } from 'react'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate'
import TextArea from '../Inputs/TextArea/TextArea'
import EmployeData from '../EmployeData/EmployeData';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import TableBasic1 from '../Tables/TableBasic1';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import { ADD_DATOS_PERSONALES } from '../../redux/types/datosPersonalesTypes';
import InputDateDocs from '../Inputs/InputDateDocs/InputDateDocs';
import { useDispatch, useSelector } from 'react-redux';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { addDocumentacionEmpleados } from '../../redux/actions/fetchActions';
import axios from 'axios';
import { getInputValue, getOneDocumento } from '../../redux/actions/documentacionActions';
import { inputButtonClasess } from '../../classes/classes';
import { GET_INPUT_VALUE } from '../../redux/types/documentacionTypes';

const Documentacion = () => {
    const columns = ["Fecha", "Vencimiento", "Documento", "Liq", "Observaciones", "Incluir Cuota"]
    const dispatch = useDispatch();
    const [ disable, setDisable] = useState(true);

    const urlDocumentacionEmpleados = "http://54.243.192.82/api/EmpleadosDocumentacion";
    const urlDocumentacion = "http://54.243.192.82/api/Documentacion";

    const handleFetch=(url, action )=>{
        dispatch({type: SET_LOADING});
          axios.get(url)
          .then((res)=>{
            dispatch( action(res.data.result));
          })
          .catch((err)=>{
            dispatch({type:AXIOS_ERROR});
          })
       }
       function onChange(e, action) {
        dispatch(
          {
            type: action,
            payload : {name : e.target.name, value : e.target.value}
          });    
      }
       useEffect(()=>{
         handleFetch( urlDocumentacionEmpleados, addDocumentacionEmpleados);
         handleFetch( urlDocumentacion, getOneDocumento);
       },[])
    
    const empleadoUno = useSelector((state)=> state.employeStates.employe);
    const documentacionEmpleados = useSelector((state)=> state.generalState.documentacionEmpleados);
    const documentaciones = useSelector((state)=> state.documentacionState.domiciliosDelEmpleado);

    const datosFormulario = useSelector((state)=> state.documentacionState.formulario);

    const documentacionDelEmpleado = empleadoUno && documentacionEmpleados && documentacionEmpleados.filter((doc)=> {return(doc.idEmpleado === 1153)});

    console.log(datosFormulario);

return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={false} onChange={onChange} action={GET_INPUT_VALUE}/>
            </div>
            <div className='col-xl-12'>
                <InputDate nameInput="Fecha Vencimiento" disable={disable} setDisable={setDisable} idInput="inputDateVencimiento" display={true}  onChange={onChange} action={GET_INPUT_VALUE} actionReset={getInputValue}/>
            </div>
            <div className='col-xl-12'>
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Documentación"
                    placeholder="Documentación"
                    array={documentaciones && documentaciones}
                    propArrayOp="documentacion1"
                    propIdOption="idDocumentacion"
                    idInput="inputSelectDocumentacion"
                    onChange={onChange}
                    action={GET_INPUT_VALUE}
                />
            </div>
            <div className='col-xl-12'>
                <TextArea inputName="Observaciones " onChange={onChange} idInput="textAreaDocumentacion" action={GET_INPUT_VALUE}/>
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputCheckLiquidacion" nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)"  onChange={onChange} action={GET_INPUT_VALUE}/>
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputIncluirCuotaAlim" nameLabel="Incluir en cuota Alimentaria"  onChange={onChange} action={GET_INPUT_VALUE}/>
            </div>
            <div className='col-xl-12'>
                <ButtonCancelarAceptar cancelar="-" aceptar="+" />
                <TableBasic1 columns={columns} value={documentacionDelEmpleado}  documentaciones={documentaciones}/>
            </div>
        </div>
    </div>
)
}

export default Documentacion