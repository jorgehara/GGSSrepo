import React from 'react'

const BasicModal = ({nameModal, nameOptionModal,array}) => {

    
  return (
    <div>
            <div className="modal fade" id={nameModal} tabindex="-1" aria-labelledby={`${nameModal}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${nameModal}Label`}>
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
                                <label htmlFor="calle" style={{ marginRight: "15px" }}> {nameOptionModal}: </label>
                                <input type="text" name="calle" />
                                <br />
                                <label htmlFor="obs">Observaciones: </label>
                                <br />
                                <textarea name="obs" id="" cols="30" rows="10" style={{ maxHeight: "150px" }} placeholder='Observaciones...'> </textarea>
                                <hr />
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

export default BasicModal;