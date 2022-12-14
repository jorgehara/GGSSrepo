import React, { useEffect, useState } from 'react'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate'
import TextArea from '../Inputs/TextArea/TextArea'
import EmployeData from '../EmployeData/EmployeData';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import TableBasic1 from '../Tables/TableBasic1';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import InputDateDocs from '../Inputs/InputDateDocs/InputDateDocs';
import { useDispatch, useSelector } from 'react-redux';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { addDocumentacionEmpleados } from '../../redux/actions/fetchActions';
import axios from 'axios';
import { getInputValue, getOneDocumento } from '../../redux/actions/documentacionActions';
import { inputButtonClasess } from '../../classes/classes';
import { GET_INPUT_VALUE } from '../../redux/types/documentacionTypes';

const Documentacion = ({responses, setResponses}) => {
    const columns = ["Fecha", "Vencimiento", "Documento", "Liq", "Observaciones", "Incluir Cuota"]
    const dispatch = useDispatch();
    const [ disable, setDisable] = useState(true);
    const [ formDocumentacion, setFormDocumentacion ] = useState(responses["formDocumentacion"]);


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
    function onChangeValues(e, key){
        const newResponse = {...formDocumentacion};
        newResponse[key] = e;
        setFormDocumentacion({
            ...newResponse
        });
    };
    useEffect(() => {
        setResponses({
          ...responses,
          formDocumentacion
        });      
    },[formDocumentacion]);
    
    useEffect(()=>{
        handleFetch( urlDocumentacionEmpleados, addDocumentacionEmpleados);
        handleFetch( urlDocumentacion, getOneDocumento);
    },[])
    
    const empleadoUno = useSelector((state)=> state.employeStates.employe);
    const documentacionEmpleados = useSelector((state)=> state.generalState.documentacionEmpleados);
    const documentaciones = useSelector((state)=> state.documentacionState.domiciliosDelEmpleado);

    //const datosFormulario = useSelector((state)=> state.documentacionState.formulario);

    const documentacionDelEmpleado = empleadoUno && documentacionEmpleados && documentacionEmpleados.filter((doc)=> {return(doc.idEmpleado === empleadoUno.iDempleado)});


return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={false} onChange={onChangeValues} action={GET_INPUT_VALUE} value={formDocumentacion?.inputDatePresentacion && formDocumentacion?.inputDatePresentacion} />
            </div>
            <div className='col-xl-12'>
                <InputDate nameInput="Fecha Vencimiento" disable={disable} setDisable={setDisable} idInput="inputDateVencimiento" display={true}  onChange={onChangeValues} action={GET_INPUT_VALUE} actionReset={getInputValue} value={formDocumentacion?.inputDateVencimiento && formDocumentacion?.inputDateVencimiento} valueCheck={formDocumentacion?.inputCheckDocusDate && formDocumentacion?.inputCheckDocusDate} idInputCheck="inputCheckDocusDate" />
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
                    onChange={onChangeValues}
                    action={GET_INPUT_VALUE}
                    value={formDocumentacion?.inputSelectDocumentacion && formDocumentacion?.inputSelectDocumentacion}
                />
            </div>
            <div className='col-xl-12'>
                <TextArea inputName="Observaciones " onChange={onChangeValues} idInput="textAreaDocumentacion" action={GET_INPUT_VALUE} value={formDocumentacion?.textAreaDocumentacion && formDocumentacion?.textAreaDocumentacion} />
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputCheckLiquidacion" nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)"  onChange={onChangeValues} action={GET_INPUT_VALUE} value={formDocumentacion?.inputCheckLiquidacion && formDocumentacion?.inputCheckLiquidacion} />
            </div>
            <div className='col-xl-12'>
                <CheckLabel idInput="inputIncluirCuotaAlim" nameLabel="Incluir en cuota Alimentaria"  onChange={onChangeValues} action={GET_INPUT_VALUE} value={formDocumentacion?.inputIncluirCuotaAlim && formDocumentacion?.inputIncluirCuotaAlim} />
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