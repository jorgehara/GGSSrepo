// import axios from "axios";
import React, { useContext } from "react";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import EmployeData from "../EmployeData/EmployeData";
import InputChecked from "../Inputs/InputChecked/InputChecked";
// import InputDate from "../Inputs/InputDate/InputDate";
import InputDateFlia from "../Inputs/InputDateFamilia/InputDateFlia";
import InputMultiple from "../Inputs/InputMultiple/InputMultiple";
import PaisOrigenFlia from "../Inputs/InputParentescoOpcions/PaisOrigenFlia";
import InputParentesco from "../Inputs/InputParentesco/InputParentesco";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";
import NacionalidadFlia from "../Inputs/InputParentescoOpcions/NacionalidadFlia";
import EstudioFlia from "../Inputs/InputParentescoOpcions/EstudioFlia";
import { useEffect } from "react";
import { getData, getFamiliarByIdEmpleado, getFamiliarByIdFamiliar } from "../../services/fetchAPI";
import { useState } from "react";
import InputDateFliaBaja from "../Inputs/InputDateFamilia/InputDateFliaBaja";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAMILIA } from "../../redux/types/familiaTypes";
import { ADD_TIPOSDOCUMENTO, AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import axios from "axios";
import swal from "sweetalert";
import { addNewFamiliar, deleteOneFamiliar } from "../../redux/actions/fetchActions";

const Familia = () => {
  const { saveEmpl, saveFamiliar, saveFamiliares, saveNacionalidad, saveEstudio, saveParentescos, parentescos, disable, saveFamiliarSelected, saveFamiliarPorEmpleado, saveFamSelect } = useContext(employeContext);

  const [familiarSeleccionado, setFamiliarSeleccionado] = useState({});
  const dispatch = useDispatch();

  const [familia, setFamilia] = useState({
    inputApellidoNombres: "",
    inputCmbDni: "",
    inputNroDni: "",
    idRadioBtn: "",
    inputParentesco: "",
    inputDateNac: "",
    inputDateBaja: "",
    // inputEstadosCivilesModalFem:""
  });
  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS
  const urlParentesco = "http://54.243.192.82/api/Parentescos";
  const urlFamiliares = "http://54.243.192.82/api/Familiares";
  const urlTiposDocumentos = "http://54.243.192.82/api/TiposDocumento";


  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload: { name: e.target.name, value: e.target.value }
      });
  }


  const empleadoUno = useSelector((state) => state.employeStates.employe)
  const familiaRedux = useSelector((state) => state.familiaStates.formulario);
  const tiposDni = useSelector((state) => state.generalState.tiposDocumento);
  const paisesValue = useSelector((state) => state.generalState.paises);
  const parentescosValue = useSelector((state)=> state.generalState.parentescos);
  const estudiosValue = useSelector((state)=> state.generalState.estudios);
  const familiaresValue = useSelector((state)=> state.generalState.familiares);
  const idFamiliarSelected = useSelector((state)=> state.familiaStates.familiar);

  const familiaresPorEmpleado = familiaresValue && familiaresValue.filter((familiar)=> familiar.iDempleado === empleadoUno.iDempleado);

  


  useEffect(() => {
    console.log(familiaRedux)
  }, [familiaRedux])

  //#endregion

  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS

  const nacionalidadesMasculinas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nacionalidad_masc); }) : [];
  const nacionalidadesFemeninas = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nacionalidad_fem); }) : [];
  const nacionalidades = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (`Masculino: ${nac.nacionalidad_masc}, Femenino: ${nac.nacionalidad_fem}`); }) : [];
  const paises = saveNacionalidad !== undefined ? saveNacionalidad.map((nac, i) => { return (nac.nombrePais); }) : [];
  const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
  const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO";
  const estudios = saveEstudio !== undefined ? saveEstudio.map((nac, i) => { return (nac.estudiosNivel); }) : [];
  const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
  const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";

  const idEmpleadoSelected = saveEmpl[0] !== undefined ? saveEmpl[0].iDempleado : 0;
  const parentesco = parentescos !== undefined ? parentescos.map((par, i) => { return (par.nombreParentesco) }) : null;
  const parentSelected = familiarSeleccionado !== undefined ? familiarSeleccionado.iDparentesco : null;
  const parenSeleccionado = parentescos !== undefined ? parentescos.find((par) => par.iDparentesco === parentSelected) : null;
  //#endregion

  //#region ------------------------------------------------------------------------------URLs

  //#endregion
  //#region ------------------------------------------------------------------------------USEEFFECTS
  useEffect(() => {
    getData(urlParentesco, saveParentescos);
  }, [])
  useEffect(() => {
    getData(urlFamiliares, saveFamiliares);
  }, [])
  useEffect(() => {
    getFamiliarByIdEmpleado(saveFamiliar, idEmpleadoSelected).then(res => saveFamiliarPorEmpleado(res));

  }, [idEmpleadoSelected])
  useEffect(() => {

  }, [parenSeleccionado])
  //#endregion
  //#region ------------------------------------------------------------------------------Objetos de props
  const propsRadioButton = {
    idCboDni: "inputCmbDni",
    idNroDni: "inputNroDni",
    idRadioBtn: "idRadioBtn"
  }
  //#endregion
  const columns = [
    "Apellido y Nombre",
    "Tipo",
    "N°Documento",
    "Sexo",
    "Parentesco",
    "Nacimiento",
    "País Origen",
    "Nacionalidad",
    "Estudios",
    "Fecha Baja",
    "No Deducir",
    "Incluir Cuota",
    "Obs"
  ];
  function onSelect(saveFamiliar, idFamiliar) {
    getFamiliarByIdFamiliar(saveFamiliar, idFamiliar).then((res) => {
      dispatch({ type: "ADD_FAMILIAR", payload: res });
      setFamiliarSeleccionado(res);
    });
  }
  const handleFetch = (url, action) => {
    debugger;
    dispatch({ type: SET_LOADING });
    axios.get(url)
      .then((res) => {
        console.log(res.data.result)
        dispatch(action(res.data.result));
      })
      .catch((err) => {
        dispatch({ type: AXIOS_ERROR });
      })
  }
  let bodyPetition = {
    "iDfamiliares": ((familiaresValue && familiaresValue[familiaresValue.length -1]  && (familiaresValue[familiaresValue.length -1].iDfamiliares))+1),
    "iDempleado": empleadoUno.iDempleado,
    "apellidoyNombres": familiaRedux.inputApellidoNombres,
    "iDparentesco": familiaRedux.inputParentesco,
    "sexo": familiaRedux.idRadioBtn,
    "fechaNacimiento": familiaRedux.inputDateNac,
    "iDnacionalidad": familiaRedux.nacionalidadFamilia,
    "iDtipoDocumento": familiaRedux.inputCmbDni,
    "nroDocumento": familiaRedux.inputNroDni,
    "iDestudios": familiaRedux.idInputEstudios,
    "iDpaisOrigen": familiaRedux.inputPaisOrigen,
    "fBaja": familiaRedux.inputDateBaja,
    "noDeducirGanancias": true,
    "incluirCuotaAlimentaria": true,
    "fechaCasamiento": null,
    "fechaParto": null,
    "fechaAcargoDesde": null,
    "obs": familiaRedux.textAreaObservacionesFamilia
  }
  async function sendData() {
    debugger;
    try {
      await axios.post(urlFamiliares, bodyPetition)
        .then(res => {
          dispatch(addNewFamiliar(res.data))
          swal({
            title: "Ok",
            text: "Familiar cargado correctamente",
            icon: "success",
          })
        })
      return;
    } catch (err) {
      return err;
    }
  }
  const deleteFamiliar = (id) => {
    try{
      axios.delete(`${urlFamiliares}/${id}`)
      .then((res)=>{
        if(res.status === 200){
          dispatch(deleteOneFamiliar(id));
          swal({
            title: "Ok",
            text: "Familiar eliminado correctamente",
            icon: "success",
        })
        }
        return;
      })
    }catch(err){
      swal({
        title: "Error",
        text: err,
        icon: "error",
    })
    }
  }
  return (
    <div className="Lateral-Derecho">
      <div className="container-fluid">

        <div className="row border border-3">
          <EmployeData disabled={disable} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 p-2">
              <InputChecked
                value={familiarSeleccionado === undefined ?
                  (empleadoUno[0] !== undefined
                    ? `${saveEmpl[0].apellido}, ${saveEmpl[0].nombres}`
                    : null) : familiarSeleccionado.apellidoyNombres
                }
                nameLabel="Apellido y Nombres"
                nameCheck="Fijar"
                placeHolder="Apellido y Nombres"
                disabled={disable}
                idInput="inputApellidoNombres"
                nameInput="inputApellidoNombres"
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <InputMultiple
                optionsDNI={tiposDni}
                idSelected="iDtipoDocumento"
                namePropOp="tipoDocumento"
                nameInputDNI="Documento"
                valueRadio={
                  familiaRedux.idRadioBtn && familiaRedux.idRadioBtn
                }
                valueDNI={
                  familiarSeleccionado === undefined || familiarSeleccionado === null ? (saveEmpl[0] !== undefined ? saveEmpl[0].nroDocumento : null) : familiarSeleccionado.nroDocumento
                }
                nameFirst="Masculino"
                nameSecond="Femenino"
                nameInputRadio=""
                placeholder="17654987"
                disable={disable}
                propsRadioButton={propsRadioButton}
                onChange={onChange}
                datosFamiliaValue1={familia.inputCmbDni !== undefined ? familia.inputCmbDni : null}
                datosFamiliaRadio={familiaRedux.idRadioBtn && familiaRedux.idRadioBtn}
                generalState={familia}
                setGeneralState={setFamilia}
                action={ADD_FAMILIA}
              />
              <InputParentesco
                nameInput="Parentesco"
                array={parentescosValue &&  parentescosValue }
                propArrayOp="nombreParentesco"
                propIdSelect="iDparentesco"
                placeHolder="Parentesco"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={true}
                idModal="Parentescos"
                propArray={parenSeleccionado !== undefined ? parenSeleccionado.nombreParentesco : null}
                disable={disable}
                idInput="inputParentesco"
                value={familia.inputParentesco !== undefined ? familia.inputParentesco : null}
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <InputDateFlia
                value={
                  familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined
                    ? saveEmpl[0].fechaNacimiento
                    : null) : familiarSeleccionado.fechaNacimiento
                }
                display={false}
                checked={false}
                nameInput="Nacimiento"
                idInput="inputDateNac"
                valueGeneral={familia.inputDateNac !== undefined ? familia.inputDateNac : null}
                onChange={onChange}
                disable={disable}
                generalState={familia}
                setGeneralState={setFamilia}
                familiarSeleccionado={familiarSeleccionado !== undefined ? familiarSeleccionado : null}
                action={ADD_FAMILIA}
              />
              <EstudioFlia
                nameInput="Estudios"
                array={estudiosValue && estudiosValue}                
                namePropOp="estudiosNivel"
                idSelect="iDestudios"
                propArray={estudioSelect !== undefined ? estudioSelect.estudiosNivel : "Cursos"}
                placeHolder="Estudios"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={false}
                idModal="Estudios"
                disable={disable}
                idInput="idInputEstudios"
                onChange={onChange}
                valueInputEstudios={familia.idInputEstudios !== undefined ? familia.idInputEstudios : null}
                action={ADD_FAMILIA}
              />
            </div>
            <div className="col-xl-6 p-2">

              <PaisOrigenFlia
                nameLabel="Pais de Origen"
                array={paisesValue && paisesValue}
                namePropValue="nombrePais"
                nameInput="inputPaisOrigen"
                idSelected="idPais"
                placeHolder="Paises"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={false}
                propArray={paisSelected !== undefined ? paisSelected.nombrePais : ""}
                idModal="paises"
                disable={disable}
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <NacionalidadFlia
                nameInput="Nacionalidad"
                array={paisesValue && paisesValue}
                namePropOp="nacionalidad_masc"
                placeHolder="Nacionalidad"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={false}
                masculinos={paisesValue && paisesValue}
                propIdSelect="idPais"
                propArrayOpMasc = "nacionalidad_masc"
                femeninos={paisesValue && paisesValue}
                propArrayOpFem = "nacionalidad_fem"
                sexo={familiaRedux.idRadioBtn && familiaRedux.idRadioBtn}
                propArray="ARGENTINO"
                idModal="nacionalidades"
                disable={disable}
                action={ADD_FAMILIA}
                onChange={onChange}
                idInput="nacionalidadFamilia"
              />
              <InputDateFliaBaja
                value={
                  familiarSeleccionado === undefined ? (saveEmpl[0] !== undefined ? saveEmpl[0].fechaEgreso : null) : familiarSeleccionado.fBaja
                }
                display={false}
                checked={false}
                nameInput="Fecha Baja"
                idInput="inputDateBaja"
                disable={disable}
                generalState={familia}
                setGeneralState={setFamilia}
                familiarSeleccionado={familiarSeleccionado !== undefined ? familiarSeleccionado : null}
                valueGeneral={familia.inputDateBaja !== undefined ? familia.inputDateBaja : null}
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <TextArea inputName="Observaciones" maxLength="255" disabled={disable} onChange={onChange} idInput="textAreaObservacionesFamilia" action={ADD_FAMILIA} value={familiaRedux !== undefined && familiaRedux.textAreaObservacionesFamilia} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <TableBasic 
          onSelect={onSelect} 
          columns={columns} 
          disabled={disable} 
          array={familiaresPorEmpleado &&  familiaresPorEmpleado } 
          seleccionado={saveFamSelect} 
          estudios={estudiosValue && estudiosValue}
          paisOrigenNac={paisesValue && paisesValue}
          parentescos={parentescosValue && parentescosValue}
          tiposDni={tiposDni && tiposDni}
          />
          <ButtonCancelarAceptar cancelar="-" aceptar="+" disabled={disable} functionSend={sendData} functionDelete={deleteFamiliar} idElimiar={idFamiliarSelected}/>
        </div>
        <div className="d-flex justify-content-end">
          <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
        </div>

      </div>
    </div>


  );
};
export default Familia;
