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
  saveDatosExtrasEmpleados,
} from "../../redux/actions/fetchActions";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import axios from "axios";
import { cleanIds, getTrabajosAnteriores, reloadItem } from "../../redux/actions/trabajosAnterioresActions";
import { cleanIdsDoc, documentacionDelEmpleado, getOneDocumento } from "../../redux/actions/documentacionActions";
import {
  addDetalleLicencia,
  addLicEmpleado,
  clearIdsLic,
  deleteDetLic,
} from "../../redux/actions/licenciasActions";
import swal from "sweetalert";
import { getEmployeByLegajo, getEmployeByName } from "../../services/fetchAPI";
import { cleanEmploye, getEmployes } from "../../redux/actions/employeActions";
import { cleanIdFam, getDAtosFamiliaresEmpleado } from "../../redux/actions/familiaActions";
import { addOneDomicilio, cleanIdsDom } from "../../redux/actions/domiciliosActions";
import { addDatosExtraPorEmpleado, cleanIdDe } from "../../redux/actions/extrasActions";
import { setRefetch } from "../../redux/actions/modalesActions";
import "./Home.css"

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
  const [ valueempl, setValueEmpl ] = useState(false);
  const [saveEmpleado , setSaveEmpleado ] = useState(false);


  const refetching = useSelector((state)=> state.modalState.refetch);
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

  const urlDomicilios = "http://54.243.192.82/api/MostrarDatosDomicilios";
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
    "http://54.243.192.82/api/Direcciones/DireccionesDatos/0,1";
  const urlSindicatos = "http://54.243.192.82/api/Sindicatos";
  const urlEsquemas = "http://54.243.192.82/api/Esquemas";
  const urlConceptos = "http://54.243.192.82/api/ConceptosDatos/0,1";
  const urlTrabajosAnteriores = "http://54.243.192.82/api/TrabajosAnteriores";
  const urlDocumentacionEmpleados =
    "http://54.243.192.82/api/EmpleadosDocumentacion";
  const urlDocumentacion = "http://54.243.192.82/api/Documentacion";
  const urlDatosExtras = `http://54.243.192.82/api/DatosExtras/0,%201`;
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
  // console.log(tabIndex)
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
       
        dispatch(action(res.data));
      })
      .catch((err) => {
        dispatch({ type: AXIOS_ERROR });
      });
  };
const domiciliosEmpleados = useSelector((state)=> state.generalState.domicilios)
const empleadoDomicilio = useSelector((state)=> state.domiciliosStates.domicilioEmpleado);
const recharge = useSelector((state)=> state.domiciliosStates.recharge);


//#region useEffect handleFetch
useEffect(()=>{
   handleFetch(urlEstados, addEstados);
   handleFetch(urlEstadosCiviles, addEstadosCiviles);
   handleFetch(urlPaisesNac, addPaises);
   handleFetch(urlEstudios, addEstudios);
   handleFetch(urlTiposDNI, addTiposDocumento);
   handleFetch(urlDomicilios, addDomicilios);
   
   handleFetch(urlDocumentacionEmpleados, addDocumentacionEmpleados);
},[refetching, empleadoUno, refetch])

useEffect(()=>{
  axios
      .get(
        `http://54.243.192.82/api/MostrarDatosExtrasPorEmpleado/${empleadoUno?.iDempleado}`
      )
      .then((res) => {
        dispatch(saveDatosExtrasEmpleados(res.data));
      });//
},[empleadoUno, refetch])

  useEffect(() => {
    handleFetch(urlEstados, addEstados);
   handleFetch(urlEstadosCiviles, addEstadosCiviles);
   handleFetch(urlPaisesNac, addPaises);
   handleFetch(urlEstudios, addEstudios);
   handleFetch(urlTiposDNI, addTiposDocumento);
   handleFetch(urlDomicilios, addDomicilios);
   
   handleFetch(urlDocumentacionEmpleados, addDocumentacionEmpleados);

     handleFetch(urlEstados, addEstados);
     handleFetch(urlEstadosCiviles, addEstadosCiviles);
     handleFetch(urlPaisesNac, addPaises);
     handleFetch(urlEstudios, addEstudios);

     handleFetch(urlTiposDNI, addTiposDocumento);
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
     handleFetch(urlObrasSociales, addObrasSociales);
     handleFetch(urlFormasDePago, addFormasPago);
     handleFetch(urlLugaresDePago, addLugaresDePago);
     handleFetch(urlBancos, addBancos);
     handleFetchComun(urlDirecciones, addDirecciones);
     handleFetch(urlSindicatos, addSindicatos);
     handleFetch(urlEsquemas, addEsquemas);

     handleFetchComun(urlConceptos, addConceptos);


     handleFetch(urlDocumentacion, getOneDocumento);

     
 
   

   handleFetchComun(urlSectorDepto, addSectorDepto);
     handleFetchComun(urlInstrumLegal, addInstrumLegales); 
     handleFetchComun(urlDatosExtras, addDatosExtras);
     handleFetch(urlDomicilios, addDomicilios);

     
     handleFetch(urlTrabajosAnteriores, getTrabajosAnteriores);
  }, [disable, refetch,refetching]);

  useEffect(() => {
    
    handleFetch(urlLicenciaEmpleados, addLicenciaEmpleados);
     handleFetch(urlDetalleLicenciasEmpleados, addDetalleLicencia);

  }, [refetch]);
