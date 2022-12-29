import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { addDomTable, addOneDomicilio, selectedIdDomicilio } from "../../redux/actions/domiciliosActions";
import { getData } from "../../services/fetchAPI";

const TablaDomicilios = ({ columns , value, empleadoSelect, departamentos, localidades, provincias, barrios, calles}) => {
  const [checkPredeterminado, setCheckPredeterminado] = useState("");
  const [domicilios, setDomicilios] = useState([]);
  const [valueInitial, setValueInitial ] = useState([]);
  const [dataTable, setDataTable] = useState([]);

   
   useEffect(()=>{
    setValueInitial(value);
   },[value])

   useEffect(()=>{
    setInputValor();
    getDataTable();
    setDomicilios( getDataTable());
  },[valueInitial])
  console.log(valueInitial)

  const domiciliosTable = useSelector((state)=> state.domiciliosStates.domTable);
  console.log(dataTable)

  async function getDataTable(){
    if(valueInitial.length > 0){
      let array = []
      valueInitial && valueInitial.map(async (item)=>{
     
          await axios.get(`http://54.243.192.82/api/MostrarDatosPorIdDomicilio/${item.idDomicilio}`)
          .then((res)=> array.push(res.data[0]))
          console.log(array)
        
      })
      setDataTable(array)
    }
     
    
  } 

  //  const inputValueDom=(valor)=>{
    
  //   let calleSelect = "";
  //   let barrioSelect = "";
  //   let localidadSelect = "";
  //   let provinciaSelect = "";
  //   let departamentoSelect = "";
  //   return valor && valor.map((valor,index)=>{
      
  //       calleSelect = calles && calles.find((calle) => valor.idCalle === calle.idCalle);

  //       barrioSelect = barrios && calleSelect && barrios.find((barrio)=> valor.idBarrio === barrio.idBarrio);
      
  //       localidadSelect = localidades && barrioSelect && localidades.find((localidad)=> barrioSelect.idLocalidad === localidad.idLocalidad);

  //       departamentoSelect = departamentos && localidadSelect && departamentos.find((dpto)=> localidadSelect.idDepartamento === dpto.idDepartamento);

  //       provinciaSelect = provincias && departamentoSelect && provincias.find((provincia)=> departamentoSelect.idProvincia === provincia.idProvincia);

  //       const newDomicilios = {...valor, idCalle : calleSelect, idBarrio : barrioSelect, localidad : localidadSelect, provincia  : provinciaSelect, departamento : departamentoSelect}

  //       return( newDomicilios)
  //     })
      

  // }
  const valor = valueInitial && valueInitial.map((item)=>{return(item.predeterminado)});
   
 

  
const dispatch = useDispatch();

  const setInputValor = () => {
    valor && valor.map((item)=> {
      return (item === true ? setCheckPredeterminado("checked") : setCheckPredeterminado("")
      )
    });    
  }; 

 
  return (
    <>
      <div className="row mt-5 overflow-scroll">
        <table className="table table-danger">
          <thead>
            <tr>
              <th>Seleccionar</th>
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
              dataTable && dataTable.map((valor, i)=>{
                return(
                  <tr>
                    <th>
                      <input type="radio" name="seleccionar" id="seleccionar" value={valor.idDomicilio} onClick={(e)=> dispatch(selectedIdDomicilio(e.target.value))} />
                    </th>
                    <th>
                      <input  type="checkbox" disabled="disabled" className="border-0 px-2" id="capitulo"  value={valor.predeterminado} checked={valor.predeterminado === null ? false : valor.predeterminado}/>
                    </th>
                    <td>{valor &&  valor.calle}</td>
                    <td>{valor &&  valor.barrio}</td>
                    <td>{valor &&  valor.localidad}</td>
                    <td>{valor &&  valor.departamento }</td>
                    <td>{valor &&  valor.provincia}</td>
                  </tr>                  
                )
              })
              /* domicilios && domicilios.map((valor, index)=>{
                return(
                  <tr>
                    <th>
                      <input type="radio" name="seleccionar" id="seleccionar" value={valor.idDomicilio} onClick={(e)=> dispatch(selectedIdDomicilio(e.target.value))} />
                    </th>
                    <th>
                      <input  type="checkbox" disabled="disabled" className="border-0 px-2" id="capitulo"  value={valor.predeterminado} checked={valor.predeterminado === null ? false : valor.predeterminado}/>
                    </th>
                    <td>{valor && valor.idCalle !== undefined? valor.idCalle.calle : null}</td>
                    <td>{valor && valor.idBarrio !== undefined? valor.idBarrio.barrio : null}</td>
                    <td>{valor && valor.localidad !== undefined? valor.localidad.localidad : null}</td>
                    <td>{valor && valor.dpto !== undefined? valor.dpto : null}</td>
                    <td>{valor && valor.provincia !== undefined? valor.provincia.provincia : null}</td>
                  </tr>                  
                  )
              }) */
            }     
          </tbody>
        </table>        
      </div>
    </>
  );
};

export default TablaDomicilios;
