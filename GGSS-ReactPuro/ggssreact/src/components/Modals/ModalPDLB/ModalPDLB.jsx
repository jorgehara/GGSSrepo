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

const ModalPDLB = ({
    idModal,
    nameModal,
    urlProv,
    urlDeptos,
    urlLocalidades,
    urlBarrios
}) => {

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

                                />
                            }

                            {
                                departamentos &&
                                <PDLBBody
                                    array={deptosValue}
                                    placeholder={objectDeptos}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                />
                            }

                            {
                                localidades &&
                                <PDLBBody
                                    array={localidadesValue}
                                    placeholder={objectLocalidades}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
                                />
                            }


                            {
                                barrios &&
                                <PDLBBody
                                    array={barriosValue}
                                    placeholder={objectBarrios}
                                    textArea={true}
                                    textAreaObject={textAreaObject}
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