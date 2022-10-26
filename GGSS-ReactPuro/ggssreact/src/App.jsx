import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import DatosPersonales from './components/DatosPersonales/DatosPersonales';
import Domicilios from './components/Domicilios/Domicilios';
import ListasDeDatos from './components/ListasDatos/ListadeDatos';
import { EmpleadoContextProvider } from './context/employeContext';
import Familia from './components/Familia/Familia';
import Browser from './components/Browser/Browser';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <EmpleadoContextProvider>
      <NavbarMenu />
      <div className='row'>
        <Browser />
        <div className='col-xl-9'>
          <Switch>
            <Route path="/lista-datos" exact element={<ListasDeDatos/>} />
            <Route path="/datos-personales" exact element={<DatosPersonales />} />
            <Route path="/domicilios" exact element={<Domicilios />} />
            <Route path="/familia" exact element={<Familia />} />
          </Switch>
        </div>
      </div>    
      <Footer />  
    </EmpleadoContextProvider>
    </>
  

  );
}

export default App;