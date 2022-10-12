import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
        <a href="/some/valid/uri">Navigate to page</a>
			<a className="nav-link active" aria-current="page" href="/some/valid/uri">Active</a>
			<a className="nav-link" href="/some/valid/uri"> Link</a>
			<a className="nav-link" href="/some/valid/uri"> Link</a>
			<a className="nav-link disabled" href="/some/valid/uri"> Link Disabled</a>
		</nav> 
    </div>
  )
}

export default Navbar