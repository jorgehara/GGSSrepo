/* eslint-disable no-fallthrough */
import React, { useEffect } from "react";
import Browser from "../Browser/Browser";
import DatosPersonales from "../DatosPersonales/DatosPersonales";
import Documentacion from "../Documentacion/Documentacion";
import Familia from "../Familia/Familia";
import Footer from "../Footer/Footer";
import Licencias from "../Licencias/Licencias";
import Liquidacion from "../Liquidacion/Liquidacion";
import AdicLiquidacion from "../AdicLiquidacion/AdicLiquidacion";
import Navbar from "../Navbar/Navbar";
import TrabajosAnteriores from "../TrabajosAnteriores/TrabajosAnteriores";
import Extras from "../Extras/Extras";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdicLiquidacion,
  addAgrupamientos,
  addBancos,
  addBarrios,
  addCalles,
  addCargos,
  addCategorias,
  addCentroDeCosto,
  addConceptos,
  addConvenios,
  addDatosExtras,
  addDepartamentos,
  addDirecciones,
  addDocumentacionEmpleados,
  addDomicilios,
  addEmpleadores,
  addEsquemas,
  addEstados,
  addEstadosCiviles,
  addEstudios,
  addFamiliares,
  addFormasPago,
  addInstrumLegales,
  addLicenciaEmpleados,
  addLocalidades,
  addLugaresDePago,
  addModosContratacion,
  addModosLiquidacion,
  addNumeradores,
  addObrasSociales,
  addPaises,
  addParentescos,
  addProvincias,
  addSectorDepto,
  addSindicatos,
  addTareasDesempeñadas,
  addTiposDocumento,
  disabledInputs,
} from "../../redux/actions/fetchActions";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import axios from "axios";
import { cleanIds, getTrabajosAnteriores, reloadItem } from "../../redux/actions/trabajosAnterioresActions";
import { cleanIdsDoc, getOneDocumento } from "../../redux/actions/documentacionActions";
import {
  addDetalleLicencia,
  deleteDetLic,
} from "../../redux/actions/licenciasActions";
import swal from "sweetalert";
import { getAdicLiq } from "../../redux/actions/liquidacionActions";
import { addOneEmploye } from "../../redux/actions/employeActions";

