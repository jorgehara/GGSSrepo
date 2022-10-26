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
      <div className=" mt-2 border border-3 p-3">
        <div className="row">
          <div className="col-xl-2">
            <img
              className="border border-3 imgData"
              id="imagen"
              src={`data:image/pdf;base64,${image}`}
              alt=""
              style={{ width: "150px;", height: "150px;" }}
            />
          </div>
          <div className="col-xl-6 ml-4">
            <InputEmpData
              idInput="legajoInfo"
              inputValue={
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                  ? saveEmpl[0].legajo
                  : null
              }
              nameLabel="LEGAJO N°: "
            />
            <InputEmpData
              idInput="apellidoInfo"
              inputValue={
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                  ? saveEmpl[0].apellido
                  : null
              }
              nameLabel="Apellido: "
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
            <InputEmpData
              idInput="tipoDNIInfo"
              inputValue={
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                  ? saveEmpl[0].nroDocumento
                  : null
              }
              nameLabel="Nro Documento: "
            />
          </div>
          <div className="col-xl-3">
            <InputEmpData
              idInput="estadoInfo"
              inputValue={
                saveEmpl[0] !== undefined || saveEmpl[0] === null
                  ? saveEmpl[0].estado
                  : "Sin Estado"
              }
              nameLabel="Estado: "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeData;
