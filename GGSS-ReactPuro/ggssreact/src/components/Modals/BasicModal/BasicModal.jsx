// import React, { useEffect } from "react";
import TextArea from "../../Inputs/TextArea/TextArea";
import "./BasicModal.css";
import "../Modales.css";
import InputModal from "../../Inputs/InputsModal/InputModal";
import Dropdown from "../../Inputs/Dropdown/Dropdown";
import InputDate from "../../Inputs/InputDate/InputDate";
import InputNumModal from "../../Inputs/InputsModal/InputNumModal/InputNumModal";
import Checkbox from "../../Inputs/Checkbox/Checkbox";
import CheckboxNum from "../../Inputs/CheckboxNum/CheckboxNum";
import { useDispatch,  useSelector } from "react-redux";
import { CANCEL_MODALS, GET_ESTADOSCIVILES } from "../../../redux/types/modalesTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const BasicModal = ({
  idModal,
  nameModal,
  nameOptionModal,
  array,
  textArea,
  placeholder,
  dropdown,
  inputDate,
  inputNum,
  inputNumName,
  relacion,
  nameRelacion,
  hasCheckbox,
  checkboxName,
  hasCheckBoxNum,
  checkboxCheckName,
  checkboxNumName,
  propArrayOp,
  propArrayId,
  action,
  opcionSelected,
  inputIdCompare,
  firstOptionCompare,
  secondOptionCompare,
  onChange,
  valueFem,
  valueMasc,
  url,
  // bodyPetition,
  dispatchAddAction,
  res,
  setRes,
  postFn
}) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);


  function onSelect(action, payload) {
    dispatch(action(payload));
  }

  function onCancel(e, name) {
    setDisabled(false)
    dispatch({
      type: CANCEL_MODALS,
      payload: ""
    })
  }

  // const [ bodyPetitionEstudios, setBodyPetitionEstudios] = useState(res["bodyPetitionEstudios"]);

  // const bodyPetitionEstadosCiviles = {
  //   "idEstadoCivil": ((array && array[array.length -1] && array && array[array.length -1].idEstadoCivil) + 1),
  //   "masculino": firstOptionCompare,
  //   "femenino": secondOptionCompare
  // }

  // const bodyPetitionEstudios = {
  //   "IDestudio": ((array && array[array.length -1] && array && array[array.length -1].IDestudio) + 1),
  //   "estudiosNivel": firstOptionCompare || secondOptionCompare
  // }

  	// GET DE LOS ENDPOINTS
	// const estadosCivilesValue = useSelector((state) => state.generalState.estadosCiviles);
	// const estudiosValue = useSelector((state) => state.generalState.estudios)

	// const estadoCivilSelected = useSelector((state) => state.modalState.estadoCivilSelected);
	// const inputMascEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModal);
	// const inputFemEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModalFem);

	// const estudioSelected = useSelector((state) => state.modalState.estudioSelected);
	// const inputNivelEstudio = useSelector((state) => state.modalState.formulario.inputNivelEstudio )


  // ESTADO QUE GUARDA EL VALOR DE LOS INPUTS

  // const [modalDataInputs, setModalDataInputs] = useState(res["modalDataInputs"])

  // function onChangeValues(e, key) {
  //   const newResponse = { ...modalDataInputs }
  //   newResponse[key] = e.target.value
  //   setModalDataInputs({
  //     ...newResponse
  //   })
  // }

  // useEffect(() => {
  //   return () => {
  //     setRes({
  //       ...res,
  //       modalDataInputs
  //     })
  //   }
  // }, [modalDataInputs])


  async function agregar() {
    setDisabled(!disabled);
  }
  function modificar() {
    setDisabled(!disabled);
  }
  function deleteOption() {
    setDisabled(false);
    return;
  }


  // const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles"

  // const idEstadoCivil = ((estadosCivilesValue && estadosCivilesValue[estadosCivilesValue.length - 1] !== undefined && (estadosCivilesValue[estadosCivilesValue.length - 1].idEstadoCivil)) + 1)

  // const bodyPetition = { ...res.modalDataInputs, idEstadoCivil: idEstadoCivil };


  // async function aceptar() {
  //   try {
  //     await axios.post(urlEstadosCiviles, bodyPetition)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           dispatch(dispatchAddAction(res.modalDataInputs))
  //           swal({
  //             title: "Ok",
  //             text: "Agregado con éxito",
  //             icon: "success",
  //           })
  //         }
  //       })

  //   } catch (err) {
  //     swal({
  //       title: "Error",
  //       text: err.toString(),
  //       icon: "error",
  //     })
  //   }
  // }

  const opcionesApi = array

  return (
    <div>
      <div
        className="modal fade"
        id={idModal}
        tabIndex="-1"
        aria-labelledby={`${idModal}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                {nameModal}
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="llamadaApi">
                {relacion && (
                  <>
                    {" "}
                    <Dropdown nameDropdown={nameRelacion} /> <br />{" "}
                  </>
                )}

                <label htmlFor="data">Datos: </label>
                <br />
                <select
                  className="form-select row mt-1 selectOptions"
                  multiple
                  aria-label="multiple select example"
                  disabled={disabled}
                >
                  {array && opcionesApi.map((op, i) => {
                    return (
                      <option
                        key={i}
                        value={op && op[propArrayId]}
                        onClick={() => onSelect(action, op)}
                      >
                        {op && op[propArrayOp]}
                      </option>
                    );
                  })
                  }
                </select>

                <div className="crudBtns">
                  <button type="button" className="btn btn-danger crudBtn" onClick={agregar}>
                    AGREGAR
                  </button>
                  <button type="button" className="btn btn-danger crudBtn" onClick={modificar}>
                    MODIFICAR
                  </button>
                  <button type="button" className="btn btn-danger crudBtn" onClick={() => deleteOption}>
                    ELIMINAR
                  </button>
                </div>
              </div>

              <div className="bodyInputs">
                {
                  placeholder.map((p, i) => {
                    return (
                      <InputModal
                        key={i}
                        placeHolder={p.placeholder}
                        nameLabel={p.label}
                        inputId={p.idInput}
                        value={(p.idInput === inputIdCompare ? firstOptionCompare : secondOptionCompare)}
                        onChange={onChange}
                        action={GET_ESTADOSCIVILES}
                        opcionSelected={opcionSelected}
                      />
                    );
                  })
                }

                {inputNum && <InputNumModal nameInput={inputNumName} />}

                {hasCheckbox && <Checkbox nameCheckbox={checkboxName} />}

                {hasCheckBoxNum && (
                  <CheckboxNum
                    nameCheckbox={checkboxCheckName}
                    nameInputNum={checkboxNumName}
                  />
                )}

                {dropdown && <Dropdown nameDropdown="Partida" />}

                {/* HAY ALGO DEL INPUTDATE QUE ESTA DESACOMODANDO LA ALINEACION, CAMBIAR */}
                {inputDate && <InputDate nameInput="Vencimiento" />}

                <br />
                {textArea && <TextArea inputName="Observaciones" />}
                <hr />






                <div className="btnInputs">
                  <button type="button" className="btn btn-danger btnAceptar" onClick={postFn} >
                    ACEPTAR
                  </button>
                  <button type="button" className="btn btn-danger" onClick={(e) => onCancel(e)} >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                SALIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
