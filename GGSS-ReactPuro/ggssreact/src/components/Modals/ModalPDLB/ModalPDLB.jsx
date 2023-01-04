import React from 'react'
import { useState, useEffect } from "react"
// footers
import BarriosFooter from './SubmodalesPDLB/BarriosFooter'
import DepartamentosFooter from './SubmodalesPDLB/DepartamentosFooter'
import LocalidadesFooter from './SubmodalesPDLB/LocalidadesFooter'
import ProvinciasFooter from './SubmodalesPDLB/ProvinciasFooter'
// ---
import './ModalPDLB.css'
import { objectProvincias, objectDeptos, objectLocalidades, objectBarrios, textAreaObject } from '../../Navbar/Objects'
import { useDispatch, useSelector } from 'react-redux';
import PDLBBody from './SubmodalesPDLB/PDLBBody' // body general, varían los footers
import { addSelectedBarrio, addSelectedDepto, addSelectedLocalidad, addSelectedProvincia } from '../../../redux/actions/modalesActions'
import { addBarrios, addDepartamentos, addLocalidades, addNewBarrio, addNewDepto, addNewLocalidad, addNewProvincia, addProvincias, deleteBarrio, deleteDepto, deleteLocalidad, deleteProvincia, getIdBarrio, getIdDepto, getIdLocalidad, getIdProvincia, putBarrio, putDepartamento, putLocalidad, putProvincia } from '../../../redux/actions/fetchActions'
import axios from 'axios';
import { AXIOS_ERROR, SET_LOADING } from '../../../redux/types/fetchTypes'


