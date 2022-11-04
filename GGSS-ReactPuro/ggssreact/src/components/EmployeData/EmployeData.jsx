import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = () => {
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
  console.log(saveEmpl[0]);
  
  return (
    <div className="container-flex">
      <div className="container border border-2 p-3">
        <div className="container text-start">
            <div className="row">
              <div className="col-2 d-flex align-items-center">
                <img
                  className="border border-3 imgData"
                  id="imagen"
                  src={`data:image/jpeg;base64,${image}`}
                  alt=""
                  style={{ width: "150px;", height: "150px;" }}
                />
             </div>
              <div className="col-3  d-flex align-items-center"> 
              <div>
            <InputEmpData
                idInput="legajoInfo"
                // className="legajoNro"
                // style={{ marginLeft: "50px;" }}
                inputValue=
                {
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                ? saveEmpl[0].legajo
                : null
                }
                nameLabel="Legajo N°: "
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
                />
          
            <InputEmpData
                  idInput="tipoDNIInfo"
                  inputValue={
                    saveEmpl[0] !== undefined || saveEmpl[0] === null
                      ? saveEmpl[0].nroDocumento
                      : null
                  }
                  nameLabel="Documento N°:"
                />
              </div>
             </div>
              <div className="col-2  d-flex-column align-items-center">
                <InputEmpData
                  idInput="estadoInfo"
                  inputValue={
                    estadoSEleccionado !== undefined ? estadoSEleccionado.nombreEstado : "Sin Estado"
                  }
                  nameLabel="Estado: "
                />
                <InputEmpData
                  idInput="nombresInfo"
                  inputValue={
                    saveEmpl[0] !== undefined || saveEmpl[0] === null
                      ? saveEmpl[0].nombres
                      : null
                  }
                  nameLabel="Nombres: "
                />
             </div>

          </div>
          </div>
          
        </div>
      </div>
  );
};
export default EmployeData;