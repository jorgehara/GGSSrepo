import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectedOption } from '../../redux/actions/licenciasActions';
import { OPTIONS_FORMULARIO } from '../../redux/types/LicenciasTypes';
import EmployeData from '../EmployeData/EmployeData'
import FieldSet from '../Inputs/FieldSet/FieldSet';
import InputCbo from '../Inputs/InputCbo/InputCbo';

const Licencias = ({responses, setResponses}) => {
    const cantidadDias = 10;
    const [ formLicencias, setFormLicencias ] = useState(responses["formLicencias"]);

    const dispatch = useDispatch();
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

    function onChange(e, action) {
        dispatch(
          {
            type: action,
            payload : {name : e.target.name, value : e.target.value}
          });    
      }

return (
    <div className='container'>
        <div className='row'>
            <EmployeData />
            <div className='col-xl-12'>
                <b>Total días disponibles : {cantidadDias}</b>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center col-xl-12'>
                <InputCbo 
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
                <FieldSet array={newAños} valueId="año" propArrayOpFem="año" opciones={opciones} selectedOption={formLicencias?.inputOpcionsLicencias && formLicencias?.inputOpcionsLicencias} onChange={onChangeValues} valueForm={formLicencias && formLicencias} />
            </div>            
        </div>
    </div>
  )
}

export default Licencias


// dateFuture = new Date(2029,2,4,23,59,59);
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