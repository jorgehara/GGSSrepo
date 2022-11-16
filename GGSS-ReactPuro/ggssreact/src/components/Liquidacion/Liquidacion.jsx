import React from "react";
import EmployeData from "../EmployeData/EmployeData";
import InputButton from "../Inputs/InputButton/InputButton";
import AsidePago from "./AsidePago";
import ColumnaInputs from "./ColumnaInputs";
import ColumnaInputs2da from "./ColumnaInputs2da";
import DatosCertificado from "./DatosCertificadoOficio";
import IngresoContrato from "./IngresoContrato";

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
        />
        </div>
</div>
</div>

<div className="container">
    <div className="row align-items-start">
        <div className="col-xl-4">
        <ColumnaInputs />

        <IngresoContrato />

        </div>
        <div className="col-xl-4">
        <ColumnaInputs2da />
        <div className='row col mt-5'>
        <div className="border p-2 col">
        <InputButton
            nameButton="..."
            nameLabel="Dirección"
            placeholder="Dirección"
        />
        <InputButton
            nameButton="..."
            nameLabel="Sindicato"
            placeholder="Sindicato"
        />
        </div>
        </div>
        </div>
        <div className="row col-xl-4">
        <AsidePago />
        
        </div>
    </div>
</div>


        <div className="row col-xl-12">
        <DatosCertificado />
        </div>
</div>
    
);
};

export default Liquidacion;
