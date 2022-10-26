import React, { useContext, useEffect, useState } from "react";
import { employeContext } from "../../context/employeContext";
// import ButtonLarge from '../Buttons/ButtonLarge'
import InputButton from "../Inputs/InputButton/InputButton";
import InputForm from "../Inputs/InputForm/InputForm";
import TextArea from "../Inputs/TextArea/TextArea";
// import TableBasic from '../Tables/TableBasic'

const Domicilios = () => {
  const { saveDom } = useContext(employeContext);

  const [inputValue, setInputValue] = useState("");

//   console.log(saveDom[0].Barrio);

  useEffect(() => {

    setInputValor();
  }, [saveDom[0].predeterminado]);

  const setInputValor = () => {
    if (saveDom.length > 0 && saveDom[0].predeterminado === 1) {
      setInputValue("checked");
      return;
    }
    setInputValue("");
  };
  return (
    <div to="/domicilios" class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Domicilios
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <section className=
          ""
          
        //   "container"
          >
            <div className="row">
              {/* <div className="formulario__grupo">
                <label for="usuario" className="mainABMTitle">
                  Domicilios
                </label>
              </div> */}
              <div className="col-xl-6 ">
                <div className="mt-2">
                  <input
                    checked={inputValue}
                    type="checkbox"
                    name="predeterminado"
                    id="predeterminado"
                  />
                  <label className="ml-2" htmlFor="predeterminado">
                    Predeterminado
                  </label>
                </div>
                <InputForm
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].calle
                      : null
                  }
                  nameInput="Calle"
                  messageError="Solo puede contener números."
                  placeHolder="Ingrese Calle"
                />
                <InputButton
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Barrio
                      : null
                  }
                  nameLabel="Barrio"
                  nameButton="..."
                  placeholder="Ingrese Barrio"
                />
                <InputForm
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Provincia
                      : null
                  }
                  nameInput="Provincia"
                  messageError="Solo puede contener letras."
                  placeHolder="Ingrese Provincia"
                />
                <TextArea
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Obs
                      : null
                  }
                  inputName="Observaciones"
                />
              </div>
              <div className="col-xl-6">
                <InputButton
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].numCalle
                      : null
                  }
                  nameLabel="Número"
                  nameButton="..."
                  placeholder="123456"
                />
                <InputButton
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].pisoDepto
                      : null
                  }
                  nameLabel="Piso/Dpto/Ofic/Torre"
                  nameButton="..."
                  placeholder="Ingrese número"
                />
                <InputForm
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Departamento
                      : null
                  }
                  nameInput="Departamento"
                  messageError="Solo puede contener letras."
                  placeHolder="Ingrese Departamento"
                />
                <InputForm
                  value={
                    saveDom[0] !== undefined || saveDom[0] === null
                      ? saveDom[0].Localidad
                      : null
                  }
                  nameInput="Localidad/CP"
                  messageError="Solo puede contener letras."
                  placeHolder="Ingrese Localidad/CP"
                />
              </div>
            </div>
            {/* "Panel de acceso directo" */}
          </section>
        </div>
      </div>
    </div>
  );
};
export default Domicilios;
