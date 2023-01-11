import React from "react";
// import "./InputChecked.css";

const InputChecked = ({
  nameLabel,
  placeHolder,
  value,
  checked,
  nameCheck,
  disabled,
  idInput,
  nameInput,
  onChange,
  action,
  obligatorio
}) => {
  return (
    <>
          <div className="row">
          <div className="col-4">

            <label className=" mt-2" htmlFor={idInput}>
              {nameLabel}
            </label>
            </div>
            <div className="col-2">

            <input
              type="text"
              className={obligatorio ? "obligatorio" : ""}
              id={idInput}
              placeholder={placeHolder}
              value={value}
              name={nameInput}
              onChange={(e) => 
                onChange(e.target.value,idInput)}
              disabled={disabled}
            />
            </div>
            <div className="col-4">

            {/* <input
              className=""
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked={checked}
              disabled={disabled}
            />
            <label className="" htmlFor="flexCheckChecked">
              {nameCheck}
            </label> */}
          </div>
          <div className="col-2">

            <input
              className=""
              type="checkbox"
              value=""
              id="flexCheckChecked"
              defaultChecked={checked}
              disabled={disabled}
            />
            <label className="" htmlFor="flexCheckChecked">
              {nameCheck}
            </label>
          </div>
          </div>
    </>
  );
};

export default InputChecked;
