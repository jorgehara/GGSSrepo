import { useState } from "react";
import styled from 'styles-components';


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
    </div>
  );
}
export default DragArea;