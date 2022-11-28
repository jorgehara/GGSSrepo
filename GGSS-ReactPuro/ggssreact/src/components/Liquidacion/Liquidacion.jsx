import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { inputButtonClasess, inputButtonClasessEmpleador, inputButtonClassEStudiopsLiquidacion } from "../../classes/classes";
import EmployeData from "../EmployeData/EmployeData";
import InputButton from "../Inputs/InputButton/InputButton";
import InputButtonLiquidacion from "../Inputs/InputButton/InputButtonLiquidacion";
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
            <div className="col-xl-12">
                <InputButtonLiquidacion
                clasess={inputButtonClasessEmpleador}
                nameButton="..."
                nameLabel="Empleador"
                placeholder="Empleador"
                action="ACTION"
                array={[]}
                />
            </div>        
        </div>
        <div className="row">
            <div className="col-xl-6">
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Convenio"
                    placeholder="Convenio"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Categoría"
                    placeholder="Categoría"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Agrupamiento"
                    placeholder="Agrupamiento"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Cargo"
                    placeholder="Cargo"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Tarea Desempeñada"
                    placeholder="Tarea Desempeñada"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Contratación"
                    placeholder="Modo Contratación"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Liquidación"
                    placeholder="Modo Liquidación"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Centro de Costo"
                    placeholder="Centro de Costo"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Secretaria/Sector/Dpto"
                    placeholder="Secretaria/Sector/Dpto"
                    action="ACTION"
                    array={[]}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Obra Social"
                    placeholder="Obra Social"
                    action="ACTION"
                    array={[]}
                />
            </div>
            <div className="col-xl-6">
                <AsidePago />
                <DireccionSindicato />
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 mt-2">
                <IngresoContrato />
            </div>
        </div>
        <div className="row">
            <div className="col-xl-12 ">
                <DatosCertificado nameLabel="Datos para Certificado de Oficio" />
            </div>
        </div>
    </div>
    
);
};

export default Liquidacion;
