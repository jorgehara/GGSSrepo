import { ADD_FAMILIA, ADD_FAMILIAR, ADD_FAMILIAR_ID } from "../types/familiaTypes";


export const initialState = {
    familiar : 0,
    formulario: {
        inputApellidoNombres : "",
        inputCmbDni : "",
        inputNroDni : "",
        idRadioBtn : "",
        inputParentesco : "",
        inputDateNac : "",
        inputDateBaja : "",
        inputPaisOrigen : "",
        nacionalidadFamilia : "",
        textAreaObservacionesFamilia : "",
        tiposDocumento : []
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
        case ADD_FAMILIAR_ID : {
            return{
                ...state,
                familiar : payload
            }
        }
        default :
        return state;
    }
}


export default familiaReducer;