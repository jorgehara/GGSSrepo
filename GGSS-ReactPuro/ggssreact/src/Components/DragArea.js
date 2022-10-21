import { useState } from "react";
import styled from "styled-components";

function DragArea() {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <div>
      <StyleDragArea>
        <div className="image-upload-wrap">
        <p class="h5 ml-1">Arrastre su imagen</p>
          <input
            className="file-upload-input ml-1"
            type="file"
            accept="image/png, image/jpg"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
        </div>
        <div className="center ml-1 mr-6">
          <img
            src={ImageSelectedPrevious}
            alt=""
            width="220px" 
            height="100px"
          />
        </div>
      </StyleDragArea>
    </div>
  );
}

export default DragArea;

const StyleDragArea = styled.div`
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
