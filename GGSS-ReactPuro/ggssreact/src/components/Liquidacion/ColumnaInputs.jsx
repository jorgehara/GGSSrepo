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
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Categoría"
          placeholder="Categoría"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Agrupamiento"
          placeholder="Agrupamiento"
        />
      </div>
      <div className="col-xl-6">
        <InputButton nameButton="..." nameLabel="Cargo" placeholder="Cargo" />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Tarea desempeñada"
          placeholder="Tarea desempeñada"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Modo de Contratación"
          placeholder="Modo de Contratación"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Modo de Liquidación"
          placeholder="Modo de Liquidación"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Centro de Costo"
          placeholder="Centro de Costo"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Secretaria/Sector/Dpto"
          placeholder="Secretaria/Sector/Dpto"
        />
      </div>
      <div className="col-xl-6">
        <InputButton
          nameButton="..."
          nameLabel="Obra Social"
          placeholder="Obra Social"
        />
      </div>
    </>
  );
};

export default ColumnaInputs;
