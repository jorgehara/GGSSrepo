import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
	    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			{/*<a class="navbar-brand" href="/some/valid/uri">Ir GGSS</a>*/}
			<button class="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			{/*<span class="navbar-toggler-icon"></span>*/}
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li><Link class="dropdown-item" to="/home/datos-personales"></Link>
                    <Link class="nav-link" to="/home/datos-personales">
						Personales
                    </Link>
                </li>
				<li class="nav-item">
					<Link class="nav-link" to="/home/familia">Familia</Link>
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
				
      		</ul>
    	</div>
  	</div>
</nav>
  )
}

export default Navbar