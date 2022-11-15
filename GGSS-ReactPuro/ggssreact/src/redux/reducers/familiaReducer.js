import { ADD_FAMILIA, ADD_FAMILIAR } from "../types/familiaTypes";


export const initialState = {
    familiar : {

    },
    inputApellidoNombres : "",
    inputCmbDni : "",
    inputNroDni : "",
    idRadioBtn : "",
    inputParentesco : "",
    inputDateNac : "",
    inputDateBaja : ""
};

const familiaReducer = (state = initialState, action) =>{

    const { type, payload }  = action;

    switch(type) {
        case ADD_FAMILIA : {
            
            return {
                ...state,
                [payload.name]:payload.value
                
            };
        }
        case ADD_FAMILIAR : {
            return{
                ...state,
                familiar : {...payload}
            }
        }
        default :
        return state;
    }
}


export default familiaReducer;