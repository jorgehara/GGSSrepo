import React from 'react'

const Dropdown = ({nameDropdown}) => {
    return (
        <>
            <label htmlFor="partida" style={{ marginRight: "15px"}}> {nameDropdown}: </label>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Seleccionar...
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown