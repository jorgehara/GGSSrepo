import { ADD_DOMICILIOS,ADD_ONEDOMICILIO,SELECT_BARRIO,SELECT_DEPARTAMENTO,SELECT_ID_DOMICILIO,SELECT_PROVINCIA } from "../types/domiciliosTypes";


export const initialState = {
    //Este estado inicial lo llamamos en el Browser a partir de nuestro estado General (que era employeStates).
    inputCalleDomicilios : "",
    inputNumCalle : "",
    inputPisoCalle : "",
    inputProvinciaDomicilios : "",
    inputDepartamentosDomicilios : "",
    inputLocalidadesDomicilios : "",
    inputBarriosDomicilios : "",
    domicilioEmpleado : [],
    provinciaSelected : {},
    departamentoSelected : {},
    localidadSelected : {},
    idDomicilioSelected : 0
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
            return{
                ...state,
                domicilioEmpleado : payload
            }
        }
        case SELECT_PROVINCIA :{

            return{
                ...state,
                provinciaSelected : {payload}
            }
        }
        case SELECT_DEPARTAMENTO :{

            return{
                ...state,
                departamentoSelected : {payload}
            }
        }
        case SELECT_BARRIO :{

            return{
                ...state,
                localidadSelected : {payload}
            }
        }
        case SELECT_ID_DOMICILIO :{
            return{
                ...state,
                idDomicilioSelected : payload
            }
        }
        default :
        return state;
    }
}


export default domicilioReducer;