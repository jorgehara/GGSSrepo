import React, { useEffect, useState } from 'react'
import "./InputDate.css";

const InputDate = ({nameInput,display, checked}) => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  console.log(mostrarComponente)

  useEffect(()=>{
    setMostrarComponente(display)
  },[display])

  return (
    <div className="formulario__grupo__inputs mt-2">
        <div class="form-check p-0">
          <label class="form-check-label" for="flexCheckDefault">
            {nameInput}
          </label>
          <input className={mostrarComponente ? "form-check-input ml-4" : "none"} type="checkbox" value="" id="flexCheckChecked" checked={checked} />
        </div>
        <div class="form-check ">
            <input id="datetime-local" type="datetime-local" />
        </div>
    </div>
  )
}

export default InputDate