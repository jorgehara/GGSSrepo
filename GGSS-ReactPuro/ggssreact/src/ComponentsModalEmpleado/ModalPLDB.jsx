import React from 'react'
import { useState, useEffect } from "react"
import Barrios from './SubmodalesPLDB/Barrios'
import BarriosFooter from './SubmodalesPLDB/BarriosFooter'
import Departamentos from './SubmodalesPLDB/Departamentos'
import DepartamentosFooter from './SubmodalesPLDB/DepartamentosFooter'
import Localidades from './SubmodalesPLDB/Localidades'
import LocalidadesFooter from './SubmodalesPLDB/LocalidadesFooter'
import Provincias from './SubmodalesPLDB/Provincias'
import ProvinciasFooter from './SubmodalesPLDB/ProvinciasFooter'

const ModalPLDB = () => {

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
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Modal Provincias - Departamenos - Localidades  - Barrios
        </button>




            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Provincias - Localidades - Departamentos - Barrios
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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

export default ModalPLDB