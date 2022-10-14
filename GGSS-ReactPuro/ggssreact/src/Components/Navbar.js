import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav">
        <a href="/some/valid/uri">Ir a GGSS</a>
			<a className="nav-link active" aria-current="page" href="/some/valid/uri">Personales</a>
			<a className="nav-link" href="/some/valid/uri"> Familia</a>
			<a className="nav-link" href="/some/valid/uri"> Liquidación</a>
			<a className="nav-link" href="/some/valid/uri"> Familia</a>
			<a className="nav-link" href="/some/valid/uri"> Liquidación</a>
			
		</nav> 
  )
}

export default Navbar