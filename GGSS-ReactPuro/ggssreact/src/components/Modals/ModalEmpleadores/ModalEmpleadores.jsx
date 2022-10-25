import React from 'react'
import InputCbo from '../../Inputs/InputCbo/InputCbo';

const ModalEmpleadores = ({ idModal, nameModal, array }) => {

    return (
        <div>
            <div className="modal fade" id={idModal} tabindex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="llamadaApi">
                                {

                                }
                            </div>
                            <div className="bodyInputs">

                                {/* ESTE TIENE QUE SER UN SELECTOR  */}
                                <label htmlFor="data">Datos: </label>
                                <br />
                                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <hr />

                                <label style={{ marginRight: "15px" }} htmlFor="numero">N°: </label>
                                <input type="number" name="numero" />
                                <br />
                                <label htmlFor="razonSocial" style={{ marginRight: "15px" }}> Razón social: </label>
                                <input type="text" name="razonSocial" />

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="alicuota">Alicuota: </label>
                                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">Responsable inscripto</option>
                                    <option value="2">Responsable monotributo</option>
                                    <option value="3">Responsable no inscripto</option>
                                </select>

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="banco">Banco: </label>
                                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">Cordoba</option>
                                    <option value="2">Nacion</option>
                                    <option value="3">Santander</option>
                                </select>

                                <br />

                                <label htmlFor="cuit" style={{ marginRight: "15px" }}> CUIT: </label>
                                <input type="number" name="cuit" />

                                <br />

                                <label style={{ marginRight: "15px" }} htmlFor="partida">Partida: </label>
                                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">Ninguna</option>
                                    <option value="2">Op2</option>
                                    <option value="3">Op3</option>
                                </select>

                                <br />

                                <fieldset>
                                    <legend>Domicilios</legend>
                                    Predeterminado: <input type="checkbox" />
                                    <br />
                                    <label style={{ marginRight: "15px" }} htmlFor="calle">Calle/Numero: </label>
                                    <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                        <option value="1">Ninguna</option>
                                        <option value="2">Op2</option>
                                        <option value="3">Op3</option>
                                    </select>
                                    <input type="number" name="numCalle" />

                                    <br />

                                    <label htmlFor="pdot" style={{ marginRight: "15px" }}> Piso/Depto/Oficina/Torre: </label>
                                    <input type="number" name="pdot" />

                                    <br />

                                    <label style={{ marginRight: "15px" }} htmlFor="barrio">Barrio: </label>
                                    <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                        <option value="1">Provincial</option>
                                        <option value="2">Centro</option>
                                        <option value="3">Norte</option>
                                    </select>

                                    <br />

                                    <label style={{ marginRight: "15px" }} htmlFor="localidad">Localidad/CP: </label>
                                    <input type="text" name="localidad"/>
                                    <input type="number" name="numLocalidad" />

                                    <br />

                                    <label style={{ marginRight: "15px" }} htmlFor="depto">Departamento: </label>
                                    <input type="text" name="depto"/>

                                    <br />

                                    <label style={{ marginRight: "15px" }} htmlFor="provincia">Provincia: </label>
                                    <input type="text" name="provincia"/>

                                </fieldset>







                                <div className="btnInputs">
                                    <button type="button" className="btn btn-success btnAceptar">
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
                                <button type="button" className="btn btn-success crudBtn">
                                    AGREGAR
                                </button>
                                <button type="button" className="btn btn-warning crudBtn">
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