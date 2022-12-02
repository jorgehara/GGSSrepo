import React, { useEffect } from 'react'
// import styled from 'styled-components';
import './TextArea.css'


const TextAreaCHARS = ({inputName, maxLength, value, disabled, action, onChange, idInput}) => {
    
//     useEffect(() => {
//         // id name is "my-btn"
// const btn = document.getElementById("my-btn");
// console.log(btn);
// }, []);
    
    
    // const mytextArea = document.getElementById('mytextarea');
    // const charstextRemaining = document.getElementById('charstextremaining');
    // const MAX_CHARS = 255;
    
    // mytextArea.onChange('input', () => {
    //   const remaining = MAX_CHARS - mytextArea.value.lenght;
    //   const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;
    //   charstextRemaining.textContent = `restan ${remaining} caracteres`;
    //   charstextRemaining.style.color = color;
    // });


  return (
    <>
    <div className='row'>
    <div className='form__grupo__label pl-1 mt-3'>
        <label className='form__grupo__label__label m-0' htmlFor="legajo">{inputName}</label>
    </div>

    <div className='form__grupo__inputs_Obs mt-1'>
    <input 
          className="form-control-obs txtArea" 
        //   value={value}
        //   placeholder="Ingrese Observaciones" 
        //   onChange={(e)=>onChange(e, action)}
        //   id="mytextarea"
          // // id={idInput}
          id="my-btn" 
          cols="21" 
          rows="2"
        //   name={idInput} 
        //   maxLength={maxLength}
        //   disabled={disabled}
          >
    </input>
    <div id="charstextremaining">
    restan 250 caracteres
    </div>
    </div>
    
</div>
</>
  )
}

export default TextAreaCHARS




// const Input = styled.input.attrs(props => ({
//     // we can define static props
//     type: "text",
  
//     // or we can define dynamic ones
//     size: props.size || "1em",
//   }))`
//     color: black;
//     font-size: 1em;
//     border: 1px solid ;
//     border-radius: 3px;
  
//     /* here we use the dynamically computed prop */
//     margin: ${props => props.size};
//     padding: ${props => props.size};
//   `;