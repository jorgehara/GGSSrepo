import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Browser from '../Browser/Browser'
import DatosPersonales from '../DatosPersonales/DatosPersonales'
import Documentacion from '../Documentacion/Documentacion';
import Familia from '../Familia/Familia';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    let location = useLocation();

    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/home/datos-personales")
    },[])

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-3'>
                <Browser />
            </div>
            <div className='col-xl-9'>
                <Navbar />
                {
                    location.pathname === "/home/datos-personales" && <DatosPersonales />
                } 
                {
                    location.pathname === "/home/familia" && <Familia />
                }
                {
                    location.pathname === "/home/documentacion" && <Documentacion />
                }
            </div>
        </div>
        <Footer /> 
    </div>
  )
}

export default Home