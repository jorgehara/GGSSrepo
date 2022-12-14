import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLarge from '../Buttons/ButtonLarge'
import "./Footer.css"

const Footer = () => {
  return (
            <div className="d-flex border row fixed-bottom">
                <div className='col-2'>
                    <ButtonLarge color="danger" tamaño="" justyfy="cemter m-1" nameButton="Imprimir Constancia de Asignaciones Familiares" />
                </div>
                <div className='col-2'>
                    <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Certificado de Convenio/Oficio" />
                </div>
                <div className='col-2'>
                    <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Resumen Legajo Empleado" />
                </div>
                <div className='col-2'>
                    <ButtonLarge color="danger" tamaño="" justyfy="center m-1" nameButton="Imprimir Ficha Empleado" />
                </div>
                <div className='col-2'>
                    <ButtonLarge color="danger" tamaño="" justyfy="center mt-1" nameButton="Licencias Franquicias" />
                </div>
                <div className='col-2'>
                    <Link className="btn btn-danger btn-lg d-flex justify-content-center newClass mt-1" to="/">Salir</Link>
                </div>
            </div>
  )
}

export default Footer