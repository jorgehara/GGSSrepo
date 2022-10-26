import React from 'react'

const ProvinciasFooter = () => {
    return (
        <div class="modal-footer">

            <div className="crudBtns">
                <button type="button" class="btn btn-danger crudBtn">
                    AGREGAR
                </button>

                <button type="button" class="btn btn-danger crudBtn">
                    MODIFICAR
                </button>

                <button type="button" class="btn btn-danger crudBtn">
                    ELIMINAR
                </button>
            </div>

            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                LISTAR
            </button>

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                SALIR
            </button>

        </div>
                    
  )
}

export default ProvinciasFooter