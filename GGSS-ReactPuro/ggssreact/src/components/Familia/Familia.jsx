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
import { disableFunctions } from "../../redux/actions/employeActions";

const Familia = ({responses, setResponses}) => {
  const { saveEmpl, saveFamiliar, saveFamiliares, saveNacionalidad, saveEstudio, saveParentescos, parentescos, disable, saveFamiliarSelected, saveFamiliarPorEmpleado, saveFamSelect } = useContext(employeContext);

  const [familiarSeleccionado, setFamiliarSeleccionado] = useState({});

  const [ formFamilia, setFormFamilia ] = useState(responses["formFamilia"]);




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
function onChangeValues(e, key){
      let newResponse = {...formFamilia};
      newResponse[key] = e.target.value;
      setFormFamilia({
        ...newResponse
      });
    };


    useEffect(() => {
        setResponses({
          ...responses,
          formFamilia
        });      
    },[formFamilia]);


console.log(responses["formFamilia"])

  const empleadoUno = useSelector((state) => state.employeStates.employe)
  const familiaRedux = useSelector((state) => state.familiaStates.formulario);
  const tiposDni = useSelector((state) => state.generalState.tiposDocumento);
  const paisesValue = useSelector((state) => state.generalState.paises);
  const parentescosValue = useSelector((state)=> state.generalState.parentescos);
  const estudiosValue = useSelector((state)=> state.generalState.estudios);
  const familiaresValue = useSelector((state)=> state.generalState.familiares);
  const idFamiliarSelected = useSelector((state)=> state.familiaStates.familiar);
  const familiaresPorEmpleado = familiaresValue && familiaresValue.filter((familiar)=> familiar.iDempleado === empleadoUno.iDempleado);

  


  //#endregion

  //#region ------------------------------------------------------------------------------CONSTANTES DE DATOS

  
  const idPaisOrigen = saveEmpl[0].idPaisOrigen !== undefined ? saveEmpl[0].idPaisOrigen : 0;
  const paisSelected = saveNacionalidad !== undefined ? saveNacionalidad.find(pais => pais.idPais === idPaisOrigen) : "ARGENTINO";
  const idSelected = saveEmpl[0].iDestudios !== undefined ? saveEmpl[0].iDestudios : 0;
  const estudioSelect = saveEstudio !== undefined ? saveEstudio.find(estudio => estudio.iDestudios === idSelected) : "(Ninguno)";

  const idEmpleadoSelected = saveEmpl[0] !== undefined ? saveEmpl[0].iDempleado : 0;
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
    "Ape Nombre",
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
  function cancelButton(){
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    if(formFamilia && formFamilia){
      const inputsArray = Object.entries(formFamilia);

      const clearInputs = inputsArray.map(([key])=> [key, '']);

      const inputsJson = Object.fromEntries(clearInputs);

      setFormFamilia(inputsJson);
    }
    dispatch(disableFunctions(false));
     
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
                value={formFamilia?.inputApellidoNombres ? formFamilia?.inputApellidoNombres : familiarSeleccionado.apellidoyNombres
                }
                nameLabel="Apellido y Nombres"
                nameCheck="Fijar"
                placeHolder="Apellido y Nombres"
                disabled={disable}
                idInput="inputApellidoNombres"
                nameInput="inputApellidoNombres"
                onChange={onChangeValues}
              />
              <InputMultiple
                optionsDNI={tiposDni}
                idSelected="iDtipoDocumento"
                namePropOp="tipoDocumento"
                nameInputDNI="Documento"
                valueRadio={
                  formFamilia?.idRadioBtn && formFamilia?.idRadioBtn
                }
                valueDNI={
                  !familiarSeleccionado  ? (empleadoUno && empleadoUno.nroDocumento) : familiarSeleccionado.nroDocumento
                }
                nameFirst="Masculino"
                nameSecond="Femenino"
                nameInputRadio=""
                placeholder="17654987"
                disable={disable}
                propsRadioButton={propsRadioButton}
                onChange={onChangeValues}
                datosFamiliaValue1={ formFamilia?.inputCmbDni && formFamilia?.inputCmbDni }
                datosFamiliaRadio={formFamilia?.idRadioBtn && formFamilia?.idRadioBtn}
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
                propArray={formFamilia?.inputParentesco && formFamilia?.inputParentesco}
                disable={disable}
                idInput="inputParentesco"
                value={formFamilia?.inputParentesco !== undefined ? formFamilia?.inputParentesco : null}
                onChange={onChangeValues}
                action={ADD_FAMILIA}
              />
              <InputDateFlia
                value={
                  !familiarSeleccionado ? (empleadoUno && empleadoUno.fechaNacimiento) : familiarSeleccionado.fechaNacimiento
                }
                display={false}
                checked={false}
                nameInput="Nacimiento"
                idInput="inputDateNac"
                valueGeneral={ formFamilia?.inputDateNac && formFamilia?.inputDateNac }
                onChange={onChangeValues}
                disable={disable}
                familiarSeleccionado={familiarSeleccionado && familiarSeleccionado }
              />
              <EstudioFlia
                nameInput="Estudios"
                array={estudiosValue && estudiosValue}                
                namePropOp="estudiosNivel"
                idSelect="iDestudios"
                propArray={ formFamilia?.idInputEstudios && formFamilia?.idInputEstudios }
                placeHolder="Estudios"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={false}
                idModal="Estudios"
                disable={disable}
                idInput="idInputEstudios"
                onChange={onChangeValues}
                valueInputEstudios={ formFamilia?.idInputEstudios && formFamilia?.idInputEstudios }
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
                propArray={formFamilia?.nombrePais && formFamilia?.nombrePais }
                idModal="paises"
                disable={disable}
                onChange={onChangeValues}
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
                sexo={formFamilia?.idRadioBtn && formFamilia?.idRadioBtn}
                propArray={formFamilia?.idRadioBtn && formFamilia?.idRadioBtn}
                idModal="nacionalidades"
                disable={disable}
                onChange={onChangeValues}
                idInput="nacionalidadFamilia"
              />
              <InputDateFliaBaja
                value={
                  !familiarSeleccionado  ? (empleadoUno.fechaEgreso &&  empleadoUno.fechaEgreso ) : familiarSeleccionado.fBaja
                }
                display={false}
                checked={false}
                nameInput="Fecha Baja"
                idInput="inputDateBaja"
                disable={disable}
                familiarSeleccionado={familiarSeleccionado !== undefined ? familiarSeleccionado : null}
                valueGeneral={formFamilia?.inputDateBaja && formFamilia?.inputDateBaja }
                onChange={onChangeValues}
              />
              <TextArea inputName="Observaciones" maxLength="255" disabled={disable} onChange={onChangeValues} idInput="textAreaObservacionesFamilia"  value={formFamilia?.textAreaObservacionesFamilia && formFamilia?.textAreaObservacionesFamilia} />
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
          <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" functionDelete={cancelButton} />
        </div>

      </div>
    </div>


  );
};
export default Familia;
