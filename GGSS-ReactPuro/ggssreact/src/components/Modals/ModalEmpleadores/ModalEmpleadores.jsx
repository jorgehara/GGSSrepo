import React from 'react'
import '../Modales.css'

const ModalEmpleadores = ({ idModal, nameModal, array }) => {

    return (
        <div>
            <div className="modal fade" id={idModal} tabindex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="llamadaApi">

                                <label htmlFor="data">Datos: </label>
                                <br />
                                <select style={{ height: "900px", width: "400px" }} class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                            <div className="bodyInputs">

                                <label style={{ marginRight: "15px" }} htmlFor="numero">N°: </label>
                                <input type="number" name="numero" min="0" style={{ width: "50px" }} />
                                <br />
                                <label htmlFor="razonSocial" style={{ marginRight: "15px" }}> Razón social: </label>
                                <input type="text" name="razonSocial" />

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="alicuota">Alicuota: </label>
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

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="banco">Banco: </label>
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

                                <br />

                                <label htmlFor="cuit" style={{ marginRight: "15px" }}> CUIT: </label>
                                <input type="number" name="cuit" min="0" />

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="partida">Partida: </label>
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

                                <br />

                                <fieldset className="fieldsetStyle" style={{ border: "0.1px solid gray" }}>
                                    <div style={{ padding: "10px" }} >
                                        <legend>Domicilios</legend>
                                        Predeterminado: <input type="checkbox" />
                                        <br />

                                        <label style={{ marginRight: "15px" }} htmlFor="calle">Calle/Numero: </label>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                            <div class="dropdown" style={{ marginRight: "15px" }}>
                                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Seleccionar...
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <input type="number" name="numCalle" min="0" style={{ width: "50px" }} />
                                        </div>

                                        <br />

                                        <label htmlFor="pdot" style={{ marginRight: "15px" }}> Piso/Depto/Oficina/Torre: </label>
                                        <input type="text" name="pdot" />

                                        <br />

                                        <label style={{ marginRight: "15px" }} htmlFor="barrio">Barrio: </label>
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

                                        <br />

                                        <label style={{ marginRight: "15px" }} htmlFor="localidad">Localidad/CP: </label>
                                        <input style={{ marginRight: "15px" }} type="text" name="localidad" />
                                        <input type="number" name="numLocalidad" min="0" style={{ width: "50px" }} />

                                        <br />

                                        <label style={{ marginRight: "15px" }} htmlFor="depto">Departamento: </label>
                                        <input type="text" name="depto" />

                                        <br />

                                        <label style={{ marginRight: "15px" }} htmlFor="provincia">Provincia: </label>
                                        <input type="text" name="provincia" />
                                    </div>
                                </fieldset>

                                <br />
                                <hr />

                                <div className="btnInputs">
                                    <button type="button" className="btn btn-danger btnAceptar">
                                        ACEPTAR
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        CANCELAR
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <div className="crudBtns">
                                <button type="button" className="btn btn-danger crudBtn">
                                    AGREGAR
                                </button>
                                <button type="button" className="btn btn-danger crudBtn">
                                    MODIFICAR
                                </button>
                                <button type="button" className="btn btn-danger crudBtn">
                                    ELIMINAR
                                </button>
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                SALIR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEmpleadores;