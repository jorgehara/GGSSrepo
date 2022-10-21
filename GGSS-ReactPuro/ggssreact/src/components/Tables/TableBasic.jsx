import React from 'react'

const TableBasic = ({columns}) => {
  return (
    <><div className='row mt-5'>
          <table class="table-danger table-striped">
              <thead>
                  <tr>
                      {columns.map(col => {
                          return (
                              <th scope="col" class="px-2">{col}</th>
                          )
                      })}
                  </tr>
              </thead>
              <tbody class="table-group-divider" id="cuerpodetabla">
                  {columns.map(col => {
                      return (
                          <th scope="row" class="px-2">
                              {col.toString() === "Predeterminado" ? <input type="checkbox" class="border-0 px-2" id="capitulo" placeholder={col}></input> : <input type="text" class="border-0 px-2" id="opcion2" placeholder={col}></input>}
                          </th>
                      )
                  })}
              </tbody>
          </table>
      </div>
        <div className='mt-2 d-md-flex justify-content-md-end'>
            <button className='btn btn-danger btn-lg'>Quitar</button>
            <button className='btn btn-success btn-lg ml-2'>Agregar</button>
        </div>
    </>
    
  )
}

export default TableBasic