import React from 'react'

const ButtonLarge = ({color, tamaño, justyfy, nameButton}) => {
  return (
        <button className={`btn btn-${color} 
        btn-${tamaño} d-md-flex justify-content-${justyfy}`}>{nameButton}</button>
    
  )
}

export default ButtonLarge