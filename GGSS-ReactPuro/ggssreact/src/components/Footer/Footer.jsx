import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLarge from '../Buttons/ButtonLarge'
import "./Footer.css"

const Footer = () => {
  return (
<>
<div class="row container-fluid-sm">
<div class="row">
<div class="col-7">
    <div class="d-flex col-md-11">
        <ButtonLarge color="danger" tamaño="md" justyfy="center m-1" align="start" nameButton="Imprimir Constancia de Asignaciones Familiares" />
        <ButtonLarge color="danger" tamaño="md" justyfy="center m-1" align="start" nameButton="Imprimir Resumen Legajo Empleado" />
        <ButtonLarge color="danger" tamaño="md" justyfy="center m-1" align="start" nameButton="Imprimir Certificado de Convenio/Oficio" />
        <ButtonLarge color="danger" tamaño="md" justyfy="center m-1" align="start" nameButton="Imprimir Ficha Empleado" />
        <ButtonLarge color="danger" tamaño="md" justyfy="center m-1" align="start" nameButton="Licencias Franquicias" />
    </div>
</div>

<div class="col-4 salirExit">
    <div class="row justify-content-end">
    <div class="col-md-1">
        <Link className="btn btn-danger btn-lg" to="/">Salir</Link>
    </div>
    </div>
</div>


</div>
</div>
</>
)
}
export default Footer