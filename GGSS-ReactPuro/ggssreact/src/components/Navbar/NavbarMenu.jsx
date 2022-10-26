import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
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
                        <li><Link class="dropdown-item" to="/datos-personales">Ficha Empleados</Link></li>
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
						<h6>Para empleados</h6>
                        <li><Link class="dropdown-item" to="/lista-datos/estadoCivil">Estado Civil</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/estudios">Estudios</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/tipoDocumento">Tipo de Documento Civil</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/parentescos">Parentescos</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/estadosEmpleados">Estados para empleados</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/calles">Calles</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/cargos">Cargos</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/formasDePago">Formas de Pago</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/modosDeContratacion">Modos de Contratación</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/modosDeLiquidacion">Modos de Liquidación</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/motivosEgreso">Motivos de Egreso</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/paises">Paises</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/pdlb">Provincias - Departamentos - Localidades - Barrios</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/tareasDesempeñadas">Tareas Desempeñadas</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/tiposDeDocumento">Tipos de Documento</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/empleadores">Empleadores</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos/alicuotas">Alicuotas</Link></li>
						<hr />
						<h6>Para liquidación</h6>

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