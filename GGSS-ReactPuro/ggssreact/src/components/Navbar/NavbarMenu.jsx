//#region -----------------------------------------------------------------------IMPORTS
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Navbar.css";
import ButtonCallModal from "../Buttons/ButtonCallModal";
import BasicModal from "../Modals/BasicModal/BasicModal";
import ModalPDLB from "../Modals/ModalPDLB/ModalPDLB";
import ModalEmpleadores from "../Modals/ModalEmpleadores/ModalEmpleadores";
// ------------------------ OBJECTS ------------------------
import { objectParentescos, objectCategorias, inputsNumCategorias, objectConvenios, inputsNumConvenios, inputNumDataValores, tableValoresHeadings, inputNumDataEscala, inputDateDataEscala, inputNumDataDeducciones, inputDateDataDeducciones, objectBancos, objectEmpresasTelefonia, objectSindicatos, objectTareas, objectEstadosCiviles, objectEstudios, objectTipoDocumento, objectEstado, objectFormasDePago, objectMotivosEgreso, objectCalles, objectPaises, objectModosLiquidacion, objectModosContratacion, objectCargos, objectObrasSociales, objectAFJP, objectCentrosCosto, objectSectoresDptos, objectDirecciones, objectLugaresPago, objectDocumentacion, tableReduccionHeadings, tableConvenios, tableJerarquia, tableLicencias, inputsNumLicencias, objectAlicuotas, checkboxParentescos, checkboxNumParentescos, textAreaObject, textAreaCargos,urls } from './Objects'
// -----------------------------------------------------------
import ModalTable from '../Modals/ModalTable/ModalTable';
import ModalEscala from '../Modals/ModalEscala/ModalEscala';
import ModalConvenios from '../Modals/ModalConvenios/ModalConvenios';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addEstadosCiviles, addEstados, addPaises, addEstudios, addTiposDocumento, addCargos, addTareasDesempeñadas, addParentescos, addFormasPago, addModosContratacion, addModosLiquidacion, addEmpleadores, addDomicilios, addCalles, addDepartamentos, addBarrios, addProvincias, addLocalidades, addNewEstadoCivil, addNewEstudio, getIdEstadoCivil, deleteEstadoCivil, getIdEstudio, deleteEstudio, addNewTipoDoc, deleteTipoDoc, getIdTipoDoc, putEstadoCivil, putEstudio, putTipoDoc, addNewParentesco, deleteParentesco, putParentesco, getIdParentesco, addNewEstado, deleteEstado, putEstado, getIdEstado, addNewFormaPago, deleteFormaPago, putFormaPago, getIdFormaPago, addNewCargo, deleteCargo, putCargo, getIdCargo, addNewTarea, deleteTarea, putTarea, getIdTarea } from '../../redux/actions/fetchActions';
import { addSelectedCargo, addSelectedEstado, addSelectedEstadoCivil, addSelectedEstudio, addSelectedFormaPago, addSelectedParentesco, addSelectedTarea, addSelectedTipoDocu, setRefetch } from '../../redux/actions/modalesActions';


// import { getEstadosCivilesModal } from '../../services/fetchAPI';
// import { useEffect } from 'react';
//#endregion

