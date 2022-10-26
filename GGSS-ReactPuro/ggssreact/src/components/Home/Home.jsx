import React from 'react'
import { useLocation } from 'react-router-dom';
import Browser from '../Browser/Browser'
import DatosPersonales from '../DatosPersonales/DatosPersonales'
import Familia from '../Familia/Familia';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    let location = useLocation();

    console.log(location.pathname);

  return (
    <div className='container-flex ml-4 mr-4'>
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
                
            </div>
        </div>
        <Footer /> 
    </div>
  )
}

export default Home