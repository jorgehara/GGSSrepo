import React from 'react'
import './TextArea.css'


const PruebaTEXTO2 = () => {
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
                event.target.nextElementSibling.innerHTML = remainingChars + " characters remaining";
            }
        })
    })();
return (
    <>
        <div class="count-container">
        <form>
            <div class="input-group">
            </div>
            <div class="input-group">
            <textarea placeholder="Message" maxlength="255" data-max-chars="255" class="input-control count-chars">
                
            </textarea>
        <div class="input-msg text-red"></div>
            </div>
        </form>
        </div>
    </>
)
}

export default PruebaTEXTO2




