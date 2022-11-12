import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import DatosPersonales from './components/DatosPersonales/DatosPersonales';
import Domicilios from './components/Domicilios/Domicilios';
import { EmpleadoContextProvider } from './context/employeContext';
import Home from './components/Home/Home';


function App() {
  return (
    <>
    <EmpleadoContextProvider>
      <NavbarMenu />
          <Switch>
            <Route path="/home" exact element={<Home />} /> 
            <Route path="/home/datos-personales" exact element={<Home />} />  
            <Route path="/home/familia" exact element={<Home />} />  
            <Route path="/home/documentacion" exact element={<Home />} /> 

          </Switch>        
    </EmpleadoContextProvider>
    </>
  

  );
}

export default App;