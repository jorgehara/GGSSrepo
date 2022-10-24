import React from 'react'
import { Link, Navigate } from "react-router-dom";
import ButtonCallModal from '../Buttons/ButtonCallModal';
import BasicModal from '../Modals/BasicModal/BasicModal';
// import BasicModal from '../Modals/BasicModal/BasicModal';

const ListasDeDatos = () => {
  return (
	<div>
    {/* Estado Civil */}
          <ButtonCallModal idModal="EstadoCivil" nameButton="Estados Civiles"/>
          <BasicModal idModal="EstadoCivil" nameModal="Estados Civiles"  nameOptionModal="Estados Civiles"/>

    {/* ..... lo demás poppus x 12 poppus */}
          <ButtonCallModal idModal="EstadoCivil" nameButton="Estados Civiles"/>
          <BasicModal idModal="EstadoCivil" nameModal="Estados Civiles"  nameOptionModal="Estados Civiles"/>
    </div>
  






  )
}

export default ListasDeDatos;