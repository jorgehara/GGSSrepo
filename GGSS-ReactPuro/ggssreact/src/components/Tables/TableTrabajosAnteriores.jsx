import React from 'react'

const TableTrabajosAnteriores = ({nameLabel, columns, array, propItemOp}) => {
  return (
    <>
    <div className='d-flex flex-row justify-content-start align-items-start'> 
        <label htmlFor="">{nameLabel}</label>   
        <table class="table ">
            <thead>
                {
                    columns && columns.map((col,i)=>{
                        return(
                                <th key={i} scope="col">{col}</th>
                        )
                    })
                }
                
            </thead>
            <tbody>
                {
                    array && array.map((item)=>{
                        return(
                            <tr>
                                <th scope="row">{item.desde && item.desde.substring(
                                                0,
                                                item.desde.length - 9
                                                )}
                                </th>
                                <td>{item.hasta && item.hasta.substring(0, item.hasta.length -9)}</td>
                                <td>{item.descripcion}</td>
                            </tr>
                        )
                    })
                }                
            </tbody>
        </table>
    </div>
    <div className='col-xl-3'>
        <button className="btn btn-danger btn-sm ">
            Modificar Datos
        </button>
    </div>
    </>
  )
}

export default TableTrabajosAnteriores