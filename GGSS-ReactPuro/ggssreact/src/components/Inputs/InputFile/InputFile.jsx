import { useState } from "react";
import styled from "styled-components";
import "./AddPhoto.css";

function InputFile() {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [ displayButton, setDisplayButton] = useState("");
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
        setDisplayButton("none")

      


      };
    }
  };
  function acivatedInput(e){
    e.preventDefault();
    setImageSelectedPrevious(null);
    setDisplayButton("");
  }
  return (
    <><div>
      <StyleDragArea>
        <div className="image-upload-wrap">
          <label className='formulario__label mt-0 mb-1 w-100' htmlFor="legajo">Arrastre su imagen</label>
          <input
            className="file-upload-input ml-1"
            type="file"
            accept="image/png, image/jpg"
            multiple
            onChange={(e) => {
              changeImage(e);
            } } />
        </div>
        <div className="d-flex justify-content-center align-items-center center ml-1 mr-6 ">
          <button class={`icon-btn add-btn position-absolute ${displayButton}`}>
            <div class="add-icon"></div>
            <div class="btn-txt"></div>
          </button>
          <img
            className="h-100 w-100 "
            src={ImageSelectedPrevious}
            alt=""
            width="220px"
            height="100px" />
        </div>
      </StyleDragArea>
    </div>
    
    <button className="btn btn-danger mt-2 btn-sm" onClick={(e)=>acivatedInput(e)}>Cancelar</button></>
  
    //#region -----------------------------------BotonX
            // <div>
    // {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  // width="48" height="48"
  // viewBox="0 0 48 48">
  // <linearGradient id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path><path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path><path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path><path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path>
     // </svg> */}
  

            // </div>

    //#endregion

  );
}

export default InputFile;

const StyleDragArea = styled.div`
  .none{
    display: none;
  }
  .center {
    display: block;
    width: 230px;
    border: 4px dashed #d0d7de;
  }
  .file-upload-content {
    /* display: none;
    text-align: center; */

  }
  
  .file-upload-input {
    position: absolute;
    margin-right: 0px;
    margin: 0;
    padding: 0;
    width: 225px;
    height: 105px;
    opacity: 0;
    border: 4px dashed #d0d7de;
    cursor: pointer;


  }

  .image-upload-wrap {

    // margin-top: 14px;
    // position: relative;
    // height: 100px;
    // border: 1px solid #d0d7de;
    // margin-left: 50px;
    // //margin-right: 10px;
    // width: 150px;
    .h5{
      /* font-style: normal; */
    font-weight: 395;
    /* font-size: 20px; */
    /* line-height: 29px; */
    color: #64686d;
    color: black;
    /* margin-top: 5px; */
    /* margin-right: 14px; */
    /* margin-bottom: 9px; */
    /* display: block; */
  }
  }

  .image-upload-wrap:hover {
   background-color: transparent;
  
  }
  
  .text-information {
    /* margin-top: 45px;
    text-align: center; */
   
  }
  .text-information:focus {
    
    // text-decoration: transparent;
    // background-color: transparent;
    // overflow: hidden;
    // outline: none;
    // //border: 4px dashed #d0d7de;
   }
`;
