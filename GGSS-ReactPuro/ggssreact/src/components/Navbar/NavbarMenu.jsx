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
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">menu item</a>
				</li>
				<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/lista-datos">Estado Civil</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos">Estudios</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos">Tipo de Documento Civil</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos">Parentescos</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos">Estados para empleados</Link></li>
						<li><Link class="dropdown-item" to="/lista-datos">etc</Link></li>
                    </ul>
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