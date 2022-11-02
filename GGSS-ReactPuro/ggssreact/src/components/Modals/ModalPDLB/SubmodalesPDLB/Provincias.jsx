import React from 'react'
import TextArea from '../../../Inputs/TextArea/TextArea'

const Provincias = () => {
    return (
        <>
            <div className="llamadaApi">

                <label htmlFor="data">Datos: </label>
                <br />
                <select class="form-select row mt-1" multiple aria-label="multiple select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>

            <div class="bodyInputs">

                <label for="provincia" style={{ marginRight: "15px" }}> Provincia: </label>
                <input type="text" name="provincia" />

                <br />

                <TextArea inputName="Observaciones" />

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
        </>
    )
}

export default Provincias