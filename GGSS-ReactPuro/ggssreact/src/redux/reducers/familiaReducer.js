import { ADD_FAMILIA, ADD_FAMILIAR, ADD_FAMILIAR_ID, DATOS_FAMILIAR_X_EMPLEADO } from "../types/familiaTypes";


export const initialState = {
    familiar : 0,
    familiarSeleccionado : "",
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
    },
    familiarPorEmpleado : ""
};

const familiaReducer = (state = initialState, action) =>{

    const { type, payload }  = action;
    switch(type) {
        case ADD_FAMILIA : {            
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
        case ADD_FAMILIAR : {
            return{
                ...state,
                familiarSeleccionado : payload
            }
        }
        case DATOS_FAMILIAR_X_EMPLEADO : {
            return{
                ...state,
                familiarPorEmpleado : payload
            }
        }
        default :
        return state;
    }
}


export default familiaReducer;