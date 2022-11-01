import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import ButtonCallModal from '../Buttons/ButtonCallModal'
import ModalMascFem from '../Modals/ModalMascFem/ModalMascFem'
import BasicModal from '../Modals/BasicModal/BasicModal'
import BasicModalSelectObs from '../Modals/BasicModalSelectObs/BasicModalSelectObs'
import ModalParentescos from '../Modals/ModalParentescos/ModalParentescos'
import ModalPaises from '../Modals/ModalPaises/ModalPaises'
import ModalPDLB from '../Modals/ModalPDLB/ModalPDLB'
import ModalEmpleadores from '../Modals/ModalEmpleadores/ModalEmpleadores'
import ModalAlicuotas from '../Modals/ModalAlicuotas/ModalAlicuotas'

const Navbar = () => {

const titleEmpleados = document.querySelector('.titleEmpleados')
const datosEmpleados = document.querySelector('.datosEmpleados')

const handleDatosEmpleados = () => {
	datosEmpleados.className.add('.closeList')
}

const handleTitleEmpleados = () => {
	datosEmpleados.className.add('.openList')
	datosEmpleados.className.remove('.closeList')
}

// NO ESTA FUNCIONANDO, ESTOY INTENTANDO HACER QUE CUANDO CLICKEO EL TITULO "PARA EMPLEADOS" ME DESPLIEGUE LA LISTA,
// Y QUE CUANDO TOCO EL BOTON "OCULTAR LISTA" LA OCULTE.


// const titleLiquidacion = document.querySelector('.titleLiquidacion')
// const datosLiquidacion = document.querySelector('.datosLiquidacion')

// const handleDatosLiquidacion = () => {
// 	datosLiquidacion.className.add('.closeList')
// }

  return (
	    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<button class="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Empleados
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/home">Ficha Empleados</Link></li>
                        <li><Link class="dropdown-item" to="#">Busqueda de Datos</Link></li>
                    </ul>
                </li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Liquidación</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Esquemas y Conceptos</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Períodos</a>
				</li>
				<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                    <ul class="dropdown-menu">
						<h6 className="titleEmpleados" onClick={handleTitleEmpleados}>Para empleados: </h6>
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
						{/* <button onClick={handleDatosEmpleados}>Ocultar lista</button> */}
						<hr />
						<h6 className="titleLiquidacion">Para liquidación: </h6>
						<div className="datosLiquidacion">
							...
						</div>

                    </ul>
                </li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Informes y Listados</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Parámetros</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Acerca de...</a>
				</li>

				{/* MODALES */}
				<ModalMascFem idModal="EstadoCivil" nameModal="Estados Civiles" />
				<BasicModal idModal="Estudios" nameModal="Estudios" nameOptionModal="Nivel de Estudios" />
				<BasicModal idModal="TipoDocumento" nameModal="Tipo de Documento" nameOptionModal="Tipo de Documento" />
				<ModalParentescos idModal="Parentescos" nameModal="Parentescos" />
				<BasicModal idModal="estadosEmpleados" nameModal="Estados para empleados" nameOptionModal="Estado" />
				<BasicModalSelectObs idModal="cargos" nameModal="Cargos" nameOptionModal="Cargo" />
				<BasicModalSelectObs idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" nameOptionModal="Tarea" />
				<BasicModal idModal="formasDePago" nameModal="Formas de Pago" nameOptionModal="Forma de Pago" textArea={true} />
				<BasicModalSelectObs idModal="modosDeContratacion" nameModal="Modos de Contratacion" nameOptionModal="Modos de Contratacion" inputDate={true}/>
				<BasicModalSelectObs idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" nameOptionModal="Modos de Liquidacion" />
				<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" nameOptionModal="Motivo de egreso" textArea={true} />
				<ModalPaises idModal="paises" nameModal="Paises" nameOptionModal="Pais" />
				<ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" />
				<BasicModal idModal="calles" nameModal="Calles" nameOptionModal="Calle" textArea={true}/>
				<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" />
				<ModalAlicuotas idModal="alicuotas" nameModal="Alicuotas" />

				<li class="nav-item">
					<a class="nav-link" href="/">Salir</a>
				</li>
      		</ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar