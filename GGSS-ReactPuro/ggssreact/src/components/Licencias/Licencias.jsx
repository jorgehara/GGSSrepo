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

const Licencias = ({responses, setResponses}) => {
    const cantidadDias = 10;
    const [ formLicencias, setFormLicencias ] = useState(responses["formLicencias"]);
    const empleadoUno = useSelector((state)=> state.employeStates.employe);
    const licenciasEmplados = useSelector((state)=> state.generalState.licenciasEmpleados);
    const dispatch = useDispatch();
    const licenciaDelEmpleado = licenciasEmplados && licenciasEmplados.filter((lic)=> lic.idEmpleado === empleadoUno.iDempleado);
    const [ licenciaEmpleadoDatos, setLicenciaEmpladoDatos] = useState([]);
    const [ refetch , setRefectch ] =useState(false);

    
    
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
    const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
    console.log(licenciaEmpleado?.idLicenciaEmpleado);
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
    const newAños = años && años.map((año)=>{
        return (
            {
                "año" : año 
            }
        )
    })
    useEffect(()=>{
        axios.get(`http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoUno?.iDempleado}`)
        .then((res)=>{
            setLicenciaEmpladoDatos(res.data)
        })
    },[empleadoUno?.iDempleado, refetch])

    console.log(licenciaEmpleadoDatos)

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

    function sendData(url, bodyPetition, action){
        try{
            axios.post(url, bodyPetition)
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


//         function GetCount(){
//                 dateNow = new Date();
//                 //grab current date
//                 amount = dateFuture.getTime() - dateNow.getTime();                
//                 //calc milliseconds between dates
//                 delete dateNow;
//                 // time is already past
//                 if(amount < 0){
//                         document.getElementById('countbox').innerHTML="Now!";
//                 }
//                 // date is still good
//                 else{
//                         days=0;hours=0;mins=0;secs=0;out="";
//                         amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs
//                         days=Math.floor(amount/86400);//days
//                         amount=amount%86400;
//                         hours=Math.floor(amount/3600);//hours
//                         amount=amount%3600;
//                         mins=Math.floor(amount/60);//minutes
//                         amount=amount%60;
//                         secs=Math.floor(amount);//seconds
//                         if(days != 0){out += days +" day"+((days!=1)?"s":"")+",<br />";}
//                         if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+",<br />";}
//                         if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+",<br />";}
//                         out += secs +" seconds";
//                         document.getElementById('countbox').innerHTML=out;
//                         setTimeout("GetCount()", 1000);
//                 }
//         }
//         window.onload=function(){GetCount();}//call when everything has loaded