const Empleados = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [disable, setDisable] = useState(true);
  const [image, setImage] = useState("");
  const [disableEstado, setDisableEstado] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  const [licenciaEmpleadoDatos, setLicenciaEmpladoDatos] = useState([]);
  const [datosExtraEmpleado, setDatosExtraEmpleado ] = useState([]);
  const [ inCancel, setInCancel ] = useState(false);

  const [refetch, setRefectch] = useState(false);
  const empleadoUno = useSelector((state) => state.employeStates.employe);
  const detalleSeleccionado = useSelector(
    (state) => state.licenciasState.detalleSelect
  );

  const licenciaEmpleado = useSelector(
    (state) => state.licenciasState.licenciaEmpleado
  );
  const dispatch = useDispatch();

  const conceptosPorEmpelado = useSelector(
    (state) => state.generalState.conceptosXesquemas
  );

  //#region URLs

  const urlEstados = "http://54.243.192.82/api/Estados";
  const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";
  const urlPaisesNac = "http://54.243.192.82/api/Paises";
  const urlEstudios = "http://54.243.192.82/api/Estudios";
  const urlTiposDNI = "http://54.243.192.82/api/TiposDocumento";
  const urlParentescos = "http://54.243.192.82/api/Parentescos";
  const urlFamiliares = "http://54.243.192.82/api/MostrarDatosFamiliares";
  const urlNumeradores = "http://54.243.192.82/api/Numeradores";

  const urlDomicilios = "http://54.243.192.82/api/Domicilios/MostrarDatosDomicilios";
  const urlCalles = "http://54.243.192.82/api/Calles";
  const urlDeptos = "http://54.243.192.82/api/Departamentos";
  const urlProvincias = "http://54.243.192.82/api/Provincias";
  const urlLocalidades = "http://54.243.192.82/api/Localidades";
  const urlBarrios = "http://54.243.192.82/api/Barrios";

  const urlEmpleadores = "http://54.243.192.82/api/Empleadores";
  const urlConvenios = "http://54.243.192.82/api/Convenios";
  const urlCategorias = "http://54.243.192.82/api/Categorias";
  const urlAgrupamientos = "http://54.243.192.82/api/Agrupamientos";
  const urlCargos = "http://54.243.192.82/api/Cargos";
  const urlTareas = "http://54.243.192.82/api/TareasDesempeñadas";
  const urlModosCont = "http://54.243.192.82/api/ModosContratacion";
  const urlModoLiq = "http://54.243.192.82/api/ModosLiquidacion";
  const urlCentroCosto = "http://54.243.192.82/api/CentrosDeCostos";
  const urlSectorDepto = "http://54.243.192.82/api/SectoresDptos/0,%201";
  const urlObrasSociales = "http://54.243.192.82/api/ObrasSociales";
  const urlFormasDePago = "http://54.243.192.82/api/FormasdePagos";
  const urlLugaresDePago = "http://54.243.192.82/api/LugaresdePago";
  const urlBancos = "http://54.243.192.82/api/Bancos";
  const urlDirecciones =
    "http://54.243.192.82/api/Direcciones/DireccionesDatos/1,1";
  const urlSindicatos = "http://54.243.192.82/api/Sindicatos";
  const urlEsquemas = "http://54.243.192.82/api/Esquemas";
  const urlConceptos = "http://54.243.192.82/api/ConceptosDatos/0,1";
  const urlTrabajosAnteriores = "http://54.243.192.82/api/TrabajosAnteriores";
  const urlDocumentacionEmpleados =
    "http://54.243.192.82/api/EmpleadosDocumentacion";
  const urlDocumentacion = "http://54.243.192.82/api/Documentacion";
  const urlDatosExtras = `http://54.243.192.82/api/DatosExtras/1,%201`;
  const urlInstrumLegal =
    "http://54.243.192.82/api/InstrumentosLegales/1?modo=1";
  const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
  const urlDetalleLicenciasEmpleados =
    "http://54.243.192.82/api/DetalleLicenciasEmpleados";
  const urlEsquemasConceptos = "http://54.243.192.82/api/ConceptosEsquemas";
  //#endregion

  function setImageEmpleado() {
    empleadoUno.obsFechaIngreso !== undefined &&
      setImage(empleadoUno.obsFechaIngreso);
  }
  function handleTabChange(value) {
    setTabIndex(value);
  }
  function cancelEdit(e) {
    //Accion de redux que haga un state.domicilios.psuh(payload)... payload=[los items que se "borraron"]... Esos items guardarlso en un estado.
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    dispatch(cleanIds());
    setRefectch(!refetch);

    let formData = { ...responses.formDatosPersonales };

    const inputsArray = Object.entries(formData);

    const formDatosPersonales = inputsArray.map(([key]) => [key, ""]);

    const inputsJson = Object.fromEntries(formDatosPersonales);
    setResponses({
      ...responses,
      inputsJson})
    
    setDisable(true);
    
  }
 /*  useEffect(()=>{
    document.getElementById("accordionExample").reset()
    setResponses({
      ...responses,
      formDatosPersonales : responses?.formDatosPersonales && Object?.fromEntries(Object?.entries(responses?.formDatosPersonales).map(([key]) => [key, ""]))
    }); 
  },[inCancel]) */

  const handleFetch = async (url, action) => {
    dispatch({ type: SET_LOADING });
    await axios
      .get(url)
      .then((res) => {
        dispatch(action(res.data.result));
      })
      .catch((err) => {
        dispatch({ type: AXIOS_ERROR });
      });
  };
  const handleFetchParams = async (url, action, paramOne) => {

    dispatch({ type: SET_LOADING });
    if (paramOne && paramOne) {
      await axios
        .get(`${url}/${paramOne},%201`)
        .then((res) => {
          console.log(res)
          dispatch(action(res.data));
        })
        .catch((err) => {
          dispatch({ type: AXIOS_ERROR });
        });
    } 
    return;
  };
  const handleFetchComun = async (url, action) => {
    dispatch({ type: SET_LOADING });
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        dispatch(action(res.data));
      })
      .catch((err) => {
        dispatch({ type: AXIOS_ERROR });
      });
  };

  console.log(responses);

  useEffect(() => {
    handleFetch(urlEstados, addEstados);
    handleFetch(urlEstadosCiviles, addEstadosCiviles);
    handleFetch(urlPaisesNac, addPaises);
    handleFetch(urlEstudios, addEstudios);

     handleFetch(urlTiposDNI, addTiposDocumento);
    handleFetch(urlParentescos, addParentescos);
    handleFetch(urlFamiliares, addFamiliares);
    handleFetch(urlNumeradores, addNumeradores);

    handleFetch(urlCalles, addCalles);
    handleFetch(urlDeptos, addDepartamentos);
    handleFetch(urlProvincias, addProvincias);
    handleFetch(urlLocalidades, addLocalidades);
    handleFetch(urlBarrios, addBarrios);

    handleFetch(urlConvenios, addConvenios);
    handleFetch(urlEmpleadores, addEmpleadores);
    handleFetch(urlCategorias, addCategorias);
    handleFetch(urlAgrupamientos, addAgrupamientos);
    handleFetch(urlCargos, addCargos);
    handleFetch(urlTareas, addTareasDesempeñadas);
    handleFetch(urlModosCont, addModosContratacion);
    handleFetch(urlModoLiq, addModosLiquidacion);
    handleFetch(urlCentroCosto, addCentroDeCosto);
    handleFetch(urlSectorDepto, addSectorDepto);
    handleFetch(urlObrasSociales, addObrasSociales);
    handleFetch(urlFormasDePago, addFormasPago);
    handleFetch(urlLugaresDePago, addLugaresDePago);
    handleFetch(urlBancos, addBancos);
    handleFetch(urlDirecciones, addDirecciones);
    handleFetch(urlSindicatos, addSindicatos);
    handleFetch(urlEsquemas, addEsquemas);

    handleFetchComun(urlConceptos, addConceptos);


    handleFetch(urlDocumentacion, getOneDocumento);


    handleFetch(urlLicenciaEmpleados, addLicenciaEmpleados);  


    handleFetchComun(urlInstrumLegal, addInstrumLegales); 

    handleFetch(urlDomicilios, addDomicilios);

  }, [disable]);

  useEffect(() => {
    handleFetch(urlDocumentacionEmpleados, addDocumentacionEmpleados);

    handleFetchComun(urlDatosExtras, addDatosExtras);
    handleFetch(urlLicenciaEmpleados, addLicenciaEmpleados);
    handleFetch(urlDetalleLicenciasEmpleados, addDetalleLicencia);
    handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores);

  }, [refetch]);

  useEffect(() => {
    setImageEmpleado();
  }, [empleadoUno.obsFechaIngreso]);

  useEffect(() => {
    setDisableEstado(false);
  }, [responses?.inputSexo]);

  useEffect(() => {
    axios
      .get("http://54.243.192.82/api/Empleados?records=10000")
      .then((res) => setEmpleados(res.data.result));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoUno?.iDempleado}`
      )
      .then((res) => {
        setLicenciaEmpladoDatos(res.data);
      });
      axios
      .get(
        `http://54.243.192.82/api/MostrarDatosExtrasPorEmpleado/${empleadoUno?.iDempleado}`
      )
      .then((res) => {
        setDatosExtraEmpleado(res.data);
      });
  }, [empleadoUno?.iDempleado, refetch]);

  useEffect(() => {
    dispatch(deleteDetLic(detalleSeleccionado.idDetalleLicenciaEmpleado));
  }, [empleadoUno?.iDempleado]);


  const idsTrabajosAnterioresDelete = useSelector((state)=> state.trabajosAnteriores.ids);
  const documentacionDelte = useSelector((state)=> state.documentacionState.ids);
  const urlTRabajoDelete = "http://54.243.192.82/api/TrabajosAnteriores?IdTrabajoAnterior=";
  const urlDocDelte = "http://54.243.192.82/api/EmpleadosDocumentacion/"

  const objectRequest = {
    urls : {
      urlTRabajoDelete : urlTRabajoDelete,
      urlDocDelte : urlDocDelte

    },
    arrays : [
      idsTrabajosAnterioresDelete,
      documentacionDelte
    ]
  }
  const { urls, arrays } = objectRequest;
  console.log(arrays)


  function cleanIdsGeneral(){
    dispatch(cleanIds())
    dispatch(cleanIdsDoc())
    setRefectch(!refetch);
  }

  function deleteItems(objectRequest){
    const { urls, arrays } = objectRequest;
    console.log(arrays)
    debugger;
    
    try{
      
        switch(urls){
          case urls.urlTRabajoDelete : {
              arrays.idsTrabajosAnterioresDelete.map(async (id)=>{
                await axios.delete(`${urls.urlTRabajoDelete}${id}`)
                .then((res) => console.log(res))
              })
          }
          case urls.urlDocDelte : {
            arrays.documentacionDelte.map(async (id)=>{
              await axios.delete(`${urls.urlDocDelte}${id}`)
              .then((res) => console.log(res))
            })
        }
          default : {
              arrays[0].map(async (id)=>{
                await axios.delete(`${urls.urlTRabajoDelete}${id}`)
                .then((res) => console.log(res))
            });
            arrays[1].map(async (id)=>{
              await axios.delete(`${urls.urlDocDelte}${id}`)
              .then((res) => console.log(res))
            });
          }
        }
    }catch(err){
        //codigo de error
        swal({
            title: "Error",
            text: "Error al eliminar el trabajo anterior",
            icon: "error",
        })
    }
}

  console.log(licenciaEmpleadoDatos);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3">
          <Browser disable={disable} setDisable={setDisable} />
        </div>
        <div className="col-xl-9 ">
          <Navbar handleTabChange={handleTabChange} tabIndex={tabIndex} />
          {tabIndex === 0 && (
            <DatosPersonales
              empleados={empleados}
              disableEstado={disableEstado}
              image={image}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 1 && (
            <Familia
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
              setRefetch={setRefectch}
              refetch={refetch}
            />
          )}
          {tabIndex === 2 && (
            <Liquidacion
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 3 && (
            <AdicLiquidacion
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 4 && (
            <TrabajosAnteriores
              setRefetch={setRefectch}
              refetch={refetch}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 5 && (
            <Documentacion
              setRefectch={setRefectch}
              refetch={refetch}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 6 && (
            <Licencias
              setRefectch={setRefectch}
              refetch={refetch}
              setLicenciaEmpladoDatos={setLicenciaEmpladoDatos}
              licenciaEmpleadoDatos={licenciaEmpleadoDatos}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
            />
          )}
          {tabIndex === 7 && (
            <Extras
            setDatosExtraEmpleado={setDatosExtraEmpleado}
            datosExtraEmpleado={datosExtraEmpleado}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
              refetch={refetch}
              setRefetch={setRefectch}
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-row-reverse  w-100 ">
        <button className="btn btn-danger " onClick={()=> cleanIdsGeneral()}>
          Cancelar
        </button>
        <button className="btn btn-success" onClick={()=> deleteItems( objectRequest)}>Aceptar</button>
      </div>
      <Footer />
    </div>
  );
};

export default Empleados;
