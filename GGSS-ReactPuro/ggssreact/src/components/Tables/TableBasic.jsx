import React, { useState } from 'react'

const TableBasic = ({columns, array, parentescos,onSelect, seleccionado}) => {
  const [checked, setChecked] = useState(false);
  const [inputCheck, setInputCheck] = useState({});
  
  function parentescoFamiliar(idParentesco){
    let result = null;
    parentescos.map((par)=> {
      if(par.iDparentesco === idParentesco){
        result = par;
        return result;
      }
    });
    return result.nombreParentesco;
  }
  function onChange(e){
    let name = e.target.name;
    let checked = e.target.checked;
    let newInput = {...inputCheck};
    newInput[name] = checked;
    setInputCheck(newInput);
    setChecked(checked);
  }
  console.log(inputCheck)
  return (

    <><div className='row mt-5 overflow-scroll'>
          <table className="table table-danger table-striped ">
              <thead>
                  <tr>
                  <th>Seleccionar</th>
                      {columns.map((col, i) => {
                          return (
                            <>
                              <td key={i} scope="col" className="px-2">{(col)}</td>
                            </>
                          )
                      })}
                  </tr>
              </thead>
              <tbody className="table-group-divider" id="cuerpodetabla">
                
                    {array.map((col, i) => {
                      return (
                        <tr scope="row" className="px-2" key={i}>
                                <th scope="row"> <input type="checkbox" checked={inputCheck[`selected${i}`]} onChange={(e)=> onChange(e)} name={`selected${i}`} id={`selected${i}`} onClick={!checked ? ()=>onSelect(array, col.iDfamiliares) : null}/></th>
                                <td key={col.iDfamiliares}>
                                    {col.apellidoyNombres}
                                </td> 
                                <td>
                                  {col.nroDocumento}
                                </td>
                                <td>
                                  {col.sexo}
                                </td>  
                                <td>
                                  {(col.fechaNacimiento).substring(0, (col.fechaNacimiento).length -9)}
                                </td>
                                <td>
                                  {parentescoFamiliar(col.iDparentesco)}
                                </td>
                                </tr>
                      )
                    })}
                  
              </tbody>
          </table>
      </div>
    </>
    
  )
}

export default TableBasic