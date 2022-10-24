// import React, { useEffect } from 'react'
import BasicModal from '../Modals/BasicModal/BasicModal'

const ButtonCallModal = ({idModal, nameButton}) => {

//   console.log(nameButton);

  return (    
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
      {nameButton.toString()}
    </button>


    <BasicModal idModal={idModal} nameModal={nameButton} nameOptionModal={nameButton} />
    </>
  )
}

export default ButtonCallModal;