const NavbarMenu = () => {
	
	const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles"
	const urlEstudios = "http://54.243.192.82/api/Estudios"
	const urlTiposDocumento = "http://54.243.192.82/api/TiposDocumento"
	const urlCargos = "http://54.243.192.82/api/Cargos";
	const urlTareas = "http://54.243.192.82/api/TareasDesempeñadas";
	// estado para recargar cada vez que se ejecute un post/put/delete

	const refetch = useSelector((state)=> state.modalState.refetch);
	// ESTADOS QUE GUARDAN EL VALOR DE LOS INPUTS
	const [responses, setResponses] = useState({});
	const [modalDataInputs, setModalDataInputs] = useState(responses["modalDataInputs"])

  function onChangeValues(e, key) {
    const newResponse = { ...modalDataInputs };
    newResponse[key] = e;
    setModalDataInputs({
      ...newResponse,
    });
  }
  useEffect(() => {
    setResponses({
      ...responses,
      modalDataInputs,
    });
  }, [modalDataInputs]);
	
	//Paises
	const paisNacionalidad = useSelector((state)=> state.generalState.paises)
	//Calles
	const calle = useSelector((state)=> state.generalState.calles)
	//Departamentos
	const dptos = useSelector((state)=> state.generalState.departamentos)
	//Provincias
	const provinciasValue = useSelector((state)=> state.generalState.provincias)
	//Localidades
	const localidadesValue = useSelector((state)=> state.generalState.localidades);
	//Barrios
	const barriosValue = useSelector((state)=> state.generalState.barrios)
	//Cargos
	const cargosValue = useSelector((state)=> state.generalState.cargos);
	//TareaDesempeñada
	const tareaValues = useSelector((state)=> state.generalState.tareaDesempeñada);
	//Formas de Pago
	const formasDePagoValue = useSelector((state)=> state.generalState.formasDePago)
	//ModosContratacion
	const modosContratacionValue = useSelector((state)=> state.generalState.modosContratacion)
	//Modos Liquidacion
	const modosLiqValue = useSelector((state)=> state.generalState.modosLiquidacion);
	//Empleadores
	const empleadoresValue = useSelector((state)=> state.generalState.empleadores)
	// ----------------------------------- ID & PETITION  -----------------------------------
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

	// ----------------------------------- ID & PETITION  -----------------------------------
	//Estados Civiles
	const idEstadoCivil = ((estadosCivilesValue && estadosCivilesValue[estadosCivilesValue.length -1] !== undefined && (estadosCivilesValue[estadosCivilesValue.length -1].idEstadoCivil))+1)
	const bodyPetitionEC = { ...responses.modalDataInputs, idEstadoCivil: idEstadoCivil };
	//Estudios
	const idEstudio = ((estudiosValue && estudiosValue[estudiosValue.length - 1] !== undefined && (estudiosValue[estudiosValue.length - 1].iDestudios)) + 1)
	const bodyPetEstudio = { ...responses.modalDataInputs, iDestudios: idEstudio }
	//Tipos de documento
	const idTiposDocumento = ((tiposDocumentoValue && tiposDocumentoValue[tiposDocumentoValue.length - 1] !== undefined && (tiposDocumentoValue[tiposDocumentoValue.length - 1].iDtipoDocumento)) + 1)
	const bodyPetTiposDoc = { ...responses.modalDataInputs, iDtipoDocumento: idTiposDocumento }
	//Parentescos
	const idParentesco = ((parentescosValue && parentescosValue[parentescosValue.length - 1] !== undefined && (parentescosValue[parentescosValue.length - 1].iDparentesco)) + 1)
	const bodyPetParentescos = { "iDparentesco": idParentesco ,
								"nombreParentesco": responses.modalDataInputs?.nombreParentesco,
								"generaAsignacion": responses.modalDataInputs?.generaAsignacion,
								"obs": responses.modalDataInputs?.obs,
								"deduceGanancias": responses.modalDataInputs?.deduceGanancias,
								"importeDeduce": responses.modalDataInputs?.importeDeduce }
	// estados para los empleados
	const idEstado = ((estadosValue && estadosValue[estadosValue.length - 1] !== undefined && (estadosValue[estadosValue.length - 1].idEstado)) + 1)
	const bodyPetEstados = { ...responses.modalDataInputs, idEstado: idEstado }
	// formas de pago
	const idFormaPago = ((formasPagoValue && formasPagoValue[formasPagoValue.length - 1] !== undefined && (formasPagoValue[formasPagoValue.length - 1].iDformadePago)) + 1)
	const bodyPetFormasPago = { "iDformadePago": idFormaPago,
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
								<a className="  nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Empleados
								</a>
								<ul className=" dropdown-menu">
									
									<li><Link className="dropdown-item" to="/ficha-empleados">Ficha Empleados</Link></li>
							
								</ul>
							</li>
							{/* <li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Liquidación</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Esquemas y Conceptos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Períodos</a>
							</li>*/}
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

									{/* <hr />
									<li class="dropdown-submenu">
										<a className='dropdown-item' tabindex="-1" href="#">Para Liquidación</a>
										{/* <ul class="dropdown-menu"> */}
											<div className="datosLiquidacion" style={{ fontSize: "13px" }}>
											
											


{/* //-------------------------VERSION 2---------------------------------------------------------------------------------------------------------- */}
												{/* <ButtonCallModal idModal="Bancos" nameButton="Bancos" useNavbar={true} />
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
												<ButtonCallModal idModal="Plan" nameButton="Plan de Cuentas" useNavbar={true} /> */}
{/* //------------------------------------------------------------------------------------------------------------------------------------------------ */}
											</div>
										</ul>
									</li> 
									<li class="nav-item">
								<a class="nav-link" href="/">Salir</a>
							</li>
								</ul>
								<ul> 
							{/* <li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Informes y Listados</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Parámetros</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/some/valid/uri">Acerca de...</a>
							</li> */}

							{/* {/ MODALES TABLA PARA EMPLEADOS /} */}
							{/* <BasicModal
								idModal="EstadoCivil"
								nameModal="Estados Civiles"
								placeholder={objectEstadosCiviles}
								array={estadosCivilesValue && estadosCivilesValue}
								propArrayOp="masculino" 
								propArrayId="idEstadoCivil"
								action={addSelectedEstadoCivil}
								opcionSelected={estadoCivilSelected}
								inputIdCompare="masculino"
								firstOptionCompare={inputMascEstadosCiviles ? inputMascEstadosCiviles : estadoCivilSelected.masculino}
								secondOptionCompare={inputFemEstadosCiviles ? inputFemEstadosCiviles : estadoCivilSelected.femenino}
								urlApi={urls.urlEstados}
								bodyPet={bodyPetitionEC}
								idApi={valueIdEstadoCivil}
								resp={responses}
								onChange={onChangeValues}
								refetch={refetch}
								setRefetch={setRefetch}
								modalDataInputs={modalDataInputs}
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
								urlApi={urls.urlEstados}
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
								urlApi={urls.urlEstados}
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
								urlApi={urls.urlParentescos}
								inputIdCompare="nombreParentesco"
								firstOptionCompare={inputParentesco ? inputParentesco : parentescoSelected.nombreParentesco}
								secondOptionCompare={inputParentesco ? inputParentesco : parentescoSelected.nombreParentesco}
								valueObs={textAreaParent ? textAreaParent : parentescoSelected.obs}
								valueCheckbox={inputAsignacionParent ? inputAsignacionParent : parentescoSelected.generaAsignacion }
								valueCheckboxNum={inputGananciaParent ? inputGananciaParent : parentescoSelected.deduceGanancias}
								valueNumCheck={inputImporteParent ? inputImporteParent : parentescoSelected.importeDeduce}
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
								urlApi={urls.urlEstados}
								inputIdCompare="nombreEstado"
								firstOptionCompare={inputEstado ? inputEstado : estadoSelected.nombreEstado}
								secondOptionCompare={inputEstado ? inputEstado : estadoSelected.nombreEstado}
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
								urlApi={urls.urlFormasPago}
								inputIdCompare="nombreFormadePago"
								firstOptionCompare={inputFormaDePago ? inputFormaDePago : formaPagoSelected.nombreFormadePago}
								secondOptionCompare={inputFormaDePago ? inputFormaDePago : formaPagoSelected.nombreFormadePago}
								valueObs={textAreaFormaPago ? textAreaFormaPago : formaPagoSelected.obs}
								bodyPet={bodyPetFormasPago}
								idApi={valueIdFormaPago}
								onChange={onChangeValues}
								resp={responses}
								refetch={refetch}
								setRefetch={setRefetch}
							/>
							<BasicModal idModal="cargos" nameModal="Cargos" placeholder={objectCargos} dropdown={true} textArea={true} />
							<BasicModal idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" placeholder={objectTareas} dropdown={true} />
							<BasicModal idModal="modosDeContratacion" nameModal="Modos de Contratacion" placeholder={objectModosContratacion} dropdown={true} inputDate={true}/>
							<BasicModal idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" placeholder={objectModosLiquidacion} dropdown={true} textArea={true} />
							<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" placeholder={objectMotivosEgreso} textArea={true} />
							<BasicModal idModal="paises" nameModal="Paises" placeholder={objectPaises} />
							<BasicModal idModal="nacionalidades" nameModal="Nacionalidades" placeholder={objectPaises} />
							<ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" />
							<BasicModal idModal="calles" nameModal="Calles" placeholder={objectCalles} textArea={true}/>
							<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" />
							<BasicModal idModal="alicuotas" nameModal="Alicuotas" placeholder={objectAlicuotas} inputNum={true} inputNumName="Alicuota" hasCheckbox={true} checkboxName="Pide N° CUIT" />							
							<BasicModal idModal="Bancos" nameModal="Bancos" placeholder={objectBancos} textArea={true} />
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
							<ModalTable idModal="Licencias" nameModal="Licencias por Antigüedad" licencias={true} column={tableLicencias} objectInputs={inputsNumLicencias} /> */}
							</ul>
							
			
			</div> 
			</div> 
			</div> 
			</nav>
)}

export default NavbarMenu;