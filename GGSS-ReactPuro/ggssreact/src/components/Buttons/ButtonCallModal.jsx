import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Buttons.css";

const ButtonCallModal = ({ idModal, nameButton, useNavbar, useButton }) => {
  const [actualClass, setActualClass] = useState("");
  useEffect(()=>{
    usedClasses(useNavbar,useButton);
  },[])

  function usedClasses(useNavbar, useButton){
      if(useNavbar){
        return setActualClass("dropdown-item btnCallModal");
      }else if(useButton){
        return setActualClass("tercero btn btn-validacion btn-outline-danger btn-sm ml-2 btnCallModal");
      }else{
        return setActualClass("btn btn-danger btnCallModal");
      }
  }

  return (
    <>
      <button type="button" className={actualClass }  data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
        {nameButton.toString()}
      </button>
    </>
  )
}

export default ButtonCallModal;