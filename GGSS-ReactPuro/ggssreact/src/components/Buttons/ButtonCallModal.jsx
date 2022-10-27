import React from 'react'


const ButtonCallModal = ({idModal, nameButton}) => {

  return (    
    <>
    <button type="button" className="btn btn-danger btnCallModal" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
      {nameButton.toString()}
    </button>

    </>
  )
}

export default ButtonCallModal;