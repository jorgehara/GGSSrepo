import React from 'react'
import styled from "styled-components";


export default function Footers () {
const MyFooter = styled.h2`
    background: #f5f5f5;
    -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    min-width: 220px;
    /* background-image: -webkit-linear-gradient(50deg, #a61f34 80%, #780F07 80%); */
    background-color: #a61f34;
    color: #ffff;
    text-align: center;
     .logo{
        text-align: right;
     }

`;
    return (
        <>
        <br/>
        <MyFooter>  
        © 2019 INFT S.A. 
        
        <img src="img/ggmm_logo.png" alt="logo"/>
        {/* <a href="/http://ggmm.com.ar/">GGSS</a> */}
        </MyFooter>
        </>
    ); 
}







// const Footer = () => {
//   return (
//     <div>
//         <footer>
// 	    <div className="card">
//             <div className="card-body">
//                 <div className="row" class="formulario__grupo-input">
//                     <div className="col-sm-11">
//                         <h5 className="card-title" styles="text align: center;">© 2019 INFT S.A.</h5>
//                     </div>
//                     <div class="col-sm-1" >
//                         <img src="images/ggmm_logo.png" alt="logo"/>	
//                             <a href="/http://ggmm.com.ar/">GGSS</a>
//                     </div>
// 		        </div>
// 	        </div>
//         </div>
// 	    </footer>
//     </div>
//   )
// }

// export default Footer