import React from 'react'
import TextArea from '../../../Inputs/TextArea/TextArea'

const Departamentos = ({aDepartamentos}) => {
    return (

        <>
            <div className="llamadaApi">

                <label htmlFor="data">Datos: </label>
                <br />
                <select className="form-select row mt-1" multiple aria-label="multiple select example">
                    {
                        aDepartamentos !== undefined && aDepartamentos.map((op,i)=>{
                            return(
                                <option key={i} value="1">{op}</option>
                            )
                        })
                    }
                </select>

            </div>
            <div className="bodyInputs">

                <label htmlFor="provincia" style={{ marginRight: "15px" }}>Provincia:</label>
                <input type="text" name="provincia" id="" />

                <br />

                <label hymlFor="departamento" style={{ marginRight: "15px" }}> Departamento: </label>
                <input type="text" name="departamento" />

                <br />

                <TextArea inputName="Observaciones" />

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
        </>
    )
}

export default Departamentos