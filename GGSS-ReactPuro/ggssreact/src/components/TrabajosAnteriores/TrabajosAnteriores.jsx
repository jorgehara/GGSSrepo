import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { addTrabajoAnterior, deleteOneTrabajo, getInput, getTrabajosAnteriores } from '../../redux/actions/trabajosAnterioresActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { GET_INPUT } from '../../redux/types/trabajosAnteriores';
import EmployeData from '../EmployeData/EmployeData';
import InputTextTrabajos from '../Inputs/InputTextTrabajos/InputTextTrabajos';
import TableTrabajosAnteriores from '../Tables/TableTrabajosAnteriores';
import "./TrabajosAnteriores.css";

const TrabajosAnteriores = () => {

    const dispatch = useDispatch();

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
    const urlTrabajosAnteriores = "http://54.243.192.82/api/TrabajosAnteriores";

    useEffect(()=>{
        handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores)
    },[])


    const estado = useSelector((state)=> state.trabajosAnteriores.formulario);

    const empleadoUno = useSelector((state)=> state.employeStates.employe);

    const trabajosAnteriores = useSelector((state)=> state.trabajosAnteriores.trabajosAnteriores);

    const valueInputDateDesde = useSelector((state)=> state.trabajosAnteriores.formulario.idDateDesde);
    const valueInputDateHasta = useSelector((state)=> state.trabajosAnteriores.formulario.idDateHasta);
    const valueInputDescripcion = useSelector((state)=> state.trabajosAnteriores.formulario.idDescripcionTrabajos);

    const valueIdTrabajoAnterior = useSelector((state)=> state.trabajosAnteriores.idTrabajoAnterior);

    console.log(trabajosAnteriores)

    useEffect(()=>{
    },[estado])

    const columns = ["Seleccionar" , "Desde" , "Hasta", "Descripción"];

    const trabajosAnterioresDelEmpleado = trabajosAnteriores && trabajosAnteriores.filter((trabajo)=> trabajo.idEmpleado === empleadoUno.iDempleado);

    console.log(trabajosAnteriores);

    const bodyPetition = {
        "idEmpleado": empleadoUno.iDempleado,
        "desde": valueInputDateDesde,
        "hasta": valueInputDateHasta,
        "descripcion": valueInputDescripcion,
        "actualidad": true
    }

    const sendData=async()=>{
        try{
            //LOADING
            axios.post(urlTrabajosAnteriores, bodyPetition)
            .then((res)=>{
                if(res.status === 200){
                    //loading false
                    dispatch(addTrabajoAnterior(res.data)) //crear la accion para agregar un nuevo trabajo.
                    handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores);
                    swal({
                        title: "Trabajo anterior Agregado",
                        text: "Trabajo anterior agregado con éxito",
                        icon: "success",
                    })
                }
            })
        }catch(err){
            //error true
            swal({
                title: "Error",
                text: err.toString(),
                icon: "error",
            })
        }
    }
    const deleteTRabajoAnterior= async (id)=>{
        try{
            await axios.delete(`${urlTrabajosAnteriores}/${id}`)
            .then((res)=> {
                dispatch(deleteOneTrabajo(Number(id)));
                swal({
                    title: "Ok",
                    text: "Trabajo anterior eliminado con éxito",
                    icon: "success",
                })
            })
        }catch(err){
            swal({
                title: "Error",
                text: err,
                icon: "error",
            })
        }
    }


  return (
    <div className='container-flex'>
        <div className='row'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-4'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Desde:</label>
                    <input type="date" onChange={(e)=> onChange(e, GET_INPUT)} value={valueInputDateDesde} name="idDateDesde" id="idDateDesde" className='dateTrabajos '/>
                </div>
            </div>        
        </div>
        <div className='row'>
            <div className='col-xl-4'>
                <div className='d-flex flex-row justify-content-start align-items-center mt-2 '>
                    <label htmlFor="idDateDesde">Hasta:</label>
                    <input type="date" onChange={(e)=> onChange(e, GET_INPUT)} value={valueInputDateHasta} name="idDateHasta" id="idDateHasta" className='dateTrabajos2 '/>
                    <input type="checkbox" name="idCheckTrabajos" id="idCheckTrabajos"  className='checkTrabajos' onChange={(e)=> onChange(e,GET_INPUT)} />
                    <label htmlFor="idDateDesde" className='labelTrabajos'>Hasta la Actualidad:</label>
                </div>
            </div>        
        </div>
        <div className='row'>
            <InputTextTrabajos nameLabel="Descripción" inputId="idDescripcionTrabajos" onChange={onChange} value={valueInputDescripcion} action={GET_INPUT} onSend={sendData} onDelete={deleteTRabajoAnterior} id={valueIdTrabajoAnterior} />
        </div>
        <div className='row'>
            <TableTrabajosAnteriores nameLabel="Historial:" columns={columns} array={trabajosAnterioresDelEmpleado}/>
        </div>
    </div>
  )
}

export default TrabajosAnteriores