import React from 'react'

const ButtonLarge = ({color, tamaño, justyfy, nameButton}) => {
  return (
        <button className={`btn btn-${color} 
        btn-${tamaño} d-flex justify-content-${justyfy}`}>{nameButton}</button>
    
  )
}

export default ButtonLarge