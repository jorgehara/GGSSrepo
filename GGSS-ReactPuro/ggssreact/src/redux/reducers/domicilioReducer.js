import { ADD_DOMICILIOS,ADD_ONEDOMICILIO } from "../types/domiciliosTypes";


export const initialState = {
    //Este estado inicial lo llamamos en el Browser a partir de nuestro estado General (que era employeStates).
    inputCalleDomicilios : "",
    inputNumCalle : "",
    inputPisoCalle : "",
    inputProvinciaDomicilios : "",
    inputDepartamentosDomicilios : "",
    inputLocalidadesDomicilios : "",
    inputBarriosDomicilios : "",
    domicilioEmpleado : []
};

const domicilioReducer = (state = initialState, action) =>{

    const { type, payload }  = action;

    switch(type) {
        case ADD_DOMICILIOS : {
            
            return {
                ...state,
                [payload.name]:payload.value
                
            };
        }
        case ADD_ONEDOMICILIO : {
            console.log(payload)
            return{
                ...state,
                domicilioEmpleado : [...payload]
            }
        }
        default :
        return state;
    }
}


export default domicilioReducer;