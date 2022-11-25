import "./TableBootstrap.css";

const TableBasic1 = ({columns, value}) => {
  

  return (
    <>
    <table class="table">
      <thead>
        <tr>
          {
            columns && columns.map((col)=>{
              return(
                <th scope="col">{col}</th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          value && value.map((valor)=>{
            return(
              <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
            )
          })
        }        
      </tbody>
    </table>
    <div className="col-xl-12 d-flex flex-row-reverse ">
      <button className="btn btn-outline-danger btnAgregar">-</button>
    </div>
    </>
  );
};

export default TableBasic1;
