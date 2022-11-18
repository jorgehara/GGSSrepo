import { AXIOS_ERROR, AXIOS_SUCCESS, SET_LOADING} from "../types/fetchTypes";

export const initialState = {
    loading: false,
    data : {
        estados : "",
        estadosCiviles : "",
        nacionalidades : "",
        paises : "",
        estudios : "",
        tiposDocumento : "",
        cargos: "",
        tareasDesempeñadas : "",
        parentescos : "",
        formasDePago : "",
        modosContratacion : "",
        modosLiquidacion : "",
        empleadores : "",
        domicilios : "",
        calles : "",
        departamentos : "",
        provincias : "",
        localidades : "",
        barrios : ""
    },
    error : false,
}

export const fetchReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_LOADING :
            return{
                loading : true,
                error: false,
                data : {}
            };
        case AXIOS_SUCCESS :
            return{
                ...state,
                loading : false,
                data: {...state.data, [action.payload.name]:action.payload.value}
            }
        
        case AXIOS_ERROR : 
            return{
                error: true,
                loading : false,
                data: {}
            } 
        default : return state;
    }
}