import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = () => {
  const { saveEmpl } = useContext(employeContext);
  const [image, setImage] = useState("");
  const url = `http://54.243.192.82/api/ArchivosDocumentacionEmpleados/${saveEmpl[0].iDempleado}`;

  useEffect(() => {
    try {
      axios.get(url).then((res) => {
        console.log(res);
        if (res.status === 404) {
          setImage("");
          return;
        }
        setImage(res.data.archivo);
      });
    } catch (err) {
      setImage("");
    }
  }, [url]);

  console.log(image);
  console.log(saveEmpl[0].iDempleado);
  console.log(url);
  return (
    <div className="container-flex">
      <div className="container border border-2 p-3">
        <div class="container text-start">
            <div class="row">
          <div class="col-2">
            <img
              className="border border-3 imgData"
              id="imagen"
              src={`data:image/pdf;base64,${image}`}
              alt=""
              style={{ width: "150px;", height: "150px;" }}
            />
          </div>
          <div class="col-5"> 
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
          <div class="col">
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