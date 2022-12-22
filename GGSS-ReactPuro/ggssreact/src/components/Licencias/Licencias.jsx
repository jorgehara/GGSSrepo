import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { inputSelectedoptionLicencias } from '../../classes/classes';
import { addLicenciaEmpleados } from '../../redux/actions/fetchActions';
import { selectedOption } from '../../redux/actions/licenciasActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { OPTIONS_FORMULARIO } from '../../redux/types/LicenciasTypes';
import EmployeData from '../EmployeData/EmployeData'
import FieldSet from '../Inputs/FieldSet/FieldSet';
import InputCbo from '../Inputs/InputCbo/InputCbo';

const Licencias = ({responses, setResponses, licenciaEmpleadoDatos, setLicenciaEmpladoDatos,setRefectch, refetch}) => {
    
    const [ formLicencias, setFormLicencias ] = useState(responses["formLicencias"]);
    const empleadoUno = useSelector((state)=> state.employeStates.employe);
    const licenciasEmplados = useSelector((state)=> state.generalState.licenciasEmpleados);
    const dispatch = useDispatch();
    const licenciaDelEmpleado = licenciasEmplados && licenciasEmplados.filter((lic)=> lic.idEmpleado === empleadoUno.iDempleado);

   /*  const licenciasDelEmpleado = licenciaDelEmpleado && licenciaDelEmpleado[0] && licenciaDelEmpleado[0] && licenciasEmplados && licenciasEmplados.filter((lic)=>{
        return(
            lic.idLicenciaEmpleado === licenciaDelEmpleado[0].idLicenciaEmpleado
        )
    }) */

    
    //console.log(licenciasEmplados.filter((lic)=> {return(lic.idLicenciaEmpleado === 468)}))

    const opciones = [{
        opcion : "1 - Disponibles por Periodo",        
    },{
        opcion : "2 - Solicita Nueva Licencia",        
    },{
        opcion : "3 - Prorroga Vencimiento",        
    },{
        opcion : "4 - Suspende Licencia",        
    }]
    const año = new Date().getFullYear();
    const años = Array.from(new Array(123), (val, index) => año - index);

    const selectedOptions = useSelector((state)=> state.licenciasState.selectedOptionLicencia);
    const licenciaEmpleado = useSelector((state)=> state.licenciasState.licenciaEmpleado);
    const detalleLicencia = useSelector((state)=> state.licenciasState.detalleLicencia);
    const detalleSelected = useSelector((state)=> state.licenciasState.detalleSelect);
    
    
    const newAños = años && años.map((año)=>{
        return (
            {
                "año" : año 
            }
        )
    })
    

   

    function onChangeValues(e, key){
        const newResponse = {...formLicencias};
        newResponse[key] = e;
        setFormLicencias({
            ...newResponse
        });
    };

    useEffect(() => {
        setResponses({
          ...responses,
          formLicencias
        });      
    },[formLicencias]);

    function sendData(url,  action){
        try{
            axios.post(url)
        .then((res)=>{
            console.log(res.data)
            dispatch(action(res.data));
            setRefectch(!refetch)
        })
        }catch(err){
            swal({
                title: "Error",
                  text: `Error al insertar la Licencia, error: ${err}`,
                  icon: "error",
            })
        }
        
    }

return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
            <div className='col-xl-12'>
                <b>Total días disponibles : {licenciaEmpleado && licenciaEmpleado.diasDisponiblesTotales}</b>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center col-xl-12'>
                <InputCbo 
                clasess={inputSelectedoptionLicencias}
                display={false} 
                idInput="inputOpcionsLicencias" 
                value={[]} 
                propArrayOpFem="opcion" 
                array={opciones} 
                valueId="opcion" 
                nameLabel="Opciones:" 
                nameButton="..." 
                onChange={onChangeValues} 
                provinciaAction={selectedOption} 
                action={OPTIONS_FORMULARIO} 
                idSelected = {formLicencias?.inputOpcionsLicencias && formLicencias?.inputOpcionsLicencias} />
            </div>
            <div className='col-xl-12 mt-2'>
                <FieldSet refetch={refetch} setRefectch={setRefectch} setLicenciaEmpladoDatos={setLicenciaEmpladoDatos} formLicencias={formLicencias} sendData={sendData} detalleLicencia={detalleLicencia} licenciaDelEmpleado={licenciaEmpleadoDatos} array={newAños} valueId="año" propArrayOpFem="año" opciones={opciones} selectedOption={formLicencias?.inputOpcionsLicencias && formLicencias?.inputOpcionsLicencias} onChange={onChangeValues} valueForm={formLicencias && formLicencias} />
            </div>            
        </div>
    </div>
  )
}

export default Licencias

