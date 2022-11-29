import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputButtonClasess, inputButtonClasessEmpleador, inputButtonClassEStudiopsLiquidacion } from "../../classes/classes";
import { addAgrupamientos, addBancos, addCargos, addCategorias, addCentroDeCosto, addConvenios, addEmpleadores, addFormasPago, addLugaresDePago, addModosContratacion, addModosLiquidacion, addObrasSociales, addSectorDepto, addTareasDesempeñadas } from "../../redux/actions/fetchActions";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import { GET_INPUTS_VALUE } from "../../redux/types/liquidacionTypes";
import InputButtonLiquidacion from "../Inputs/InputButton/InputButtonLiquidacion";
import AsidePago from "./ChildrenComponents/AsidePago";
import DatosCertificado from "./ChildrenComponents/DatosCertificadoOficio";
import DireccionSindicato from "./ChildrenComponents/DireccionSindicato";
import IngresoContrato from "./ChildrenComponents/IngresoContrato";


const Liquidacion = () => {
    const dispatch = useDispatch();

    const urlEmpleadores = "http://54.243.192.82/api/Empleadores"
    const urlConvenios = "http://54.243.192.82/api/Convenios";
    const urlCategorias = "http://54.243.192.82/api/Categorias";
    const urlAgrupamientos = "http://54.243.192.82/api/Agrupamientos";
    const urlCargos = "http://54.243.192.82/api/Cargos";
    const urlTareas = "http://54.243.192.82/api/TareasDesempeñadas";
    const urlModosCont =  "http://54.243.192.82/api/ModosContratacion";
    const urlModoLiq =  "http://54.243.192.82/api/ModosLiquidacion";
    const urlCentroCosto = "http://54.243.192.82/api/CentrosDeCostos";
    const urlSectorDepto = "http://54.243.192.82/api/SectoresDptos";
    const urlObrasSociales = "http://54.243.192.82/api/ObrasSociales";
    const urlFormasDePago = "http://54.243.192.82/api/FormasdePagos";
    const urlLugaresDePago = "http://54.243.192.82/api/LugaresdePago";
    const urlBancos = "http://54.243.192.82/api/Bancos";

    function onChange(e, action) {
        dispatch(
          {
            type: action,
            payload : {name : e.target.name, value : e.target.value}
          });    
      }

    const handleFetch=(url, action )=>{
        dispatch({type: SET_LOADING});
          axios.get(url)
          .then((res)=>{
            dispatch( action(res.data.result));
          })
          .catch((err)=>{
            dispatch({type:AXIOS_ERROR});
          })
       }
    useEffect(()=>{
        handleFetch(urlConvenios, addConvenios);
        handleFetch( urlEmpleadores,addEmpleadores);
        handleFetch( urlCategorias, addCategorias);
        handleFetch( urlAgrupamientos, addAgrupamientos);
        handleFetch( urlCargos, addCargos);
        handleFetch( urlTareas, addTareasDesempeñadas);
        handleFetch( urlModosCont, addModosContratacion);
        handleFetch( urlModoLiq, addModosLiquidacion);
        handleFetch( urlCentroCosto, addCentroDeCosto);
        handleFetch( urlSectorDepto, addSectorDepto);
        handleFetch( urlObrasSociales, addObrasSociales);
        handleFetch( urlFormasDePago, addFormasPago);
        handleFetch( urlLugaresDePago, addLugaresDePago);
        handleFetch( urlBancos, addBancos);
    },[])

    const empleadores = useSelector((state)=> state.generalState.empleadores);
    const formularioValue = useSelector((state)=> state.liquidacionState.formulario);
    const empleadorValue = useSelector((state)=> state.liquidacionState.formulario.inputEmpleador);
    const convenios = useSelector((state)=> state.generalState.convenios);
    const categorias = useSelector((state)=> state.generalState.categorias);
    const agrupamientos = useSelector((state)=> state.generalState.agrupamientos);
    const cargos = useSelector((state)=> state.generalState.cargos);
    const tareasDesempeñadas = useSelector((state)=> state.generalState.tareasDesempeñadas);
    const modosContratacion = useSelector((state)=> state.generalState.modosContratacion);
    const modosLiquidacopm = useSelector((state)=> state.generalState.modosLiquidacion);
    const centroDeCostos = useSelector((state)=> state.generalState.centroCosto);
    const sectorDepto = useSelector((state)=> state.generalState.sectorDepto);
    const obrasSociales = useSelector((state)=> state.generalState.obrasSociales);
    const formasPago = useSelector((state)=> state.generalState.formasDePago);
    const lugaresDePago = useSelector((state)=> state.generalState.lugaresDePago);
    const bancos = useSelector((state)=> state.generalState.bancos);

    console.log(bancos);
    console.log(formularioValue);

return (
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <InputButtonLiquidacion
                clasess={inputButtonClasessEmpleador}
                nameButton="..."
                nameLabel="Empleador"
                placeholder="Empleador"
                value={empleadorValue && empleadorValue}
                array={empleadores && empleadores}
                propArrayOp="razonSocial"
                propIdOption="iDempleador"
                idInput="inputEmpleadorLiquidacion"
                onChange={onChange}
                action={GET_INPUTS_VALUE}
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
                    array={convenios && convenios}
                    propArrayOp="convenio"
                    propIdOption="iDconvenio"
                    idInput="inputConvenio"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Categoría"
                    placeholder="Categoría"
                    array={categorias && categorias}
                    propArrayOp="categoria"
                    propIdOption="iDcategoria"
                    idInput="inputCategoria"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Agrupamiento"
                    placeholder="Agrupamiento"
                    array={agrupamientos && agrupamientos}
                    propArrayOp="agrupamiento"
                    propIdOption="idAgrupamiento"
                    idInput="inputAgrupamiento"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Cargo"
                    placeholder="Cargo"
                    array={cargos && cargos}
                    propArrayOp="nombreCargo"
                    propIdOption="iDcargo"
                    idInput="inputCargo"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Tarea Desempeñada"
                    placeholder="Tarea Desempeñada"
                    array={tareasDesempeñadas && tareasDesempeñadas}
                    propArrayOp="tareaDesempeñada"
                    propIdOption="idTareaDesempeñada"
                    idInput="inputTareaDesempeñada"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Contratación"
                    placeholder="Modo Contratación"
                    array={modosContratacion && modosContratacion}
                    propArrayOp="modoContratacion"
                    propIdOption="iDmodoContratacion"
                    idInput="inputModoCOntratacion"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Liquidación"
                    placeholder="Modo Liquidación"
                    array={modosLiquidacopm && modosLiquidacopm}
                    propArrayOp="modoLiquidacion"
                    propIdOption="iDmodoLiquidacion"
                    idInput="inputModoLiquidacion"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Centro de Costo"
                    placeholder="Centro de Costo"
                    array={centroDeCostos && centroDeCostos}
                    propArrayOp="centrodeCosto"
                    propIdOption="idCentrodeCosto"
                    idInput="inputCentroCosto"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Secretaria/Sector/Dpto"
                    placeholder="Secretaria/Sector/Dpto"
                    array={sectorDepto && sectorDepto}
                    propArrayOp="sectorDpto"
                    propIdOption="iDsectorDpto"
                    idInput="inputSectorDepto"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Obra Social"
                    placeholder="Obra Social"
                    array={obrasSociales && obrasSociales}
                    propArrayOp="nombreObraSocial"
                    propIdOption="iDobraSocial"
                    idInput="inputObraSocial"
                    onChange={onChange}
                    action={GET_INPUTS_VALUE}
                />
            </div>
            <div className="col-xl-6">
                <AsidePago formasPAgo ={formasPago && formasPago} lugaresDePago={lugaresDePago && lugaresDePago} bancos={bancos && bancos}/>
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
