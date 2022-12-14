// import axios from "axios";
import React, { useContext } from "react";
import { employeContext } from "../../context/employeContext";
import ButtonCancelarAceptar from "../Buttons/ButtonCancelarAceptar";
import EmployeData from "../EmployeData/EmployeData";
import InputChecked from "../Inputs/InputChecked/InputChecked";
import InputDateFlia from "../Inputs/InputDateFamilia/InputDateFlia";
import InputMultiple from "../Inputs/InputMultiple/InputMultiple";
import PaisOrigenFlia from "../Inputs/InputParentescoOpcions/PaisOrigenFlia";
import InputParentesco from "../Inputs/InputParentesco/InputParentesco";
import TextArea from "../Inputs/TextArea/TextArea";
import TableBasic from "../Tables/TableBasic";
import NacionalidadFlia from "../Inputs/InputParentescoOpcions/NacionalidadFlia";
import EstudioFlia from "../Inputs/InputParentescoOpcions/EstudioFlia";
import { useEffect } from "react";
import {  getFamiliarByIdFamiliar } from "../../services/fetchAPI";
import { useState } from "react";
import InputDateFliaBaja from "../Inputs/InputDateFamilia/InputDateFliaBaja";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAMILIA } from "../../redux/types/familiaTypes";
import { AXIOS_ERROR, SET_LOADING } from "../../redux/types/fetchTypes";
import axios from "axios";
import swal from "sweetalert";
import { addEstudios, addFamiliares, addNewFamiliar, addPaises, addParentescos, addTiposDocumento, deleteOneFamiliar } from "../../redux/actions/fetchActions";
import { disableFunctions } from "../../redux/actions/employeActions";
import { addFamiliar } from "../../redux/actions/familiaActions";

const Familia = ({responses, setResponses}) => {
  
  //const { saveEmpl, saveNacionalidad, saveEstudio, parentescos, disable, saveFamSelect } = useContext(employeContext);

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
  const urlParentescos = "http://54.243.192.82/api/Parentescos";
  const urlFamiliares = "http://54.243.192.82/api/Familiares";
  const urlTiposDocumentos = "http://54.243.192.82/api/TiposDocumento";
  const urlPaisesNac = "http://54.243.192.82/api/Paises";
  const urlEstudios = "http://54.243.192.82/api/Estudios";

  
function onChangeValues(e, key){
      let newResponse = {...formFamilia};
      newResponse[key] = e;
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

    


  const empleadoUno = useSelector((state) => state.employeStates.employe)
  const familiaRedux = useSelector((state) => state.familiaStates.formulario);
  const tiposDni = useSelector((state) => state.generalState.tiposDocumento);
  const paisesValue = useSelector((state) => state.generalState.paises);
  const parentescosValue = useSelector((state)=> state.generalState.parentescos);
  const estudiosValue = useSelector((state)=> state.generalState.estudios);
  const familiaresValue = useSelector((state)=> state.generalState.familiares);
  const idFamiliarSelected = useSelector((state)=> state.familiaStates.familiar);
  const familiaresPorEmpleado = familiaresValue && familiaresValue.filter((familiar)=> familiar.iDempleado === empleadoUno.iDempleado);
  const deshabilitar = useSelector((state)=> state.employeStates.disable);
  const disable = useSelector((state)=> state.generalState.disabled);
  const familiarSeleccionadoR = useSelector((state)=> state.familiaStates.familiarSeleccionado);

  function famxEmpl(){

    return familiaresValue && familiaresValue.filter((familiar)=> familiar.iDempleado === empleadoUno.iDempleado);
    
  }

    console.log(famxEmpl());
  //#endregion

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
      dispatch(addFamiliar(res));
      setFamiliarSeleccionado(res);
    });
  }
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
  async function sendData() {
    debugger;
    try {
      await axios.post(urlFamiliares, bodyPetition)
        .then(res => {
          dispatch(addNewFamiliar(res.data));
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
  useEffect(()=>{
    handleFetch( urlTiposDocumentos,addTiposDocumento);
    handleFetch( urlPaisesNac,addPaises);
    handleFetch( urlEstudios,addEstudios);
    handleFetch( urlParentescos,addParentescos);
    handleFetch( urlFamiliares,addFamiliares);
},[deshabilitar ])

  //console.log(responses.formFamilia.inputApellidoNombres)
  let bodyPetition = {
    "iDfamiliares": ((familiaresValue && familiaresValue[familiaresValue.length -1]  && (familiaresValue[familiaresValue.length -1].iDfamiliares))+1),
    "iDempleado": empleadoUno.iDempleado,
    "apellidoyNombres": responses.formFamilia?.inputApellidoNombres,
    "iDparentesco": responses.formFamilia?.inputParentesco,
    "sexo": responses.formFamilia?.idRadioBtn,
    "fechaNacimiento": responses.formFamilia?.inputDateNac,
    "iDnacionalidad": responses.formFamilia?.nacionalidadFamilia,
    "iDtipoDocumento": responses.formFamilia?.inputCmbDni,
    "nroDocumento": responses.formFamilia?.inputNroDni,
    "iDestudios": responses.formFamilia?.idInputEstudios,
    "iDpaisOrigen": responses.formFamilia?.inputPaisOrigen,
    "fBaja": responses.formFamilia?.inputDateBaja,
    "noDeducirGanancias": true,
    "incluirCuotaAlimentaria": true,
    "fechaCasamiento": null,
    "fechaParto": null,
    "fechaAcargoDesde": null,
    "obs": responses.formFamilia?.textAreaObservacionesFamilia
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

        <div className="row border border-1">
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
                obligatorio ={true}
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
                  formFamilia?.inputNroDni && formFamilia?.inputNroDni 
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
                propSelected= {formFamilia?.inputCmbDni && formFamilia?.inputCmbDni}
                obligatorio ={true}
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
                obligatorio ={true}
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
                obligatorio ={true}
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
                obligatorio ={true}
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
                obligatorio ={true}
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
          seleccionado={familiarSeleccionadoR} 
          
          />
          <ButtonCancelarAceptar cancelar="-" aceptar="+" disabled={disable} functionSend={sendData} functionDelete={deleteFamiliar} idElimiar={idFamiliarSelected}/>
        </div>
        <div className="d-flex justify-content-end">
        </div>

      </div>
    </div>


  );
};
export default Familia;
