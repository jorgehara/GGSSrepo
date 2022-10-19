// import logo from './logo.svg';
import './App.css';
import ModalCalles from './ComponentsModalEmpleado/ModalCalles';
import ModalCargos from './ComponentsModalEmpleado/ModalCargos';
import ModalEstados from './ComponentsModalEmpleado/ModalEstados';
import ModalEstadosCiviles from './ComponentsModalEmpleado/ModalEstadosCiviles';
import ModalEstudios from './ComponentsModalEmpleado/ModalEstudios';
import ModalFormasDePago from './ComponentsModalEmpleado/ModalFormasDePago';
import ModalModosDeContratacion from './ComponentsModalEmpleado/ModalModosDeContratacion';
import ModalModosDeLiquidacion from './ComponentsModalEmpleado/ModalModosDeLiquidacion';
import ModalMotivosEgreso from './ComponentsModalEmpleado/ModalMotivosEgreso';
import ModalPaises from './ComponentsModalEmpleado/ModalPaises';
import ModalParentescos from './ComponentsModalEmpleado/ModalParentescos';
import ModalPLDB from './ComponentsModalEmpleado/ModalPLDB';
import ModalTareasDesempeñadas from './ComponentsModalEmpleado/ModalTareasDesempeñadas';
import ModalTiposDeDocumentos from './ComponentsModalEmpleado/ModalTiposDeDocumentos';
import LlamadaBackend from './helpers/LlamadaBackend';



function App() {
  return (
    <div className='App' >

{/* MODALES: (DESCOMENTAR Y TESTEAR) */}

{/* <ModalEstadosCiviles/> */}
{/* <ModalEstudios/> */}
{/* <ModalTiposDeDocumentos/> */}
{/* <ModalParentescos/> */}
{/* <ModalEstados/> */}
{/* <ModalCargos/> */}
{/* <ModalTareasDesempeñadas/> */}
{/* <ModalModosDeContratacion/> */}
{/* <ModalModosDeLiquidacion/> */}
{/* <ModalFormasDePago/> */}
{/* <ModalMotivosEgreso/> */}
{/* <ModalPaises/> */}
{/* <ModalCalles/> */}

<ModalPLDB/>

      {/* <LlamadaBackend/> */}



      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>  Edit <code>src/App.js</code> and save to reload. </p> */}
        {/* <a  className="App-link"href="https://reactjs.org"   target="_blank"   rel="noopener noreferrer" >  Learn React  </a> */}
      {/* </header> */}
   
    </div>

  );
}

export default App;