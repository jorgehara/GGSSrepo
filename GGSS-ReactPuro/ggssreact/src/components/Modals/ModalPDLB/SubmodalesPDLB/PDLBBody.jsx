import React from 'react'
import InputModal from '../../../Inputs/InputsModal/InputModal'
import TextArea from '../../../Inputs/TextArea/TextArea'
import { useDispatch } from "react-redux";
// import { CANCEL_MODALS } from "../../../redux/types/modalesTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { CANCEL_MODALS } from '../../../../redux/types/modalesTypes';

const PDLBBody = ({
    array,
    placeholder,
    textArea,
    textAreaObject,
    propArrayOp,
    propArrayId,
    action,
    opcionSelected,
    inputIdCompare,
    firstOptionCompare,
    secondOptionCompare,
    urlApi,
    idApi,
    bodyPet,
    dispatchAddAction,
    dispatchDeleteAction,
    dispatchPutAction,
    dispatchGetID,
    resp,
    onChange,
    valueObs,
    refetch,
    setRefetch
}) => {

    const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(false);

    const [toModify, setToModify] = useState(false)

    // function onSelect(action, payload) {
    //   dispatch(action(payload));
    //   dispatch(dispatchGetID(payload[propArrayId]))
    // }

    function onCancel(e, name) {
        setDisabled(false)
        dispatch({
            type: CANCEL_MODALS,
            payload: ""
        })
    }


    async function agregar() {
        setDisabled(!disabled);
    }
    function modificar() {
        setDisabled(!disabled);
        setToModify(!toModify)
    }

    const deleteOption = async (id) => { // le pasamos de param el idApi cuando ejecutamos la funcion en el boton delete
        try {
          await axios.delete(`${urlApi}/${id}`)
            .then((res) => {
              dispatch(dispatchDeleteAction((id)));
              swal({
                title: "Ok",
                text: "Eliminado con éxito",
                icon: "success",
              })
              setRefetch(!refetch); // resetea la lista 
            })
        } catch (err) {
          swal({
            title: "Error",
            text: err,
            icon: "error",
          })
        }
      }
    
    
    
      async function aceptar(id) {
        try {
          if (!toModify) {
            await axios.post(urlApi, bodyPet)
              .then((res) => {
                if (res.status === 200) {
                  dispatch(dispatchAddAction(resp.modalDataInputs))
                  swal({
                    title: "Ok",
                    text: "Agregado con éxito",
                    icon: "success",
                  })
                  setRefetch(!refetch); // resetea la lista 
    
                }
              })
          } else {
            await axios.delete(`${urlApi}/${id}`) // elimina el valor seleccionado
              .then((res) => {
                axios.post(urlApi, bodyPet) // y agrega otro con otro nombre
                  .then((res) => {
                    if (res.status === 200) {
                      dispatch(dispatchPutAction(resp.modalDataInputs))
                      swal({
                        title: "Ok",
                        text: "Modificado con éxito",
                        icon: "success",
                      })
                      setRefetch(!refetch); // resetea la lista 
                    }
                  })
              })
    
          }
          
        } catch (err) {
          swal({
            title: "Error",
            text: err.toString(),
            icon: "error",
          })
        }
      }
    
      useEffect(() => {
        console.log('API actualizada con éxito!')
      }, [refetch])
    


    return (
        <>
            <div className="llamadaApi" style={{ height: "300px" }}>

                <label htmlFor="data">Datos: </label>
                <br />
                <select className="form-select row mt-1 formSelectApi" multiple aria-label="multiple select example">
                    {/* {
                        aProvincias && aProvincias.map((prov, i) => {
                            return (
                                <option key={i} value="1">{prov}</option>
                            )
                        })
                    } */}


                    {array && array.map((op, i) => {
                        return (
                            <option
                                key={i}
                                value={op && op[propArrayId]}
                                // onClick={() => onSelect(action, op)}  // si se rompe el abm comentar esta linea y descomentar la de abajo
                                onClick={() => dispatch(dispatchGetID(op[propArrayId]))}
                            >
                                {op && op[propArrayOp]}
                            </option>
                        );
                    })
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
                  placeholder.map((p, i) => {
                    return (
                      <InputModal
                        key={i}
                        placeHolder={p.placeholder}
                        nameLabel={p.label}
                        inputId={p.idInput}
                        value={(p.idInput === inputIdCompare ? firstOptionCompare : secondOptionCompare)}
                        onChange={onChange}
                      // opcionSelected={opcionSelected}
                      />
                    );
                  })
                }

                <br />

                {textArea &&
                    textAreaObject?.map((p, i) => {
                        console.log(textAreaObject)
                        return (
                            <TextArea
                                key={i}
                                inputName={p.label}
                                onChange={onChange}
                                inputId={p.idInput}
                                value={valueObs}
                            />
                        )
                    })
                }

                <hr />

                <div className="btnInputs">
                  <button type="button" className="btn btn-danger btnAceptar" onClick={() => aceptar(idApi)} >
                    ACEPTAR
                  </button>
                  <button type="button" className="btn btn-danger" onClick={(e) => onCancel(e)} >
                    CANCELAR
                  </button>
                </div>

            </div>
        </>
    )
}

export default PDLBBody