const ModalPDLB = ({
    idModal,
    nameModal,
    urlProv,
    urlDeptos,
    urlLocalidades,
    urlBarrios
}) => {


    /// ESTADOS PARA RENDER DE MODALES
    const [provincias, setProvincias] = useState()
    const [localidades, setLocalidades] = useState()
    const [departamentos, setDepartamentos] = useState()
    const [barrios, setBarrios] = useState()

    useEffect(() => {
        setProvincias(true)
    }, []) // SIEMPRE QUE ENTREMOS AL MODAL DE PROVINCIAS-LOCALIDADES-BARRIOS-DEPARTAMENTOS VA A INICIAR CON LA SOLAPA DE PROVINCIAS.


    const handleProvincias = () => {
        setProvincias(true)
        setLocalidades(false)
        setDepartamentos(false)
        setBarrios(false)
    }

    const handleLocalidades = () => {
        setLocalidades(true)
        setProvincias(false)
        setDepartamentos(false)
        setBarrios(false)
    }

    const handleDepartamentos = () => {
        setDepartamentos(true)
        setProvincias(false)
        setLocalidades(false)
        setBarrios(false)
    }

    const handleBarrios = () => {
        setBarrios(true)
        setProvincias(false)
        setDepartamentos(false)
        setLocalidades(false)
    }

    /// ------------------------------------ HACER IGUAL QUE EN EL NAVBAR MENU

    const dispatch = useDispatch();

    const handleFetch = (url, action) => {
        dispatch({ type: SET_LOADING });
        axios.get(url)
            .then((res) => {
                dispatch(action(res.data.result));
            })
            .catch((err) => {
                dispatch({ type: AXIOS_ERROR });
            })
    }

    const [refetch, setRefetch] = useState(true); // estado para recargar cada vez que se ejecute un post/put/delete

    // const urlProvincias = "http://54.243.192.82/api/Provincias"
    // const urlDepartamentos = "http://54.243.192.82/api/Departamentos"
    // const urlLocalidades = "http://54.243.192.82/api/Localidades"
    // const urlBarrios = "http://54.243.192.82/api/Barrios"

    useEffect(() => {
        handleFetch(urlProv, addProvincias)
        handleFetch(urlDeptos, addDepartamentos)
        handleFetch(urlLocalidades, addLocalidades)
        handleFetch(urlBarrios, addBarrios)
    }, [refetch])

    // ESTADOS QUE GUARDAN EL VALOR DE LOS INPUTS
    const [responses, setResponses] = useState({});
    const [modalDataInputs, setModalDataInputs] = useState(responses["modalDataInputs"])

    function onChangeValues(e, key) {
        const newResponse = { ...modalDataInputs }
        newResponse[key] = e
        setModalDataInputs({
            ...newResponse
        })
    }


    useEffect(() => {
        setResponses({
            ...responses,
            modalDataInputs
        });
        console.log(responses)
        console.log(modalDataInputs)
    }, [modalDataInputs]);

    /// ----------------------------

    // provincias
    const provinciasValue = useSelector((state) => state.generalState.provincias)
    const provinciaSelected = useSelector((state) => state.modalState.provinciaSelected)
    const inputProvincia = useSelector((state) => state.modalState.formulario.inputProvincia)
    const textAreaProvincia = useSelector((state) => state.modalState.formulario.textAreaProvincia)
    const valueIdProvincia = useSelector((state) => state.generalState.idProvincia)

    // departamentos
    const deptosValue = useSelector((state) => state.generalState.departamentos)
    const deptoSelected = useSelector((state) => state.modalState.deptoSelected)
    const inputDepto = useSelector((state) => state.modalState.formulario.inputDepto)
    const textAreaDeptos = useSelector((state) => state.modalState.formulario.textAreaDeptos)
    const valueIdDeptos = useSelector((state) => state.generalState.idDepto)

    // localidades
    const localidadesValue = useSelector((state) => state.generalState.localidades)
    const localidadSelected = useSelector((state) => state.modalState.localidadSelected)
    const inputLocalidad = useSelector((state) => state.modalState.formulario.inputLocalidad)
    const textAreaLocalidades = useSelector((state) => state.modalState.formulario.textAreaLocalidades)
    const valueIdLocalidades = useSelector((state) => state.generalState.idLocalidad)

    // barrios
    const barriosValue = useSelector((state) => state.generalState.barrios)
    const barrioSelected = useSelector((state) => state.modalState.barrioSelected)
    const inputBarrio = useSelector((state) => state.modalState.formulario.inputBarrio)
    const textAreaBarrios = useSelector((state) => state.modalState.formulario.textAreaBarrios)
    const valueIdBarrios = useSelector((state) => state.generalState.idBarrio)

    // BODY PETITION

    // provincias
    const idProvincia = ((provinciasValue && provinciasValue[provinciasValue.length - 1] !== undefined && (provinciasValue[provinciasValue.length - 1].idProvincia)) + 1)
    const bodyPetProvincia = {
        "idProvincia": idProvincia,
        "provincia": responses.modalDataInputs?.provincia,
        "obs": responses.modalDataInputs?.obs
    }

    // departamentos
    const idDepartamento = ((deptosValue && deptosValue[deptosValue.length - 1] !== undefined && (deptosValue[deptosValue.length - 1].idDepartamento)) + 1)
    const bodyPetDepto = {
        "idDepartamento": idDepartamento,
        "departamento": responses.modalDataInputs?.departamento,
        "obs": responses.modalDataInputs?.obs,
        // "idProvincia": responses.modalDataInputs?.idProvincia
    }

    // localidades
    const idLocalidad = ((localidadesValue && localidadesValue[localidadesValue.length - 1] !== undefined && (localidadesValue[localidadesValue.length - 1].idLocalidad)) + 1)
    const bodyPetLocalidad = {
        "idLocalidad": idLocalidad,
        "localidad": responses.modalDataInputs?.localidad,
        "obs": responses.modalDataInputs?.obs,
        // "idDepartamento": responses.modalDataInputs?.idDepartamento
    }
    
    // barrios
    const idBarrio = ((barriosValue && barriosValue[barriosValue.length - 1] !== undefined && (barriosValue[barriosValue.length - 1].idBarrio)) + 1)
    const bodyPetBarrio = {
        "idBarrio": idBarrio,
        "barrio": responses.modalDataInputs?.barrio,
        "obs": responses.modalDataInputs?.obs,
        // "idLocalidad": responses.modalDataInputs?.idLocalidad
    }
    

    return (
        <div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="pdlbBtns">
                            <button className="pdlbBtn" onClick={handleProvincias}>PROVINCIAS</button>
                            <button className="pdlbBtn" onClick={handleDepartamentos}>DEPARTAMENTOS</button>
                            <button className="pdlbBtn" onClick={handleLocalidades}>LOCALIDADES</button>
                            <button className="pdlbBtn" onClick={handleBarrios}>BARRIOS</button>
                        </div>


                        <div className="modal-body">

                            {
                                provincias &&
                                <PDLBBody
                                    array={provinciasValue}
                                    placeholder={objectProvincias}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                    urlApi={urlProv}
                                    propArrayOp="provincia" propArrayId="idProvincia"
                                    action={addSelectedProvincia}
                                    opcionSelected={provinciaSelected}
                                    inputIdCompare="provincia"
                                    firstOptionCompare={inputProvincia ? inputProvincia : provinciaSelected.provincia}
                                    secondOptionCompare={inputProvincia ? inputProvincia : provinciaSelected.provincia}
                                    valueObs={textAreaProvincia ? textAreaProvincia : provinciaSelected.obs}
                                    dispatchAddAction={addNewProvincia}
                                    dispatchDeleteAction={deleteProvincia}
                                    dispatchPutAction={putProvincia}
                                    dispatchGetID={getIdProvincia}
                                    bodyPet={bodyPetProvincia}
                                    idApi={valueIdProvincia}
                                    onChange={onChangeValues}
                                    resp={responses}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                    modalState={modalDataInputs}

                                />
                            }

                            {
                                departamentos &&
                                <PDLBBody
                                    array={deptosValue}
                                    placeholder={objectDeptos}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                    urlApi={urlDeptos}
                                    propArrayOp="departamento" propArrayId="idDepartamento"
                                    action={addSelectedDepto}
                                    opcionSelected={deptoSelected}
                                    inputIdCompare="departamento"
                                    firstOptionCompare={inputDepto ? inputDepto : deptoSelected.departamento}
                                    secondOptionCompare={inputDepto ? inputDepto : deptoSelected.departamento}
                                    valueObs={textAreaDeptos ? textAreaDeptos : deptoSelected.obs}
                                    dispatchAddAction={addNewDepto}
                                    dispatchDeleteAction={deleteDepto}
                                    dispatchPutAction={putDepartamento}
                                    dispatchGetID={getIdDepto}
                                    bodyPet={bodyPetDepto}
                                    idApi={valueIdDeptos}
                                    onChange={onChangeValues}
                                    resp={responses}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                />
                            }

                            {
                                localidades &&
                                <PDLBBody
                                    array={localidadesValue}
                                    placeholder={objectLocalidades}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                    urlApi={urlLocalidades}
                                    propArrayOp="localidad" propArrayId="idLocalidad"
                                    action={addSelectedLocalidad}
                                    opcionSelected={localidadSelected}
                                    inputIdCompare="localidad"
                                    firstOptionCompare={inputLocalidad ? inputLocalidad : localidadSelected.localidad}
                                    secondOptionCompare={inputLocalidad ? inputLocalidad : localidadSelected.localidad}
                                    valueObs={textAreaLocalidades ? textAreaLocalidades : localidadSelected.obs}
                                    dispatchAddAction={addNewLocalidad}
                                    dispatchDeleteAction={deleteLocalidad}
                                    dispatchPutAction={putLocalidad}
                                    dispatchGetID={getIdLocalidad}
                                    bodyPet={bodyPetLocalidad}
                                    idApi={valueIdLocalidades}
                                    onChange={onChangeValues}
                                    resp={responses}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                />
                            }


                            {
                                barrios &&
                                <PDLBBody
                                    array={barriosValue}
                                    placeholder={objectBarrios}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                    urlApi={urlBarrios}
                                    propArrayOp="barrio" propArrayId="idBarrio"
                                    action={addSelectedBarrio}
                                    opcionSelected={barrioSelected}
                                    inputIdCompare="barrio"
                                    firstOptionCompare={inputBarrio ? inputBarrio : barrioSelected.barrio}
                                    secondOptionCompare={inputBarrio ? inputBarrio : barrioSelected.barrio}
                                    valueObs={textAreaBarrios ? textAreaBarrios : barrioSelected.obs}
                                    dispatchAddAction={addNewBarrio}
                                    dispatchDeleteAction={deleteBarrio}
                                    dispatchPutAction={putBarrio}
                                    dispatchGetID={getIdBarrio}
                                    bodyPet={bodyPetBarrio}
                                    idApi={valueIdBarrios}
                                    onChange={onChangeValues}
                                    resp={responses}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                />
                            }




                        </div>

                        {/* POR AHORA RENDERIZO LOS BODY Y LOS FOOTER POR SEPARADO PORQUE SINO SE ROMPE TODO */}

                        {
                            provincias &&
                            <ProvinciasFooter />
                        }

                        {
                            localidades &&
                            <LocalidadesFooter />
                        }

                        {
                            departamentos &&
                            <DepartamentosFooter />
                        }

                        {
                            barrios &&
                            <BarriosFooter />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPDLB