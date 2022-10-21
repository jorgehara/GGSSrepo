import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
	    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="/some/valid/uri">Ir GGSS</a>
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
                        Personales
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/datos-personales">Datos Personales</Link></li>
                        <li><Link class="dropdown-item" to="/domicilios">Domicilios</Link></li>
                    </ul>
                </li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Familia</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Liquidación</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Adic.Liquidación</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Trabajos Anteriores</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Documentación</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Licencias</a>
				</li>
				<li class="nav-item">
				<a class="nav-link" href="/some/valid/uri">Extras</a>
				</li>
				<li class="nav-item">
			</li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar