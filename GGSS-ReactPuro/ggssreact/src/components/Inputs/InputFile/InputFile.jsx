import { useEffect, useState } from "react";
import styled from "styled-components";
import "./InputFile.css";

function InputFile({ disabled, imagen }) {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const [displayButton, setDisplayButton] = useState("");
  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
        setDisplayButton("none");
      };
    }
  };

  useEffect(() => {
    disableBtn();
  }, [disabled]);

  function disableBtn() {
    if (disabled) {
      setDisplayButton("none");
      return;
    }
    setDisplayButton("");
  }
  function acivatedInput(e) {
    e.preventDefault();
    setImageSelectedPrevious(null);
    setDisplayButton("");
  }
  return (
    <>
      <div>
        <StyleDragArea>
          <div className="image-upload-wrap">
            <label
              className="formulario__label mt-0 mb-1 w-100"
              htmlFor="legajo"
            >
              Cambiar su imagen
            </label>
            <input
              className="file-upload-input ml-1"
              type="file"
              accept="image/png, image/jpg"
              multiple
              disabled={disabled}
              onChange={(e) => {
                changeImage(e);
              }}
            ></input>
            <div className="imageSelect d-flex justify-content-center align-items-center center ml-1 mr-6 ">
              <img
                className="imageSelect "
                src={
                  ImageSelectedPrevious === null ||
                  ImageSelectedPrevious === undefined
                    ? imagen
                    : ImageSelectedPrevious
                }
                alt=""
                width="220px"
                height="100px"
              />
            </div>
          </div>
        </StyleDragArea>
      </div>

      <button
        className="btn btn-danger mt-2 btn-sm"
        onClick={(e) => acivatedInput(e)}
        disabled={disabled}
      >
        Cancelar
      </button>
    </>
  );
}

export default InputFile;

const StyleDragArea = styled.div`
  .none {
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
    .h5 {
      font-weight: 395;
      color: #64686d;
      color: black;
    }
  }
  .image-upload-wrap:hover {
    background-color: transparent;
  }
`;
