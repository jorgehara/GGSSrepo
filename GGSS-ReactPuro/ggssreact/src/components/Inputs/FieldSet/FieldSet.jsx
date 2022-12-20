import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { addNewLicencia, updateLicencia, deleteLicencia, addLicenciaEmpleados } from '../../../redux/actions/fetchActions'
import { addNewDetalle, updateDetalle } from '../../../redux/actions/licenciasActions'
import { AXIOS_ERROR, SET_LOADING } from '../../../redux/types/fetchTypes'
import ButtonCancelarAceptar from '../../Buttons/ButtonCancelarAceptar'
import TableBasic1 from '../../Tables/TableBasic1'
import TableLicencias from '../../Tables/TableLicencias'
import TableSuspenLicencia from '../../Tables/TableSuspenLicencia'
import InputCbo from '../InputCbo/InputCbo'
import InputDate from '../InputDate/InputDate'
import InputForm from '../InputForm/InputForm'
import FechaSuspencion from './Childs/FechaSuspencion'
import NuevaLicencia from './Childs/NuevaLicencia'
import PorPeriodo from './Childs/PorPeriodo'
import Prorroga from './Childs/Prorroga'
import "./FieldSet.css";

const FieldSet = ({array,valueId, propArrayOpFem, opciones, selectedOption, onChange, valueForm, licenciaDelEmpleado, detalleLicencia, sendData, formLicencias, setLicenciaEmpladoDatos, setRefectch, refetch}) => {
    const columns1 =["Seleccionar","Año", "Días Totales", "Tomados", "Restan", "Vto", "Prórroga", "Resolución", "Disponibles"]
    const columns2 =["Seleccionar" ,"Desde", "Hasta", "Fecha Suspensión"]

    const empleadoUno = useSelector((state)=> state.employeStates.employe);
    const licenciaEmpleado = useSelector((state)=> state.licenciasState.licenciaEmpleado);
    const detalleSelected = useSelector((state)=> state.licenciasState.detalleSelect);
    const urlCreateLicencia = "http://54.243.192.82/api/InsertarNuevaLicencia";
    const urlLicencias = "http://54.243.192.82/api/ModificarDatos"
    const urlUpdateDetalleLicencia = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=${detalleSelected?.idDetalleLicenciaEmpleado}&FechaSuspension=${formLicencias?.inputDateSuspLic}`
    const urlDeleteLicencia = "http://54.243.192.82/api/EliminarLicenciaPorId";
    const dispatch = useDispatch();
    const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
    const [checked , setChecked ] = useState(false);

      console.log(licenciaEmpleado)

     

    let bodyLicencias = {
      "idEmpleado": empleadoUno.iDempleado,
      "año": Number(formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia),
      "diasDisponiblesTotales": formLicencias?.inputCantDiasDispLicencia,
      "fechaVencimiento": formLicencias?.inputVencimientoLicencias,
      "desde": null,
      "hasta":null ,
      "fechaProrroga": null,
      "nroResolucion": null
    }
    let bodyLicenciasUpdateSolicita = {
      "idLicenciaEmpleado": licenciaEmpleado?.idLicenciaEmpleado,
      "idEmpleado": licenciaEmpleado?.idEmpleado,
      "año": Number(formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia),
      "diasDisponiblesTotales": formLicencias?.inputCantDiasDispLicencia,
      "fechaVencimiento": formLicencias?.inputVencimientoLicencias,
      "desde": formLicencias?.inputDesdeSolicitaLic,
      "hasta":formLicencias?.inputHastaSolicitaLic ,
      "fechaProrroga": null,
      "nroResolucion": null
    }
    let bodyLicenciasUpdateProrroga = {
       "idLicenciaEmpleado": licenciaEmpleado?.idLicenciaEmpleado,
       "idEmpleado" : empleadoUno?.iDempleado,
      "año": licenciaEmpleado?.año,
      "diasDisponiblesTotales": licenciaEmpleado?.diasDisponiblesTotales,
      "fechaVencimiento": licenciaEmpleado?.fechaVencimiento,
      "diasDisponibles": licenciaEmpleado?.diasDisponibles,
      "diasTomados":licenciaEmpleado?.diasTomados , 
      "fechaProrroga": formLicencias?.inputNuevaFechaLic,
      "nroResolucion": formLicencias?.inputNuevaResolucionLic
    }
    
    console.log(licenciaDelEmpleado)

    const bodyDetalleLicencia = {
      IdDetalleLicenciaEmpleado : 0,
      IdLicenciaEmpleado : licenciaEmpleado && licenciaEmpleado.idLicenciaEmpleado,
      Desde :formLicencias && formLicencias.inputDesdeSolicitaLic,
      Hasta :formLicencias && formLicencias.inputHastaSolicitaLic,
      FechaSuspencion : null
    }
    

    let dateOne = new Date(formLicencias?.inputDesdeSolicitaLic).setHours(0,0,0,0);
      let dateTwo = new Date(licenciaEmpleado?.fechaVencimiento && licenciaEmpleado?.fechaVencimiento.substring(0,licenciaEmpleado?.fechaVencimiento.length -9)).setHours(0,0,0,0);

      let dateProrroga = new Date(formLicencias?.inputNuevaFechaLic).setHours(0,0,0,0);
    
    
    async function updateData(url, bodyPetition, action, id){
      if(dateTwo.valueOf() > dateProrroga){
        return swal({
          title: "Error",
          text: `La fecha de Prorroga debe ser mayor a la Fecha de Vencimiento`,
          icon: "error",
        })
      }
      if(id){
        try{
          await axios.put(url, bodyPetition)
          .then((res)=>{
            console.log(res.data.result)
              dispatch(action(res.data.result));
              setRefectch(!refetch)
          })
          }catch(err){
              return swal({
                  title: "Error",
                    text: `Error al insertar la Licencia, error: ${err}`,
                    icon: "error",
              })
          }
      }else 
      return swal({
        title: "Error",
        text: `Debe seleccionar una Licencia`,
        icon: "error",
      })
      
    }
    async function deleteLicenciaAxios(url, action,  id){
      try{
        console.log(`${url}/${id}`)
        await axios.delete(`${url}/${id}`)
        .then((res)=>{
          if(res.status === 200){
            dispatch(action(id))
            setRefectch(!refetch);
            return swal({
              title: "Ok",
              text: `Licencia borrada con éxito`,
              icon: "success",
            })
            
          }
          swal({
            title: "Error",
            text: `${res.displayMessage}`,
            icon: "error",
          })
        })
      }catch(err){
        console.log(err)
      }
    }
      function deleteWithOptions(){
        switch(selectedOption){
          case  "1 - Disponibles por Periodo" ||  "3 - Prorroga Vencimiento" || "2 - Solicita Nueva Licencia" : 
          deleteLicenciaAxios(urlDeleteLicencia, deleteLicencia ,licenciaEmpleado?.idLicenciaEmpleado );
            break;
          case "4 - Suspende Licencia":
             updateData(urlDeleteLicencia, bodyLicenciasUpdateSolicita, updateLicencia, licenciaEmpleado.idEmpleado);
            break;          
          
          default : return null;
        }
      }
     function fetchApiWithOptions(){
      
      switch(selectedOption){
        case  "1 - Disponibles por Periodo" : 
           sendData(urlCreateLicencia,bodyLicencias, addNewLicencia);
          break;
        case "2 - Solicita Nueva Licencia":
          solicitanuevaLic(bodyDetalleLicencia);
          break;
        case "3 - Prorroga Vencimiento"  :
           updateData(urlLicencias, bodyLicenciasUpdateProrroga, updateLicencia, licenciaEmpleado.idLicenciaEmpleado);
          break;
        case "4 - Suspende Licencia" :
           updateData(urlUpdateDetalleLicencia, "", updateDetalle, detalleSelected.idDetalleLicenciaEmpleado);
          break;
        default : return null;
      }
    }

    async function solicitanuevaLic(bodyDetalleLicencia){
      debugger;
      if(licenciaEmpleado.fechaProrroga && licenciaEmpleado.fechaProrroga){
        let dateProrroga = new Date(licenciaEmpleado.fechaProrroga).setHours(0,0,0,0);
        if(dateOne.valueOf() < dateProrroga.valueOf()){
          await axios.post(`http://54.243.192.82/api/DetalleLicenciasEmpleados`,bodyDetalleLicencia )
                    .then((res)=>{
                      console.log(res)
                      dispatch(addNewDetalle(res.data))
                    });
        }else{
          return swal({
                        title: "Error",
                        text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Prórroga`,
                        icon: "error",
                      })
        }
        return;
      }
      if(dateOne.valueOf() < dateTwo.valueOf()){
        await axios.post(`http://54.243.192.82/api/DetalleLicenciasEmpleados`,bodyDetalleLicencia )
        .then((res)=>{
          console.log(res)
          dispatch(addNewDetalle(res.data))
        });
      }else 
      return swal({
        title: "Error",
        text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Vencimiento`,
        icon: "error",
      })
    }
    return (          
        <>
          <div>
            <fieldset className='border p-2'>
              <legend className='float-none w-auto p-2'>
                {
                  selectedOption && selectedOption === "1 - Disponibles por Periodo" && "Cargar disponibles por periodo"
                }
                {
                  selectedOption && selectedOption === "2 - Solicita Nueva Licencia" && "Solicita Nueva Licencia"
                }
                {
                  selectedOption && selectedOption === "3 - Prorroga Vencimiento" && "Prorroga Vencimiento"
                }
                {
                  selectedOption && selectedOption === "4 - Suspende Licencia" && "Suspende Licencia"
                }
              </legend>
                <div className='row'>
               <div className='col-xl-4'>
                  
              </div>
               {
                selectedOption && selectedOption === "1 - Disponibles por Periodo" && <PorPeriodo setChecked={setChecked} checked={checked} sendData={sendData} valueForm={valueForm} onChange={onChange} valueId={valueId} array={array} propArrayOpFem={propArrayOpFem} /> 
               }
               {
                selectedOption && selectedOption === "2 - Solicita Nueva Licencia" && <NuevaLicencia setChecked={setChecked} checked={checked} valueForm={valueForm} onChange={onChange} valueId={valueId} array={array} propArrayOpFem={propArrayOpFem} /> 
               }
               {
                selectedOption && selectedOption === "3 - Prorroga Vencimiento" && <Prorroga setChecked={setChecked} checked={checked} valueForm={valueForm} onChange={onChange} /> 
               }
               {
                 selectedOption && selectedOption === "4 - Suspende Licencia" && <FechaSuspencion setCheckeds={setChecked} checked={checked} valueForm={valueForm} onChange={onChange} />
               }
           </div>
           </fieldset>
           <div className='col-xl-12 d-flex flex-row-reverse mt-2'>
             <button className='btn btn-outline-danger btnAgregar'  onClick={deleteWithOptions} >-</button>
             <button className='btn btn-outline-success btnAgregar' onClick={fetchApiWithOptions}>+</button>
          </div>
          <TableLicencias setChecked={setChecked} checked={checked} licenciaDelEmpleado={licenciaDelEmpleado} columns={columns1} value={[]} />
          <div className='col-xl-12 d-flex flex-row-reverse mt-2'>
             <button className='btn btn-outline-danger btnAgregar '>-</button>
          </div>
          <TableSuspenLicencia licenciaDelEmpleado={licenciaDelEmpleado} detalleLicencia={detalleLicencia} columns={columns2} value={[]} />
          
         
      </div>
       </>
    
    
  )
}

export default FieldSet