import React from 'react'

const TableExtras = ({columns}) => {
  return (
    <table class="table">
        <thead>
            <tr >
                {
                    columns.map((col, i)=>{
                        return(
                            
                                <th key={i} scope="col">{col}</th>
                            
                        )
                    })
                }   
            </tr>         
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableExtras