//#region -----------------------------------------------------------------------IMPORTS
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import ButtonCallModal from '../Buttons/ButtonCallModal'
import BasicModal from '../Modals/BasicModal/BasicModal'
import ModalPDLB from '../Modals/ModalPDLB/ModalPDLB'
import ModalEmpleadores from '../Modals/ModalEmpleadores/ModalEmpleadores'

// ------------------------ OBJECTS ------------------------
import { objectParentescos, objectCategorias, inputsNumCategorias, objectConvenios, inputsNumConvenios, inputNumDataValores, tableValoresHeadings, inputNumDataEscala, inputDateDataEscala, inputNumDataDeducciones, inputDateDataDeducciones, objectBancos, objectEmpresasTelefonia, objectSindicatos, objectTareas, objectEstadosCiviles, objectEstudios, objectTipoDocumento, objectEstado, objectFormasDePago, objectMotivosEgreso, objectCalles, objectPaises, objectModosLiquidacion, objectModosContratacion, objectCargos, objectObrasSociales, objectAFJP, objectCentrosCosto, objectSectoresDptos, objectDirecciones, objectLugaresPago, objectDocumentacion, tableReduccionHeadings, tableConvenios, tableJerarquia, tableLicencias, inputsNumLicencias, objectAlicuotas } from './Objects'
// -----------------------------------------------------------
import ModalTable from '../Modals/ModalTable/ModalTable';
import ModalEscala from '../Modals/ModalEscala/ModalEscala';
import ModalConvenios from '../Modals/ModalConvenios/ModalConvenios';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addEstadosCiviles, addEstados, addPaises, addEstudios, addTiposDocumento, addCargos, addTareasDesempeñadas, addParentescos, addFormasPago, addModosContratacion, addModosLiquidacion, addEmpleadores, addDomicilios, addCalles, addDepartamentos, addBarrios, addProvincias, addLocalidades, addNewEstadoCivil, addNewEstudio, getIdEstadoCivil, deleteEstadoCivil, getIdEstudio, deleteEstudio, addNewTipoDoc, deleteTipoDoc, getIdTipoDoc, putEstadoCivil, putEstudio, putTipoDoc } from '../../redux/actions/fetchActions';
import { useEffect } from 'react';
import { addSelectedEstadoCivil, addSelectedEstudio, addSelectedTipoDocu } from '../../redux/actions/modalesActions';





