import React from 'react'
import "./ModalEscala.css";
import '../Modales.css'
import InputDate from '../../Inputs/InputDate/InputDate'
import InputNumModal from '../../Inputs/InputsModal/InputNumModal/InputNumModal';
import TableEscala from '../../Tables/TableEscala/TableEscala'
import TableReduccion from '../../Tables/TableReduccion';
import Dropdown from '../../Inputs/Dropdown/Dropdown';


const ModalEscala = ({ idModal, nameModal, array, hasInputDate, inputDateData, inputNumData, table, buttonNum, tableValores, column, flex, categorias }) => {

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
                            <div className="llamadaApi">
                                <label htmlFor="data">Datos: </label>
                                <br />
                                <select style={{ height: "auto", minHeight: "230px", minWidth: "200px" }} className="form-select row mt-1 " multiple aria-label="multiple select example">
                                    {
                                        array !== undefined ? array.map((op, i) => {
                                            return (
                                                <option key={i} value="1">{op}</option>
                                            )
                                        }) : null
                                    }
                                </select>

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
                            </div>
                            <div className="bodyInputs">

                                {
                                    hasInputDate &&
                                    <div className="inputDateContainerEscala">
                                        {
                                            inputDateData.map((p, i) => {
                                                return (
                                                    <InputDate key={i} nameInput={p.label} inputId={p.label} />
                                                )
                                            })
                                        }
                                    </div>
                                }


                                <hr />


                                <div className={flex ? "inputNumContainerEscala" : "inputNumContainerDeducciones"}>


                                    {
                                        inputNumData.map((p, i) => {
                                            return (
                                                <InputNumModal key={i} nameInput={p.label} inputId={p.label} />
                                            )
                                        })
                                    }

                                    {
                                        buttonNum &&
                                        <>
                                            <button>+</button>
                                            <button>-</button>
                                        </>

                                    }

                                </div>

                                {
                                    categorias &&
                                    <div className="categoriasContainer">
                                        <>
                                            <input type="checkbox" name="categoria" />
                                            <label htmlFor="categoria">Especificar categoría</label>
                                        </>
                                        <>
                                            <Dropdown nameDropdown="Categorias" />
                                        </>
                                    </div>
                                }

                                {
                                    table && <TableEscala />
                                }

                                {
                                    tableValores && <TableReduccion column={column} />
                                }

                                <hr />


                                <br />

                                <div className="btnInputs">
                                    <button type="button" className="btn btn-danger btnAceptar">
                                        ACEPTAR
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        CANCELAR
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
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

export default ModalEscala;