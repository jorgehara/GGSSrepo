import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../services/fetchAPI";

const TablaDomicilios = ({ columns , value}) => {
  //const valor = value !== undefined && value !== null ? value.map((valor, i)=>{return (valor.predeterminado)}) : "";
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const [ checkPredeterminado, setCheckPredeterminado ] = useState("");
  const [ barrio, setBarrio] = useState([]);
  const [ calle, setCalle] = useState([]);
  const [ localidad, setLocalidad] = useState([]);
  const [departamento, setDepartamento ] = useState([]);
  const [ provincia, setProvincia] = useState([]);

  const urlBarrios = `http://54.243.192.82/api/Barrios/${value !== undefined && value !== null && value.idBarrio}`;
  const urlCalles = `http://54.243.192.82/api/Calles/${value !== undefined && value !== null && value.idCalle}`;
  const urlLocalidades = `http://54.243.192.82/api/Localidades/${barrio.idLocalidad}`;

  let calleSelec = null;
  let barrioSelec = null;
  let localidadSelec = null;
  let provinciaSelec = null;


  const empleado = (empleadoUno[0] !== undefined && empleadoUno[0].iDempleado)
  //useEffect(() => {
  //  setInputValor();
  //}, [valor.toString()])
  const valueSinNull = value !== undefined && value !== null && value;
  console.log(valueSinNull)
  let barrios = [];
  let calles = [];
  let localidades = [];
  let departamentos = [];
  let provincias = [];
  
  
  useEffect(()=>{
    

    value.map(async (item, index)=>{
      return (await axios.get(`http://54.243.192.82/api/Barrios/${item.idBarrio}`)
      .then((res)=> barrios.push(res.data.result)));
    });
    setBarrio(barrios);
    value.map(async (item, index)=>{
      return (await axios.get(`http://54.243.192.82/api/Calles/${item.idCalle}`)
      .then((res)=> calles.push(res.data.result)))
    });    
    setCalle(calles);
    console.log(calles)
    barrio.map(async (item, index)=>{ 
      return( await axios.get(`http://54.243.192.82/api/Localidades/${item.idLocalidad}`)
      .then((res)=> localidades.push(res.data.result)))
    })
    setLocalidad(localidades);

    Object.prototype.toString.call(localidad) === '[object Array]' ? localidad.map(async (item, index)=>{ 
      return(await axios.get(`http://54.243.192.82/api/Departamentos/${item.idDepartamento}`)
      .then((res)=> departamentos.push(res.data.result)))
    }) : axios.get(`http://54.243.192.82/api/Departamentos/${localidad.idDepartamento}`)
    .then((res)=> departamentos.push(res.data.result));

    setDepartamento(departamentos);

    Object.prototype.toString.call(departamento) === '[object Array]' ? departamento.map(async (item, index)=>{ 
      return(await axios.get(`http://54.243.192.82/api/Provincias/${item.idProvincia}`)
      .then((res)=> provincias.push(res.data.result)))
    }) : axios.get(`http://54.243.192.82/api/Provincias/${departamento.idProvincia}`)
    .then((res)=> provincias.push(res.data.result))
    setProvincia(provincias);
    getValues();

  },[empleado])

 

  function getValues(){
    value.map((item,index)=>{
      calleSelec = Object.prototype.toString.call(calle) === '[object Array]' ? calle.filter((calle)=> {return(calle.idCalle === item.idCalle)}) : calle.calle;
      barrioSelec = Object.prototype.toString.call(barrio) === '[object Array]' ? barrio.filter((barrio)=> {return(barrio.idBarrio === item.idBarrio)}) : barrio.barrio;
      
     barrio.map((items,index)=>{
       localidadSelec = Object.prototype.toString.call(localidad) === '[object Array]' ? localidad.filter((localidad)=> {return(localidad.idLocalidad === items.idLocalidad)}) : localidad.localidad;
       provinciaSelec = Object.prototype.toString.call(provincia) === '[object Array]' ? provincia.filter((provincia)=> {return(provincia.idProvincia === items.idProvincia)}) : provincia.provincia;
      console.log(calleSelec)
      return (calleSelec, barrioSelec, localidadSelec, provinciaSelec);
     })
     return (calleSelec, barrioSelec,localidadSelec,provinciaSelec)
   })
   return;
  }
 


  console.log(calleSelec)
  console.log(barrio)
  console.log(localidadSelec)
  console.log(departamento)
  console.log(provinciaSelec)

  //console.log(barrios[0] !== undefined ? barrios[0].barrio : null);


  /*const setInputValor = () => {
     if (valor.toString() === "1") {
      setCheckPredeterminado("checked");
      return;
    }
    setCheckPredeterminado("");
  }; */

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
              }
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
