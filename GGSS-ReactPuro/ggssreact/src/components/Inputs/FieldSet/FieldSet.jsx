import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  addNewLicencia,
  updateLicencia,
  deleteLicencia,
} from "../../../redux/actions/fetchActions";
import { deleteLicEmpleado, saveIdsLic } from "../../../redux/actions/licenciasActions";
import TableLicencias from "../../Tables/TableLicencias";
import TableSuspenLicencia from "../../Tables/TableSuspenLicencia";
import FechaSuspencion from "./Childs/FechaSuspencion";
import NuevaLicencia from "./Childs/NuevaLicencia";
import PorPeriodo from "./Childs/PorPeriodo";
import Prorroga from "./Childs/Prorroga";
import "./FieldSet.css";

const FieldSet = ({
  array,
  valueId,
  propArrayOpFem,
  opciones,
  selectedOption,
  onChange,
  valueForm,
  licenciaDelEmpleado,
  detalleLicencia,
  sendData,
  formLicencias,
  setLicenciaEmpladoDatos,
  setRefectch,
  refetch,
  deleteLicencias
}) => {
  const columns1 = [
    "Seleccionar",
    "Año",
    "Días Totales",
    "Tomados",
    "Restan",
    "Vto",
    "Prórroga",
    "Resolución",
    "Disponibles",
  ];
  const columns2 = ["Seleccionar", "Desde", "Hasta", "Fecha Suspensión"];

  const empleadoUno = useSelector((state) => state.employeStates.employe);
  const licenciaEmpleado = useSelector(
    (state) => state.licenciasState.licenciaEmpleado
  );
  const idSelected = useSelector((state)=> state.licenciasState.idSelected);

  const detalleSelected = useSelector(
    (state) => state.licenciasState.detalleSelect
  );

  

  const url = `http://54.243.192.82/api/ActualizaDisponibles/0?idEmpleado=${empleadoUno.iDempleado}&anio=${formLicencias?.inputCboAñosLicencia}&diasDisponiblesTotales=${formLicencias?.inputCantDiasDispLicencia}&fechaVencimiento=${formLicencias?.inputVencimientoLicencias}&newId=0`
  const urlCreateLicencia = `http://54.243.192.82/api/ActualizaDisponibles/0?idEmpleado=${empleadoUno.iDempleado}&anio=${formLicencias?.inputCboAñosLicencia}&diasDisponiblesTotales=${formLicencias?.inputCantDiasDispLicencia}&fechaVencimiento=${formLicencias?.inputVencimientoLicencias}&newId=0`;

  const urlLicencias = "http://54.243.192.82/api/ModificarDatos";
  const detalleSeleccionado = useSelector(
    (state) => state.licenciasState.detalleSelect
  );

  const urlCreateDetalleLicencia = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=0&IdLicenciaEmpleado=${
    licenciaEmpleado && licenciaEmpleado.idLicenciaEmpleado
  }&Desde=${formLicencias?.inputDesdeSolicitaLic}&Hasta=${
    formLicencias?.inputHastaSolicitaLic
  }`;
  const urlDetalleLicenciaEmpleados =
    "http://54.243.192.82/api/DetalleLicenciasEmpleados";
  const urlDeleteLicencia = "http://54.243.192.82/api/EliminarLicenciaPorId";
  const dispatch = useDispatch();
  const urlLicenciaEmpleados = "http://54.243.192.82/api/MostrarDatosLicencias";
  const idSelected = useSelector((state)=> state.licenciasState.idSelected);
  const licenciasDelEmpleado = useSelector((state)=> state.licenciasState.licenciasEmpleado);

  console.log(licenciasDelEmpleado)

  const urlUpdateDetalle = `http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=${detalleSeleccionado.idDetalleLicenciaEmpleado}&FechaSuspension=${formLicencias?.inputDateSuspLic}`;


  const [checked, setChecked] = useState(false);

  let urlNueva = "http://54.243.192.82/api/DetalleLicenciasEmpleados?IdDetalleLicenciaEmpleado=0&IdLicenciaEmpleado=${}&Desde=2017-07-21T17%3A32%3A28Z&Hasta=2017-07-21T17%3A32%3A28Z&NewId=0"

  console.log(detalleSeleccionado);

  let bodyLicencias = {
    idEmpleado: empleadoUno.iDempleado,
    año: Number(
      formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia
    ),
    diasDisponiblesTotales: formLicencias?.inputCantDiasDispLicencia,
    fechaVencimiento: formLicencias?.inputVencimientoLicencias,
    desde: null,
    hasta: null,
    fechaProrroga: null,
    nroResolucion: null,
  };
  let bodyLicenciasUpdateSolicita = {
    idLicenciaEmpleado: licenciaEmpleado?.idLicenciaEmpleado,
    idEmpleado: licenciaEmpleado?.idEmpleado,
    año: Number(
      formLicencias?.inputCboAñosLicencia && formLicencias?.inputCboAñosLicencia
    ),
    diasDisponiblesTotales: formLicencias?.inputCantDiasDispLicencia,
    fechaVencimiento: formLicencias?.inputVencimientoLicencias,
    desde: formLicencias?.inputDesdeSolicitaLic,
    hasta: formLicencias?.inputHastaSolicitaLic,
    fechaProrroga: null,
    nroResolucion: null,
  };
  let bodyLicenciasUpdateProrroga = {
    idLicenciaEmpleado: licenciaEmpleado?.idLicenciaEmpleado,
    idEmpleado: empleadoUno?.iDempleado,
    año: licenciaEmpleado?.año,
    diasDisponiblesTotales: licenciaEmpleado?.diasDisponiblesTotales,
    fechaVencimiento: licenciaEmpleado?.fechaVencimiento,
    diasDisponibles: licenciaEmpleado?.diasDisponibles,
    diasTomados: licenciaEmpleado?.diasTomados,
    fechaProrroga: formLicencias?.inputNuevaFechaLic,
    nroResolucion: formLicencias?.inputNuevaResolucionLic,
  };
  const arrayIds = useSelector((state)=> state.licenciasState.idsLic);

  console.log(arrayIds);
  console.log(idSelected)

  const bodyDetalleLicencia = {
    IdDetalleLicenciaEmpleado: 0,
    IdLicenciaEmpleado: licenciaEmpleado && licenciaEmpleado.idLicenciaEmpleado,
    Desde: formLicencias && formLicencias.inputDesdeSolicitaLic,
    Hasta: formLicencias && formLicencias.inputHastaSolicitaLic,
    FechaSuspencion: null,
  };

  let dateOne = new Date(formLicencias?.inputDesdeSolicitaLic).setHours(
    0,
    0,
    0,
    0
  );
  let dateTwo = new Date(
    licenciaEmpleado?.fechaVencimiento &&
      licenciaEmpleado?.fechaVencimiento.substring(
        0,
        licenciaEmpleado?.fechaVencimiento.length - 9
      )
  ).setHours(0, 0, 0, 0);

  let dateProrroga = new Date(formLicencias?.inputNuevaFechaLic).setHours(
    0,
    0,
    0,
    0
  );

  let dateHasta = new Date();

    const bodyDeleteSusp = {
      "idDetalleLicenciaEmpleado": detalleSeleccionado.idDetalleLicenciaEmpleado,
      "fechaSuspension": null
    }
    const bodyCreateSusp = {
      "idDetalleLicenciaEmpleado": detalleSeleccionado.idDetalleLicenciaEmpleado,
      "fechaSuspension": formLicencias?.inputDateSuspLic
    }

  async function deleteSuspencion() {
    try {
      axios
        .put(
          `http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyDeleteSusp
        )
        .then((res) => {
          setRefectch(!refetch);
        });
    } catch (err) {
      return swal({
        title: "Error",
        text: `Error al eliminar la fecha de suspensión`,
        icon: "error",
      });
    }
  }
  async function updateDetalle(url) {
    let dateDesde = new Date(detalleSeleccionado.desde).setHours(0, 0, 0, 0);
    let dateHasta = new Date(detalleSeleccionado.hasta).setHours(0, 0, 0, 0);
    let dateSusp = new Date(formLicencias?.inputDateSuspLic).setHours(
      0,
      0,
      0,
      0
    );

    if (detalleSeleccionado) {
      if (
        dateSusp.valueOf() < dateHasta.valueOf() &&
        !formLicencias?.inputQuitaSusp
      ) {
        try {
          await axios.put(`http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyCreateSusp).then((res) => {
            setRefectch(!refetch);
          });
        } catch (err) {
          return swal({
            title: "Error",
            text: `Error al insertar la fecha de suspensión`,
            icon: "error",
          });
        }
      } else if (formLicencias?.inputQuitaSusp) {
        try {
          axios
            .put(
              `http://54.243.192.82/api/DetalleLicenciasEmpleados`, bodyDeleteSusp
            )
            .then((res) => {
              setRefectch(!refetch);
            });
        } catch (err) {
          return swal({
            title: "Error",
            text: `Error al eliminar la fecha de suspensión`,
            icon: "error",
          });
        }
      } else {
        return swal({
          title: "Error",
          text: `Error la fecha de Suspensión debe ser menor a la Fecha de finalización`,
          icon: "error",
        });
      }
      return;
    }
    return swal({
      title: "Error",
      text: `Debe seleccionar un Detalle de Licencia`,
      icon: "error",
    });
  }
  async function updateData(url, bodyPetition, id) {
    if (dateTwo.valueOf() > dateProrroga) {
      return swal({
        title: "Error",
        text: `La fecha de Prorroga debe ser mayor a la Fecha de Vencimiento`,
        icon: "error",
      });
    }
    if (id) {
      try {
        await axios.put(url, bodyPetition).then((res) => {
          console.log(res.data.result);
          setRefectch(!refetch);
        });
      } catch (err) {
        return swal({
          title: "Error",
          text: `Error al actualizar la Licencia/Detalle de Licencia, error: ${err}`,
          icon: "error",
        });
      }
    } else
      return swal({
        title: "Error",
        text: `Debe seleccionar una Licencia/Detalle de Licencia`,
        icon: "error",
      });
  }
  function deleteLicenciaAxios(id) {
    debugger;
      dispatch(deleteLicEmpleado(id))     
      dispatch(saveIdsLic(id))
          
  }
  function deleteDetalleLicencia(urlDetalleLicenciaEmpleados, id) {
    try {
      axios.delete(`${urlDetalleLicenciaEmpleados}/${id}`).then((res) => {
        console.log(res);
        setRefectch(!refetch);
      });
    } catch (err) {
      swal({
        title: "Error",
        text: `${err}`,
        icon: "error",
      });
    }
  }
  console.log(idSelected)

  function deleteWithOptions() {
    switch (selectedOption) {
      case 

        "1 - Disponibles por Periodo" ||
        "3 - Prorroga Vencimiento" ||
        "2 - Solicita Nueva Licencia":
        deleteLicenciaAxios(idSelected);
        break;
      case "4 - Suspende Licencia":
        updateData(
          urlDeleteLicencia,
          bodyLicenciasUpdateSolicita,
          updateLicencia,
          licenciaEmpleado.idEmpleado
        );
        break;

      default:
        return null;
    }
  }
  function fetchApiWithOptions() {
    switch (selectedOption) {
      case "1 - Disponibles por Periodo":
        sendData(urlCreateLicencia, addNewLicencia);
        break;
      case "2 - Solicita Nueva Licencia":
        solicitanuevaLic(bodyDetalleLicencia);
        break;
      case "3 - Prorroga Vencimiento":
        updateData(
          urlLicencias,
          bodyLicenciasUpdateProrroga,
          updateLicencia,
          licenciaEmpleado.idLicenciaEmpleado
        );
        break;
      case "4 - Suspende Licencia":
        updateDetalle(urlUpdateDetalle);
        break;
      default:
        return null;
    }
  }

  async function solicitanuevaLic(bodyDetalleLicencia) {
    debugger;
    if (licenciaEmpleado.fechaProrroga && licenciaEmpleado.fechaProrroga) {
      let dateProrroga = new Date(licenciaEmpleado.fechaProrroga).setHours(
        0,
        0,
        0,
        0
      );
      if (dateOne.valueOf() < dateProrroga.valueOf()) {
        await axios.post(urlCreateDetalleLicencia).then((res) => {
          console.log(res);
          setRefectch(!refetch);
        });
      } else {
        return swal({
          title: "Error",
          text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Prórroga`,
          icon: "error",
        });
      }
      return;
    }
    if (dateOne.valueOf() < dateTwo.valueOf()) {
      await axios.post(urlCreateDetalleLicencia).then((res) => {
        console.log(res);
        setRefectch(!refetch);
      });
    } else
      return swal({
        title: "Error",
        text: `La fecha de nueva Licencia no puede ser superior a la Fecha de Vencimiento`,
        icon: "error",
      });
  }
  return (
    <>
      <div>
        <fieldset className="border p-2">
          <legend className="float-none w-auto p-2">
            {selectedOption &&
              selectedOption === "1 - Disponibles por Periodo" &&
              "Cargar disponibles por periodo"}
            {selectedOption &&
              selectedOption === "2 - Solicita Nueva Licencia" &&
              "Solicita Nueva Licencia"}
            {selectedOption &&
              selectedOption === "3 - Prorroga Vencimiento" &&
              "Prorroga Vencimiento"}
            {selectedOption &&
              selectedOption === "4 - Suspende Licencia" &&
              "Suspende Licencia"}
          </legend>
          <div className="row">
            <div className="col-xl-4"></div>
            {selectedOption &&
              selectedOption === "1 - Disponibles por Periodo" && (
                <PorPeriodo
                  setChecked={setChecked}
                  checked={checked}
                  sendData={sendData}
                  valueForm={valueForm}
                  onChange={onChange}
                  valueId={valueId}
                  array={array}
                  propArrayOpFem={propArrayOpFem}
                />
              )}
            {selectedOption &&
              selectedOption === "2 - Solicita Nueva Licencia" && (
                <NuevaLicencia
                  setChecked={setChecked}
                  checked={checked}
                  valueForm={valueForm}
                  onChange={onChange}
                  valueId={valueId}
                  array={array}
                  propArrayOpFem={propArrayOpFem}
                />
              )}
            {selectedOption &&
              selectedOption === "3 - Prorroga Vencimiento" && (
                <Prorroga
                  setChecked={setChecked}
                  checked={checked}
                  valueForm={valueForm}
                  onChange={onChange}
                />
              )}
            {selectedOption && selectedOption === "4 - Suspende Licencia" && (
              <FechaSuspencion
                setCheckeds={setChecked}
                checked={checked}
                valueForm={valueForm}
                onChange={onChange}
              />
            )}
          </div>
        </fieldset>
        <div className="col-xl-12 d-flex flex-row-reverse mt-2">
          <button
            className="btn btn-outline-danger btnAgregar"
            onClick={deleteWithOptions}
          >
            -
          </button>
          <button
            className="btn btn-outline-success btnAgregar"
            onClick={fetchApiWithOptions}
          >
            +
          </button>
        </div>
        <TableLicencias
          refetch={refetch}
          setRefectch={setRefectch}
          setChecked={setChecked}
          checked={checked}
          licenciaDelEmpleado={licenciasDelEmpleado}
          columns={columns1}
          value={[]}
        />
        <div className="col-xl-12 d-flex flex-row-reverse mt-2">
          <button
            className="btn btn-outline-danger btnAgregar"
            onClick={() =>
              deleteDetalleLicencia(
                urlDetalleLicenciaEmpleados,
                detalleSeleccionado.idDetalleLicenciaEmpleado
              )
            }
          >
            -
          </button>
        </div>
        <TableSuspenLicencia
          detalleSeleccionado={detalleSeleccionado}
          licenciaDelEmpleado={licenciaDelEmpleado}
          detalleLicencia={detalleLicencia}
          columns={columns2}
          value={[]}
        />
      </div>
    </>
  );
};

export default FieldSet;
