import React from 'react'


const ButtonCallModal = ({ idModal, nameButton, useNavbar }) => {

  return (
    <>
      <button type="button" className={useNavbar ? "dropdown-item btnCallModal" : "btn btn-danger" }  data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
        {nameButton.toString()}
      </button>
    </>
  )
}

export default ButtonCallModal;