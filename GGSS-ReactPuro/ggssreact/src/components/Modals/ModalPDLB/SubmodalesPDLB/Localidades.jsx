import React from 'react'
import TextArea from '../../../Inputs/TextArea/TextArea'

const Localidades = () => {
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

                <label for="departamento" style={{ marginRight: "15px" }}>Departamento:</label>
                <input type="text" name="departamento" id="" />

                <br />

                <label for="localidad" style={{ marginRight: "15px" }}> Localidad: </label>
                <input type="text" name="localidad" />

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

export default Localidades