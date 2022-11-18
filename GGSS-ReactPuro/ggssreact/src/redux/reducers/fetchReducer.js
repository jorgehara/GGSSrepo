import { ADD_CARGOS, ADD_ESTADOS, ADD_ESTADOSCIVILES, ADD_ESTUDIOS, ADD_PAISES, ADD_TIPOSDOCUMENTO, AXIOS_ERROR, AXIOS_SUCCESS, SET_LOADING,ADD_TAREASDESEMPEÑADAS, ADD_PARENTESCOS, ADD_FORMASPAGO, ADD_MODOSCONTRATACION, ADD_MODOSLIQUIDACION, ADD_EMPLEADORES, ADD_DOMICLIOS, ADD_CALLES, ADD_DEPARTAMENTOS, ADD_LOCALIDADES, ADD_PROVINCIAS, ADD_BARRIOS} from "../types/fetchTypes";

export const initialState = {
    loading: false, 
    data : "",   
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
    barrios : "",    
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
        case ADD_ESTADOS : {
            return{
                ...state,
                loading: false,
                estados : action.payload
            }
        }
        case ADD_ESTADOSCIVILES : {
            return{
                ...state,
                loading: false,
                estadosCiviles : action.payload
            }
        }
        case ADD_PAISES : {
            return{
                ...state,
                loading: false,
                paises : action.payload
            }
        }
        case ADD_ESTUDIOS : {
            return{
                ...state,
                loading: false,
                estudios : action.payload
            }
        }
        case ADD_TIPOSDOCUMENTO : {
            return{
                ...state,
                loading: false,
                tiposDocumento : action.payload
            }
        }
        case ADD_CARGOS : {
            return{
                ...state,
                loading: false,
                cargos : action.payload
            }
        }
        case ADD_TAREASDESEMPEÑADAS : {
            return{
                ...state,
                loading: false,
                tareasDesempeñadas : action.payload
            }
        }
        case ADD_PARENTESCOS : {
            return{
                ...state,
                loading: false,
                parentescos : action.payload
            }
        }
        case ADD_FORMASPAGO : {
            return{
                ...state,
                loading: false,
                formasDePago : action.payload
            }
        }
        case ADD_MODOSCONTRATACION : {
            return{
                ...state,
                loading: false,
                modosContratacion : action.payload
            }
        }
        case ADD_MODOSLIQUIDACION : {
            return{
                ...state,
                loading: false,
                modosLiquidacion : action.payload
            }
        }
        case ADD_EMPLEADORES : {
            return{
                ...state,
                loading: false,
                empleadores : action.payload
            }
        }
        case ADD_BARRIOS : {
            return{
                ...state,
                loading: false,
                barrios : action.payload
            }
        }
        case ADD_DOMICLIOS : {
            return{
                ...state,
                loading: false,
                domicilios : action.payload
            }
        }
        case ADD_CALLES : {
            return{
                ...state,
                loading: false,
                calles : action.payload
            }
        }
        case ADD_DEPARTAMENTOS : {
            return{
                ...state,
                loading: false,
                departamentos : action.payload
            }
        }
        case ADD_LOCALIDADES : {
            return{
                ...state,
                loading: false,
                localidades : action.payload
            }
        }
        case ADD_PROVINCIAS : {
            return{
                ...state,
                loading: false,
                provincias : action.payload
            }
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