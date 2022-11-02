import React from 'react'
import { Link, Navigate } from "react-router-dom";
import ButtonCallModal from '../Buttons/ButtonCallModal';
import BasicModal from '../Modals/BasicModal/BasicModal';
// import ButtonCallModal from '../Buttons/ButtonCallModal';
// import BasicModal from '../Modals/BasicModal/BasicModal';

const Navbar = () => {

// const titleEmpleados = document.querySelector('.titleEmpleados')
// const titleLiquidacion = document.querySelector('.titleLiquidacion')

// const datosEmpleados = document.querySelector('.datosEmpleados')
// const datosLiquidacion = document.querySelector('.datosLiquidacion')

// const handleDatosEmpleados = () => {
// 	datosEmpleados.className.add('.closeData')
// }

// const handleDatosLiquidacion = () => {
// 	datosLiquidacion.className.add('.closeData')
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
				{/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                    <ul class="dropdown-menu">
						<h6 className="titleEmpleados">Para empleados: </h6>
						<div className="datosEmpleados">
							{/* <ButtonCallModal idModal="Estudios" nameButton="Estudios" />
          					<BasicModal idModal="Estudios" nameModal="Estudios" nameOptionModal="Nivel de Estudios" /> */}
						{/* </div>
						<hr />
						<h6 className="titleLiquidacion">Para liquidación: </h6>
						<div className="datosLiquidacion">
							...
						</div>

                    </ul>
                </li> */}



{/* Miua */}
				<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tabla de Datos
                    </a>
                   
				   
				    <ul class="dropdown-menu">
					{/* <select class="form-select" aria-label="Default select example">
							<option selected>Para empleados:</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							</select> */}

{/* <!-- Split dropend button --> */}
{/* <div class="btn-group dropend">
  <button type="button" class="btn btn-primary">
Boton va al costado
  </button>
  <button type="button" 
  		class="btn btn-danger dropdown-toggle dropdown-toggle-split" 
		data-bs-toggle="dropdown" 
		aria-expanded="false"
		>
    {/* <span 
	class="visually-hidden">
		Toggle Dropend</span> */}
  {/* </button> */} 

  {/* <!-- Split dropend button --> */}
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary">
    Split dropend
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropend</span>
  </button>
  <ul class="dropdown-menu">
  <li>
	<a class="dropdown-item" href="https://www.google.com/">Action</a>
</li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    {/* <!-- Dropdown menu links --> */}
  </ul>
</div>
					{/* <ul class="dropdown-menu">
						<div className="datosEmpleados">
							{/* <ButtonCallModal idModal="Estudios" nameButton="Estudios" />
          					<BasicModal idModal="Estudios" nameModal="Estudios" nameOptionModal="Nivel de Estudios" /> */}
						{/* </div> */}
						{/* <hr />
						<h6 className="titleLiquidacion">Para liquidación: </h6>
						<div className="datosLiquidacion">
							...
						</div>
				    </ul> */} 



				    </ul>



                </li>

{/* miau */}

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