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
import { employeContext } from '../../context/employeContext';
import ModalTable from '../Modals/ModalTable/ModalTable';
import ModalEscala from '../Modals/ModalEscala/ModalEscala';
import ModalConvenios from '../Modals/ModalConvenios/ModalConvenios';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addEstadosCiviles, addEstados, addPaises, addEstudios, addTiposDocumento, addCargos, addTareasDesempeñadas, addParentescos, addFormasPago, addModosContratacion, addModosLiquidacion, addEmpleadores, addDomicilios, addCalles, addDepartamentos, addBarrios, addProvincias, addLocalidades, addNewEstadoCivil, addNewEstudio } from '../../redux/actions/fetchActions';
import { useEffect } from 'react';
import { addSelectedEstadoCivil, addSelectedEstudio } from '../../redux/actions/modalesActions';
import { bodyPetitionEstadosCiviles, bodyPetitionEstudios } from '../Modals/BasicModal/bodyPetitions';
import swal from "sweetalert";

// import { getEstadosCivilesModal } from '../../services/fetchAPI';
// import { useEffect } from 'react';
//#endregion



const Navbar = () => {
	//#region --------------------------------- CONSTANTES DE DATOS -------------------------------
	const { empleadores, modosLiquidacion, modosContratacion, formasDePago, parentescos, tareasDesempeñadas, cargos, saveEstado, saveEstadoCivil, saveNacionalidad, saveEstudio, saveTipoDNI, saveCalle, saveDoms, saveProvincia, saveLocalidad, saveDetpo, saveBarrio } = useContext(employeContext);

	//#endregion
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

	// function onChange(e, action) {
	// 	dispatch(
	// 		{
	// 			type: action,
	// 			payload: { name: e.target.name, value: e.target.value }
	// 		});
	// }
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

	}, [])

	// GET DE LOS ENDPOINTS
	const estadosCivilesValue = useSelector((state) => state.generalState.estadosCiviles);
	const estudiosValue = useSelector((state) => state.generalState.estudios)

	const estadoCivilSelected = useSelector((state) => state.modalState.estadoCivilSelected);
	const inputMascEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModal);
	const inputFemEstadosCiviles = useSelector((state) => state.modalState.formulario.inputEstadosCivilesModalFem);

	const estudioSelected = useSelector((state) => state.modalState.estudioSelected);
	const inputNivelEstudio = useSelector((state) => state.modalState.formulario.inputNivelEstudio)




	const [responses, setResponses] = useState({});




	const [modalDataInputs, setModalDataInputs] = useState(responses["modalDataInputs"])

	function onChangeValues(e, key) {
		const newResponse = { ...modalDataInputs }
		newResponse[key] = e.target.value
		setModalDataInputs({
			...newResponse
		})
	}

	useEffect(() => {
		return () => {
			setResponses({
				...responses,
				modalDataInputs
			})
		}
	}, [modalDataInputs])

	const idEstadoCivil = ((estadosCivilesValue && estadosCivilesValue[estadosCivilesValue.length - 1] !== undefined && (estadosCivilesValue[estadosCivilesValue.length - 1].idEstadoCivil)) + 1)

	const bodyPetition = { ...responses.modalDataInputs, idEstadoCivil: idEstadoCivil };

	async function aceptar() {
		try {
		  await axios.post(urlEstadosCiviles, bodyPetition)
			.then((res) => {
			  if (res.status === 200) {
				dispatch(addNewEstadoCivil(responses.modalDataInputs))
				swal({
				  title: "Ok",
				  text: "Agregado con éxito",
				  icon: "success",
				})
			  }
			})
	
		} catch (err) {
		  swal({
			title: "Error",
			text: err.toString(),
			icon: "error",
		  })
		}
	  }



	// console.log(modals.inputEstadosCivilesModal)
	// console.log(modals.inputEstadosCivilesModalFem)
	const estadosCivilesMasculinos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i) => { return (estado.masculino); }) : [];
	const estadosCivilesFemeninos = saveEstadoCivil !== undefined ? saveEstadoCivil.map((estado, i) => { return (estado.femenino); }) : [];
	const estadosCiviles = estadosCivilesMasculinos.concat(estadosCivilesFemeninos);
	const estadosArray = saveEstado.map((m, i) => { return (m.nombreEstado) });
	const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nombrePais); }) : [];
	const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i) => { return (nac.estudiosNivel); }) : [];
	const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nacionalidad_masc); }) : [];
	const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nacionalidad_fem); }) : [];
	const nacionalidades = nacionalidadesMasculinas.concat(nacionalidadesFemeninas);
	const calles = saveCalle !== undefined ? saveCalle.map(res => { return res.calle }) : null;
	const pisoDepto = saveDoms !== undefined ? saveDoms.map(res => { return res.pisoDepto }) : null;
	const deptos = saveDetpo !== undefined ? saveDetpo.map(res => { return res.departamento }) : null;
	const provincias = saveProvincia !== undefined ? saveProvincia.map(res => { return res.provincia }) : null;
	const localidades = saveLocalidad !== undefined ? saveLocalidad.map(res => { return res.localidad }) : null;
	const barrios = saveBarrio !== undefined ? saveBarrio.map(res => { return res.barrio }) : null;
	const cargosMap = cargos !== undefined ? cargos.map((cargo, i) => { return (cargo.nombreCargo); }) : [];
	const tareasMap = tareasDesempeñadas !== undefined ? tareasDesempeñadas.map((tarea, i) => { return (tarea.tareaDesempeñada) }) : [];
	const tiposDNIMap = saveTipoDNI !== undefined ? saveTipoDNI.map((tdni, i) => { return tdni.tipoDocumento }) : [];
	const parentescosMap = parentescos !== undefined ? parentescos.map((parent, i) => { return parent.nombreParentesco }) : [];
	const formasDePagoMap = formasDePago !== undefined ? formasDePago.map((forma, i) => { return forma.nombreFormadePago }) : [];
	const modosContratacionMap = modosContratacion !== undefined ? modosContratacion.map((modo, i) => { return modo.modoContratacion }) : [];
	const modosLiquidacionMap = modosLiquidacion !== undefined ? modosLiquidacion.map((modo, i) => { return modo.modoLiquidacion }) : [];
	const empleadoresMap = empleadores !== undefined ? empleadores.map((empl, i) => { return empl.razonSocial }) : [];


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
								onChange={onChangeValues}
								valueFem={inputFemEstadosCiviles}
								valueMasc={inputMascEstadosCiviles}
								url={urlEstadosCiviles}
								// bodyPetition={bodyPetitionEstadosCiviles}
								dispatchAddAction={addNewEstadoCivil}
								res={responses}
								setRes={setResponses}
								postFn={aceptar}
							// generalState={modals} 
							// setGeneralState={setModals} 
							// onSelect={onSelect} 
							// functionModal={getEstadosCivilesModal} 
							// functionSaveSelected={saveEstadoCivilSelected} 
							// selectedOption={estadoCivilSelected} 
							// arrayCompleto={saveEstadoCivil}
							/>

							<BasicModal
								idModal="Estudios"
								nameModal="Estudios"
								placeholder={objectEstudios}
								array={estudiosValue && estudiosValue}
								propArrayOp="estudiosNivel"
								propArrayId="IDestudios"
								action={addSelectedEstudio}
								opcionSelected={estudioSelected}
								inputIdCompare="inputNivelEstudio"
								firstOptionCompare={inputNivelEstudio}
								secondOptionCompare={inputNivelEstudio}
								// onChange={onChange}
								url={urlEstudios}
								bodyPetition={bodyPetitionEstudios}
								dispatchAddAction={addNewEstudio}
								res={responses}
								setRes={setResponses}
							/>

							<BasicModal idModal="TipoDocumento" nameModal="Tipo de Documento" placeholder={objectTipoDocumento} array={tiposDNIMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="Parentescos" nameModal="Parentescos" placeholder={objectParentescos} hasCheckbox={true} checkboxName="Genera Asignación" hasCheckBoxNum={true} checkboxCheckName="Deduce Ganancias" checkboxNumName="Importe" textArea={true} array={parentescosMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="estadosEmpleados" nameModal="Estados para empleados" placeholder={objectEstado} array={estadosArray} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="cargos" nameModal="Cargos" placeholder={objectCargos} dropdown={true} textArea={true} array={cargosMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" placeholder={objectTareas} dropdown={true} array={tareasMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="formasDePago" nameModal="Formas de Pago" placeholder={objectFormasDePago} textArea={true} array={formasDePagoMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="modosDeContratacion" nameModal="Modos de Contratacion" placeholder={objectModosContratacion} dropdown={true} inputDate={true} array={modosContratacionMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" placeholder={objectModosLiquidacion} dropdown={true} textArea={true} array={modosLiquidacionMap} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="motivosEgreso" nameModal="Motivos de Egreso" placeholder={objectMotivosEgreso} textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="paises" nameModal="Paises" placeholder={objectPaises} array={paises} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="nacionalidades" nameModal="Nacionalidades" placeholder={objectPaises} array={nacionalidades} res={responses}
								setRes={setResponses} />
							<ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" aDepartamentos={deptos} aProvincias={provincias} aLocalidades={localidades} aBarrios={barrios} />
							<BasicModal idModal="calles" nameModal="Calles" placeholder={objectCalles} textArea={true} array={calles} res={responses}
								setRes={setResponses} />
							<ModalEmpleadores idModal="empleadores" nameModal="Empleadores" array={empleadoresMap} />
							<BasicModal idModal="alicuotas" nameModal="Alicuotas" placeholder={objectAlicuotas} inputNum={true} inputNumName="Alicuota" hasCheckbox={true} checkboxName="Pide N° CUIT" res={responses}
								setRes={setResponses} />

							{/* {/ MODALES TABLA PARA LIQUIDACIÓN /} */}
							<BasicModal idModal="Bancos" nameModal="Bancos" placeholder={objectBancos} textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="Telefonia" nameModal="Empresas de Telefonia" placeholder={objectEmpresasTelefonia} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="Sindicatos" nameModal="Sindicatos" placeholder={objectSindicatos} dropdown={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="ObrasSociales" nameModal="Obras Sociales" placeholder={objectObrasSociales} inputNum={true} inputNumName="Porcentaje Patronal" textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="AFJP" nameModal="A.F.J.P" placeholder={objectAFJP} inputNum={true} inputNumName="Porcentaje Patronal" textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="CentrosCosto" nameModal="Centros de Costo" placeholder={objectCentrosCosto} dropdown={true} textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="SectoresDeptos" nameModal="Sectores/Departamentos" placeholder={objectSectoresDptos} dropdown={true} textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="Direcciones" nameModal="Direcciones" placeholder={objectDirecciones} textArea={true} relacion={true} nameRelacion="Sector/Dpto" res={responses}
								setRes={setResponses} />
							<BasicModal idModal="LugaresPago" nameModal="Lugares de Pago" placeholder={objectLugaresPago} textArea={true} res={responses}
								setRes={setResponses} />
							<BasicModal idModal="Documentacion" nameModal="Documentación" placeholder={objectDocumentacion} textArea={true} res={responses}
								setRes={setResponses} />
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