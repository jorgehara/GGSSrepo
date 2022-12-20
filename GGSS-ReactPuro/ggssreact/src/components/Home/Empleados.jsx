import React, { useEffect } from 'react'
import Browser from '../Browser/Browser'
import DatosPersonales from '../DatosPersonales/DatosPersonales'
import Documentacion from '../Documentacion/Documentacion';
import Familia from '../Familia/Familia';
import Footer from '../Footer/Footer';
import Licencias from '../Licencias/Licencias';
import Liquidacion from '../Liquidacion/Liquidacion';
import AdicLiquidacion from "../AdicLiquidacion/AdicLiquidacion";
import Navbar from '../Navbar/Navbar';
import TrabajosAnteriores from '../TrabajosAnteriores/TrabajosAnteriores';
import Extras from '../Extras/Extras';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAgrupamientos, addBancos, addBarrios, addCalles, addCargos, addCategorias, addCentroDeCosto, addConceptos, addConvenios, addDatosExtras, addDepartamentos, addDirecciones, addDocumentacionEmpleados, addEmpleadores, addEsquemas, addEstados, addEstadosCiviles, addEstudios, addFamiliares, addFormasPago, addInstrumLegales, addLicenciaEmpleados, addLocalidades, addLugaresDePago, addModosContratacion, addModosLiquidacion, addNumeradores, addObrasSociales, addPaises, addParentescos, addProvincias, addSectorDepto, addSindicatos, addTareasDesempeñadas, addTiposDocumento, disabledInputs } from '../../redux/actions/fetchActions';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import axios from 'axios';
import { addDomicilios } from '../../redux/actions/domiciliosActions';
import { getTrabajosAnteriores } from '../../redux/actions/trabajosAnterioresActions';
import { getOneDocumento } from '../../redux/actions/documentacionActions';
import { addDetalleLicencia } from '../../redux/actions/licenciasActions';
import swal from 'sweetalert';

const Empleados = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [disable , setDisable] = useState(true);
    const [image, setImage] = useState("");
    const [disableEstado, setDisableEstado] = useState(false);
    const [empleados, setEmpleados] = useState([]);
    const [ licenciaEmpleadoDatos, setLicenciaEmpladoDatos] = useState([]);
    const [ refetch , setRefectch ] =useState(false);
    const empleadoUno = useSelector((state)=> state.employeStates.employe);


    const licenciaEmpleado = useSelector((state)=> state.licenciasState.licenciaEmpleado);
    const dispatch = useDispatch();




//#region URLs

    const urlEstados = "http://54.243.192.82/api/Estados";
    const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
    const urlPaisesNac = "http://54.243.192.82/api/Paises";
    const urlEstudios = "http://54.243.192.82/api/Estudios";
    const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
    const urlParentescos = "http://54.243.192.82/api/Parentescos"
    const urlFamiliares = "http://54.243.192.82/api/MostrarDatosFamiliares";
    const urlNumeradores = "http://54.243.192.82/api/Numeradores";

    const urlDomicilios = "http://54.243.192.82/api/MostrarDatosDomicilios";
    const urlCalles = "http://54.243.192.82/api/Calles";
    const urlDeptos = "http://54.243.192.82/api/Departamentos";
    const urlProvincias = "http://54.243.192.82/api/Provincias";
    const urlLocalidades = "http://54.243.192.82/api/Localidades";
    const urlBarrios = "http://54.243.192.82/api/Barrios";

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
    const urlConceptos = "http://54.243.192.82/api/ConceptosDatos/0,1";
    const urlTrabajosAnteriores = "http://54.243.192.82/api/TrabajosAnteriores";
    const urlDocumentacionEmpleados = "http://54.243.192.82/api/EmpleadosDocumentacion";
    const urlDocumentacion = "http://54.243.192.82/api/Documentacion";
    const urlDatosExtras = `http://54.243.192.82/api/DatosExtras/0,%201`;
    const urlInstrumLegal = "http://54.243.192.82/api/InstrumentosLegales/0?modo=1"
    const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
    const urlDetalleLicenciasEmpleados = "http://54.243.192.82/api/DetalleLicenciasEmpleados";
