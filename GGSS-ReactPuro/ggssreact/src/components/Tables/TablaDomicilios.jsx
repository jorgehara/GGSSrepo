import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../services/fetchAPI";

const TablaDomicilios = ({ columns , value, empleadoSelect, departamentos, localidades, provincias, barrios, calles}) => {
  const [checkPredeterminado, setCheckPredeterminado] = useState("");
  const [domicilios, setDomicilios] = useState([]);

   const valor = value !== undefined && value !== null ? value.predeterminado : null;

   const inputValueDom=()=>{
    
    let calleSelect = "";
    let barrioSelect = "";
    let localidadSelect = "";
    let provinciaSelect = "";
    let departamentoSelect = "";

    return value.map((valor,index)=>{
        calleSelect = calles !== undefined ? calles.find((calle) => valor.idCalle === calle.idCalle) : null;
        barrioSelect = barrios !== undefined ? barrios.find((barrio)=> valor.idBarrio === barrio.idBarrio) : null;
      console.log(barrioSelect)
        localidadSelect = localidades !== undefined ? localidades.find((localidad)=> barrioSelect.idLocalidad === localidad.idLocalidad) : null;
        departamentoSelect = departamentos !== undefined ? departamentos.find((dpto)=> localidadSelect.idDepartamento === dpto.idDepartamento) : null;

        provinciaSelect = provincias !== undefined && provincias.find((provincia)=> departamentoSelect.idProvincia === provincia.idProvincia);
        const newDomicilios = {...valor, idCalle : calleSelect, idBarrio : barrioSelect, localidad : localidadSelect, provincia  : provinciaSelect, departamento : departamentoSelect}
        return( newDomicilios)
      })
      

  }
  useEffect(()=>{
    setInputValor();
    setDomicilios(inputValueDom());
  },[empleadoSelect.iDempleado])

  


  const setInputValor = () => {
     if (valor !== null && valor !== undefined && valor.toString() === "1") {
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
            {
              domicilios !== undefined && domicilios.map((valor, index)=>{
                return(
                  <tr>
                    <th>
                      <input  type="checkbox" className="border-0 px-2" id="capitulo" defaultChecked checked={checkPredeterminado}/>
                    </th>
                    <td>{valor !== undefined ? valor.idCalle.calle : null}</td>
                    <td>{valor !== undefined ? valor.idBarrio.barrio : null}</td>
                    <td>{valor !== undefined ? valor.localidad.localidad : null}</td>
                    <td>{valor !== undefined ? valor.dpto : null}</td>
                    <td>{valor !== undefined ? valor.provincia.provincia : null}</td>
                  </tr>
                  
                  )
              })
            }
          
              {/* {
                value.map((item, index)=>{
                  
                  return(
                    <tr scope="row">
                      <th scope="row">
                        <input  type="checkbox" className="border-0 px-2" id="capitulo" defaultChecked checked={checkPredeterminado}/>
                      </th>
                      <td>{Object.prototype.toString.call(calleSelec) === '[object Array]' ? calleSelec.calle : calleSelec}</td>
                      <td>{Object.prototype.toString.call(barrioSelec) === '[object Array]' ? barrioSelec.map((item)=>{return(item.barrio)}) : barrioSelec}</td>
                      <td>{Object.prototype.toString.call(localidadSelec) === '[object Array]' ? localidadSelec.localidad : localidadSelec}</td>
                      <td>{item.dpto}</td>
                      <td>{Object.prototype.toString.call(provinciaSelec) === '[object Array]' ? provinciaSelec.provincia : provinciaSelec}</td>
                    </tr>
                  )
                })
              } */}
           {/*  {
              value.map((valor, i)=>{
                console.log()
                let calleSelec = calle.filter((item)=> {return(item.idCalle === valor.idCalle)});
                let barrioSelec = barrio.filter((item)=> {return(item.idBarrio === valor.idBarrio)});
                let localidadSelec = localidad.filter((item)=> {return(item.idLocalidad === valor.idLocalidad)});
                console.log(localidadSelec)

                let provinciaSelec = provincia.filter((item)=> {return(item.idProvincia === valor.idProvincia)});
                return(
                  <>
                    
                    <td>{calleSelec.calle}</td>
                    <td>{barrioSelec.barrio}</td>
                    <td>{localidadSelec.localidad}</td>
                    <td>{valor.dpto}</td>
                    <td>{provinciaSelec.provincia}</td>
                    </>                  
                    )
              })
            } */}
            {/* {
                calle.map((value, i)=>{
                  return(
                      <th scope="row">
                      <td>{value.calle}</td>
                      </th>
                    
                  )
                })
            }
            {
              barrio.map((value,i)=>{
                return(
                    <th scope="row">
                      <td>{value.barrio}</td>
                    </th>
                )
              })
            }
            {
              localidad.map((value,i)=>{
                return(
                    <th scope="row">
                      <td>{value.localidad}</td>
                    </th>
                )
              })
            }
            {
              value.map((value,i)=>{
                return(
                  <tr>
                    <th>
                      <td>{value.dpto}</td>
                    </th>
                  </tr>
                )
              })
            }
            {
              provincia.map((value,i)=>{
                return(
                  <tr>
                    <th scope="row">
                      <td>{value.provincia}</td>
                    </th>
                  </tr>
                )
              })
            } */}
           {/*  {
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
            } */}
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

export default TablaDomicilios;
