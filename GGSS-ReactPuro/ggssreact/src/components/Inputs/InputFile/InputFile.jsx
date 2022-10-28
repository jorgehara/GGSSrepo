import React, { useState } from 'react'

const InputFile = ({inputName}) => {
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
    <><section class="div_conteiner">   
              <div className="img__drop">
                  <div className="image-upload-wrap">
                      {/* <p class="h7">{inputName}</p> */}
                      <div class="file-upload-wrapper">
                        <input
                          id="input-file-now-custom-2"
                          class="file-upload"
                          type="file"
                          accept="image/png, image/jpg"
                          multiple
                          onChange={(e) => {
                              changeImage(e);
                          } } />
                      </div>
                  </div>
                  <div className="center ml-1 mr-6 mt-2">
                      <img
                          src={ImageSelectedPrevious}
                          alt=""
                          width="220px"
                          height="100px" />
                  </div>
              </div>
          </section></>
    
  )
}

export default InputFile