//#endregion
    

    function setImageEmpleado(){
        empleadoUno.obsFechaIngreso !== undefined && setImage(empleadoUno.obsFechaIngreso);
    }
    function handleTabChange(value){        
        setTabIndex(value);
    };  
    function cancelEdit(e){
        e.preventDefault();
        setDisable(true);
    }

    const handleFetch=(url, action )=>{
        dispatch({type: SET_LOADING});
        axios.get(url)
        .then((res)=>{
            console.log(res.data);
            dispatch( action(res.data.result));
        })
        .catch((err)=>{
            dispatch({type:AXIOS_ERROR});
        })
    }
    const handleFetchComun=(url, action )=>{
        dispatch({type: SET_LOADING});
        axios.get(url)
        .then((res)=>{
            dispatch( action(res.data));
        })
        .catch((err)=>{
            dispatch({type:AXIOS_ERROR});
        })
    }
    console.log(responses)
    useEffect(()=>{
        handleFetch( urlEstados, addEstados);
        handleFetch( urlEstadosCiviles,addEstadosCiviles);
        
        // handleFetch( urlPaisesNac,addPaises);
        
        // handleFetch( urlEstudios,addEstudios);

        handleFetch( urlTiposDNI,addTiposDocumento);
        handleFetch( urlParentescos,addParentescos);
        handleFetch( urlFamiliares,addFamiliares);

        handleFetch( urlNumeradores,addNumeradores);                

        // handleFetch(urlDomicilios, addDomicilios);


        handleFetch(urlCalles, addCalles);
        handleFetch(urlDeptos, addDepartamentos);
        handleFetch(urlProvincias, addProvincias);
        handleFetch(urlLocalidades, addLocalidades);
        handleFetch(urlBarrios, addBarrios);

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

        handleFetchComun( urlConceptos, addConceptos);

        handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores)

        handleFetch( urlDocumentacionEmpleados, addDocumentacionEmpleados);
        handleFetch( urlDocumentacion, getOneDocumento);

        handleFetch( urlDatosExtras, addDatosExtras);  
        // handleFetch( urlInstrumLegal, addInstrumLegales); 
        // handleFetch( urlLicenciaEmpleados, addLicenciaEmpleados);  
        
        // handleFetch( urlDetalleLicenciasEmpleados, addDetalleLicencia);  
        

      },[disable])

      useEffect(() => {
        setImageEmpleado()
      }, [empleadoUno.obsFechaIngreso]);

      useEffect(()=>{
        setDisableEstado(false);
      },[responses?.inputSexo])

      useEffect(()=>{
        axios.get("http://54.243.192.82/api/Empleados?records=10000")
      .then((res) =>  setEmpleados(res.data.result));
      
      },[])


      
      useEffect(()=>{
        handleFetch( urlDocumentacionEmpleados, addDocumentacionEmpleados);

        axios.get(`http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoUno?.iDempleado}`)
        .then((res)=>{
            setLicenciaEmpladoDatos(res.data)
        })
    },[empleadoUno?.iDempleado, refetch])
      
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-3'>
                <Browser  disable={disable} setDisable={setDisable} />
            </div>
            <div className='col-xl-9 '>
                <Navbar handleTabChange={handleTabChange} tabIndex={tabIndex} />
                {
                    tabIndex === 0 && <DatosPersonales empleados={empleados} disableEstado={disableEstado} image={image} disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                } 
                {
                    tabIndex === 1 && <Familia disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 2 && <Liquidacion disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 3 && <AdicLiquidacion disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
                {
                    tabIndex === 4 && <TrabajosAnteriores disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 5 && <Documentacion setRefectch={setRefectch} refetch={refetch} disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 6 && <Licencias  setRefectch={setRefectch} refetch={refetch} setLicenciaEmpladoDatos={setLicenciaEmpladoDatos} licenciaEmpleadoDatos={licenciaEmpleadoDatos} disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />                    
                }
                {
                    tabIndex === 7 && <Extras disable={disable} setDisable={setDisable} responses={responses} setResponses={setResponses} />
                }
            </div>            
        </div>
        <div className='d-flex flex-row-reverse  w-100 '>
            <button className='btn btn-danger ' onClick={(e)=>cancelEdit(e)}>
                Cancelar
            </button>
            <button className='btn btn-success'  >
                Aceptar
            </button>
        </div>
        <Footer /> 
    </div>
)
}

export default Empleados