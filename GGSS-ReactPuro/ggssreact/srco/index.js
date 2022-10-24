import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormularioUp from './Components/FormularioUp';
import Navbar from './Components/Navbar';
import SectionTabla from './Components/SectionTabla';
import FormularioDown from './Components/FormularioDown';
import SectionCRUD from './Components/SectionCRUD';
import Footer from './Components/Footer';
import ModalBoostrap from './Components/ModalBoostrap';
// import VetanaLateral from './Components/VentanaLateral';
// import ModalEstudios from './ComponentsModalEmpleado/ModalEstudios';
// import PoppusOk from './Components/PoppusOK';
// import ContactForm from './Components/ContactForm';
// import Modals from './Components/Modals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div >
    <App/>
    {/* <VetanaLateral/> */}
    </div>
    <div>
    {/* <Modals/> */}
    {/* <ContactForm/> */}
    {/* <PoppusOk/> */}
    <ModalBoostrap/>
    <Navbar/>
    
    <FormularioUp/>
    <FormularioDown/>
    <SectionTabla/>
    <SectionCRUD/>
    <Footer/>
    </div>

  </React.StrictMode>
);

reportWebVitals();
