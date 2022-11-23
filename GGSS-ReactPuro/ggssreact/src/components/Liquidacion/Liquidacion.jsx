import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EmployeData from "../EmployeData/EmployeData";
import InputButton from "../Inputs/InputButton/InputButton";
import SindicatoLiquidacion from "../SindicatoLiquidacion/SindicatoLiquidacion";
import AsidePago from "./ChildrenComponents/AsidePago";
import ColumnaInputs2da from "./ChildrenComponents/ColumnaInputs2da";
import DatosCertificado from "./ChildrenComponents/DatosCertificadoOficio";
import DireccionSindicato from "./ChildrenComponents/DireccionSindicato";
import IngresoContrato from "./ChildrenComponents/IngresoContrato";


const Liquidacion = () => {
   
return (
    <div className="container">
    <div className="row">
        <EmployeData />
    </div>
<div className="container">
    <div className="row">
        <div className="col-xl-12">
        <InputButton
            nameButton="..."
            nameLabel="Empleadores"
            placeholder="Empleador"
            action=""
        />
        </div>
</div>
</div>
<div className="container">
    <div className="row align-items-start">
        <div className="col-xl-4">
        <ColumnaInputs2da />
        <IngresoContrato />
        </div>
        <div className="col-xl-4">
        <ColumnaInputs2da />
        <DireccionSindicato />
        </div>
        <div className="row col-xl-4">
        <AsidePago />
        </div>
        <div className="row col-xl-12">
        <DatosCertificado />
        </div>
    </div>
</div>
</div>
    
);
};

export default Liquidacion;
