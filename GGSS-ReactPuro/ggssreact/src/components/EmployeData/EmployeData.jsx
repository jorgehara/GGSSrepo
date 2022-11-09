import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = ({disabled}) => {
  const { saveEmpl , saveEstado } = useContext(employeContext);
  const [image, setImage] = useState("");
  const [data, setData ] = useState("");
  const idEstadoSelec = saveEmpl[0] !== undefined ? saveEmpl[0].idEstado : 0;
  const estadoSEleccionado = saveEstado !== undefined ? saveEstado.find(est => est.idEstado === idEstadoSelec) : "ARGENTINO"; 

  useEffect(() => {
    setImageEmpleado()
  }, [saveEmpl[0].obsFechaIngreso]);

    function setImageEmpleado(){
      saveEmpl[0].obsFechaIngreso !== undefined && setImage(saveEmpl[0].obsFechaIngreso);
    }
  
  return (
    <div className="container-fluid p-0">
      <div className="container-fluid border-3 border-bottom ">
        <div className="container text-start py-2">
            <div className="row">
              <div className="col-2 d-flex align-items-center">
                <img
                  className="border border-3 imgData"
                  id="imagen"
                  src={`data:image/jpeg;base64,${image}`}
                  alt=""
                  // style={{ width: "90px;", height: "90px;" }}
                />
             </div>
              <div className="col-5  d-flex-column align-items-center"> 
              <div className="row">
            <InputEmpData
                idInput=""
                inputValue=
                {
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                ? saveEmpl[0].legajo
                : null
                }
                nameLabel="Legajo: "
                disabled={disabled}
                />
            <InputEmpData
                idInput="apellidoInfo"
                // className="apellido"
                inputValue={
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                    ? saveEmpl[0].apellido
                    : null
                }
                nameLabel="Apellido: "
                disabled={disabled}
                />
          
            <InputEmpData
                  idInput="tipoDNIInfo"
                  inputValue={
                    saveEmpl[0] !== undefined || saveEmpl[0] === null
                      ? saveEmpl[0].nroDocumento
                      : null}
                  nameLabel="NroDoc:"
                  disabled={disabled}
                />
              </div>
            </div>
              <div className="col-5  d-flex-column align-items-center">
                <InputEmpData
                  idInput="estadoInfo"
                  inputValue={
                    estadoSEleccionado !== undefined ? estadoSEleccionado.nombreEstado : "Sin Estado"
                  }
                  nameLabel="Estado: "
                  disabled={disabled}
                />
                <InputEmpData
                  idInput="nombresInfo"
                  inputValue={
                    saveEmpl[0] !== undefined || saveEmpl[0] === null
                      ? saveEmpl[0].nombres
                      : null
                  }
                  nameLabel="Nombres: "
                  disabled={disabled}
                />
             </div>

          </div>
          </div>
          
        </div>
      </div>
  );
};
export default EmployeData;