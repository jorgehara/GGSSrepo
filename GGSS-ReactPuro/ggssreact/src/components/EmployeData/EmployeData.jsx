// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = ({disabled}) => {
  const [image, setImage] = useState("");


  
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
           
                nameLabel="Legajo: "
                disabled={disabled}
                />
            <InputEmpData
                idInput="apellidoInfo"
                // className="apellido"
               
                nameLabel="Apellido: "
                disabled={disabled}
                />
          
            <InputEmpData
                  idInput="tipoDNIInfo"
                
                  nameLabel="NroDoc:"
                  disabled={disabled}
                />
              </div>
            </div>
              <div className="col-5  d-flex-column align-items-center">
                <InputEmpData
                  idInput="estadoInfo"
                 
                  nameLabel="Estado: "
                  disabled={disabled}
                />
                <InputEmpData
                  idInput="nombresInfo"
                 
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