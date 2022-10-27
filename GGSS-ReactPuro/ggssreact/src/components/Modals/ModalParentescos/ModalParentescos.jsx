import React from 'react'
import TextArea from '../../Inputs/TextArea/TextArea';

const ModalParentescos = ({ idModal, nameModal, array }) => {
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
                                <label for="parentesco" style={{ marginRight: "15px" }}>Parentesco: </label>
                                <input type="text" name="parentesco" />
                                <br />
                                <input type="checkbox" name="asignacion" style={{ marginRight: "5px" }} />
                                <label for="asignacion">Genera asignacion</label>

                                <br />

                                <input type="checkbox" name="ganancias" style={{ marginRight: "5px" }} />
                                <label for="ganancias" style={{ marginRight: "15px" }}>Deduce ganancias</label>

                                <label for="importe" style={{ marginRight: "5px" }}>IMPORTE: </label>
                                <input type="number" name="importe" min="0" />
                                <br />

                                <TextArea inputName="Observaciones" />
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
                                <button type="button" className="btn btn-success crudBtn">
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

export default ModalParentescos;