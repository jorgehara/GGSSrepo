import React, { useEffect } from 'react'
import Browser from '../Browser/Browser'
import DatosPersonales from '../DatosPersonales/DatosPersonales'
import Documentacion from '../Documentacion/Documentacion';
import Familia from '../Familia/Familia';
import Footer from '../Footer/Footer';
import Licencias from '../Licencias/Licencias';
import Liquidacion from '../Liquidacion/Liquidacion';
import AdicLiquidacion from "../AdicLiquidacion/AdicLiquidacion";
import Navbar from '../Navbar/Navbar';
import TrabajosAnteriores from '../TrabajosAnteriores/TrabajosAnteriores';
import Extras from '../Extras/Extras';
import { useState } from 'react';

const Empleados = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [responses, setResponses] = useState({});

    function handleTabChange(value){        
        setTabIndex(value);
    };  
    
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-3'>
                <Browser />
            </div>
            <div className='col-xl-9'>
                <Navbar handleTabChange={handleTabChange} tabIndex={tabIndex} />
                {
                    tabIndex === 0 && <DatosPersonales  responses={responses} setResponses={setResponses} />
                } 
                {
                    tabIndex === 1 && <Familia  responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 2 && <Liquidacion  responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 3 && <AdicLiquidacion  responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 4 && <TrabajosAnteriores  responses={responses} setResponses={setResponses} />
                    
                }
                {
                    tabIndex === 5 && <Documentacion  responses={responses} setResponses={setResponses} />
                    
                }
                {
                    tabIndex === 6 && <Licencias  responses={responses} setResponses={setResponses} />
                    
                }
                {
                    tabIndex === 7 && <Extras  responses={responses} setResponses={setResponses} />
                }
            </div>            
        </div>
        <div className='d-flex flex-row-reverse  w-100 '>
            <button className='btn btn-danger '>
                Cancelar
            </button>
            <button className='btn btn-success '>
                Aceptar
            </button>
        </div>
        <Footer /> 
    </div>
)
}

export default Empleados