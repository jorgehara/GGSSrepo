import axios from 'axios'
import React from 'react'

const ButtonLarge = ({color, align, tamaño, justyfy, nameButton, onClick, url}) => {

  
  return (
        <a href={url} target="_blank" className={`btn btn-${color} btn-${tamaño} d-flex justify-content-${justyfy} align-items-${align} newClass`}>
          {nameButton}
        </a>
    
  )
}

export default ButtonLarge