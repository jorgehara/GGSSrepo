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
import { useDispatch } from 'react-redux';
import { disabledInputs } from '../../redux/actions/fetchActions';
import { disableFunctions } from '../../redux/actions/employeActions';

const Empleados = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [disable , setDisable] = useState(true);
    const dispatch = useDispatch();

    function handleTabChange(value){        
        setTabIndex(value);
    };  
    function cancelEdit(e){
        e.preventDefault();
        setDisable(true);
    }
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-3'>
                <Browser  disable={disable} setDisable={setDisable} />
            </div>
            <div className='col-xl-9 '>
                <Navbar handleTabChange={handleTabChange} tabIndex={tabIndex} />
                {
                    tabIndex === 0 && <DatosPersonales disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                } 
                {
                    tabIndex === 1 && <Familia disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 2 && <Liquidacion disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 3 && <AdicLiquidacion disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 4 && <TrabajosAnteriores disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 5 && <Documentacion disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 6 && <Licencias disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 7 && <Extras disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
            </div>            
        </div>
        <div className='d-flex flex-row-reverse  w-100 '>
            <button className='btn btn-danger ' onClick={(e)=>cancelEdit(e)}>
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