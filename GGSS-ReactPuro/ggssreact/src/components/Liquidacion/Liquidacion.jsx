import React from "react";
import EmployeData from "../EmployeData/EmployeData";
import InputButton from "../Inputs/InputButton/InputButton";
import AsidePago from "./AsidePago";
import ColumnaInputs from "./ColumnaInputs";
import DatosCertificado from "./DatosCertificadoOficio";
import IngresoContrato from "./IngresoContrato";

const Liquidacion = () => {
 
return (
    <div className="container">
    <div className="row">
        <EmployeData />
    </div>

    <div className="row">
        <div className="col-xl-12">
        <InputButton
            nameButton="..."
            nameLabel="Empleadores"
            placeholder="Empleador"
            action=""
        />
        </div>
        <div className="row">
        <div className="col-xl-6">
        <ColumnaInputs />
        </div>

        <div className="row col-xl-6">
        <AsidePago />
        <div className="col-xl-6">
        <InputButton
            nameButton="..."
            nameLabel="Dirección"
            placeholder="Dirección"
            action=""
        />
        <InputButton
            nameButton="..."
            nameLabel="Sindicato"
            placeholder="Sindicato"
            action=""
        />
        </div>
        </div>
        <div className="row col-xl-12">
        <IngresoContrato />
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
