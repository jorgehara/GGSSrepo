import React, { useEffect } from 'react'
import TextArea from '../../Inputs/TextArea/TextArea';
import "./BasicModal.css";
import '../Modales.css'
import InputModal from '../../Inputs/InputsModal/InputModal';
import Dropdown from '../../Inputs/Dropdown/Dropdown';
import InputDate from '../../Inputs/InputDate/InputDate'
import InputNumModal from '../../Inputs/InputsModal/InputNumModal/InputNumModal';


const BasicModal = ({ idModal, nameModal, array, textArea, placeholder, dropdown, inputDate, inputNum, inputNumName, relacion, nameRelacion , onChange, generalState, setGeneralState, onSelect, functionModal, functionSaveSelected, selectedOption, arrayCompleto}) => {

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
                            <div className="llamadaApi ">

                                { relacion && <> <Dropdown nameDropdown={nameRelacion}/> <br/> </>  }
                                                    
                                <label htmlFor="data">Datos: </label>
                                <br />
                                <select className="form-select row mt-1 selectOptions " multiple aria-label="multiple select example">
                                    {
                                        array !== undefined ? array.map((op, i)=>{
                                            return(
                                                <option key={i} onClick={(e)=>onSelect(e,functionModal,functionSaveSelected, arrayCompleto, op )} value="1">{op}</option>
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
                                    selectedOption ?                                     
                                        <>
                                        <InputModal nameInput="inputEstadosCivilesModal" placeHolder="Casado" nameLabel="Masculino" inputId="inputEstadosCivilesModal" onChange={onChange} generalState={generalState} setGeneralState={setGeneralState} value={generalState !== undefined && generalState !== null ? selectedOption.masculino : generalState.inputEstadosCivilesModal}/>
                                        <InputModal nameInput="inputEstadosCivilesModalFem" placeHolder="Casada" nameLabel="Femenino" inputId="inputEstadosCivilesModalFem" onChange={onChange} generalState={generalState} setGeneralState={setGeneralState} value={generalState !== undefined && generalState !== null ? selectedOption.femenino : generalState.inputEstadosCivilesModalFem} />
                                        </>
                                 :
                                    placeholder.map((p, i) => {
                                        return(
                                            <InputModal key={i} nameInput={p.nameInput} placeHolder={p.placeholder}nameLabel={p.label} inputId={p.idInput} onChange={onChange} generalState ={generalState} setGeneralState={setGeneralState} value={p} />
                                        )
                                    })
                                }

                                {
                                    inputNum && <InputNumModal nameInput={inputNumName}/>
                                }   

                                {
                                    dropdown && <Dropdown nameDropdown="Partida"/>
                                }

                                {
                                    inputDate && <InputDate nameInput="Vencimiento"/>
                                }

                        
                                <br />
                                {textArea && <TextArea inputName="Observaciones" /> }
                                <hr />
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

export default BasicModal;