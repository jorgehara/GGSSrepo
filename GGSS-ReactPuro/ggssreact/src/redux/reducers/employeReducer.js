import { ADD_EMPLOYE, REMOVE_EMPLOYE, SELECTED_EMPLOYE, UPDATE_EMPLOYE } from "../types/employeTypes";

const initialState = {
    //Este estado inicial lo llamamos en el Browser a partir de nuestro estado General (que era employeStates).
    employes : [],
};

const employeReducer = (state = initialState, action) =>{
    
    const { type, payload }  = action;

    switch(type) {
        case ADD_EMPLOYE : {
            const newListEmployes = [...state.employes];
            let indexEmploye = newListEmployes.findIndex((i)=> i["iDempleado"] === payload["iDempleado"]);
            if(indexEmploye === -1){
                newListEmployes.push(payload);
                indexEmploye = newListEmployes.length -1;
            }
            return {
                ...state,
                employes: [...newListEmployes],
            };
        }
        case UPDATE_EMPLOYE :
            const newEmploye = {...payload};            
            return {
                ...state,
                employes: state.employes.filter((employe)=> employe.iDempleado === newEmploye.iDempleado),
            };
        case REMOVE_EMPLOYE:
            return {
                ...state,
                employes: state.employes.filter((employe)=> employe.iDempleado !== payload.iDempleado),
            };
        case SELECTED_EMPLOYE:
            return {
                ...state,
                employes: state.employes.find((employe)=> employe.idEmpleado === payload.iDempleado),
            };
        default :
        return state;
    }
}


export default employeReducer;