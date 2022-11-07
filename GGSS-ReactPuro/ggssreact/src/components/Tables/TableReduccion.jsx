import React from 'react'
import './TableBootstrap.css'

const TableReduccion = ({column, data}) => {

    console.log(column)
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="tableHeader text-light">

                    <tr>{column !== undefined ? column.map((item, index) => {return (<TableHeadItem key={index} item={item}/>)}) : null}</tr>
                </thead>
                <tbody>
                    <tr>
                        <td>asdasd</td>
                        <td>gsdghsd</td>
                        <td>dfghtrtr</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const TableHeadItem = ({ item }) => <th>{console.log(item)}</th>

// const TableRow = ({ item }) => 

export default TableReduccion
