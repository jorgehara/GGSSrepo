//#region -----------------------------------------------------------------------IMPORTS
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import ButtonCallModal from '../Buttons/ButtonCallModal'
import BasicModal from '../Modals/BasicModal/BasicModal'
import ModalPDLB from '../Modals/ModalPDLB/ModalPDLB'
import ModalEmpleadores from '../Modals/ModalEmpleadores/ModalEmpleadores'

// ------------------------ OBJECTS ------------------------
import { objectParentescos, objectCategorias, inputsNumCategorias, objectConvenios, inputsNumConvenios, inputNumDataValores, tableValoresHeadings, inputNumDataEscala, inputDateDataEscala, inputNumDataDeducciones, inputDateDataDeducciones, objectBancos, objectEmpresasTelefonia, objectSindicatos, objectTareas, objectEstadosCiviles, objectEstudios, objectTipoDocumento, objectEstado, objectFormasDePago, objectMotivosEgreso, objectCalles, objectPaises, objectModosLiquidacion, objectModosContratacion, objectCargos, objectObrasSociales, objectAFJP, objectCentrosCosto, objectSectoresDptos, objectDirecciones, objectLugaresPago, objectDocumentacion, tableReduccionHeadings, tableConvenios, tableJerarquia, tableLicencias, inputsNumLicencias, objectAlicuotas, checkboxParentescos, checkboxNumParentescos, textAreaObject, textAreaCargos, inputVtoObject } from './Objects'
// -----------------------------------------------------------
import { employeContext } from '../../context/employeContext';
import ModalTable from '../Modals/ModalTable/ModalTable';
import ModalEscala from '../Modals/ModalEscala/ModalEscala';
import ModalConvenios from '../Modals/ModalConvenios/ModalConvenios';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addEstadosCiviles, addEstados, addPaises, addEstudios, addTiposDocumento, addCargos, addTareasDesempeñadas, addParentescos, addFormasPago, addModosContratacion, addModosLiquidacion, addEmpleadores, addDomicilios, addCalles, addDepartamentos, addBarrios, addProvincias, addLocalidades, addNewEstadoCivil, addNewEstudio, getIdEstadoCivil, deleteEstadoCivil, getIdEstudio, deleteEstudio, addNewTipoDoc, deleteTipoDoc, getIdTipoDoc, putEstadoCivil, putEstudio, putTipoDoc, addNewParentesco, deleteParentesco, putParentesco, getIdParentesco, addNewEstado, deleteEstado, putEstado, getIdEstado, addNewFormaPago, deleteFormaPago, putFormaPago, getIdFormaPago, addNewCargo, deleteCargo, putCargo, getIdCargo, addNewTarea, deleteTarea, putTarea, getIdTarea, addNewModoLiq, deleteModoLiq, putModoLiq, getIdModoLiq, addNewModoCont, deleteModoCont, putModoCont, getIdModoCont } from '../../redux/actions/fetchActions';
import { useEffect } from 'react';
import { addSelectedBanco, addSelectedCargo, addSelectedEstado, addSelectedEstadoCivil, addSelectedEstudio, addSelectedFormaPago, addSelectedModoLiq, addSelectedParentesco, addSelectedTarea, addSelectedTipoDocu } from '../../redux/actions/modalesActions';
import swal from "sweetalert";


// import { getEstadosCivilesModal } from '../../services/fetchAPI';
// import { useEffect } from 'react';
//#endregion



