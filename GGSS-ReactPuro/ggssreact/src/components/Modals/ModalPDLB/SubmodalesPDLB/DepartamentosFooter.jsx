import React from 'react'
import './ModalFooter.css'

const DepartamentosFooter = () => {
    return (
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

            <>

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    MOVER DEPTOS
                </button>

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    LISTAR
                </button>

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    AYUDA
                </button>
            </>

            <>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    SALIR
                </button>
            </>

        </div>
    )
}

export default DepartamentosFooter