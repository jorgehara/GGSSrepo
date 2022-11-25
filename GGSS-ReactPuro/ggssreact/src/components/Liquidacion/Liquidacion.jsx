import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { inputButtonClasess, inputButtonClasessEmpleador, inputButtonClassEStudiopsLiquidacion } from "../../classes/classes";
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
            <div className="col-xl-12">
                <InputButton
                clasess={inputButtonClasessEmpleador}
                nameButton="..."
                nameLabel="Empleador"
                placeholder="Empleador"
                action="ACTION"
                />
            </div>        
        </div>
        <div className="row">
            <div className="col-xl-6">
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Convenio"
                    placeholder="Convenio"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Categoría"
                    placeholder="Categoría"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Agrupamiento"
                    placeholder="Agrupamiento"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Cargo"
                    placeholder="Cargo"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Tarea Desempeñada"
                    placeholder="Tarea Desempeñada"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Contratación"
                    placeholder="Modo Contratación"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Liquidación"
                    placeholder="Modo Liquidación"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Centro de Costo"
                    placeholder="Centro de Costo"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Secretaria/Sector/Dpto"
                    placeholder="Secretaria/Sector/Dpto"
                    action="ACTION"
                />
                <InputButton
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Obra Social"
                    placeholder="Obra Social"
                    action="ACTION"
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
