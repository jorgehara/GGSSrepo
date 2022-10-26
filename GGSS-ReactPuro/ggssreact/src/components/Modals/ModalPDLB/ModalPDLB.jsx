import React from 'react'
import { useState, useEffect } from "react"
import Barrios from './SubmodalesPDLB/Barrios'
import BarriosFooter from './SubmodalesPDLB/BarriosFooter'
import Departamentos from './SubmodalesPDLB/Departamentos'
import DepartamentosFooter from './SubmodalesPDLB/DepartamentosFooter'
import Localidades from './SubmodalesPDLB/Localidades'
import LocalidadesFooter from './SubmodalesPDLB/LocalidadesFooter'
import Provincias from './SubmodalesPDLB/Provincias'
import ProvinciasFooter from './SubmodalesPDLB/ProvinciasFooter'

const ModalPDLB = ({idModal, nameModal, array}) => {

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



  return (
    <div>
        
            {/* <!-- Modal --> */}
            <div class="modal fade" id={idModal} tabindex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="pldbBtns">
                            <button onClick={handleProvincias}>PROVINCIAS</button>
                            <button onClick={handleDepartamentos}>DEPARTAMENTOS</button>
                            <button onClick={handleLocalidades}>LOCALIDADES</button>
                            <button onClick={handleBarrios}>BARRIOS</button>
                        </div>


                        <div class="modal-body">

                            {
                                provincias && 
                                <Provincias/>
                            }

                            { 
                                localidades &&
                                <Localidades/>
                            }

                            {
                                departamentos &&
                                <Departamentos/>
                            }

                            {
                                barrios &&
                                <Barrios/>
                            }

                            


                        </div>

                        {/* POR AHORA RENDERIZO LOS BODY Y LOS FOOTER POR SEPARADO PORQUE SINO SE ROMPE TODO */}

                            {
                                provincias &&
                                <ProvinciasFooter/>
                            }

                            { 
                                localidades &&
                                <LocalidadesFooter/>
                            }

                            {
                                departamentos &&
                                <DepartamentosFooter/>
                            }

                            {
                                barrios &&
                                <BarriosFooter/>
                            }
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ModalPDLB