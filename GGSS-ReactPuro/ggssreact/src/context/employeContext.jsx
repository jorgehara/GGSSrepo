import React, { createContext, useState } from 'react'


const employeContext = createContext();

const EmpleadoContextProvider = (props) => {
  
    const [emp , setEmp] = useState([]);
    const [saveEmpl, setSaveEmpl] = useState([{
      
    }]);
    const [saveDom, setSaveDom] = useState([{

    }]);
    const [saveEstado, setSaveEstado] = useState([{

    }])


    function saveEstados(estado){
      setSaveEstado(estado);
    }
    
    function saveEmploye(empleado){
      setSaveEmpl(empleado);
    }
    function saveDomicilio(domicilio){
      setSaveDom(domicilio);
    }
    
  return (
    <employeContext.Provider value={{ emp, saveEmpl, saveEmploye, saveDomicilio, saveDom, saveEstados, saveEstado}}>
        {props.children}
    </employeContext.Provider>
  )
}

export { employeContext ,EmpleadoContextProvider};