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
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
          {/* <div className="text-information">
            {/* <h5>Arrastre su imagen aqui</h5> */}
          {/* </div>  */}
        </div>

        <div className="center">
          <img
            src={ImageSelectedPrevious}
            alt=""
            height="200px"
            width="200px"
          />
        </div>
      </StyleDragArea>
    </div>
  );
}

export default DragArea;

const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -6px;
    // border-radius: 223px;
    margin-left: -200px;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    margin-right: 100px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
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
  }

  .image-upload-wrap:hover {
   background-color: transparent;
   //border: 4px dashed #d0d7de;
  }
  
  .text-information {
    margin-top: 45px;
    text-align: center;
   
  }
  .text-information:focus {
    // text-decoration: transparent;
    // background-color: transparent;
    // overflow: hidden;
    // outline: none;
    // //border: 4px dashed #d0d7de;
   }
`;