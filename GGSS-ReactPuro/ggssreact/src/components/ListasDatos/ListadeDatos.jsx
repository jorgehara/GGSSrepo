// import React from 'react'
// // import {Route} from "react-router-dom";
// import ButtonCallModal from '../Buttons/ButtonCallModal';
// import BasicModal from '../Modals/BasicModal/BasicModal';
// import { useLocation, useParams } from 'react-router-dom'
// import ModalMascFem from '../Modals/ModalMascFem/ModalMascFem';
// import ModalParentescos from '../Modals/ModalParentescos/ModalParentescos';
// import BasicModalSelectObs from '../Modals/BasicModalSelectObs/BasicModalSelectObs';
// import ModalSelectDateObs from '../Modals/ModalSelectDateObs/ModalSelectDateObs';
// import BasicModalObs from '../Modals/BasicModalObs/BasicModalObs';
// import ModalPaises from '../Modals/ModalPaises/ModalPaises';
// import ModalPDLB from '../Modals/ModalPDLB/ModalPDLB';
// // import ModalEmpleadores from '../Modals/ModalEmpleadores/ModalEmpleadores';

// const ListasDeDatos = () => {

//   const { idCategory } = useParams()
//   const location = useLocation();
//   console.log(location.pathname)
//   return (
//     <div>
      
//       {location.pathname == "/lista-datos/estadoCivil" &&
//         <>
//           <ButtonCallModal idModal="EstadoCivil" nameButton="Estados Civiles" />
//           <ModalMascFem idModal="EstadoCivil" nameModal="Estados Civiles" />
//         </>
//       }

//       {location.pathname == "estudios" &&

//         <>
//           <ButtonCallModal idModal="Estudios" nameButton="Estudios" />
//           <BasicModal idModal="Estudios" nameModal="Estudios" nameOptionModal="Nivel de Estudios" />
//         </>

//       }

//       {location.pathname == "tipoDocumento" &&

//         <>
//           <ButtonCallModal idModal="TipoDocumento" nameButton="Tipo de Documento" />
//           <BasicModal idModal="TipoDocumento" nameModal="Tipo de Documento" nameOptionModal="Tipo de Documento" />

//         </>

//       }


//       {idCategory == "parentescos" &&

//         <>
//           <ButtonCallModal idModal="Parentescos" nameButton="Parentescos" />
//           <ModalParentescos idModal="Parentescos" nameModal="Parentescos" />

//         </>

//       }


//       {idCategory == "estadosEmpleados" &&

//         <>
//           <ButtonCallModal idModal="estadosEmpleados" nameButton="Estados para empleados" />
//           <BasicModal idModal="estadosEmpleados" nameModal="Estados para empleados" nameOptionModal="Estado" />

//         </>

//       }



//       {idCategory == "cargos" &&

//         <>
//           <ButtonCallModal idModal="cargos" nameButton="Cargos" />
//           <BasicModalSelectObs idModal="cargos" nameModal="Cargos" nameOptionModal="Cargo" />

//         </>

//       }

//       {idCategory == "tareasDesempeñadas" &&

//         <>
//           <ButtonCallModal idModal="tareasDesempeñadas" nameButton="Tareas Desempeñadas" />
//           <BasicModalSelectObs idModal="tareasDesempeñadas" nameModal="Tareas Desempeñadas" nameOptionModal="Tarea" />

//         </>

//       }

//       {idCategory == "formasDePago" &&

//         <>
//           <ButtonCallModal idModal="formasDePago" nameButton="Formas de Pago" />
//           <BasicModalObs idModal="formasDePago" nameModal="Formas de Pago" nameOptionModal="Forma de Pago" />

//         </>

//       }

//       {idCategory == "modosDeContratacion" &&

//         <>
//           <ButtonCallModal idModal="modosDeContratacion" nameButton="Modos de Contratación" />
//           <ModalSelectDateObs idModal="modosDeContratacion" nameModal="Modos de Contratación" nameOptionModal="Modos de Contratación" />

//         </>

//       }

//       {idCategory == "modosDeLiquidacion" &&

//         <>
//           <ButtonCallModal idModal="modosDeLiquidacion" nameButton="Modos de Liquidacion" />
//           <BasicModalSelectObs idModal="modosDeLiquidacion" nameModal="Modos de Liquidacion" nameOptionModal="Modos de Liquidacion" />


//         </>

//       }

//       {idCategory == "motivosEgreso" &&

//         <>
//           <ButtonCallModal idModal="motivosEgreso" nameButton="Motivos de Egreso" />
//           <BasicModalObs idModal="motivosEgreso" nameModal="Motivos de Egreso" nameOptionModal="Motivo de egreso" />

//         </>

//       }

//       {idCategory == "paises" &&

//         <>
//           <ButtonCallModal idModal="paises" nameButton="Paises" />
//           <ModalPaises idModal="paises" nameModal="Paises" nameOptionModal="Pais" />


//         </>

//       }

//       {idCategory == "pdlb" &&

//         <>
//           <ButtonCallModal idModal="pdlb" nameButton="Provincias - Departamentos - Localidades - Barrios" />
//           <ModalPDLB idModal="pdlb" nameModal="Provincias - Departamentos - Localidades - Barrios" />

//         </>

//       }

//       {idCategory == "calles" &&

//         <>

//           <ButtonCallModal idModal="calles" nameButton="Calles" />
//           <BasicModalObs idModal="calles" nameModal="Calles" nameOptionModal="Calle" />

//         </>

//       }


//       {idCategory == "empleadores" &&

//         <>

//           <ButtonCallModal idModal="empleadores" nameButton="Empleadores" />
//           <ModalEmpleadores idModal="empleadores" nameModal="Empleadores" />

//         </>

//       }


//     </div>
  






//   )
// }

// export default ListasDeDatos;