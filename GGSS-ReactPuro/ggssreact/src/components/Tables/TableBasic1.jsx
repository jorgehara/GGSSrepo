import "./TableBootstrap.css";

const TableBasic1 = ({columns, value,documentaciones}) => {
  
  
  
  
  function getDocumentacion(documentaciones,id){
    let document = documentaciones && documentaciones.filter((item)=>{
      return item.idDocumentacion === id
    })
    return document[0]
  }
  console.log(documentaciones);
  return (
    <>
    <table class="table table-danger">
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
                <th scope="row">{valor.fecha ? valor.fecha : "-"}</th>
                <td>{valor.fechaVencimiento ? valor.fechaVencimiento : "-"}</td>
                <td>{getDocumentacion(documentaciones, valor.idDocumentacion).documentacion1}</td>
                <td>{valor.generaLiquidacion === true ? "Genera" : "No genera"}</td>
                <td>{valor.obs ?valor.obs : "-"}</td>
                <td>{valor.incluirCuotaAlimentaria === true ? "Incluye" : "No incluye"}</td>
              </tr>
            )
          })
        }        
      </tbody>
    </table>
    </>
  );
};

export default TableBasic1;
