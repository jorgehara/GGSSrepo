import React from 'react'

const TableBasic = ({columns}) => {
  return (
    <><div className='row mt-5 overflow-scroll'>
          <table className="table table-danger table-striped ">
              <thead>
                  <tr>
                      {columns.map((col, i) => {
                          return (
                              <td key={i} scope="col" className="px-2">{col}</td>
                          )
                      })}
                  </tr>
              </thead>
              <tbody className="table-group-divider" id="cuerpodetabla">
                <tr scope="row" className="px-2">
                    {columns.map((col, i) => {
                      return (
                                col.toString() === "Predeterminado" ? 
                                <td key={i} >
                                    <input type="checkbox" className="border-0 px-2" id="capitulo" placeholder={col}>
                                    </input>
                                </td> 
                                        : 
                                <td>
                                    <input type="text" className="border-0 px-2" id="opcion2" placeholder={col}>
                                    </input>
                                </td> 
                      )
                    })}
                  </tr>
              </tbody>
          </table>
      </div>
    </>
    
  )
}

export default TableBasic