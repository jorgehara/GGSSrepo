import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { employeContext } from '../../context/employeContext';
import {  getEmployeById, getEmployeByLegajo, getEmployeByName } from '../../services/fetchAPI';
import { getDomicilioEmpleado } from '../../services/mockDataDomicilios';
import { useDispatch, useSelector } from "react-redux";
import ButtonLarge from '../Buttons/ButtonLarge'
import "./Browser.css";
import { addEmploye, addOneEmploye, disableFunctions, getEmployes, selectedEmploye } from '../../redux/actions/employeActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { ADD_EMPLOYE, GET_INPUT_VALU_BROWSER } from '../../redux/types/employeTypes';
import swal from 'sweetalert';
import { disabledInputs } from '../../redux/actions/fetchActions';
import "./Browser.css"

const Browser = () => {
  const [listEmpleados, setListEmpleados] = useState([]);
  const { saveEmploye, saveDomicilio } = useContext(employeContext);
  const [empData, setEmpData] = useState({
    legajo: "",
    apellido: "",
  });
  
  const url = "http://54.243.192.82/api/Empleados?records=10000";

  const dispatch = useDispatch();
  const empleados = useSelector((state)=> state.employeStates.empleados)

  const valueInputLegajo = useSelector((state)=> state.employeStates.formulario.inpurLegajoBrowser);
  const valueInputApellido = useSelector((state)=> state.employeStates.formulario.inputApellidoNombreBrowser);
<<<<<<< HEAD
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const deshabilitado = useSelector((state)=> state.employeStates.disable);
  const disable = useSelector((state)=> state.generalState.disabled);
=======

  const valueInputs = useSelector((state)=> state.employeStates.formulario);
  const empleadoUno = useSelector((state)=> state.employeStates.employe);



  const {  saveDisable, disable} = useContext(employeContext);

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

>>>>>>> parent of 003444b (Merge branch 'Rodrigo' into Jorge)
  useEffect(() => {
    axios.get(url).then((res) => {
      let data = res.data.result;

      if (valueInputApellido.length > 0) {
        getEmployeByName(data, valueInputApellido).then((res) =>
            dispatch(getEmployes(res))
        );
        return;
      }
      if (valueInputLegajo.length > 0) {
        getEmployeByLegajo(data, valueInputLegajo).then((res) =>
            dispatch(getEmployes(res))
        );
        return;
      }
      dispatch(getEmployes(res.data.result))
    });

  }, [valueInputLegajo, valueInputApellido]);
  
 
  const deshabilitado = useSelector((state)=> state.employeStates.disable);


  function onSelect(e, name, idEmpleado) {
    
    getEmployeById(empleados, idEmpleado).then((res) => {  
      console.log(res[0].iDempleado)    
      dispatch(addOneEmploye(res[0]));
    });

    getDomicilioEmpleado(idEmpleado).then((res) => {
      saveDomicilio(res);
    });
  }

  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }

  function habilitaEdit(e){
    e.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
<<<<<<< HEAD
    
    //saveDisable(false);
=======
    saveDisable(false);
>>>>>>> parent of 003444b (Merge branch 'Rodrigo' into Jorge)
    let employeData = {...empleadoUno};

    const inputsArray = Object.entries(employeData);

    const clearInputs = inputsArray.map(([key])=> [key, '']);

    const inputsJson = Object.fromEntries(clearInputs);
    dispatch(disabledInputs(false));
    dispatch(addOneEmploye(inputsJson));
  }
  function habilitaUpdate(e){
    e.preventDefault();
    if(empleadoUno.iDempleado && empleadoUno.iDempleado){
      return dispatch(disableFunctions(true));
    }
    swal({
          title: "Error",
          text: `Debe seleccionar un empleado`,
          icon: "error",
    })
  }
  
  return (
<>
<div className='row gy-1 container-flex p-0 m-o '>
        {/* <InputForm nameInput="Legajo:" messageError="Solo puede contener números." placeHolder="N° Legajo" value={empData.legajo} inputId="legajo" onChange={onInputChange}/>
        <InputForm nameInput="Nombre:" messageError="Solo puede contener letras." placeHolder="Buscar Nombres" value={empData.apellido} inputId="nombreApellido"  onChange={onInputChange}/> */}
      <div className="row mt-1 p-0 m-0 ">
        <div className="container m-0 p-0">
          <input
            onChange={(e) => onChange(e, GET_INPUT_VALU_BROWSER)}
            value={valueInputLegajo && valueInputLegajo}
            className="form__grupo__input__browser "
            type="number"
            name="inpurLegajoBrowser"
            id="inpurLegajoBrowser"
            placeholder="Ingrese Legajo "
          />
      
      <div className="row mt-1 m-0 p-0  w-100">
        <input
          onChange={(e) => onChange(e, GET_INPUT_VALU_BROWSER)}
          value={valueInputApellido && valueInputApellido}
          className="form__grupo__input__browser "
          type="text"
          name="inputApellidoNombreBrowser"
          id="inputApellidoNombreBrowser"
          placeholder="Ingrese Nombre "
        />
      </div>
      <select
        defaultValue={[]}
        className="form-select  mt-1 selectMenu "
        multiple
        aria-label="multiple select example"
        disabled={!disable}
      >
        {  empleados && empleados.map((emp, i) => {
          return (
            <option
            key={i}
              onClick={(e) => onSelect(e, emp.apellido, emp.iDempleado)}
              value="1"
            >{`${emp.apellido}, ${emp.nombres}`}</option>
          );
        }) }
      </select>
        </div>
        </div>
        
<div className="container ">
  <div className="row align-items-start">
    <div className="col">
      <button className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`} onClick={(e)=>habilitaEdit(e)}>
        Agregar
      </button>
    </div>
    <div className="col">
      <button className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`} onClick={(e)=>habilitaUpdate(e)}>
        Modificar
      </button>
       
    </div>
    <div className="col">
      <button className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`} onClick={(e)=>habilitaUpdate(e)}>
          Eliminar
      </button>
        
    </div>

      </div>
      </div>

      </div>
</>
  
  );
};

export default Browser;
