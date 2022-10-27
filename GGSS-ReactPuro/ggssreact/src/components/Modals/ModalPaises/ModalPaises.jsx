import React from 'react'
import '../Modales.css'

const ModalPaises = ({ idModal, nameModal, nameOptionModal, array }) => {

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
                                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                            <div className="bodyInputs">
                                <label htmlFor={idModal} style={{ marginRight: "15px" }}> {nameOptionModal}: </label>
                                <input type="text" name={idModal} />
                                <br />
                                <label htmlFor="nacMasc" style={{ marginRight: "15px" }}> Nacionalidad Masc: </label>
                                <input type="text" name="nacMasc" />
                                <br />
                                <label htmlFor="nacFem" style={{ marginRight: "15px" }}> Nacionalidad Fem: </label>
                                <input type="text" name="nacFem" />
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

export default ModalPaises;