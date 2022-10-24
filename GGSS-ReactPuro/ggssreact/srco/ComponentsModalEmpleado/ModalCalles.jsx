import React from 'react'

const ModalCalles = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Modal Calles
            </button>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Calles
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div className="llamadaApi">
                                ACA IRIA LA LLAMADA
                                {/* <LlamadaBackend/> */}
                            </div>


                            <div class="bodyInputs">

                                <label for="calle" style={{ marginRight: "15px" }}> Calle: </label>
                                <input type="text" name="calle" />

                                <br />
                        
                                <label for="obs">Observaciones: </label>
                                <br />
                                <textarea name="obs" id="" cols="30" rows="10" style={{ maxHeight: "150px" }} placeholder='Observaciones...'> </textarea>

                                <hr />

                                <div className="btnInputs">
                                    <button type="button" class="btn btn-success btnAceptar">
                                        ACEPTAR
                                    </button>

                                    <button type="button" class="btn btn-danger">
                                        CANCELAR
                                    </button>
                                </div>

                            </div>


                        </div>


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

                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                SALIR
                            </button>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ModalCalles