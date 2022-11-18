import { ADD_FAMILIA, ADD_FAMILIAR } from "../types/familiaTypes";


export const initialState = {
    familiar : {

    },
    formulario: {
        inputApellidoNombres : "",
        inputCmbDni : "",
        inputNroDni : "",
        idRadioBtn : "",
        inputParentesco : "",
        inputDateNac : "",
        inputDateBaja : "",
        nacionalidadFamilia : "",
        textAreaObservacionesFamilia : ""
    }
};

const familiaReducer = (state = initialState, action) =>{

    const { type, payload }  = action;
    switch(type) {
        case ADD_FAMILIA : {
            console.log("entro al case")
            return {
                ...state,
                formulario : {...state.formulario,[payload.name]:payload.value}
                
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