const Navbar = () => {

	const dispatch = useDispatch();

	const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles"
	const urlEstudios = "http://54.243.192.82/api/Estudios"
	const urlTiposDocumento = "http://54.243.192.82/api/TiposDocumento"
	const urlParentescos = "http://54.243.192.82/api/Parentescos"
	const urlEstados = "http://54.243.192.82/api/Estados"
	const urlCargos = "http://54.243.192.82/api/Cargos"
	const urlTareas = "http://54.243.192.82/api/TareasDesempeñadas"
	const urlFormasPago = "http://54.243.192.82/api/FormasdePagos"
	const urlModosContratacion = "http://54.243.192.82/api/ModosContratacion"
	const urlModosLiquidacion = "http://54.243.192.82/api/ModosLiquidacion"
	const urlPaises = "http://54.243.192.82/api/Paises"
	const urlProvincias = "http://54.243.192.82/api/Provincias"
	const urlDepartamentos = "http://54.243.192.82/api/Departamentos"
	const urlLocalidades = "http://54.243.192.82/api/Localidades"
	const urlBarrios = "http://54.243.192.82/api/Barrios"
	const urlCalles = "http://54.243.192.82/api/Calles"
	const urlEmpleadores = "http://54.243.192.82/api/Empleadores"

	// liquidación
	const urlBancos = "http://54.243.192.82/api/Bancos"
	const urlObrasSociales = "http://54.243.192.82/api/ObrasSociales"
	const urlCentrosCostos = "http://54.243.192.82/api/CentrosDeCostos"


	const handleFetch = (url, action) => {
		dispatch({ type: SET_LOADING });
		axios.get(url)
			.then((res) => {
				dispatch(action(res.data.result));
			})
			.catch((err) => {
				dispatch({ type: AXIOS_ERROR });
			})
	}

	const [refetch, setRefetch] = useState(true); // estado para recargar cada vez que se ejecute un post/put/delete


	useEffect(() => {
		handleFetch(urlEstadosCiviles, addEstadosCiviles)
		handleFetch(urlEstudios, addEstudios)
		handleFetch(urlTiposDocumento, addTiposDocumento)
		handleFetch(urlParentescos, addParentescos)
		handleFetch(urlEstados, addEstados)
		handleFetch(urlCargos, addCargos)
		handleFetch(urlTareas, addTareasDesempeñadas)
		handleFetch(urlFormasPago, addFormasPago)
		handleFetch(urlModosContratacion, addModosContratacion)
		handleFetch(urlModosLiquidacion, addModosLiquidacion)
		handleFetch(urlPaises, addPaises)
		handleFetch(urlProvincias, addProvincias)
		handleFetch(urlDepartamentos, addDepartamentos)
		handleFetch(urlLocalidades, addLocalidades)
		handleFetch(urlBarrios, addBarrios)
		handleFetch(urlCalles, addCalles)
		handleFetch(urlEmpleadores, addEmpleadores)

	}, [refetch])


	// ESTADOS QUE GUARDAN EL VALOR DE LOS INPUTS
	const [responses, setResponses] = useState({});
	const [modalDataInputs, setModalDataInputs] = useState(responses["modalDataInputs"])

	function onChangeValues(e, key) {
		const newResponse = { ...modalDataInputs }
		newResponse[key] = e
		setModalDataInputs({
			...newResponse
		})
	}


	useEffect(() => {
		setResponses({
			...responses,
			modalDataInputs
		});
		console.log(responses)
		console.log(modalDataInputs)
	}, [modalDataInputs]);

	// ------- GET DE LOS ENDPOINTS (PARA EMPLEADOS) -----

	//Estados Civiles
	const estadosCivilesValue = useSelector((state) => state.generalState.estadosCiviles);
	const estadoCivilSelected = useSelector((state) => state.modalState.estadoCivilSelected);
	const inputMascEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModal);
	const inputFemEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModalFem);
	const valueIdEstadoCivil = useSelector((state) => state.generalState.idEstadoCivil);

	// Estudios
	const estudiosValue = useSelector((state) => state.generalState.estudios)
	const estudioSelected = useSelector((state) => state.modalState.estudioSelected);
	const inputNivelEstudio = useSelector((state) => state.modalState.formulario.inputNivelEstudio)
	const valueIdEstudio = useSelector((state) => state.generalState.idEstudio);

	// Tipos de documento
	const tiposDocumentoValue = useSelector((state) => state.generalState.tiposDocumento)
	const tipoDocumentoSelected = useSelector((state) => state.modalState.tipoDocumentoSelected)
	const inputTipoDocumento = useSelector((state) => state.modalState.formulario.inputTipoDocumento)
	const valueIdTipoDoc = useSelector((state) => state.generalState.idTipoDoc)

	// Parentescos
	const parentescosValue = useSelector((state) => state.generalState.parentescos)
	const parentescoSelected = useSelector((state) => state.modalState.parentescoSelected)
	const inputParentesco = useSelector((state) => state.modalState.formulario.inputParentesco)
	const inputAsignacionParent = useSelector((state) => state.modalState.formulario.inputAsignacionParent)
	const inputGananciaParent = useSelector((state) => state.modalState.formulario.inputGananciaParent)
	const inputImporteParent = useSelector((state) => state.modalState.formulario.inputImporteParent)
	const textAreaParent = useSelector((state) => state.modalState.formulario.textAreaParent)
	const valueIdParentesco = useSelector((state) => state.generalState.idParentesco)

	// estados para los empleados
	const estadosValue = useSelector((state) => state.generalState.estados)
	const estadoSelected = useSelector((state) => state.modalState.estadoSelected)
	const inputEstado = useSelector((state) => state.modalState.formulario.inputEstado)
	const valueIdEstado = useSelector((state) => state.generalState.idEstado)

	// formas de pago
	const formasPagoValue = useSelector((state) => state.generalState.formasDePago)
	const formaPagoSelected = useSelector((state) => state.modalState.formaPagoSelected)
	const inputFormaDePago = useSelector((state) => state.modalState.formulario.inputFormaDePago)
	const textAreaFormaPago = useSelector((state) => state.modalState.formulario.textAreaFormaPago)
	const valueIdFormaPago = useSelector((state) => state.generalState.idFormaPago)

	// cargos
	const cargosValue = useSelector((state) => state.generalState.cargos)
	const cargoSelected = useSelector((state) => state.modalState.cargoSelected)
	const inputCargo = useSelector((state) => state.modalState.formulario.inputCargo)
	const textAreaCargo = useSelector((state) => state.modalState.formulario.textAreaCargo)
	const valueIdCargo = useSelector((state) => state.generalState.idCargo)

	// tareas desempeñadas
	const tareasValue = useSelector((state) => state.generalState.tareasDesempeñadas)
	const tareaSelected = useSelector((state) => state.modalState.tareaSelected)
	const inputTarea = useSelector((state) => state.modalState.formulario.inputTarea)
	const textAreaTarea = useSelector((state) => state.modalState.formulario.textAreaTarea)
	const valueIdTarea = useSelector((state) => state.generalState.idTarea)

	// modos de contratación
	const modosContValue = useSelector((state) => state.generalState.modosContratacion)
	const modoContSelected = useSelector((state) => state.modalState.modoContSelected)
	const inputModoCont = useSelector((state) => state.modalState.formulario.inputModoCont)
	const inputVtoModoCont = useSelector((state) => state.modalState.formulario.inputVtoModoCont)
	const valueIdModoCont = useSelector((state) => state.generalState.idModoCont)

	// modos de liquidación
	const modosLiqValue = useSelector((state) => state.generalState.modosLiquidacion)
	const modoLiqSelected = useSelector((state) => state.modalState.modoLiqSelected)
	const inputModoLiquidacion = useSelector((state) => state.modalState.formulario.inputModoLiquidacion)
	const textAreaModoLiq = useSelector((state) => state.modalState.formulario.textAreaModoLiq)
	const valueIdModoLiq = useSelector((state) => state.generalState.idModoLiq)

	// // provincias
	// const provinciasValue = useSelector((state) => state.generalState.provincias)
	// const provinciaSelected = useSelector((state) => state.modalState.provinciaSelected)
	// const inputProvincia = useSelector((state) => state.modalState.formulario.inputProvincia)
	// const textAreaProvincia = useSelector((state) => state.modalState.formulario.textAreaProvincia)
	// const valueIdProvincia = useSelector((state) => state.generalState.idProvincia) 

	// // departamentos
	// const deptosValue = useSelector((state) => state.generalState.departamentos)
	// const deptoSelected = useSelector((state) => state.modalState.deptoSelected)
	// const inputDepto = useSelector((state) => state.modalState.formulario.inputDepto)
	// const textAreaDeptos = useSelector((state) => state.modalState.formulario.textAreaDeptos)
	// const valueIdDeptos = useSelector((state) => state.generalState.idDepto) 

	// // localidades
	// const localidadesValue = useSelector((state) => state.generalState.localidades)
	// const localidadSelected = useSelector((state) => state.modalState.localidadSelected)
	// const inputLocalidad = useSelector((state) => state.modalState.formulario.inputLocalidad)
	// const textAreaLocalidades = useSelector((state) => state.modalState.formulario.textAreaLocalidades)
	// const valueIdLocalidades = useSelector((state) => state.generalState.idLocalidad) 

	// // barrios
	// const barriosValue = useSelector((state) => state.generalState.barrios)
	// const barrioSelected = useSelector((state) => state.modalState.barrioSelected)
	// const inputBarrio = useSelector((state) => state.modalState.formulario.inputBarrio)
	// const textAreaBarrios = useSelector((state) => state.modalState.formulario.textAreaBarrios)
	// const valueIdBarrios = useSelector((state) => state.generalState.idBarrio) 

	// ------- GET DE LOS ENDPOINTS (PARA LIQUIDACIÓN)  NO VAN POR AHORA  -----

	// bancos
	const bancosValue = useSelector((state) => state.generalState.bancos)
	const bancoSelected = useSelector((state) => state.modalState.bancoSelected)
	const inputBanco = useSelector((state) => state.modalState.formulario.inputBanco)
	const textAreaBanco = useSelector((state) => state.modalState.formulario.textAreaBanco)
	const valueIdBanco = useSelector((state) => state.generalState.idBanco)

	// sindicatos
	const sindicatosValue = useSelector((state) => state.generalState.sindicatos)
	const sindicatoSelected = useSelector((state) => state.modalState.sindicatoSelected)
	const inputSindicato = useSelector((state) => state.modalState.formulario.inputSindicato)
	const inputAbreviaturaSindicato = useSelector((state) => state.modalState.formulario.inputAbreviaturaSindicato)
	const textAreaSindicato = useSelector((state) => state.modalState.formulario.textAreaSindicato)
	const valueIdSindicato = useSelector((state) => state.generalState.idSindicato)

	// centros de costos
	const centrosCostosValue = useSelector((state) => state.generalState.centrosCosto)
	const centroCostoSelected = useSelector((state) => state.modalState.centroCostoSelected)
	const inputCentroCosto = useSelector((state) => state.modalState.formulario.inputCentroCosto)
	const textAreaCentroCosto = useSelector((state) => state.modalState.formulario.textAreaCentroCosto)
	const valueIdCentroCosto = useSelector((state) => state.generalState.idCentroCosto)


	// ----------------------------------- ID & PETITION  -----------------------------------
	//Estados Civiles
	const idEstadoCivil = ((estadosCivilesValue && estadosCivilesValue[estadosCivilesValue.length - 1] !== undefined && (estadosCivilesValue[estadosCivilesValue.length - 1].idEstadoCivil)) + 1)
	const bodyPetitionEC = { ...responses.modalDataInputs, idEstadoCivil: idEstadoCivil };
	//Estudios
	const idEstudio = ((estudiosValue && estudiosValue[estudiosValue.length - 1] !== undefined && (estudiosValue[estudiosValue.length - 1].iDestudios)) + 1)
	const bodyPetEstudio = { ...responses.modalDataInputs, iDestudios: idEstudio }
	//Tipos de documento
	const idTiposDocumento = ((tiposDocumentoValue && tiposDocumentoValue[tiposDocumentoValue.length - 1] !== undefined && (tiposDocumentoValue[tiposDocumentoValue.length - 1].iDtipoDocumento)) + 1)
	const bodyPetTiposDoc = { ...responses.modalDataInputs, iDtipoDocumento: idTiposDocumento }
	//Parentescos
	const idParentesco = ((parentescosValue && parentescosValue[parentescosValue.length - 1] !== undefined && (parentescosValue[parentescosValue.length - 1].iDparentesco)) + 1)
	const bodyPetParentescos = {
		"iDparentesco": idParentesco,
		"nombreParentesco": responses.modalDataInputs?.nombreParentesco,
		"generaAsignacion": responses.modalDataInputs?.generaAsignacion,
		"obs": responses.modalDataInputs?.obs,
		"deduceGanancias": responses.modalDataInputs?.deduceGanancias,
		"importeDeduce": responses.modalDataInputs?.importeDeduce
	}

	// estados para los empleados
	const idEstado = ((estadosValue && estadosValue[estadosValue.length - 1] !== undefined && (estadosValue[estadosValue.length - 1].idEstado)) + 1)
	const bodyPetEstados = { ...responses.modalDataInputs, idEstado: idEstado }
	// formas de pago
	const idFormaPago = ((formasPagoValue && formasPagoValue[formasPagoValue.length - 1] !== undefined && (formasPagoValue[formasPagoValue.length - 1].iDformadePago)) + 1)
	const bodyPetFormasPago = {
		"iDformadePago": idFormaPago,
		"nombreFormadePago": responses.modalDataInputs?.nombreFormadePago,
		"obs": responses.modalDataInputs?.obs
	}

	// cargos
	const idCargo = ((cargosValue && cargosValue[cargosValue.length - 1] !== undefined && (cargosValue[cargosValue.length - 1].iDcargo)) + 1)
	const bodyPetCargos = {
		"iDcargo": idCargo,
		"nombreCargo": responses.modalDataInputs?.nombreCargo,
		"observacion": responses.modalDataInputs?.observacion
	}

	// tareas desempeñadas
	const idTarea = ((tareasValue && tareasValue[tareasValue.length - 1] !== undefined && (tareasValue[tareasValue.length - 1].idTareaDesempeñada)) + 1)
	const bodyPetTareas = {
		"idTareaDesempeñada": idTarea,
		"tareaDesempeñada": responses.modalDataInputs?.tareaDesempeñada,
		"obs": responses.modalDataInputs?.obs
	}

	// modos de contratación
	const idModoCont = ((modosContValue && modosContValue[modosContValue.length - 1] !== undefined && (modosContValue[modosContValue.length - 1].iDmodoContratacion)) + 1)
	const bodyPetModosCont = {
		"iDmodoContratacion": idModoCont,
		"modoContratacion": responses.modalDataInputs?.modoContratacion,
		"fechaVto": responses.modalDataInputs?.fechaVto
	}

	// modos de liquidación
	const idModoLiq = ((modosLiqValue && modosLiqValue[modosLiqValue.length - 1] !== undefined && (modosLiqValue[modosLiqValue.length - 1].iDmodoLiquidacion)) + 1)
	const bodyPetModosLiq = {
		"iDmodoLiquidacion": idModoLiq,
		"modoLiquidacion": responses.modalDataInputs?.modoLiquidacion,
		"obs": responses.modalDataInputs?.obs
	}





	// PARA LIQUIDACION (NO VAN) ----------------------------------------
	// bancos
	const idBanco = ((bancosValue && bancosValue[bancosValue.length - 1] !== undefined && (bancosValue[bancosValue.length - 1].idBanco)) + 1)
	const bodyPetBancos = {
		"idBanco": idBanco,
		"nombreBanco": responses.modalDataInputs?.nombreBanco,
		"obs": responses.modalDataInputs?.obs
	}

	// sindicatos
	const idSindicato = ((sindicatosValue && sindicatosValue[sindicatosValue.length - 1] !== undefined && (sindicatosValue[sindicatosValue.length - 1].idSindicato)) + 1)
	const bodyPetSindicatos = {
		"idSindicato": idSindicato,
		"nombreSindicato": responses.modalDataInputs?.nombreSindicato,
		"abreviaturaSigla": responses.modalDataInputs?.abreviaturaSigla,
		"obs": responses.modalDataInputs?.obs
	}

	// centros de costo
	const idCentroCosto = ((centrosCostosValue && centrosCostosValue[centrosCostosValue.length - 1] !== undefined && (centrosCostosValue[centrosCostosValue.length - 1].idCentrodeCosto)) + 1)
	const bodyPetCentrosCosto = {
		"idCentrodeCosto": idCentroCosto,
		"centrodeCosto": responses.modalDataInputs?.centrodeCosto,
		"obs": responses.modalDataInputs?.obs
	}

	// --------------------------------------------------------------------------------------------------------------------------------------

	return (
		<nav className="row gy-3 navbar navbar-expand-lg navbar-light bg-light col-sm-12">
			<div className="container-sm">
				<button className="navbar-toggler" type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className=" navbar-nav">
							<li className=" nav-item dropdown">
								<a className="  nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Empleados
								</a>
								<ul className=" dropdown-menu">
									<li><Link className="dropdown-item" to="/home">Ficha Empleados</Link></li>
									<li><Link className="dropdown-item" to="#">Busqueda de Datos</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Liquidación</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Esquemas y Conceptos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Períodos</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Tabla de Datos
								</a>

								<ul className="dropdown-menu">
									<li class="dropdown-submenu">
										<a className='dropdown-item' tabindex="-1" href="#">Para Empleados</a>
										<ul class="dropdown-menu">
											<div className="datosEmpleados" style={{ fontSize: "13px" }}>
												<ButtonCallModal idModal="EstadoCivil" nameButton="Estados Civiles" useNavbar={true} />
												<ButtonCallModal idModal="Estudios" nameButton="Estudios" useNavbar={true} />
												<ButtonCallModal idModal="TipoDocumento" nameButton="Tipo de Documento" useNavbar={true} />
												<ButtonCallModal idModal="Parentescos" nameButton="Parentescos" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="estadosEmpleados" nameButton="Estados para empleados" useNavbar={true} />
												<ButtonCallModal idModal="cargos" nameButton="Cargos" useNavbar={true} />
												<ButtonCallModal idModal="tareasDesempeñadas" nameButton="Tareas Desempeñadas" useNavbar={true} />
												<ButtonCallModal idModal="formasDePago" nameButton="Formas de Pago" useNavbar={true} />
												<ButtonCallModal idModal="modosDeContratacion" nameButton="Modos de Contratación" useNavbar={true} />
												<ButtonCallModal idModal="modosDeLiquidacion" nameButton="Modos de Liquidacion" useNavbar={true} />
												<ButtonCallModal idModal="motivosEgreso" nameButton="Motivos de Egreso" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="paises" nameButton="Paises" useNavbar={true} />
												<ButtonCallModal idModal="pdlb" nameButton="Provincias - Departamentos - Localidades - Barrios" useNavbar={true} />
												<ButtonCallModal idModal="calles" nameButton="Calles" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="empleadores" nameButton="Empleadores" useNavbar={true} />
												<ButtonCallModal idModal="alicuotas" nameButton="Alicuotas" useNavbar={true} />
											</div>
										</ul>
									</li>

									<hr />
									<li class="dropdown-submenu">
										<a className='dropdown-item' tabindex="-1" href="#">Para Liquidación</a>
										<ul class="dropdown-menu">
											<div className="datosLiquidacion" style={{ fontSize: "13px" }}>
												<ButtonCallModal idModal="Bancos" nameButton="Bancos" useNavbar={true} />
												<ButtonCallModal idModal="Telefonia" nameButton="Empresas de telefonia celular" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Sindicatos" nameButton="Sindicatos" useNavbar={true} />
												<ButtonCallModal idModal="ObrasSociales" nameButton="Obras Sociales" useNavbar={true} />
												<ButtonCallModal idModal="AFJP" nameButton="A.F.J.P" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="CentrosCosto" nameButton="Centros de Costo" useNavbar={true} />
												<ButtonCallModal idModal="SectoresDeptos" nameButton="Sectores/Departamentos" useNavbar={true} />
												<ButtonCallModal idModal="Direcciones" nameButton="Direcciones" useNavbar={true} />
												<ButtonCallModal idModal="LugaresPago" nameButton="Lugares de Pago" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Documentacion" nameButton="Documentación que presentan los empleados" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Reduccion" nameButton="Reducción de Deducciones de Ganancias" useNavbar={true} />
												<ButtonCallModal idModal="Escala" nameButton="Escala de Ganancias" useNavbar={true} />
												<ButtonCallModal idModal="Deducciones" nameButton="Deducciones de Ganancias" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Valores" nameButton="Valores Permanencia Categoría" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Convenios" nameButton="Convenios, Categorías, Básicos y Antigüedad" useNavbar={true} />
												<ButtonCallModal idModal="Jerarquia" nameButton="Jerarquía de Categorías" useNavbar={true} />
												<ButtonCallModal idModal="Licencias" nameButton="Licencias por Antigüedad" useNavbar={true} />
												<hr />
												<ButtonCallModal idModal="Plan" nameButton="Plan de Cuentas" useNavbar={true} />
											</div>
										</ul>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Informes y Listados</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Parámetros</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Acerca de...</a>
							</li>

							{/* {/ MODALES TABLA PARA EMPLEADOS /} */}
							<BasicModal
								idModal="EstadoCivil"
								nameModal="Estados Civiles"
								placeholder={objectEstadosCiviles}
								array={estadosCivilesValue && estadosCivilesValue}
								propArrayOp="masculino" propArrayId="idEstadoCivil"
								action={addSelectedEstadoCivil}
								opcionSelected={estadoCivilSelected}
								inputIdCompare="masculino"
								firstOptionCompare={inputMascEstadosCiviles ? inputMascEstadosCiviles : estadoCivilSelected.masculino}
								secondOptionCompare={inputFemEstadosCiviles ? inputFemEstadosCiviles : estadoCivilSelected.femenino}
								urlApi={urlEstadosCiviles}
								dispatchAddAction={addNewEstadoCivil}
								dispatchDeleteAction={deleteEstadoCivil}
								dispatchPutAction={putEstadoCivil}
								dispatchGetID={getIdEstadoCivil}
								bodyPet={bodyPetitionEC}
								idApi={valueIdEstadoCivil}
								resp={responses}
								onChange={onChangeValues}
								refetch={refetch}
								setRefetch={setRefetch}
							/>

							<BasicModal
								idModal="Estudios"
								nameModal="Estudios"
								placeholder={objectEstudios}
								array={estudiosValue && estudiosValue}
								propArrayOp="estudiosNivel" propArrayId="iDestudios"
								action={addSelectedEstudio}
								opcionSelected={estudioSelected}
								inputIdCompare="estudiosNivel"
								firstOptionCompare={inputNivelEstudio ? inputNivelEstudio : estudioSelected.estudiosNivel}
								secondOptionCompare={inputNivelEstudio ? inputNivelEstudio : estudioSelected.estudiosNivel}
								urlApi={urlEstudios}
								dispatchAddAction={addNewEstudio}
								dispatchDeleteAction={deleteEstudio}
								dispatchPutAction={putEstudio}
								dispatchGetID={getIdEstudio}
								bodyPet={bodyPetEstudio}
								idApi={valueIdEstudio}
								resp={responses}
								onChange={onChangeValues}
								refetch={refetch}
								setRefetch={setRefetch}
							/>

							<BasicModal
								idModal="TipoDocumento"
								nameModal="Tipo de Documento"
								placeholder={objectTipoDocumento}
								array={tiposDocumentoValue && tiposDocumentoValue}
								propArrayOp="tipoDocumento" propArrayId="iDtipoDocumento"
								action={addSelectedTipoDocu}
								opcionSelected={tipoDocumentoSelected}
								inputIdCompare="tipoDocumento"
								firstOptionCompare={inputTipoDocumento ? inputTipoDocumento : tipoDocumentoSelected.tipoDocumento}
								secondOptionCompare={inputTipoDocumento ? inputTipoDocumento : tipoDocumentoSelected.tipoDocumento}
								urlApi={urlTiposDocumento}
								dispatchAddAction={addNewTipoDoc}
								dispatchDeleteAction={deleteTipoDoc}
								dispatchPutAction={putTipoDoc}
								dispatchGetID={getIdTipoDoc}
								bodyPet={bodyPetTiposDoc}
								idApi={valueIdTipoDoc}
								resp={responses}
								onChange={onChangeValues}
								refetch={refetch}
								setRefetch={setRefetch}
							/>

							<BasicModal
								idModal="Parentescos"
								nameModal="Parentescos"
								placeholder={objectParentescos}
								checkboxObject={checkboxParentescos}
								checkboxNumObject={checkboxNumParentescos}
								textArea={true}
								textAreaObject={textAreaObject}
								hasCheckbox={true}
								hasCheckBoxNum={true}
								array={parentescosValue && parentescosValue}
								propArrayOp="nombreParentesco" propArrayId="iDparentesco"
								action={addSelectedParentesco}
								opcionSelected={parentescoSelected}
								urlApi={urlParentescos}
								inputIdCompare="nombreParentesco"
								firstOptionCompare={inputParentesco ? inputParentesco : parentescoSelected.nombreParentesco}
								secondOptionCompare={inputParentesco ? inputParentesco : parentescoSelected.nombreParentesco}
								valueObs={textAreaParent ? textAreaParent : parentescoSelected.obs}
								valueCheckbox={inputAsignacionParent ? inputAsignacionParent : parentescoSelected.generaAsignacion}
								valueCheckboxNum={inputGananciaParent ? inputGananciaParent : parentescoSelected.deduceGanancias}
								valueNumCheck={inputImporteParent ? inputImporteParent : parentescoSelected.importeDeduce}
								dispatchAddAction={addNewParentesco}
								dispatchDeleteAction={deleteParentesco}
								dispatchPutAction={putParentesco}
								dispatchGetID={getIdParentesco}
								bodyPet={bodyPetParentescos}
								idApi={valueIdParentesco}
								onChange={onChangeValues}
								refetch={refetch}
								setRefetch={setRefetch}
								resp={responses}

							/>
							<BasicModal
								idModal="estadosEmpleados"
								nameModal="Estados para empleados"
								placeholder={objectEstado}
								array={estadosValue && estadosValue}
								propArrayOp="nombreEstado" propArrayId="idEstado"
								action={addSelectedEstado}
								opcionSelected={estadoSelected}
								urlApi={urlEstados}
								inputIdCompare="nombreEstado"
								firstOptionCompare={inputEstado ? inputEstado : estadoSelected.nombreEstado}
								secondOptionCompare={inputEstado ? inputEstado : estadoSelected.nombreEstado}
								dispatchAddAction={addNewEstado}
								dispatchDeleteAction={deleteEstado}
								dispatchPutAction={putEstado}
								dispatchGetID={getIdEstado}
								bodyPet={bodyPetEstados}
								idApi={valueIdEstado}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}

							/>

							<BasicModal
								idModal="formasDePago"
								nameModal="Formas de Pago"
								placeholder={objectFormasDePago}
								textArea={true}
								textAreaObject={textAreaObject}
								array={formasPagoValue && formasPagoValue}
								propArrayOp="nombreFormadePago" propArrayId="iDformadePago"
								action={addSelectedFormaPago}
								opcionSelected={formaPagoSelected}
								urlApi={urlFormasPago}
								inputIdCompare="nombreFormadePago"
								firstOptionCompare={inputFormaDePago ? inputFormaDePago : formaPagoSelected.nombreFormadePago}
								secondOptionCompare={inputFormaDePago ? inputFormaDePago : formaPagoSelected.nombreFormadePago}
								valueObs={textAreaFormaPago ? textAreaFormaPago : formaPagoSelected.obs}
								dispatchAddAction={addNewFormaPago}
								dispatchDeleteAction={deleteFormaPago}
								dispatchPutAction={putFormaPago}
								dispatchGetID={getIdFormaPago}
								bodyPet={bodyPetFormasPago}
								idApi={valueIdFormaPago}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
							/>


							<BasicModal
								idModal="cargos"
								nameModal="Cargos"
								placeholder={objectCargos}
								// dropdown={true}
								textArea={true}
								textAreaObject={textAreaCargos}
								array={cargosValue && cargosValue}
								propArrayOp="nombreCargo" propArrayId="iDcargo"
								action={addSelectedCargo}
								opcionSelected={cargoSelected}
								urlApi={urlCargos}
								inputIdCompare="nombreCargo"
								firstOptionCompare={inputCargo ? inputCargo : cargoSelected.nombreCargo}
								secondOptionCompare={inputCargo ? inputCargo : cargoSelected.nombreCargo}
								valueObs={textAreaCargo ? textAreaCargo : cargoSelected.observacion}
								dispatchAddAction={addNewCargo}
								dispatchDeleteAction={deleteCargo}
								dispatchPutAction={putCargo}
								dispatchGetID={getIdCargo}
								bodyPet={bodyPetCargos}
								idApi={valueIdCargo}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
							/>
							<BasicModal
								idModal="tareasDesempeñadas"
								nameModal="Tareas Desempeñadas"
								placeholder={objectTareas}
								// dropdown={true}
								textArea={true}
								textAreaObject={textAreaObject}
								array={tareasValue && tareasValue}
								propArrayOp="tareaDesempeñada" propArrayId="idTareaDesempeñada"
								action={addSelectedTarea}
								opcionSelected={tareaSelected}
								urlApi={urlTareas}
								inputIdCompare="tareaDesempeñada"
								firstOptionCompare={inputTarea ? inputTarea : tareaSelected.tareaDesempeñada}
								secondOptionCompare={inputTarea ? inputTarea : tareaSelected.tareaDesempeñada}
								valueObs={textAreaTarea ? textAreaTarea : tareaSelected.obs}
								dispatchAddAction={addNewTarea}
								dispatchDeleteAction={deleteTarea}
								dispatchPutAction={putTarea}
								dispatchGetID={getIdTarea}
								bodyPet={bodyPetTareas}
								idApi={valueIdTarea}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
							/>

							<BasicModal
								idModal="modosDeContratacion"
								nameModal="Modos de Contratacion"
								placeholder={objectModosContratacion}
								// dropdown={true}
								inputDate={true}
								inputVtoObject={inputVtoObject}
								valueInputDate={inputVtoModoCont ? inputVtoModoCont : modoContSelected.fechaVto}
								array={modosContValue && modosContValue}
								propArrayOp="modoContratacion" propArrayId="iDmodoContratacion"
								action={addSelectedModoCont}
								opcionSelected={modoContSelected}
								urlApi={urlModosContratacion}
								inputIdCompare="modoContratacion"
								firstOptionCompare={inputModoCont ? inputModoCont : modoContSelected.modoContratacion}
								secondOptionCompare={inputModoCont ? inputModoCont : modoContSelected.modoContratacion}
								dispatchAddAction={addNewModoCont}
								dispatchDeleteAction={deleteModoCont}
								dispatchPutAction={putModoCont}
								dispatchGetID={getIdModoCont}
								bodyPet={bodyPetModosCont}
								idApi={valueIdModoCont}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
								
							/>


							<BasicModal
								idModal="modosDeLiquidacion"
								nameModal="Modos de Liquidacion"
								placeholder={objectModosLiquidacion}
								// dropdown={true}
								textArea={true}
								textAreaObject={textAreaObject}
								array={modosLiqValue && modosLiqValue}
								propArrayOp="modoLiquidacion" propArrayId="iDmodoLiquidacion"
								action={addSelectedModoLiq}
								opcionSelected={modoLiqSelected}
								urlApi={urlModosLiquidacion}
								inputIdCompare="modoLiquidacion"
								firstOptionCompare={inputModoLiquidacion ? inputModoLiquidacion : modoLiqSelected.modoLiquidacion}
								secondOptionCompare={inputModoLiquidacion ? inputModoLiquidacion : modoLiqSelected.modoLiquidacion}
								valueObs={textAreaModoLiq ? textAreaModoLiq : modoLiqSelected.obs}
								dispatchAddAction={addNewModoLiq}
								dispatchDeleteAction={deleteModoLiq}
								dispatchPutAction={putModoLiq}
								dispatchGetID={getIdModoLiq}
								bodyPet={bodyPetModosLiq}
								idApi={valueIdModoLiq}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
							/>

							<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" placeholder={objectMotivosEgreso} textArea={true} />
							<BasicModal idModal="paises" nameModal="Paises" placeholder={objectPaises} />
							{/* <BasicModal idModal="nacionalidades" nameModal="Nacionalidades" placeholder={objectPaises} /> */}
							<ModalPDLB
								idModal="pdlb"
								nameModal="Provincias - Departamentos - Localidades - Barrios"
								urlProv={urlProvincias}
								urlDeptos={urlDepartamentos}
								urlLocalidades={urlLocalidades}
								urlBarrios={urlBarrios}
							/>
							<BasicModal idModal="calles" nameModal="Calles" placeholder={objectCalles} textArea={true} />
							<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" />
							<BasicModal idModal="alicuotas" nameModal="Alicuotas" placeholder={objectAlicuotas} inputNum={true} inputNumName="Alicuota" hasCheckbox={true} checkboxName="Pide N° CUIT" />

							{/* {/ MODALES TABLA PARA LIQUIDACIÓN /} */}
							<BasicModal
								idModal="Bancos"
								nameModal="Bancos"
								placeholder={objectBancos}
								textArea={true}
								textAreaObject={textAreaObject}
								array={bancosValue && bancosValue}
							// propArrayOp="nombreBanco" propArrayId="idBanco"
							// action={addSelectedBanco}
							// opcionSelected={bancoSelected}
							// urlApi={urlBancos}
							// inputIdCompare="nombreBanco"
							// firstOptionCompare={inputBanco ? inputBanco : bancoSelected.nombreBanco}
							// secondOptionCompare={inputBanco ? inputBanco : bancoSelected.nombreBanco}


							/>
							<BasicModal idModal="Telefonia" nameModal="Empresas de Telefonia" placeholder={objectEmpresasTelefonia} />
							<BasicModal idModal="Sindicatos" nameModal="Sindicatos" placeholder={objectSindicatos} dropdown={true} />
							<BasicModal idModal="ObrasSociales" nameModal="Obras Sociales" placeholder={objectObrasSociales} inputNum={true} inputNumName="Porcentaje Patronal" textArea={true} />
							<BasicModal idModal="AFJP" nameModal="A.F.J.P" placeholder={objectAFJP} inputNum={true} inputNumName="Porcentaje Patronal" textArea={true} />
							<BasicModal idModal="CentrosCosto" nameModal="Centros de Costo" placeholder={objectCentrosCosto} dropdown={true} textArea={true} />
							<BasicModal idModal="SectoresDeptos" nameModal="Sectores/Departamentos" placeholder={objectSectoresDptos} dropdown={true} textArea={true} />
							<BasicModal idModal="Direcciones" nameModal="Direcciones" placeholder={objectDirecciones} textArea={true} relacion={true} nameRelacion="Sector/Dpto" />
							<BasicModal idModal="LugaresPago" nameModal="Lugares de Pago" placeholder={objectLugaresPago} textArea={true} />
							<BasicModal idModal="Documentacion" nameModal="Documentación" placeholder={objectDocumentacion} textArea={true} />
							<ModalTable idModal="Reduccion" nameModal="Tabla de Reducción de Deducciones" column={tableReduccionHeadings} btnAceptar={true} />
							<ModalEscala idModal="Escala" nameModal="Escala de Ganancias" inputNumData={inputNumDataEscala} hasInputDate={true} inputDateData={inputDateDataEscala} table={true} buttonNum={true} flex={true} styleContainer={{ height: "600px", width: "auto" }} styleData={{ height: "350px" }} />
							<ModalEscala idModal="Deducciones" nameModal="Deducciones de Ganancias" inputNumData={inputNumDataDeducciones} hasInputDate={true} inputDateData={inputDateDataDeducciones} styleContainer={{ height: "400px", width: "auto" }} styleData={{ height: "350px" }} />
							<ModalEscala idModal="Valores" nameModal="Valores Permanencia Categoría" inputNumData={inputNumDataValores} tableValores={true} column={tableValoresHeadings} flex={true} categorias={true} buttonNumTable={true} styleContainer={{ height: "430px", width: "auto" }} styleData={{ height: "350px" }} />
							<ModalConvenios idModal="Convenios" nameModal="Convenios, Categorías, Básicos y Antigüedad" placeholder={objectConvenios} inputsNumConvenios={inputsNumConvenios} column={tableConvenios} placeholderCategorias={objectCategorias} inputsNumCategorias={inputsNumCategorias} />
							<ModalTable idModal="Jerarquia" nameModal="Jerarquía de las Categorías" column={tableJerarquia} dropdown={true} jerarquia={true} />
							<ModalTable idModal="Licencias" nameModal="Licencias por Antigüedad" licencias={true} column={tableLicencias} objectInputs={inputsNumLicencias} />


							<li class="nav-item">
								<a class="nav-link" href="/">Salir</a>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</nav>
	)
}

export default Navbar;