import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFamiliar } from "../../redux/actions/familiaActions";

const TableBasic = ({
  columns,
  array,
  parentescos,
  onSelect,
  seleccionado,
}) => {
  const [checked, setChecked] = useState(false);
  const [inputCheck, setInputCheck] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setInputCheck({});
  }, [array]);

  function parentescoFamiliar(idParentesco) {
    let result = null;
    parentescos.map((par) => {
      if (par.iDparentesco === idParentesco) {
        result = par;
        return result;
      }
    });
    return result.nombreParentesco;
  }
  useEffect(() => {}, [inputCheck]);

  return (
    <>
      <div className="overflow-scroll ">
        <table className="table table-danger table-fit ">
          <thead>
            <tr>
              <th>Sel.</th>
              {columns.map((col, i) => {
                return (
                  <>
                    <td key={i} scope="col-12" className="px-5">
                      {col}
                    </td>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody className="table-group-divider" id="cuerpodetabla">
            { array && array.map((col, i) => {
              return (
                <tr scope="row" className="px-5" key={i}>
                  <th scope="row">
                    {" "}
                    <input
                      type="radio"
                      checked={inputCheck[`selected${i}`]}
                      name="imputRadio"
                      value={col.iDfamiliares}
                      id={`selected${i}`}
                      onClick={(e) => dispatch(addNewFamiliar(col.iDfamiliares))}
                    />
                  </th>
                  <td
                  className=""
                  key={col.iDfamiliares}>{col.apellidoyNombres}
                  </td>
                  <td>{"D.N.I"}</td>
                  <td>{col.nroDocumento}</td>
                  <td>{col.sexo}</td>
                  <td>{parentescoFamiliar(col.iDparentesco)}</td>
                  <td>
                    {col.fechaNacimiento.substring(
                      0,
                      col.fechaNacimiento.length - 9
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{col.fBaja}</td>
                  <td>{col.noDeducirGanancias}</td>
                  <td>{col.inlcuirCuotaAlimentaria}</td>
                  <td>{col.obs}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBasic;
