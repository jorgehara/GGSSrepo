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
import IngresoContrato from "./ChildrenComponents/IngresoContrato";


const Liquidacion = () => {
    const [sindicatos, setSindicatos] = useState([]);
    useEffect(()=>{
        axios.get("http://54.243.192.82/api/Sindicatos")
        .then(res=> setSindicatos(res.data.result))
    },[])
 const sindicatosNAme = sindicatos.map((s)=> {return(s.nombreSindicato)})
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
        <ColumnaInputs2da />

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
        <SindicatoLiquidacion idInput="sindicatoInput" nameLabel="Sindicato:" nameButton="..." array={sindicatosNAme} />
        {/* <InputButton
            nameButton="..."
            nameLabel="Sindicato"
            placeholder="Sindicato"
        /> */}
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
