import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { employeContext } from '../../context/employeContext'
import Browser from '../Browser/Browser'
import EmployeData from '../EmployeData/EmployeData'
import Navbar from '../Navbar/Navbar'

const Familia = () => {
  
  const {saveEmpl} = useContext(employeContext);
  // const url = `http://54.243.192.82/api/ArchivosDocumentacionEmpleados/${parseInt(saveEmpl[0].iDempleado)}`;
      
  
  return (
    <div className='container'>
        <div class="row">  
            <div className='Lateral-Derecho '>   
                <EmployeData />
                <div className='container-flex'>
                  <div className='container mt-2 border border-3 p-3'>
                      <div className='row'>
                          
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Familia