import React from 'react'

const Barrios = () => {
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

        <label for="localidad" style={{ marginRight: "15px" }}>Localidad:</label>
        <input type="text" name="localidad" id="" />

        <br />

        <label for="barrio" style={{ marginRight: "15px" }}> Barrio: </label>
        <input type="text" name="barrio" />

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
    </>
  )
}

export default Barrios