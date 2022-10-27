import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { employeContext } from '../../context/employeContext'
import Browser from '../Browser/Browser'
import EmployeData from '../EmployeData/EmployeData'
import InputCbo from '../Inputs/InputCbo/InputCbo'
import InputChecked from '../Inputs/InputChecked/InputChecked'
import InputMultiple from '../Inputs/InputMultiple/InputMultiple'
import InputParentesco from '../Inputs/InputParentesco/InputParentesco'
import Navbar from '../Navbar/Navbar'

const Familia = () => {
  
  const {saveEmpl} = useContext(employeContext);
  const tipoDNI = ["D.N.I", "L.E", "L.C", "Pasaporte", "Visa"];
  const parentesco = ["Primo", "Hijo", "Padre", "Madre", "Tio", "Sobrino", "Nieto"]
  
  return (
    <div className='container'>
        <div class="row">  
            <div className='Lateral-Derecho'>   
                <EmployeData />
                <div className='container-flex'>
                  <div className='container mt-2 border border-3 p-3'>
                      <div className='row'>
                      <InputChecked value={saveEmpl[0] !== undefined ? `${saveEmpl[0].apellido}, ${saveEmpl[0].nombres}` : null} nameInput="Apellido y Nombres" nameCheck="Fijar" placeHolder="Apellido y Nombres"/>
                      <InputMultiple optionsDNI={tipoDNI} nameInputDNI="Tipo y N° Documento" valueRadio={saveEmpl[0] !== undefined ? saveEmpl[0].sexo : null} valueDNI={saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null} nameFirst="Masculino" nameSecond="Femenino" nameInputRadio="" placeholder="17654987" />
                      <InputParentesco nameInput="Parentesco" array={parentesco} placeHolder="Parentesco" nameButton="..." nameCheck="Fijar" checked="" />
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Familia