import React from 'react'
import ButtonLarge from '../Buttons/ButtonLarge'
import InputButton from '../Inputs/InputButton/InputButton'
import InputForm from '../Inputs/InputForm/InputForm'
import TextArea from '../Inputs/TextArea/TextArea'
import TableBasic from '../Tables/TableBasic'

const Domicilios = () => {

    const columns= ["Predeterminado", "Calle", "Número", "Barrio", "Localidad", "Piso/Of/Dpto"]

  return (
    <section className='container'>
        <div className='row'>
            <div className="formulario__grupo">
                <label for="usuario" className="mainABMTitle">Domicilios</label>
            </div> 
            <div className='col-xl-6 '>
                <div className='mt-2'>
                    <input type="checkbox" name="predeterminado" id="predeterminado" />
                    <label className='ml-2' htmlFor="predeterminado">Predeterminado</label>
                </div>
                
                <InputForm nameInput="Calle"  messageError="Solo puede contener números." placeHolder="Ingrese Calle"/>
                <InputButton nameLabel="Barrio" nameButton="..." placeholder="Ingrese Barrio" />
                <InputForm nameInput="Provincia"  messageError="Solo puede contener letras." placeHolder="Ingrese Provincia"/>
                <TextArea inputName="Observaciones" />
            </div>
            <div className='col-xl-6'>
                <InputButton nameLabel="Número" nameButton="..." placeholder="123456" />
                <InputButton nameLabel="Piso/Dpto/Ofic/Torre" nameButton="..." placeholder="Ingrese número" />
                <InputForm nameInput="Departamento"  messageError="Solo puede contener letras." placeHolder="Ingrese Departamento"/>
                <InputForm nameInput="Localidad/CP"  messageError="Solo puede contener letras." placeHolder="Ingrese Localidad/CP"/>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-12'>
                <TableBasic columns={columns} />                
            </div>
            <div className='col-xl-6'>
                <ButtonLarge color="danger" tamaño="lg" justyfy="start mt-1" nameButton="Imprimir Constancia de Asignaciones Familiares" />
                <ButtonLarge color="danger" tamaño="lg" justyfy="start mt-1" nameButton="Imprimir Certificado de Convenio/Oficio" />
                <ButtonLarge color="danger" tamaño="lg" justyfy="start mt-1" nameButton="Imprimir Resumen Legajo Empleado" />
                <ButtonLarge color="danger" tamaño="lg" justyfy="start mt-1" nameButton="Imprimir Ficha Empleado" />
            </div>
            <div className='col-xl-6'>
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Licencias Franquicias" />
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Agregar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Modificar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Eliminar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Listar" />
                <ButtonLarge color="danger" tamaño="" justyfy="end mt-1" nameButton="Salir" />
            </div>
        </div>
    </section>
  )
}

export default Domicilios