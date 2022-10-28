import React from "react";

const TableBasic1 = ({ columns }) => {
  return (
    <>
      <div className="row mt-5 overflow-scroll">
        <table class="table-danger table-striped ">
          <thead>
            <tr>
              {columns.map((col) => {
                return (
                  <th scope="col" class="px-2">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody class="table-group-divider" id="cuerpodetabla">
            {columns.map((col) => {
              return (
                <th scope="row" class="px-2">
                  {col.toString() === "Predeterminado" ? (
                    <input
                      type="checkbox"
                      class="border-0 px-2"
                      id="capitulo"
                      placeholder={col}
                    ></input>
                  ) : (
                    <input
                      type="text"
                      class="border-0 px-2"
                      id="opcion2"
                      placeholder={col}
                    ></input>
                  )}
                </th>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableBasic1;
