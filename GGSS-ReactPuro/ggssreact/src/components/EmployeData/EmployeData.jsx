// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { employeContext } from "../../context/employeContext";
import InputEmpData from "../Inputs/InputEmpData/InputEmpData";
import "./EmployeData.css";

const EmployeData = ({disabled}) => {
  const { saveEmpl , saveEstado } = useContext(employeContext);
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const estadosCiviles = useSelector((state)=> state.generalState.estadosCiviles);
  const [image, setImage] = useState("");

  const idEstadoSelec = empleadoUno && empleadoUno.idEstado;
  const estadoSEleccionado = estadosCiviles && estadosCiviles.find(est => est.idEstado === idEstadoSelec); 

  useEffect(() => {
    setImageEmpleado()
  }, [empleadoUno.obsFechaIngreso]);

    function setImageEmpleado(){
      empleadoUno.obsFechaIngreso !== undefined && setImage(empleadoUno.obsFechaIngreso);
    }
  console.log(empleadoUno && empleadoUno)
  return (
        <div className="container-flex border border-3 p-2 text-start py-2">
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
                  empleadoUno && empleadoUno.legajo
                }
                nameLabel="Legajo: "
                disabled={disabled}
                />
            <InputEmpData
                idInput="apellidoInfo"
                // className="apellido"
                inputValue={
                  empleadoUno && empleadoUno.apellido
                }
                nameLabel="Apellido: "
                disabled={disabled}
                />
          
            <InputEmpData
                  idInput="tipoDNIInfo"
                  inputValue={
                    empleadoUno && empleadoUno.nroDocumento
                  }
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
                    empleadoUno && empleadoUno.nombres
                  }
                  nameLabel="Nombres: "
                  disabled={disabled}
                />
            </div>

          </div>
          </div>
          
  );
};
export default EmployeData;