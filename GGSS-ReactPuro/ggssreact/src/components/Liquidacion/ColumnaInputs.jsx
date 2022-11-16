import React from "react";
import InputButton from "../Inputs/InputButton/InputButton";

const ColumnaInputs = () => {
  return (
    <>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Convenio"
          placeholder="Convenio"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Categoría"
          placeholder="Categoría"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Agrupamiento"
          placeholder="Agrupamiento"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton nameButton="..." nameLabel="Cargo" placeholder="Cargo" action=""/>
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Tarea desempeñada"
          placeholder="Tarea desempeñada"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Modo de Contratación"
          placeholder="Modo de Contratación"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Modo de Liquidación"
          placeholder="Modo de Liquidación"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Centro de Costo"
          placeholder="Centro de Costo"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Secretaria/Sector/Dpto"
          placeholder="Secretaria/Sector/Dpto"
          action=""
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Obra Social"
          placeholder="Obra Social"
          action=""
        />
      </div>
    </>
  );
};

export default ColumnaInputs;