//#endregion

  useEffect(() => {
    setImageEmpleado();
  }, [empleadoUno.obsFechaIngreso]);

  useEffect(() => {
    setDisableEstado(false);
  }, [responses?.inputSexo]);

  

  useEffect(() => {
    axios
      .get(
        `http://54.243.192.82/api/MostrarDatosPorEmpleado/${empleadoUno?.iDempleado}`
        
      )
      .then((res) => {
        dispatch(addLicEmpleado(res.data));
        setLicenciaEmpladoDatos(res.data);
      });
      
      axios.get(`http://54.243.192.82/api/MostrarDatosFamiliarPorEmpleado/${empleadoUno?.iDempleado}`)
      .then((res)=>{
        dispatch(getDAtosFamiliaresEmpleado(res.data))
      })        
      
      axios.get(`http://54.243.192.82/api/Documentacion/sp_DocumentacionDatosXIdEmpleado?IdEmpleado=${empleadoUno?.iDempleado}`)
      .then((res)=>{
        dispatch(documentacionDelEmpleado(res.data))
      })
      axios.get(`http://54.243.192.82/api/MostrarDatosExtras/0,${empleadoUno?.iDempleado},1,`)
      .then((res)=>{
        dispatch(addDatosExtraPorEmpleado(res.data))
      })
      handleFetch(urlDomicilios, addDomicilios);
      handleFetch(urlDocumentacionEmpleados, addDocumentacionEmpleados);
      handleFetch(urlFamiliares, addFamiliares);
      handleFetch(urlParentescos, addParentescos);

  }, [empleadoUno?.iDempleado, refetch, refetching]);


    useEffect(()=>{
      axios.get(`http://54.243.192.82/api/sp_DomiciliosDatosxIdEmpleado?IdEmpleado=${empleadoUno?.iDempleado}`)
      .then((res)=>{
        console.log(`http://54.243.192.82/api/sp_DomiciliosDatosxIdEmpleado?IdEmpleado=${empleadoUno?.iDempleado}`)
        dispatch(addOneDomicilio(res.data))
      })
    },[empleadoUno?.iDempleado, refetch])




  useEffect(() => {
    dispatch(deleteDetLic(detalleSeleccionado.idDetalleLicenciaEmpleado));
  }, [empleadoUno?.iDempleado]);

  const valueInputLegajo = useSelector(
    (state) => state.employeStates.formulario.inpurLegajoBrowser
  );
  const valueInputApellido = useSelector(
    (state) => state.employeStates.formulario.inputApellidoNombreBrowser
  );
  const url = `http://54.243.192.82/api/Empleados?page=2000&ordered=true`;
    const urlEmpleadoPorApellido = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.browser?.inputApellidoNombreBrowser ? responses?.browser?.inputApellidoNombreBrowser : null}&ordered=true`;
    const urlEmpleadoPorLegajo = `http://54.243.192.82/api/Empleados?records=10000&legajo=${responses?.browser?.inpurLegajoBrowser ? responses?.browser?.inpurLegajoBrowser : null}&ordered=true`;
    const urlEmpleadoApYLegajo = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.browser?.inputApellidoNombreBrowser ? responses?.browser.inputApellidoNombreBrowser : null}&legajo=${responses?.browser?.inpurLegajoBrowser ? responses?.browser?.inpurLegajoBrowser : null}&ordered=true`;
    const urlApeLegOrdered = `http://54.243.192.82/api/Empleados?records=10000&filter=${responses?.browser?.inputApellidoNombreBrowser ? responses?.browser?.inputApellidoNombreBrowser : null}&legajo=${responses?.browser?.inpurLegajoBrowser ? responses?.browser?.inpurLegajoBrowser : null}&ordered=true`;

    async function getEmpleados(){
      if(responses.browser.inputApellidoNombreBrowser){
        await axios({method: 'get',
                      url: urlEmpleadoPorApellido,
                      timeout: 1000}).then((res) => {
          dispatch(getEmployes(res.data.result));    
        });
        return;
      }
      else if(responses.browser.inpurLegajoBrowser){
        await axios({method: 'get',
                    url: urlEmpleadoPorLegajo,
                    timeout: 1000}).then((res) => {
          dispatch(getEmployes(res.data.result));    
        });
        return;
      }else if(responses.browser.inputApellidoNombreBrowser && responses.browser.inpurLegajoBrowser){
        await axios({method: 'get',
                    url: urlEmpleadoApYLegajo,
                    timeout: 1000}).then((res) => {
            dispatch(getEmployes(res.data.result));    
        });
        return;
      }else if(responses.browser.inputApellidoNombreBrowser && responses.browser.inpurLegajoBrowser && responses?.browser.ordered){
        await axios.get({method: 'get',
                        url: urlApeLegOrdered,
                        timeout: 1000}).then((res) => {
          dispatch(getEmployes(res.data.result));    
        });
        return;
      }else{
        await axios.get(url).then((res) => {

          dispatch(getEmployes(res.data.result));
    
        });
      }
      
    }

  

  useEffect(() => {
    getEmpleados();
    
  }, [responses?.browser?.inputApellidoNombreBrowser,responses?.browser?.inpurLegajoBrowser,responses?.browser?.ordered, saveEmpleado]);

  const idsTrabajosAnterioresDelete = useSelector((state)=> state.trabajosAnteriores.ids);
  const documentacionDelte = useSelector((state)=> state.documentacionState.ids);
  const licenciasDelete = useSelector((state)=> state.licenciasState.idsLic);
  const idDomiciliosArray = useSelector((state)=> state.domiciliosStates.idsDom);
  const arraysFamiliares = useSelector((state)=> state.familiaStates.idsFAm);
  const arrayIdsDatoExtra = useSelector((state)=> state.extrasState.idsDe);

  const urlTRabajoDelete = "http://54.243.192.82/api/TrabajosAnteriores?IdTrabajoAnterior=";
  const urlDocDelte = "http://54.243.192.82/api/EmpleadosDocumentacion/"
  const urlLicDelete = "http://54.243.192.82/api/"
    const urlEmpleadoGuarda = "http://54.243.192.82/api/Empleados/Guardar"
    const urlDOmicilioElimina = `http://54.243.192.82/api/sp_DomiciliosElimina/1?IdEmpleador=0`
  const urlDeleteFAmiliar = "http://54.243.192.82/api/EliminarFamiliarPorId/"
  const urlDatoExtraElimina = "http://54.243.192.82/api/EliminarDatosExtras/"


  const objectRequest = {
    urls : {
      urlTRabajoDelete : urlTRabajoDelete,
      urlDocDelte : urlDocDelte,
      urlLicDelete : urlLicDelete,
      urlEmpleadoGuarda : urlEmpleadoGuarda,
      urlDOmicilioElimina : urlDOmicilioElimina,
      urlDeleteFAmiliar : urlDeleteFAmiliar,
      urlDatoExtraElimina : urlDatoExtraElimina
    },
    arrays : [
      idsTrabajosAnterioresDelete,
      documentacionDelte,
      licenciasDelete,
      idDomiciliosArray,
      arraysFamiliares,
      arrayIdsDatoExtra
    ]
  }



  const { urls, arrays } = objectRequest;
  


  function cleanIdsGeneral(){
    
    
    
    Array.from(document.querySelectorAll("input[type=text]")).forEach(
      (input) => (input.value = "")
    );

    let formData = { ...responses.formDatosPersonales };

    const inputsArray = Object.entries(formData);

    const formDatosPersonale = inputsArray.map(([key]) => [key, ""]);

    const formDatosPersonales = Object.fromEntries(formDatosPersonale);
    setResponses({
      ...responses,
      formDatosPersonales})
      if(tabIndex !== 8){
        dispatch(cleanEmploye())
      }
    setDisable(true);
    dispatch(cleanIds())
    dispatch(cleanIdsDoc())
    dispatch(clearIdsLic())
    dispatch(cleanIdsDom())
    dispatch(cleanIdFam())
    dispatch(cleanIdDe())
    setValueEmpl(false)
    setRefectch(!refetch)
    dispatch(setRefetch(!refetching))
  }
  async function deleteEmploye(id){
    try{
      await axios.delete(`http://54.243.192.82/api/Empleados/${id}`)
      .then((res)=>{
        console.log(res)
        if(res.isSuccess == true || res.status === 200){
          return swal({
            title: "Ok",
            text: "Empleado Eliminado con éxito",
            icon: "success",
          });
          ;
        }else{
          return swal({
            title: "Error",
            text: "Error al eliminar el Empleado, debe eliminar sus relaciones",
            icon: "error",
          });
        }
        
      })
    }catch(err){
      console.log(err)
      return swal({
        title: "Error",
        text: "Error al eliminar el Empleado, debe eliminar sus relaciones",
        icon: "error",
      });
    }
  }
  async function deleteItems(objectRequest){
    const { urls, arrays } = objectRequest;
    let bodyPetitionEmpleadoGuarda = {
      "iDempleado": 0,
      "legajo": responses.formDatosPersonales?.numLegajo,
      "apellido":  responses.formDatosPersonales?.apellidoInput,
      "iDtipoDocumento":  responses.formDatosPersonales?.dniSelected,
      "nroDocumento":  responses.formDatosPersonales?.documentoInput,
      "cuil":  responses.formDatosPersonales?.inputCuil,
      "sexo": responses.formDatosPersonales?.inputSexo,
      "iDestadoCivil": responses.formDatosPersonales?.estadoCivilInput,
      "idNacionalidad": responses.formDatosPersonales?.nacionalidadesInput,
      "fechaNacimiento": responses.formDatosPersonales?.inputDateNac,
      "iDEstudios": responses.formDatosPersonales?.estudiosInput,
      "fechaIngreso": responses.formLiquidacion?.ingresoDateInput,
      "fechaEfectiva": responses.formLiquidacion?.inputDateEfectivo,
      "iDCategoria": responses.formLiquidacion?.inputCategoria,
      "iDCargo": responses.formLiquidacion?.inputCargo,
      "iDTareaDesempeñada": responses.formLiquidacion?.inputTareaDesempeñada,
      "idCentrodeCosto": responses.formLiquidacion?.inputCentroCosto,
      "iDSectorDpto": responses.formLiquidacion?.inputSectorDepto,
      "iDModoContratacion": responses.formLiquidacion?.inputModoCOntratacion,
      "iDModoLiquidacion": responses.formLiquidacion?.inputModoLiquidacion,
      "iDFormadePago": responses.formLiquidacion?.inputFormaDePago,
      "idBanco": responses.formLiquidacion?.inputBanco,
      "nroCtaBanco": responses.formLiquidacion?.inputNumCta,
      "cbu": responses.formLiquidacion?.inputCBU,
      "iDLugardePago": responses.formLiquidacion?.inputLugaresDePago,
      "iDAFJP": 1,
      "idObraSocial": responses.formLiquidacion?.inputObraSocial,
      "iDSindicato": responses.formLiquidacion?.sindicatosLiquidacion,
      "fechaEgreso": "2022-12-27T15:45:01.031Z",
      "iDMotivoEgreso": 4,
      "iDEsquema": responses.formLiquidacion?.selectOptionsId,
      "iDEmpleador": responses.formLiquidacion?.inputEmpleadorLiquidacion,
      "nombres": responses.formDatosPersonales?.nombresInput,
      "idEstado": responses.formDatosPersonales?.estadosEmpleados,
      "idEmpresadeTelefonia": 2,
      //"imagen": null,
      "rutaFoto": null,
      "telFijo": responses.formDatosPersonales?.telefonoInput,
      "acuerdo": 0,
      "neto": responses.formLiquidacion?.inputTotalNeto,
      "idPaisOrigen": responses.formDatosPersonales?.paisOrigenInput,
      "mail": responses.formDatosPersonales?.email,
      "telMovil": responses.formDatosPersonales?.movil,
      "tipoCuenta": responses.formLiquidacion?.inputRadioAsidePagos,
      "totalRemuneracion": responses.formLiquidacion?.inputTotalRemu,
      "totalNeto": responses.formLiquidacion?.inputTotalNeto,
      "tieneEmbargos": responses.formLiquidacion?.inputCheckEmbargo,
      "tieneSumarioAdministrativo": responses.formLiquidacion?.inputCheckSumAdministrativo,
      "tieneLicenciaSinGoceHaberes": responses.formLiquidacion?.inputCheckLicSinGoce,
      "obsEstudios": responses.formDatosPersonales?.observacionesEstudios,
      "obsFechaIngreso": responses.formDatosPersonales?.inputImagen,
      "idAgrupamiento": responses.formLiquidacion?.inputAgrupamiento,
      "idDireccion": responses.formLiquidacion?.inputDireccionLiquidacion,
      "idInstrumentoLegal": 2
    }
    let bodyPetitionEmpleadoUpdate = {
      "iDempleado": empleadoUno.iDempleado && empleadoUno.iDempleado,
      "legajo": responses.formDatosPersonales?.numLegajo ?  responses.formDatosPersonales?.numLegajo : empleadoUno.legajo,
      "apellido":  responses.formDatosPersonales?.apellidoInput ? responses.formDatosPersonales?.apellidoInput  : empleadoUno.apellido,
      "iDtipoDocumento":  responses.formDatosPersonales?.dniSelected ? responses.formDatosPersonales?.dniSelected  : empleadoUno.iDtipoDocumento,
      "nroDocumento":  responses.formDatosPersonales?.documentoInput ? responses.formDatosPersonales?.documentoInput  : empleadoUno.nroDocumento,
      "cuil":  responses.formDatosPersonales?.inputCuil ? responses.formDatosPersonales?.inputCuil  : empleadoUno.cuil,
      "sexo": responses.formDatosPersonales?.inputSexo ? responses.formDatosPersonales?.inputSexo  : empleadoUno.sexo,
      "iDestadoCivil": responses.formDatosPersonales?.estadoCivilInput ? responses.formDatosPersonales?.estadoCivilInput  : empleadoUno.iDestadoCivil,
      "idNacionalidad": responses.formDatosPersonales?.nacionalidadesInput ? responses.formDatosPersonales?.nacionalidadesInput  : empleadoUno.iDnacionalidad,
      "fechaNacimiento": responses.formDatosPersonales?.inputDateNac ? responses.formDatosPersonales?.inputDateNac  : empleadoUno.fechaNacimiento,
      "iDEstudios": responses.formDatosPersonales?.estudiosInput ?  responses.formDatosPersonales?.estudiosInput : empleadoUno.iDestudios,
      "fechaIngreso": responses.formLiquidacion?.ingresoDateInput ? responses.formLiquidacion?.ingresoDateInput  : empleadoUno.fechaIngreso,
      "fechaEfectiva": responses.formLiquidacion?.inputDateEfectivo ? responses.formLiquidacion?.inputDateEfectivo  : empleadoUno.fechaEfectiva,
      "iDCategoria": responses.formLiquidacion?.inputCategoria ?  responses.formLiquidacion?.inputCategoria : empleadoUno.iDcategoria,
      "iDCargo": responses.formLiquidacion?.inputCargo ?  responses.formLiquidacion?.inputCargo : empleadoUno.iDcargo,
      "iDTareaDesempeñada": responses.formLiquidacion?.inputTareaDesempeñada ? responses.formLiquidacion?.inputTareaDesempeñada  : empleadoUno.iDtareaDesempeñada,
      "idCentrodeCosto": responses.formLiquidacion?.inputCentroCosto ?  responses.formLiquidacion?.inputCentroCosto  : empleadoUno.idCentrodeCosto,
      "iDSectorDpto": responses.formLiquidacion?.inputSectorDepto ? responses.formLiquidacion?.inputSectorDepto  : empleadoUno.iDsectorDpto,
      "iDModoContratacion": responses.formLiquidacion?.inputModoCOntratacion ? responses.formLiquidacion?.inputModoCOntratacion  : empleadoUno.iDmodoContratacion,
      "iDModoLiquidacion": responses.formLiquidacion?.inputModoLiquidacion ? responses.formLiquidacion?.inputModoLiquidacion  : empleadoUno.iDmodoLiquidacion,
      "iDFormadePago": responses.formLiquidacion?.inputFormaDePago ? responses.formLiquidacion?.inputFormaDePago  : empleadoUno.iDformadePago,
      "idBanco": responses.formLiquidacion?.inputBanco ? responses.formLiquidacion?.inputBanco  : empleadoUno.idbanco,
      "nroCtaBanco": responses.formLiquidacion?.inputNumCta ?  responses.formLiquidacion?.inputNumCta : empleadoUno.nroCtaBanco,
      "cbu": responses.formLiquidacion?.inputCBU ? responses.formLiquidacion?.inputCBU  : empleadoUno.cbu,
      "iDLugardePago": responses.formLiquidacion?.inputLugaresDePago ? responses.formLiquidacion?.inputLugaresDePago  : empleadoUno.iDlugardePago,
      "iDAFJP": 1,
      "idObraSocial": responses.formLiquidacion?.inputObraSocial ? responses.formLiquidacion?.inputObraSocial  : empleadoUno.iDobraSocial,
      "iDSindicato": responses.formLiquidacion?.sindicatosLiquidacion ? responses.formLiquidacion?.sindicatosLiquidacion  : empleadoUno.iDsindicato,
      "fechaEgreso": "2022-12-27T15:45:01.031Z",
      "iDMotivoEgreso": 4,
      "iDEsquema": responses.formLiquidacion?.selectOptionsId ? responses.formLiquidacion?.selectOptionsId  : empleadoUno.iDesquema,
      "iDEmpleador": responses.formLiquidacion?.inputEmpleadorLiquidacion ? responses.formLiquidacion?.inputEmpleadorLiquidacion  : empleadoUno.iDempleador,
      "nombres": responses.formDatosPersonales?.nombresInput ? responses.formDatosPersonales?.nombresInput  : empleadoUno.nombres,
      "idEstado": responses.formDatosPersonales?.estadosEmpleados ? responses.formDatosPersonales?.estadosEmpleados  : empleadoUno.idEstado,
      "idEmpresadeTelefonia": 2,
      "imagen": responses.formDatosPersonales?.inputImagen ? responses.formDatosPersonales?.inputImagen  : empleadoUno.imagen,
      "rutaFoto": null,
      "telFijo": responses.formDatosPersonales?.telefonoInput ? responses.formDatosPersonales?.telefonoInput  : empleadoUno.telFijo,
      "acuerdo": 0,
      "neto": responses.formLiquidacion?.inputTotalNeto ? responses.formLiquidacion?.inputTotalNeto  : empleadoUno.neto,
      "idPaisOrigen": responses.formDatosPersonales?.paisOrigenInput ? responses.formDatosPersonales?.paisOrigenInput  : empleadoUno.idPaisOrigen,
      "mail": responses.formDatosPersonales?.email ? responses.formDatosPersonales?.email  : empleadoUno.mail,
      "telMovil": responses.formDatosPersonales?.movil ? responses.formDatosPersonales?.movil  : empleadoUno.telMovil,
      "tipoCuenta": responses.formDatosPersonales?.inputRadioAsidePagos ? responses.formDatosPersonales?.inputRadioAsidePagos  : empleadoUno.tipoCuenta,
      "totalRemuneracion": responses.formLiquidacion?.inputTotalRemu ? responses.formLiquidacion?.inputTotalRemu  : empleadoUno.totalRemuneracion,
      "totalNeto": responses.formLiquidacion?.inputTotalNeto ? responses.formLiquidacion?.inputTotalNeto   : empleadoUno.totalNeto,
      "tieneEmbargos": responses.formLiquidacion?.inputCheckEmbargo ? responses.formLiquidacion?.inputCheckEmbargo  : empleadoUno.tieneEmbargos,
      "tieneSumarioAdministrativo": responses.formLiquidacion?.inputCheckSumAdministrativo ? responses.formLiquidacion?.inputCheckSumAdministrativo  : empleadoUno.tieneSumarioAdministrativo,
      "tieneLicenciaSinGoceHaberes": responses.formLiquidacion?.inputCheckLicSinGoce ? responses.formLiquidacion?.inputCheckLicSinGoce  : empleadoUno.tieneLicenciaSinGoceHaberes,
      "obsEstudios": responses.formDatosPersonales?.observacionesEstudios ? responses.formDatosPersonales?.observacionesEstudios  : empleadoUno.obsEstudios,
      "obsFechaIngreso": responses.formDatosPersonales?.inputImage ? responses.formDatosPersonales?.inputImage : empleadoUno.obsFechaIngreso,
      "idAgrupamiento": responses.formDatosPersonales?.inputAgrupamiento ?  responses.formDatosPersonales?.inputAgrupamiento : empleadoUno.idAgrupamiento,
      "idDireccion": responses.formLiquidacion?.inputDireccionLiquidacion ? responses.formLiquidacion?.inputDireccionLiquidacion  : empleadoUno.idDireccion,
      "idInstrumentoLegal": 2
    }
    try{
     
    if(tabIndex === 0 || tabIndex === 2 || tabIndex === 8){
      if(empleadoUno.iDempleado === 0 || empleadoUno.iDempleado === undefined){
        //#region Validation alerts
       
          if(!bodyPetitionEmpleadoGuarda.legajo){
              return swal({
                title: "Error",
                text: "Debe escribir el legajo del Empleado",
                icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.apellido){
            return swal({
              title: "Error",
              text: "Debe escribir el/los Apellido/s del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.nombres){
            return swal({
              title: "Error",
              text: "Debe escribir el/los Apellido/s del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDtipoDocumento){
            return swal({
              title: "Error",
              text: "Debe seleccionar el tipo de DNI del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.nroDocumento){
            return swal({
              title: "Error",
              text: "Debe escribir el N° de DNI del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.cuil){
            return swal({
              title: "Error",
              text: "Debe escribir el N° de CUIL del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.telFijo){
            return swal({
              title: "Error",
              text: "Debe escribir el N° de Telefono del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDestadoCivil){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Estado Civil del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idNacionalidad){
            return swal({
              title: "Error",
              text: "Debe seleccionar la Nacionalidad del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idEstado){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Estado del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.sexo){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Sexo del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idPaisOrigen){
            return swal({
              title: "Error",
              text: "Debe seleccionar el País de Origen del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDEstudios){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Nivel de Estudios del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDEmpleador){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Empleador del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDCategoria){
            return swal({
              title: "Error",
              text: "Debe seleccionar la Categoría del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idAgrupamiento){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Agrupamiento del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDCargo){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Cargo del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDTareaDesempeñada){
            return swal({
              title: "Error",
              text: "Debe seleccionar la Tarea Desempeñada del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDModoContratacion){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Modo de Contratación del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDModoLiquidacion){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Modo de Liquidación del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idCentrodeCosto){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Centro de Costo del Empleado",
              icon: "error",
            })
          }
          /* if(!bodyPetitionEmpleadoGuarda.iDSectorDpto){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Sector del Empleado",
              icon: "error",
            })
          } */
          if(!bodyPetitionEmpleadoGuarda.idObraSocial){
            return swal({
              title: "Error",
              text: "Debe seleccionar la Obra Social del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDFormadePago){
            return swal({
              title: "Error",
              text: "Debe seleccionar la Forma de Pago del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.iDLugardePago){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Lugar de Pago del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.idBanco){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Banco del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.nroCtaBanco){
            return swal({
              title: "Error",
              text: "Debe escribir el N° de Cuenta del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.tipoCuenta){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Tipo de Cuenta del Empleado",
              icon: "error",
            })
          }
          if(!bodyPetitionEmpleadoGuarda.cbu){
            return swal({
              title: "Error",
              text: "Debe escribir el CBU del Empleado",
              icon: "error",
            })
          }
          if(responses.fomrLiquidacion?.inputCheckAsigna && !bodyPetitionEmpleadoGuarda.iDEsquema){
            return swal({
              title: "Error",
              text: "Debe seleccionar el Esquema del Empleado",
              icon: "error",
            })
          }
        //#endregion
      
      }else{
          //#region validation Updates
          if(!bodyPetitionEmpleadoUpdate.legajo){
            return swal({
              title: "Error",
              text: "Debe escribir el legajo del Empleado",
              icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.apellido){
          return swal({
            title: "Error",
            text: "Debe escribir el/los Apellido/s del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.nombres){
          return swal({
            title: "Error",
            text: "Debe escribir el/los Apellido/s del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDtipoDocumento){
          return swal({
            title: "Error",
            text: "Debe seleccionar el tipo de DNI del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.nroDocumento){
          return swal({
            title: "Error",
            text: "Debe escribir el N° de DNI del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.cuil){
          return swal({
            title: "Error",
            text: "Debe escribir el N° de CUIL del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDestadoCivil){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Estado Civil del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idNacionalidad){
          return swal({
            title: "Error",
            text: "Debe seleccionar la Nacionalidad del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idEstado){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Estado del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.sexo){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Sexo del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idPaisOrigen){
          return swal({
            title: "Error",
            text: "Debe seleccionar el País de Origen del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDEstudios){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Nivel de Estudios del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDEmpleador){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Empleador del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDCategoria){
          return swal({
            title: "Error",
            text: "Debe seleccionar la Categoría del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idAgrupamiento){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Agrupamiento del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDCargo){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Cargo del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDTareaDesempeñada){
          return swal({
            title: "Error",
            text: "Debe seleccionar la Tarea Desempeñada del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDModoContratacion){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Modo de Contratación del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDModoLiquidacion){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Modo de Liquidación del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idCentrodeCosto){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Centro de Costo del Empleado",
            icon: "error",
          })
        }
        /* if(!bodyPetitionEmpleadoUpdate.iDSectorDpto){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Sector del Empleado",
            icon: "error",
          })
        } */
        if(!bodyPetitionEmpleadoUpdate.idObraSocial){
          return swal({
            title: "Error",
            text: "Debe seleccionar la Obra Social del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDFormadePago){
          return swal({
            title: "Error",
            text: "Debe seleccionar la Forma de Pago del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.iDLugardePago){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Lugar de Pago del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.idBanco){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Banco del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.nroCtaBanco){
          return swal({
            title: "Error",
            text: "Debe escribir el N° de Cuenta del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.tipoCuenta){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Tipo de Cuenta del Empleado",
            icon: "error",
          })
        }
        if(!bodyPetitionEmpleadoUpdate.cbu){
          return swal({
            title: "Error",
            text: "Debe escribir el CBU del Empleado",
            icon: "error",
          })
        }
        if(responses.fomrLiquidacion?.inputCheckAsigna && !bodyPetitionEmpleadoGuarda.iDEsquema){
          return swal({
            title: "Error",
            text: "Debe seleccionar el Esquema del Empleado",
            icon: "error",
          })
        }
          //#endregion
      }
      
        
          if(empleadoUno.iDempleado === 0 || empleadoUno.iDempleado === undefined){
             await axios.post(urls.urlEmpleadoGuarda, bodyPetitionEmpleadoGuarda, {
              headers: {
                'Access-Control-Allow-Origin' : '*'
              }})
             .then((res)=>{
              setRefectch(!refetch);
              setSaveEmpleado(!saveEmpleado)
             
               swal({
                title: "Ok",
                text: "Empleado Guardado con éxito",
                icon: "success",
            })
  
             })
          }else{
            await axios.put(urls.urlEmpleadoGuarda, bodyPetitionEmpleadoUpdate)
            .then((res)=>{
          
              setRefectch(!refetch);
              setSaveEmpleado(!saveEmpleado)
               swal({
                title: "Ok",
                text: "Empleado Modificado con éxito",
                icon: "success",
            })
            })
            arrays[3].map(async (id)=>{
               
              let array = {
                "arrayList": [
                  id
                ]
              }
             
              await axios.delete(`${urls.urlDOmicilioElimina}`, {data : array, headers : {'Content-Type': 'application/json;'}})
              .then((res) => {console.log(res);setRefectch(!refetch)})
           });
          }
    }else{
      switch(urls){
        case urls.urlTRabajoDelete : {
            arrays.idsTrabajosAnterioresDelete.map(async (id)=>{
              await axios.delete(`${urls.urlTRabajoDelete}${id}`)
              .then((res) => console.log())
            })
        }
        case urls.urlDocDelte : {
          arrays.documentacionDelte.map(async (id)=>{
            await axios.delete(`${urls.urlDocDelte}${id}`)
            .then((res) =>  swal({
              title: "Ok",
              text: "Documentacion eliminada con éxito",
              icon: "success",
          }))
          })}
        case urls.urlLicDelete : {
           arrays.licenciasDelete.map(async (id)=>{
             await axios.delete(`${urls.urlLicDelete}${id}`)
             .then((res) => console.log())
          })}
        case urls.urlDOmicilioElimina : {
          arrays.idDomiciliosArray.map(async (id)=>{
            await axios.delete(`${urls.urlDOmicilioElimina}`)
            .then((res) => console.log())
          })}
          case urls.urlDeleteFAmiliar : {
            arrays.arraysFamiliares.map(async (id)=>{
              await axios.delete(`${urls.urlDeleteFAmiliar}${id}`)
              .then((res) => console.log())
            })}
            case urls.urlDatoExtraElimina : {
              arrays.arrayIdsDatoExtra.map(async (id)=>{
                await axios.delete(`${urls.urlDatoExtraElimina}${id}`)
                .then((res) => console.log())
              })
      }
        default : {
            arrays[0].map(async (id)=>{
              let array = {
                "arrayList": [
                  id
                ]
              }
              await axios.delete(`${urls.urlTRabajoDelete}${id}`, {data : array, headers : {'Content-Type': 'application/json;'}})
              .then((res) => swal({
                title: "Ok",
                text: "Trabajo Anterior eliminado con éxito",
                icon: "success",
            }))
          });
          arrays[1].map(async (id)=>{
            await axios.delete(`${urls.urlDocDelte}${id}`)
            .then((res) => { if(res.status === 200){swal({
              title: "Ok",
              text: "Documentacion eliminada con éxito",
              icon: "success",
          })}})
          });
          arrays[2].map(async (id)=>{
            let array = {
              "arrayList": [
                id
              ]
            }
           
            try{
              await axios.delete(`${urls.urlLicDelete}0`, {data : array, headers : {'Content-Type': 'application/json;'}})
            .then((res) => {
                  
                  if(res.status === 200){
                  return swal({
                    title: "Ok",
                    text: "Licencia eliminada con éxito",
                    icon: "success",
                })
                }                
              }  
            )
            }catch(err){
              setRefectch(!refetch);
              return swal({
                title: "Error",
                text: "No se puede elimiar una Licencia que tiene asignado un Detalle",
                icon: "error",
            })
            }
            
         });
            arrays[4].map(async (id)=>{    
              await axios.delete(`${urls.urlDeleteFAmiliar}${id}`)
              .then((res) => {
                if(res.status === 200){
                swal({
                  title: "Ok",
                  text: "Familiar eliminado con éxito",
                  icon: "success",
              })
              }} )
          });
            arrays[5].map(async (id)=>{    
              await axios.delete(`${urls.urlDatoExtraElimina}${id}`)
              .then((res) => {if(res.status === 200){
                swal({
                  title: "Ok",
                  text: "Dato Extra eliminado con éxito",
                  icon: "success",
              })
              }} )
          });
        }
      }
    }
       
    }catch(err){
        //codigo de error
        swal({
            title: "Error",
            text: "Error al guardar/actualizar el empleado",
            icon: "error",
        })
    }
}
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3">
          <Browser deleteEmploye={deleteEmploye} setRefectch={setRefectch} refetch={refetch} disable={disable} setDisable={setDisable} setValueEmpl={setValueEmpl} responses={responses} setResponses={setResponses} />
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 ">
          <Navbar handleTabChange={handleTabChange} tabIndex={tabIndex} />
          {(tabIndex === 0 || tabIndex === 8) && (
            <DatosPersonales
              empleados={empleados}
              disableEstado={disableEstado}
              image={image}
              disable={disable}
              setDisable={setDisable}
              responses={responses}
              setResponses={setResponses}
              valueempl ={valueempl}
              domiciliosEmpleados={domiciliosEmpleados}
              setRefectch={setRefectch}
              refetch={refetch}
              handleTabChange={handleTabChange}
              tabIndex={tabIndex}
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
        <button className="btn btn-danger  btnEmpl" onClick={()=> cleanIdsGeneral()}>
          Cancelar
        </button>
        <button className="btn btn-success btnEmpl" onClick={()=> deleteItems( objectRequest)}>Aceptar</button>
      </div>
      <Footer />
    </div>
  );
};
export default Empleados;
