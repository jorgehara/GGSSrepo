import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { employeContext } from '../../context/employeContext';
import {  getEmployeByLegajo, getEmployeByName } from '../../services/fetchAPI';
import { getDomicilioEmpleado } from '../../services/mockDataDomicilios';
import ButtonLarge from '../Buttons/ButtonLarge'
import "./Browser.css";

const Browser = () => {
  const [listEmpleados, setListEmpleados] = useState([]);
  const { saveEmploye, saveDomicilio } = useContext(employeContext);
  const [empData, setEmpData] = useState({
    legajo: "",
    apellido: "",
  });
  const url = "http://54.243.192.82/api/Empleados?records=25";
  const {  saveDisable, disable} = useContext(employeContext);
  useEffect(() => {
    axios.get(url).then((res) => {
      let data = res.data.result;

      if (empData.apellido.length > 0) {
        getEmployeByName(data, empData.apellido).then((res) =>
          setListEmpleados(res)
        );
        return;
      }
      if (empData.legajo.length > 0) {
        getEmployeByLegajo(data, empData.legajo).then((res) =>
          setListEmpleados(res)
        );
        return;
      }
      setListEmpleados(res.data.result);
    });
  }, [empData.apellido, empData.legajo]);

  function onSelect(e, name, idEmpleado) {
    getEmployeByName(listEmpleados, name).then((res) => {
      saveEmploye(res);
    });
    getDomicilioEmpleado(idEmpleado).then((res) => {
      saveDomicilio(res);
    });
  }

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = (evt.target.value).toUpperCase();

    let newEmpData = { ...empData };
    newEmpData[name] = value;
    setEmpData(newEmpData);
  }

  function habilitaEdit(e){
    e.preventDefault();
    saveDisable(false)
  }

  return (
<>
<div className='row gy-1 container-fluid '>
        {/* <InputForm nameInput="Legajo:" messageError="Solo puede contener números." placeHolder="N° Legajo" value={empData.legajo} inputId="legajo" onChange={onInputChange}/>
        <InputForm nameInput="Nombre:" messageError="Solo puede contener letras." placeHolder="Buscar Nombres" value={empData.apellido} inputId="nombreApellido"  onChange={onInputChange}/> */}
      <div className="row mt-1 w-100">
        <input
          onChange={(e) => onInputChange(e)}
          value={empData.legajo}
          className="form__grupo__input__browser mr-2"
          type="number"
          name="legajo"
          id="legajos"
          placeholder="Ingrese Legajo "
        />
      </div>
      <div className="row mt-1 mr-2 w-100">
        <input
          onChange={(e) => onInputChange(e)}
          value={empData.apellido}
          className="form__grupo__input__browser mr-2"
          type="text"
          name="apellido"
          id="nombres"
          placeholder="Ingrese Nombre "
        />
      </div>
      <select
        className="form-select row mt-1 selectMenu ml-4"
        multiple
        aria-label="multiple select example"
      >
        {listEmpleados.map((emp, i) => {
          return (
            <option
            key={i}
              onClick={(e) => onSelect(e, emp.apellido, emp.iDempleado)}
              value="1"
            >{`${emp.apellido}, ${emp.nombres}`}</option>
          );
        })}
      </select>
        
<div class="container text-center d-inline-flex">
  <div class="row align-items-start">
    <div class="col">
        <ButtonLarge
          color="danger"
          tamaño="sm"
          justyfy="center m-1"
          align=""
          nameButton="Agregar"
        />
    </div>
    <div class="col">
        <ButtonLarge
          color="danger"
          tamaño="sm"
          justyfy="center m-1"
          nameButton="Modificar"
          onClick={habilitaEdit}
        />
    </div>
    <div class="col">
        <ButtonLarge
          color="danger"
          tamaño="sm"
          justyfy="center m-1"
          nameButton="Eliminar"
        />
    </div>

      </div>
      </div>

      </div>
</>
  
  );
};

export default Browser;
