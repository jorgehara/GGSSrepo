import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import DatosPersonales from './components/DatosPersonales/DatosPersonales';
import Domicilios from './components/Domicilios/Domicilios';
import ListasDeDatos from './components/ListasDatos/ListadeDatos';


function App() {
  return (
    <>
    <NavbarMenu />
    <Switch>
      <Route path="/lista-datos" exact element={<ListasDeDatos/>} />
      <Route path="/datos-personales" exact element={<DatosPersonales />} />
      <Route path="/domicilios" exact element={<Domicilios />} />
    </Switch>
    </>
  

  );
}

export default App;