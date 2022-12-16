import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputButtonClasess, inputButtonClasessEmpleador } from "../../classes/classes";
import { addAgrupamientos, addBancos, addCargos, addCategorias, addCentroDeCosto, addConvenios, addDirecciones, addEmpleadores, addEsquemas, addFormasPago, addLugaresDePago, addModosContratacion, addModosLiquidacion, addObrasSociales, addSectorDepto, addSindicatos, addTareasDesempeñadas } from "../../redux/actions/fetchActions";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import { GET_INPUTS_VALUE } from "../../redux/types/liquidacionTypes";
import EmployeData from "../EmployeData/EmployeData";
import InputButtonLiquidacion from "../Inputs/InputButton/InputButtonLiquidacion";
import AsidePago from "./ChildrenComponents/AsidePago";
import DatosCertificado from "./ChildrenComponents/DatosCertificadoOficio";
import DireccionSindicato from "./ChildrenComponents/DireccionSindicato";
import IngresoContrato from "./ChildrenComponents/IngresoContrato";
import "./Liquidacion.css"

const Liquidacion = ({responses, setResponses}) => {
    const [ formLiquidacion, setFormLiquidacion ] = useState(responses["formLiquidacion"]);

    const dispatch = useDispatch();
    const deshabilitar = useSelector((state)=> state.employeStates.disable);
    const disable = useSelector((state)=> state.generalState.disabled);
    //#region ------------------------------------------------------------------------------------URLs
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
    const urlDirecciones = "http://54.243.192.82/api/Direcciones";
    const urlSindicatos = "http://54.243.192.82/api/Sindicatos";
    const urlEsquemas = "http://54.243.192.82/api/Esquemas";
//#endregion
    
    
    function onChangeValues(e, key){
        const newResponse = {...formLiquidacion};
        newResponse[key] = e;
        setFormLiquidacion({
            ...newResponse
        });
    };


    useEffect(() => {
        setResponses({
          ...responses,
          formLiquidacion
        });      
    },[formLiquidacion]);


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
//#region ----------------------------------------------------------------------------------------useEffects
    useEffect(()=>{
        handleFetch( urlConvenios, addConvenios);
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
        handleFetch( urlDirecciones, addDirecciones);
        handleFetch( urlSindicatos, addSindicatos);
        handleFetch( urlEsquemas, addEsquemas);
    },[])
//#endregion
    
//#region -----------------------------------------------------------------------------------------Constantes de Datos Redux
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
    const direcciones = useSelector((state)=> state.generalState.direcciones);
    const sindicatos = useSelector((state)=> state.generalState.sindicatos);
    const ingresoDate = useSelector((state)=> state.liquidacionState.formulario.ingresoDateInput);
    const ingresoTextInput = useSelector((state)=> state.liquidacionState.formulario.ingresoInput);
    const esquemas = useSelector((state)=> state.generalState.esquemas);
    const inputTotalRemu = useSelector((state)=> state.liquidacionState.formulario.inputTotalRemu);
    const inputTotalNeto = useSelector((state)=> state.liquidacionState.formulario.inputTotalNeto);
    const inputCheckEmbargos = useSelector((state)=> state.liquidacionState.formulario.inputCheckEmbargo);
    const inputCheckSumAdministrativo = useSelector((state)=> state.liquidacionState.formulario.inputCheckSumAdministrativo);
    const inputCheckLicSinGoce = useSelector((state)=> state.liquidacionState.formulario.inputCheckLicSinGoce);
//#endregion

return (
    <div className="container-flex">
        <div className="container-flex border border-1">
          <EmployeData disabled={disable} />
        </div>
<<<<<<< HEAD
        <div className="container-flex">
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button acordeonOption" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <p className="tituloAcordeon p-0 m-0" >Datos de Liquidación </p>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className="row">
                    <div className="col-xl-12">
                        <InputButtonLiquidacion
                        clasess={inputButtonClasessEmpleador}
                        nameButton="..."
                        nameLabel="Empleador"
                        placeholder="Empleador"
                        value={formLiquidacion?.inputEmpleadorLiquidacion && formLiquidacion?.inputEmpleadorLiquidacion}
                        array={empleadores && empleadores}
                        propArrayOp="razonSocial"
                        propIdOption="iDempleador"
                        idInput="inputEmpleadorLiquidacion"
                        onChange={onChangeValues}
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
                            value={formLiquidacion?.inputConvenio && formLiquidacion?.inputConvenio}
                            placeholder="Convenio"
                            array={convenios && convenios}
                            propArrayOp="convenio"
                            propIdOption="iDconvenio"
                            idInput="inputConvenio"
                            onChange={onChangeValues}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Categoría"
                            placeholder="Categoría"
                            value={formLiquidacion?.inputCategoria && formLiquidacion?.inputCategoria}
                            array={categorias && categorias}
                            propArrayOp="categoria"
                            propIdOption="iDcategoria"
                            idInput="inputCategoria"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Agrupamiento"
                            placeholder="Agrupamiento"
                            value={formLiquidacion?.inputAgrupamiento && formLiquidacion?.inputAgrupamiento}
                            array={agrupamientos && agrupamientos}
                            propArrayOp="agrupamiento"
                            propIdOption="idAgrupamiento"
                            idInput="inputAgrupamiento"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Cargo"
                            placeholder="Cargo"
                            value={formLiquidacion?.inputCargo && formLiquidacion?.inputCargo}
                            array={cargos && cargos}
                            propArrayOp="nombreCargo"
                            propIdOption="iDcargo"
                            idInput="inputCargo"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Tarea Desempeñada"
                            placeholder="Tarea Desempeñada"
                            value={formLiquidacion?.inputTareaDesempeñada && formLiquidacion?.inputTareaDesempeñada}
                            array={tareasDesempeñadas && tareasDesempeñadas}
                            propArrayOp="tareaDesempeñada"
                            propIdOption="idTareaDesempeñada"
                            idInput="inputTareaDesempeñada"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Modo Contratación"
                            placeholder="Modo Contratación"
                            value={formLiquidacion?.inputModoCOntratacion && formLiquidacion?.inputModoCOntratacion}
                            array={modosContratacion && modosContratacion}
                            propArrayOp="modoContratacion"
                            propIdOption="iDmodoContratacion"
                            idInput="inputModoCOntratacion"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Modo Liquidación"
                            placeholder="Modo Liquidación"
                            value={formLiquidacion?.inputModoLiquidacion && formLiquidacion?.inputModoLiquidacion}
                            array={modosLiquidacopm && modosLiquidacopm}
                            propArrayOp="modoLiquidacion"
                            propIdOption="iDmodoLiquidacion"
                            idInput="inputModoLiquidacion"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Centro de Costo"
                            placeholder="Centro de Costo"
                            value={formLiquidacion?.inputCentroCosto && formLiquidacion?.inputCentroCosto}
                            array={centroDeCostos && centroDeCostos}
                            propArrayOp="centrodeCosto"
                            propIdOption="idCentrodeCosto"
                            idInput="inputCentroCosto"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Secretaria/Sector"
                            placeholder="Secretaria/Sector/Dpto"
                            value={formLiquidacion?.inputSectorDepto && formLiquidacion?.inputSectorDepto}
                            array={sectorDepto && sectorDepto}
                            propArrayOp="sectorDpto"
                            propIdOption="iDsectorDpto"
                            idInput="inputSectorDepto"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                        <InputButtonLiquidacion
                            clasess={inputButtonClasess}
                            nameButton="..."
                            nameLabel="Obra Social"
                            placeholder="Obra Social"
                            value={formLiquidacion?.inputObraSocial && formLiquidacion?.inputObraSocial}
                            array={obrasSociales && obrasSociales}
                            propArrayOp="nombreObraSocial"
                            propIdOption="iDobraSocial"
                            idInput="inputObraSocial"
                            onChange={onChangeValues}
                            action={GET_INPUTS_VALUE}
                        />
                    </div>
                    <div className="col-xl-6">
                        <AsidePago formLiquidacion={formLiquidacion && formLiquidacion} formasPAgo ={formasPago && formasPago} onChange={onChangeValues} lugaresDePago={lugaresDePago && lugaresDePago} bancos={bancos && bancos}/>
                        <DireccionSindicato formLiquidacion={formLiquidacion && formLiquidacion} onChange={onChangeValues} direcciones={direcciones && direcciones} sindicatos={sindicatos} />
                    </div>
                </div>
=======
        <div className="row">
            <div className="col-xl-6">
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Convenio"
                    value={formLiquidacion?.inputConvenio && formLiquidacion?.inputConvenio}
                    placeholder="Convenio"
                    array={convenios && convenios}
                    propArrayOp="convenio"
                    propIdOption="iDconvenio"
                    idInput="inputConvenio"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Categoría"
                    placeholder="Categoría"
                    value={formLiquidacion?.inputCategoria && formLiquidacion?.inputCategoria}
                    array={categorias && categorias}
                    propArrayOp="categoria"
                    propIdOption="iDcategoria"
                    idInput="inputCategoria"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Agrupamiento"
                    placeholder="Agrupamiento"
                    value={formLiquidacion?.inputAgrupamiento && formLiquidacion?.inputAgrupamiento}
                    array={agrupamientos && agrupamientos}
                    propArrayOp="agrupamiento"
                    propIdOption="idAgrupamiento"
                    idInput="inputAgrupamiento"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Cargo"
                    placeholder="Cargo"
                    value={formLiquidacion?.inputCargo && formLiquidacion?.inputCargo}
                    array={cargos && cargos}
                    propArrayOp="nombreCargo"
                    propIdOption="iDcargo"
                    idInput="inputCargo"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Tarea Desempeñada"
                    placeholder="Tarea Desempeñada"
                    value={formLiquidacion?.inputTareaDesempeñada && formLiquidacion?.inputTareaDesempeñada}
                    array={tareasDesempeñadas && tareasDesempeñadas}
                    propArrayOp="tareaDesempeñada"
                    propIdOption="idTareaDesempeñada"
                    idInput="inputTareaDesempeñada"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Contratación"
                    placeholder="Modo Contratación"
                    value={formLiquidacion?.inputModoCOntratacion && formLiquidacion?.inputModoCOntratacion}
                    array={modosContratacion && modosContratacion}
                    propArrayOp="modoContratacion"
                    propIdOption="iDmodoContratacion"
                    idInput="inputModoCOntratacion"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Modo Liquidación"
                    placeholder="Modo Liquidación"
                    value={formLiquidacion?.inputModoLiquidacion && formLiquidacion?.inputModoLiquidacion}
                    array={modosLiquidacopm && modosLiquidacopm}
                    propArrayOp="modoLiquidacion"
                    propIdOption="iDmodoLiquidacion"
                    idInput="inputModoLiquidacion"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Centro de Costo"
                    placeholder="Centro de Costo"
                    value={formLiquidacion?.inputCentroCosto && formLiquidacion?.inputCentroCosto}
                    array={centroDeCostos && centroDeCostos}
                    propArrayOp="centrodeCosto"
                    propIdOption="idCentrodeCosto"
                    idInput="inputCentroCosto"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Secretaria/Sector/Dpto"
                    placeholder="Secretaria/Sector/Dpto"
                    value={formLiquidacion?.inputSectorDepto && formLiquidacion?.inputSectorDepto}
                    array={sectorDepto && sectorDepto}
                    propArrayOp="sectorDpto"
                    propIdOption="iDsectorDpto"
                    idInput="inputSectorDepto"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
                <InputButtonLiquidacion
                    clasess={inputButtonClasess}
                    nameButton="..."
                    nameLabel="Obra Social"
                    placeholder="Obra Social"
                    value={formLiquidacion?.inputObraSocial && formLiquidacion?.inputObraSocial}
                    array={obrasSociales && obrasSociales}
                    propArrayOp="nombreObraSocial"
                    propIdOption="iDobraSocial"
                    idInput="inputObraSocial"
                    onChange={onChangeValues}
                    action={GET_INPUTS_VALUE}
                />
            </div>
            <div className="col-xl-6">
                <AsidePago formLiquidacion={formLiquidacion && formLiquidacion} formasPAgo ={formasPago && formasPago} onChange={onChangeValues} lugaresDePago={lugaresDePago && lugaresDePago} bancos={bancos && bancos}/>
                <DireccionSindicato formLiquidacion={formLiquidacion && formLiquidacion} onChange={onChangeValues} direcciones={direcciones && direcciones} sindicatos={sindicatos} />
>>>>>>> parent of 003444b (Merge branch 'Rodrigo' into Jorge)
            </div>
          </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button style={{display : "flex;"}} className="accordion-button acordeonOption collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <p className="tituloAcordeon p-0 m-0" >Datos de Ingreso y Certificado de Oficio</p> 
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                    <div className="col-xl-12 mt-2">
                        <IngresoContrato  formLiquidacion={formLiquidacion && formLiquidacion} onChange={onChangeValues} ingresoDate={ingresoDate && ingresoDate} ingresoTextInput={ingresoTextInput && ingresoTextInput} esquemas={esquemas}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 ">
                        <DatosCertificado formLiquidacion={formLiquidacion && formLiquidacion} onChange={onChangeValues} nameLabel="Datos para Certificado de Oficio" inputTotalRemu={inputTotalRemu && inputTotalRemu} inputTotalNeto={inputTotalNeto && inputTotalNeto} inputCheckEmbargos={inputCheckEmbargos && inputCheckEmbargos} inputCheckSumAdministrativo={inputCheckSumAdministrativo && inputCheckSumAdministrativo} inputCheckLicSinGoce = {inputCheckLicSinGoce && inputCheckLicSinGoce} />
                    </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
        </div>
        
        
    
);
};

export default Liquidacion;
