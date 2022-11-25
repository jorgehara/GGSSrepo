import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFamiliar } from "../../redux/actions/familiaActions";

const TableBasic = ({
  columns,
  array,
  parentescos,
  onSelect,
  seleccionado,
  estudios,
  paisOrigenNac,
  tiposDni  
}) => {
  const [checked, setChecked] = useState(false);
  const [inputCheck, setInputCheck] = useState({});
  const [familiares, setFamiliares ] = useState([]);
  const dispatch = useDispatch();
  
  
  
  useEffect(() => {
    setInputCheck({});
    setFamiliares(inputValueDom(array));
  }, [array]);

    console.log(array)

  const inputValueDom=(valor)=>{
    
    let estudioSelect = "";
    let nacionalidadSelected = "";
    let paisOrigenSelect = "";
    let parentescosSelect = "";
    let tipoDniSelec = "";

    return valor && valor.map((valor,index)=>{
      
        estudioSelect = estudios && estudios.find((est) => valor.iDestudios === est.iDestudios);

        nacionalidadSelected =paisOrigenNac && paisOrigenNac.find((nac)=> valor.iDnacionalidad === nac.nacionalidad_masc || valor.iDnacionalidad === nac.nacionalidad_fem);
      
        paisOrigenSelect = paisOrigenNac && paisOrigenNac.find((pais)=> valor.iDpaisOrigen === pais.idPais);

        parentescosSelect = parentescos && parentescos.find((paren)=> valor.iDparentesco === paren.iDparentesco);

        tipoDniSelec = tiposDni && tiposDni.find((tipoDni)=> valor.iDtipoDocumento === tipoDni.iDtipoDocumento);

        const newDomicilios = {...valor, iDestudios : estudioSelect, iDnacionalidad : nacionalidadSelected, iDpaisOrigen : paisOrigenSelect, iDparentesco  : parentescosSelect, iDtipoDocumento : tipoDniSelec}
        console.log(valor)
        return( newDomicilios)
      })
      

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
            { familiares && familiares.map((col, i) => {
              console.log(col)
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
                  <td>{col.iDtipodocumento && col.iDtipodocumento.tipodocumento}</td>
                  <td>{col && col.nroDocumento}</td>
                  <td>{col && col.sexo}</td>
                  <td>{col.iDparentesco && col.iDparentesco.nombreParentesco}</td>
                  <td>
                    {col.fechaNacimiento.substring(
                      0,
                      col.fechaNacimiento.length - 9
                    )}
                  </td>
                  <td>{col.iDpaisOrigen && col.iDpaisOrigen.nombrePais}</td>
                  <td>{col.iDnacionalidad && col.iDnacionalidad.nacionalidad}</td>
                  <td>{col.iDestudios && col.iDestudios.estudiosNivel}</td>
                  <td>{col.fBaja && col.fBaja.substring(
                      0,
                      col.fBaja.length - 9
                    )}</td>
                  <td>{col.noDeducirGanancias === false ? "No deduce" : "Si deduce"}</td>
                  <td>{col.inlcuirCuotaAlimentaria === false ? "No incluye" : "Incluye"}</td>
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
