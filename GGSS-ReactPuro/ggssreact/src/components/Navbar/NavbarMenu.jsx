import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import ButtonCallModal from '../Buttons/ButtonCallModal'
import BasicModal from '../Modals/BasicModal/BasicModal'
import BasicModalSelectObs from '../Modals/BasicModalSelectObs/BasicModalSelectObs'
import ModalParentescos from '../Modals/ModalParentescos/ModalParentescos'
import ModalPDLB from '../Modals/ModalPDLB/ModalPDLB'
import ModalEmpleadores from '../Modals/ModalEmpleadores/ModalEmpleadores'
import ModalAlicuotas from '../Modals/ModalAlicuotas/ModalAlicuotas'
import { objectBancos, objectEmpresasTelefonia, objectSindicatos, objectEstadosCiviles, objectEstudios, objectTipoDocumento, objectEstado, objectFormasDePago, objectMotivosEgreso, objectCalles, objectPaises  } from './Objects'
import { employeContext } from '../../context/employeContext';

const Navbar = () => {

// const titleEmpleados = document.querySelector('.titleEmpleados')
// const datosEmpleados = document.querySelector('.datosEmpleados')

// const handleDatosEmpleados = () => {
// 	datosEmpleados.className.add('.closeList')
// }saveEstadoCivil
const { saveEmpl, saveEstado, saveEstadoCivil, saveNacionalidad , saveEstudio, saveTipoDNI, saveCalle,saveDoms,saveProvincia,saveLocalidad,saveDetpo,saveBarrio} = useContext(employeContext);

const estadosCivilesMasculinos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.masculino); }) : []; 
const estadosCivilesFemeninos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i)=>{ return (estado.femenino); }) : [];
const estadosCiviles =  estadosCivilesMasculinos.concat(estadosCivilesFemeninos); 
const estadosArray = saveEstado.map((m,i)=>{return (m.nombreEstado)});
const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nombrePais); }) : [];
const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i)=>{ return (nac.estudiosNivel); }) : [];
const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_masc); }) : []; 
const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i)=>{ return (nac.nacionalidad_fem); }) : []; 
const nacionalidades = nacionalidadesMasculinas.concat(nacionalidadesFemeninas);
const calles = saveCalle !== undefined ? saveCalle.map(res => {return res.calle}) : null;
const pisoDepto = saveDoms !== undefined ? saveDoms.map(res => {return res.pisoDepto}) : null;
const deptos = saveDetpo !== undefined ? saveDetpo.map(res => {return res.departamento}) : null;
const provincias = saveProvincia !== undefined ? saveProvincia.map(res => {return res.provincia}) : null;
const localidades = saveLocalidad !== undefined ? saveLocalidad.map(res => {return res.localidad}) : null;
const barrios = saveBarrio !== undefined ? saveBarrio.map(res => {return res.barrio}) : null;

  return (
	    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<button className="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Empleados
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/home">Ficha Empleados</Link></li>
                        <li><Link className="dropdown-item" to="#">Busqueda de Datos</Link></li>
                    </ul>
                </li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Liquidación</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Esquemas y Conceptos</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Períodos</a>
				</li>
				<li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                    <ul className="dropdown-menu">
						<h6 className="titleEmpleados">Para empleados: </h6>
						<div className="datosEmpleados">
							<ButtonCallModal idModal="EstadoCivil" nameButton="Estados Civiles" useNavbar={true} />
							<ButtonCallModal idModal="Estudios" nameButton="Estudios" useNavbar={true} />
							<ButtonCallModal idModal="TipoDocumento" nameButton="Tipo de Documento" useNavbar={true} />
							<ButtonCallModal idModal="Parentescos" nameButton="Parentescos" useNavbar={true} />
							<ButtonCallModal idModal="estadosEmpleados" nameButton="Estados para empleados" useNavbar={true} />
							<ButtonCallModal idModal="cargos" nameButton="Cargos" useNavbar={true} />
							<ButtonCallModal idModal="tareasDesempeñadas" nameButton="Tareas Desempeñadas" useNavbar={true} />
							<ButtonCallModal idModal="formasDePago" nameButton="Formas de Pago" useNavbar={true} />
							<ButtonCallModal idModal="modosDeContratacion" nameButton="Modos de Contratación" useNavbar={true} />
							<ButtonCallModal idModal="modosDeLiquidacion" nameButton="Modos de Liquidacion" useNavbar={true} />
							<ButtonCallModal idModal="motivosEgreso" nameButton="Motivos de Egreso" useNavbar={true}/>
							<ButtonCallModal idModal="paises" nameButton="Paises" useNavbar={true} />
							<ButtonCallModal idModal="pdlb" nameButton="Provincias - Departamentos - Localidades - Barrios" useNavbar={true} />
							<ButtonCallModal idModal="calles" nameButton="Calles" useNavbar={true} />
							<ButtonCallModal idModal="empleadores" nameButton="Empleadores" useNavbar={true} />
							<ButtonCallModal idModal="alicuotas" nameButton="Alicuotas" useNavbar={true} />
							
						</div>
						{/* {/ <button onClick={handleDatosEmpleados}>Ocultar lista</button> /} */}
						<hr />
						<h6 className="titleLiquidacion">Para liquidación: </h6>
						<div className="datosLiquidacion">
							<ButtonCallModal idModal="Bancos" nameButton="Bancos" useNavbar={true} />
							<ButtonCallModal idModal="Telefonia" nameButton="Empresas de telefonia celular" useNavbar={true} />
							<ButtonCallModal idModal="Sindicatos" nameButton="Sindicatos" useNavbar={true} />
							<ButtonCallModal idModal="Obras Sociales" nameButton="Obras Sociales" useNavbar={true} />
							<ButtonCallModal idModal="AFJP" nameButton="A.F.J.P" useNavbar={true} />
							<ButtonCallModal idModal="Centros de Costo" nameButton="Centros de Costo" useNavbar={true} />
							<ButtonCallModal idModal="Sectores/Departamentos" nameButton="Sectores/Departamentos" useNavbar={true} />
							<ButtonCallModal idModal="Direcciones" nameButton="Direcciones" useNavbar={true} />
							<ButtonCallModal idModal="Lugares de Pago" nameButton="Lugares de Pago" useNavbar={true} />
							<ButtonCallModal idModal="Documentacion" nameButton="Documentación que presentan los empleados" useNavbar={true} />
							<ButtonCallModal idModal="Reducción" nameButton="Reducción de Deducciones de Ganancias" useNavbar={true} />
							<ButtonCallModal idModal="Escala" nameButton="Escala de Ganancias" useNavbar={true} />
							<ButtonCallModal idModal="Deducciones" nameButton="Deducciones de Ganancias" useNavbar={true} />
							<ButtonCallModal idModal="Valores" nameButton="Valores Permanencia Categoría" useNavbar={true} />
							<ButtonCallModal idModal="Convenios" nameButton="Convenios, Categorías, Básicos y Antigüedad" useNavbar={true} />
							<ButtonCallModal idModal="Jerarquía" nameButton="Jerarquía de Categorías" useNavbar={true} />
							<ButtonCallModal idModal="Licencias" nameButton="Licencias por Antigüedad" useNavbar={true} />
							<ButtonCallModal idModal="Plan" nameButton="Plan de Cuentas" useNavbar={true} />
						</div>

                    </ul>
                </li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Informes y Listados</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Parámetros</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Acerca de...</a>
				</li>

				{/* {/ MODALES TABLA PARA EMPLEADOS /} */}
				<BasicModal idModal="EstadoCivil" nameModal="Estados Civiles" placeholder={objectEstadosCiviles} array={estadosCiviles}/>
				<BasicModal idModal="Estudios" nameModal="Estudios" placeholder={objectEstudios} array={estudios}/>
				<BasicModal idModal="TipoDocumento" nameModal="Tipo de Documento" placeholder={objectTipoDocumento} />
				<ModalParentescos idModal="Parentescos" nameModal="Parentescos" />
				<BasicModal idModal="estadosEmpleados" nameModal="Estados para empleados" placeholder={objectEstado} array={estadosArray} />
				<BasicModalSelectObs idModal="cargos" nameModal="Cargos" nameOptionModal="Cargo" />
				<BasicModalSelectObs idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" nameOptionModal="Tarea" />
				<BasicModal idModal="formasDePago" nameModal="Formas de Pago" placeholder={objectFormasDePago} textArea={true} />
				<BasicModalSelectObs idModal="modosDeContratacion" nameModal="Modos de Contratacion" nameOptionModal="Modos de Contratacion" inputDate={true}/>
				<BasicModalSelectObs idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" nameOptionModal="Modos de Liquidacion" />
				<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" placeholder={objectMotivosEgreso} textArea={true} />
				<BasicModal idModal="paises" nameModal="Paises" placeholder={objectPaises} array={paises}/>
				<BasicModal idModal="nacionalidades" nameModal="Paises" placeholder={objectPaises} array={nacionalidades}/>
				<ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" aDepartamentos={deptos}aProvincias={provincias} aLocalidades={localidades} aBarrios={barrios} />
				<BasicModal idModal="calles" nameModal="Calles" placeholder={objectCalles} textArea={true} array={calles}/>
				<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" />
				<ModalAlicuotas idModal="alicuotas" nameModal="Alicuotas" />

				{/* {/ MODALES TABLA PARA LIQUIDACIÓN /} */}

				<BasicModal idModal="Bancos" nameModal="Bancos" placeholder={objectBancos} textArea={true} />
				<BasicModal idModal="Telefonia" nameModal="Empresas de Telefonia" placeholder={objectEmpresasTelefonia} />



				<li className="nav-item">
					<a className="nav-link" href="/">Salir</a>
				</li>
      		</ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar