import React, { useEffect } from "react";
import { useState } from "react";

const TableBasic1 = ({ columns , value}) => {
  const valor = value !== undefined ? value.map((valor, i)=>{return (valor.predeterminado)}) : null;

  const [ checkPredeterminado, setCheckPredeterminado ] = useState("");

  useEffect(() => {
    setInputValor();
  }, [valor.toString()])
  
  const setInputValor = () => {
    if (valor.toString() === "1") {
      setCheckPredeterminado("checked");
      return;
    }
    setCheckPredeterminado("");
  };
  
    

  return (
    <>
      <div className="row mt-5 overflow-scroll">
        <table className="table table-danger">
          <thead>
            <tr>
              {columns.map((col, i) => {
                return (
                  <th key={i} scope="col" className="px-2">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
          <tr >
            {
               value.map((valor, i)=>{                          
                return(
                  <>
                    
                    <td>
                      <input type="checkbox" className="border-0 px-2" id="capitulo" defaultChecked checked={checkPredeterminado}/>
                    </td>
                    <td>{valor.calle !== undefined ? (valor.calle).toString() : null}</td>
                    <td>{valor.numCalle !== undefined ? (valor.numCalle).toString() : null}</td>
                    <td>{valor.Barrio !== undefined ? (valor.Barrio).toString() : null}</td>
                    <td>{valor.Localidad !== undefined ? (valor.Localidad).toString() : null}</td>
                    <td>{valor.pisoDepto !== undefined ? (valor.pisoDepto).toString() : null}</td>
                    <td>{valor.Provincia !== undefined ? (valor.Provincia).toString() : null}</td>
                    <td>{valor.Obs !== undefined ? (valor.Obs).toString() : null}</td>
                  </>
                )                 
                
              }) 
            }
            </tr> 
          </tbody>
        </table>
        {/* <table className="table-danger table-striped ">
          <thead>
            <tr>
              {columns.map((col, i) => {
                return (
                  <td key={i} scope="col" className="px-2">
                    {col}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody className="table-group-divider" id="cuerpodetabla">            
            {columns.map((col, i) => {
              return (
                <tr key={i} scope="row" className="px-2">
                  {col.toString() === "Predeterminado" ? (
                    <td> <input
                      type="checkbox"
                      className="border-0 px-2"
                      id="capitulo"
                      placeholder={col}
                    ></input></td> 
                  ) : (
                    <td> <input
                      type="text"
                      className="border-0 px-2"
                      id="opcion2"
                      placeholder={col}
                    ></input></td> 
                  )}
                </tr>
              );
            })}
          </tbody> 
        </table>*/}
      </div>
    </>
  );
};

export default TableBasic1;
