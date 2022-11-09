import React from 'react'
import TableReduccion from '../../Tables/TableReduccion'
import '../Modales.css'
import './ModalTable.css'

const ModalTable = ({ idModal, nameModal, column }) => {

    return (
        <div>
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                            <>
                                <TableReduccion column={column} />
                            </>
                        </div>

                        <div className="modal-footer modalTableFooter">

                            <button type="button" className="btn btn-danger btnAceptar">
                                ACEPTAR
                            </button>

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

export default ModalTable;