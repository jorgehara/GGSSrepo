import React from 'react'

const BarriosFooter = () => {
  return (
    <div class="modal-footer">

            <div className="crudBtns">
                <button type="button" class="btn btn-success crudBtn">
                    AGREGAR
                </button>

                <button type="button" class="btn btn-warning crudBtn">
                    MODIFICAR
                </button>

                <button type="button" class="btn btn-danger crudBtn">
                    ELIMINAR
                </button>
            </div>

            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
                MOVER BARRIOS
            </button>

            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                SALIR
            </button>

        </div>
  )
}

export default BarriosFooter