// //Domicilios

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const Ejemplo = () => {
//     const [listCalles, setListCalles] = useState([]);
//     const [predeterminado, setPredeterminado] = useState(false);

//     useEffect(()=>{
//         fetch("htt")
//         .then(resp => resp.json)
//         .then(resp =>  setListCalles(res));
//     },[]);

//     const validarPredeterminado =(lista)=>{
//         listaCalles.map(calle =>{
//             if(calle.predeterminado){
//                 // ponelo en falso
//             }
//             else {
//                 setPredeterminado(true);
//             }

//         })
//     }
//   return (
//     <div>ejemplo</div>
//   )
// }
// export default Ejemplo


// //Html y validaciones sencillas con React


// // import React from 'react'
// // import { useEffect } from 'react';
// // import { useState } from 'react'

// // const ejemplo = () => {
// //     const [listCalles, setListCalles] = useState([]);
// //     const [predeterminado, setPredeterminado] = useState(false);

// //     //Errores
// //     const [error, setError] = useState("");

// //     // Paginacion    
// //     const [page, setPage] = useState(1);
// //     const [take, setTake] = useState(10);
// //     const [order, setOrder] = useState(false);

// //     useEffect(()=>{
// //         fetch(`http://52.90.12.208/convenios?page=${page}&take=${take}&order=false`)
// //         .then(resp => resp.json)
// //         .then(resp =>  setListCalles(res));
// //     },[page, take]);

// //     const setErrors =()=>{
// //         if(nombre === null || nombre === ""){
// //             swal({
// //                 title: "Error",
// //                 text: "Debe ingresar un nombre",
// //                 icon: "error",
// //               });
// //         }
// //     }
// //     const validarPredeterminado =(lista)=>{
// //         listaCalles.map(calle =>{
// //             if(calle.predeterminado){
// //                 ponelo en falso
// //             }
// //             else {
// //                 setPredeterminado(true);
// //             }

// //         })
// //     }
// //     const handleClickAnterior=(e)=>{
// //         if(page < 0){
// //             no se puede
// //         }
// //         e.preventDefault();
// //         let pagina = page - 1;
// //         setPage(pagina);
// //     }
// //     return (
// //         <><div>ejemplo</div><form action="">
// //             <label htmlFor="">
// //                 Nombre
// //                 <input type="text" onChange={(e)=> e.target.value}/>
// //                 <label htmlFor="">{error}</label>
// //             </label>
// //             <label htmlFor="">
// //                 <input type="text" />
// //             </label>
// //             <label htmlFor="">
// //                 <input type="text" />
// //             </label>
// //             <input type="text" onClick={handleClickAnterior} class="" >Anterior</input>
// //             <input type="button" value="" >{page}</input>
// //             <input type="text" onClick={handleClickSiguiente} >Siguiente</input>
// //             {
// //                 listCalles.map(calle => {
// //                     return (
// //                         <input type="text" >{page+1}</input>
// //                     )
// //                 })
// //             }
// //         </form></>
// //   )
// // }

// // export default Ejemplo