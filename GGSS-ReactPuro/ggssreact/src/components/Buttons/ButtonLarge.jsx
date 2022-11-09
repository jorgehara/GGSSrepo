import React from 'react'

const ButtonLarge = ({color, tamaño, justyfy, nameButton, onClick}) => {
  return (
        <button className={`btn btn-${color} 
        btn-${tamaño} d-flex justify-content-${justyfy} newClass`} onClick={(e)=> onClick(e)}>{nameButton}</button>
    
  )
}

export default ButtonLarge