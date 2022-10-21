import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useLocation
} from "react-router-dom";
import DatosPersonales from './components/DatosPersonales/DatosPersonales';
import Domicilios from './components/Domicilios/Domicilios';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/datos-personales" exact element={<DatosPersonales />} />
      <Route path="/domicilios" exact element={<Domicilios />} />
    </Switch></>
  );
}

export default App;