const NavbarMenu = () => {
	
	const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles"
	const urlEstudios = "http://54.243.192.82/api/Estudios"
	const urlTiposDocumento = "http://54.243.192.82/api/TiposDocumento"

	const [refetch, setRefetch] = useState(true); // estado para recargar cada vez que se ejecute un post/put/delete

	
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
	}, [modalDataInputs]);

	// ------- GET DE LOS ENDPOINTS  -----

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
	const inputObsParent = useSelector((state) => state.modalState.formulario.inputObsParent)
	const valueIdParentesco = useSelector((state) => state.generalState.idParentesco)

	//Estados
	const estadosValue = useSelector((state)=> state.generalState.estados)

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








	// ------- ID & PETITION  -------
	//Estados Civiles
	const idEstadoCivil = ((estadosCivilesValue && estadosCivilesValue[estadosCivilesValue.length - 1] !== undefined && (estadosCivilesValue[estadosCivilesValue.length - 1].idEstadoCivil)) + 1)
	const bodyPetitionEC = { ...responses.modalDataInputs, idEstadoCivil: idEstadoCivil };
	//Estudios
	const idEstudio = ((estudiosValue && estudiosValue[estudiosValue.length - 1] !== undefined && (estudiosValue[estudiosValue.length - 1].iDestudios)) + 1)
	const bodyPetEstudio = { ...responses.modalDataInputs, iDestudios: idEstudio }
	//Tipos de documento
	const idTiposDocumento = ((tiposDocumentoValue && tiposDocumentoValue[tiposDocumentoValue.length - 1] !== undefined && (tiposDocumentoValue[tiposDocumentoValue.length - 1].iDtipoDocumento)) + 1)
	const bodyPetTiposDoc = { ...responses.modalDataInputs, iDtipoDocumento: idTiposDocumento }



	const estadosArray = estadosValue && estadosValue.map((m, i) => { return (m.nombreEstado) });
	const paises = paisNacionalidad && paisNacionalidad.map((nac, i) => { return (nac.nombrePais); });

	const estudios = estudiosValue && estudiosValue.map((nac, i) => { return (nac.estudiosNivel); });

	const nacionalidadesMasculinas = paisNacionalidad && paisNacionalidad.map((nac, i) => { return (nac.nacionalidad_masc); }) ;
	const nacionalidadesFemeninas = paisNacionalidad && paisNacionalidad.map((nac, i) => { return (nac.nacionalidad_fem); }) ;

	const nacionalidades = nacionalidadesMasculinas && nacionalidadesMasculinas.concat(nacionalidadesFemeninas);

	const calles = calle && calle.map(res => { return res.calle }) ;

	const deptos = dptos && dptos.map(res => { return res.departamento });

	const provincias = provinciasValue && provinciasValue.map(res => { return res.provincia });

	const localidades = localidadesValue && localidadesValue.map(res => { return res.localidad });

	const barrios = barriosValue && barriosValue.map(res => { return res.barrio });

	const cargosMap = cargosValue && cargosValue.map((cargo, i) => { return (cargo.nombreCargo); });

	const tareasMap = tareaValues && tareaValues.map((tarea, i) => { return (tarea.tareaDesempeñada) });

	const parentescosMap = parentescosValue && parentescosValue.map((parent, i) => { return parent.nombreParentesco });

	const formasDePagoMap = formasDePagoValue && formasDePagoValue.map((forma, i) => { return forma.nombreFormadePago });

	const modosContratacionMap = modosContratacionValue && modosContratacionValue.map((modo, i) => { return modo.modoContratacion });

	const modosLiquidacionMap = modosLiqValue && modosLiqValue.map((modo, i) => { return modo.modoLiquidacion });

	const empleadoresMap = empleadoresValue && empleadoresValue.map((empl, i) => { return empl.razonSocial });


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
								hasCheckbox={true}
								checkboxName="Genera Asignación"
								hasCheckBoxNum={true}
								checkboxCheckName="Deduce Ganancias"
								checkboxNumName="Importe"
								textArea={true}
								array={parentescosMap} />
							<BasicModal idModal="estadosEmpleados" nameModal="Estados para empleados" placeholder={objectEstado} array={estadosArray} />
							<BasicModal idModal="cargos" nameModal="Cargos" placeholder={objectCargos} dropdown={true} textArea={true} array={cargosMap} />
							<BasicModal idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" placeholder={objectTareas} dropdown={true} array={tareasMap} />
							<BasicModal idModal="formasDePago" nameModal="Formas de Pago" placeholder={objectFormasDePago} textArea={true} array={formasDePagoMap} />
							<BasicModal idModal="modosDeContratacion" nameModal="Modos de Contratacion" placeholder={objectModosContratacion} dropdown={true} inputDate={true} array={modosContratacionMap} />
							<BasicModal idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" placeholder={objectModosLiquidacion} dropdown={true} textArea={true} array={modosLiquidacionMap} />
							<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" placeholder={objectMotivosEgreso} textArea={true} />
							<BasicModal idModal="paises" nameModal="Paises" placeholder={objectPaises} array={paises} />
							<BasicModal idModal="nacionalidades" nameModal="Nacionalidades" placeholder={objectPaises} array={nacionalidades} />
							<ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" aDepartamentos={deptos} aProvincias={provincias} aLocalidades={localidades} aBarrios={barrios} />
							<BasicModal idModal="calles" nameModal="Calles" placeholder={objectCalles} textArea={true} array={calles} />
							<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" array={empleadoresMap} />
							<BasicModal idModal="alicuotas" nameModal="Alicuotas" placeholder={objectAlicuotas} inputNum={true} inputNumName="Alicuota" hasCheckbox={true} checkboxName="Pide N° CUIT" />

							{/* {/ MODALES TABLA PARA LIQUIDACIÓN /} */}
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

export default NavbarMenu;