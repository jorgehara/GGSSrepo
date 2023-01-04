// import axios from "axios";
import React, { useContext } from "react";
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

  //#endregion

  //#region ------------------------------------------------------------------------------URLs

  //#endregion
  //#region ------------------------------------------------------------------------------USEEFFECTS
 

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
  return (
    <div className="Lateral-Derecho">
      <div className="container-fluid">

        <div className="row border border-3">
          <EmployeData />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 p-2">
              <InputChecked
                
                nameLabel="Apellido y Nombres"
                nameCheck="Fijar"
                placeHolder="Apellido y Nombres"
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
              
                nameFirst="Masculino"
                nameSecond="Femenino"
                nameInputRadio=""
                placeholder="17654987"
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
                idInput="inputParentesco"
                value={familia.inputParentesco !== undefined ? familia.inputParentesco : null}
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <InputDateFlia
                display={false}
                checked={false}
                nameInput="Nacimiento"
                idInput="inputDateNac"
                valueGeneral={familia.inputDateNac !== undefined ? familia.inputDateNac : null}
                onChange={onChange}
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
                placeHolder="Estudios"
                nameButton="..."
                nameCheck="Fijar"
                checked=""
                display={false}
                idModal="Estudios"
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
                idModal="paises"
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
                action={ADD_FAMILIA}
                onChange={onChange}
                idInput="nacionalidadFamilia"
              />
              <InputDateFliaBaja
                display={false}
                checked={false}
                nameInput="Fecha Baja"
                idInput="inputDateBaja"
                generalState={familia}
                setGeneralState={setFamilia}
                familiarSeleccionado={familiarSeleccionado !== undefined ? familiarSeleccionado : null}
                valueGeneral={familia.inputDateBaja !== undefined ? familia.inputDateBaja : null}
                onChange={onChange}
                action={ADD_FAMILIA}
              />
              <TextArea inputName="Observaciones" maxLength="255"  onChange={onChange} idInput="textAreaObservacionesFamilia" action={ADD_FAMILIA} value={familiaRedux !== undefined && familiaRedux.textAreaObservacionesFamilia} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <TableBasic 
          onSelect={onSelect} 
          columns={columns} 
          array={familiaresPorEmpleado &&  familiaresPorEmpleado } 
          estudios={estudiosValue && estudiosValue}
          paisOrigenNac={paisesValue && paisesValue}
          parentescos={parentescosValue && parentescosValue}
          tiposDni={tiposDni && tiposDni}
          />
          <ButtonCancelarAceptar cancelar="-" aceptar="+" functionSend={sendData} functionDelete={deleteFamiliar} idElimiar={idFamiliarSelected}/>
        </div>
        <div className="d-flex justify-content-end">
          <ButtonCancelarAceptar cancelar="Cancelar" aceptar="Aceptar" />
        </div>

      </div>
    </div>


  );
};
export default Familia;
