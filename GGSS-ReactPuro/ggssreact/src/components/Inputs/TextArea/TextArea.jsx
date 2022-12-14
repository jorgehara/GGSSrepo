import React from 'react'
// import styled from 'styled-components';
import './TextArea.css'

const TextArea = ({inputName, maxLength, value, disabled, action, onChange, idInput}) => {


  (function(){
    document.addEventListener("keyup", function(event){
        if(event.target.matches(".count-chars")){
            // get input value and length
            const value = event.target.value;
            const valueLength = event.target.value.length;
            // get data value
            const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
            const remainingChars = maxChars - valueLength;
            if(valueLength > maxChars){
                // limit chars to maxChars
                // event.target.value = value.substr(0, maxChars)
                return;  //end function execution
            }
            event.target.nextElementSibling.innerHTML = remainingChars + " caracteres restantes";
        }
    })
      })();

 

  return (
    <div className='row'>
        <div className='form__grupo__label pl-1 mt-3'>
            <label className='form__grupo__label__label m-0' htmlFor="legajo">{inputName}</label>
        </div>
        <form>
        <div className='form__grupo__inputs_Obs mt-1'>

        <textarea 
          value={value}
          placeholder="Ingrese Observaciones" 
          onChange={(e)=>onChange(e, action)}
          maxLength={maxLength}
          id={idInput} 
          cols="71" 
          rows="3"
          name={idInput} 
          disabled={disabled}
          data-max-chars="255" 
          class="input-control count-chars px-1"
          >

          </textarea>
          <div 
          class="input-msg text txtArea">
          </div>
        </div>
        </form>
        {/* <input 
              className="form-control-obs txtArea" 
              value={value}
              placeholder="Ingrese Observaciones" 
              onChange={(e)=>onChange(e, action)}
              id={idInput} 
              cols="21" 
              rows="2"
              name={idInput} 
              maxLength={maxLength}
              disabled={disabled}
              >
        </input> */}
        
    </div>
  )
}

export default TextArea


