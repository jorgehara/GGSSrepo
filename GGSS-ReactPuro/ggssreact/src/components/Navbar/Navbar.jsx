import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
	    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<button className="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<li><Link className="dropdown-item" to="/home/datos-personales"></Link>
                    <Link className="nav-link" to="/home/datos-personales">
						Personales
                    </Link>
                </li>
				<li className="nav-item">
					<Link className="nav-link" to="/home/familia">Familia</Link>
				</li>
				{/* <li className="nav-item">
					<a className="nav-link" href="/some/valid/uri">Liquidación</a>
				</li> */}
				<li className="nav-item">
					<Link className="nav-link" to="/home/liquidacion">Liquidación</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/home/adic-liquidacion">Adic. Liquidación</Link>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/some/valid/uri">Trabajos Anteriores</a>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/home/documentacion">Documentación</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/home/licencias">Licencias</Link>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/some/valid/uri">Extras</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
	);
};
export default Navbar;