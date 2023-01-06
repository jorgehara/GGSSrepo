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
  //const [dataTable, setDataTable] = useState([]);
  const recharge = useSelector((state)=> state.domiciliosStates.recharge);
   
   useEffect(()=>{
    setValueInitial(value);
   },[value])

   useEffect(()=>{
    setInputValor();
  },[recharge])

  
  const dataTable = useSelector((state)=> state.domiciliosStates.domicilioEmpleado);
  const domiciliosTable = useSelector((state)=> state.domiciliosStates.domTable);
  



 
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
             
            }     
          </tbody>
        </table>        
      </div>
    </>
  );
};

export default TablaDomicilios;
