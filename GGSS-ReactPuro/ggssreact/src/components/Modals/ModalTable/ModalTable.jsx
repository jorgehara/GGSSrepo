import React from 'react'
import Dropdown from '../../Inputs/Dropdown/Dropdown'
import InputNumModal from '../../Inputs/InputsModal/InputNumModal/InputNumModal'
import TableReduccion from '../../Tables/TableReduccion'
import '../Modales.css'
import './ModalTable.css'

const ModalTable = ({ idModal, nameModal, column, dropdown, jerarquia, btnAceptar, licencias, objectInputs }) => {

    return (
        <div>
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body tableSection">

                            {
                                licencias &&
                                <div className='inputNumSectionLicencias'>
                                    {
                                        objectInputs.map((p, i) => {
                                            return (
                                                <>
                                                    <InputNumModal key={i} nameInput={p.label} inputId={p.label} />
                                                </>
                                            )
                                        })

                                    }
                                    <label>días de licencia</label>
                                </div>
                            }



                            <>
                                {dropdown && <Dropdown nameDropdown="Convenio" />}
                            </>

                            {jerarquia && <h4>Categorías (la más baja primero) </h4>}

                            <div className='tableSectionLicencias'>
                                <TableReduccion column={column} />
                                <div className='btnSection'>
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer modalTableFooter">

                            {
                                btnAceptar &&
                                <button type="button" className="btn btn-danger btnAceptar">
                                    ACEPTAR
                                </button>
                            }


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