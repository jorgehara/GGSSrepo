import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = () => {
  const { saveEmpl } = useContext(employeContext);
  const [image, setImage] = useState("");
  const [data, setData ] = useState("");

  useEffect(() => {
    setImageEmpleado()
  }, [saveEmpl[0].obsFechaIngreso]);

    function setImageEmpleado(){
      saveEmpl[0].obsFechaIngreso !== undefined && setImage(saveEmpl[0].obsFechaIngreso);
    }
  console.log(image);
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
                    saveEmpl[0] !== undefined || saveEmpl[0] === null
                      ? saveEmpl[0].estado
                      : "Sin Estado"
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