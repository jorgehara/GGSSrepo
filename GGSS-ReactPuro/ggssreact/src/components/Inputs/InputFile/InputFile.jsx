import { useEffect, useState } from "react";
import styled from "styled-components";

function InputFile({disabled, imageActual}) {
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

  useEffect(()=>{
    disableBtn();
  },[disabled])

  useEffect(()=>{
    setImageSelectedPrevious(imageActual);
  },[ImageSelectedPrevious])

  function disableBtn(){
    if(disabled){
      setDisplayButton("none")
      return;
    }
    setDisplayButton("")
  }
  function acivatedInput(e){
    e.preventDefault();
    setImageSelectedPrevious(null);
    setDisplayButton("");
    
  }
  return (
    <><div>
      <StyleDragArea>
        <div className="">
          <label className=' mt-0 mb-1 w-100' htmlFor="legajo">Cambiar su imagen</label>
          <input
            className=""
            type="file"
            accept="image/png, image/jpg"
            multiple
            disabled={disabled}
            onChange={(e) => {
              changeImage(e);
            } }>
          
            </input>
            <div className="d-flex justify-content-center align-items-center center">
              {/* <button class={`browse icon-btn add-btn position-absolute ${displayButton}`} disabled={disabled}>
                <div class="add-icon" disabled={disabled}></div>
                <div class="btn-txt" disabled={disabled}></div>
              </button> */}
              <img
                className="mh-100 mw-100 "
                src={imageActual.length>0 ? `data:image/jpeg;base64,${imageActual}` : ImageSelectedPrevious}
                alt=""
                width="150px"
                height="150px" />
            </div>
            
        </div>
        
      </StyleDragArea>
    </div>
    <button className="btn btn-danger mt-2 btn-sm" onClick={(e)=>acivatedInput(e)} disabled={disabled}>Cancelar</button></>
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
  .image-upload-wrap:hover {
   background-color: transparent;
  
  }
  
  .text-information {
    /* margin-top: 45px;
    text-align: center; */
  }`;