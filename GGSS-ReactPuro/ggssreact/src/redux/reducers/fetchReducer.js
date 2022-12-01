import { ADD_CARGOS, ADD_ESTADOS, ADD_ESTADOSCIVILES, ADD_ESTUDIOS, ADD_PAISES, ADD_TIPOSDOCUMENTO, AXIOS_ERROR, AXIOS_SUCCESS, SET_LOADING,ADD_TAREASDESEMPEÑADAS, ADD_PARENTESCOS, ADD_FORMASPAGO, ADD_MODOSCONTRATACION, ADD_MODOSLIQUIDACION, ADD_EMPLEADORES, ADD_DOMICLIOS, ADD_CALLES, ADD_DEPARTAMENTOS, ADD_LOCALIDADES, ADD_PROVINCIAS, ADD_BARRIOS, ADD_FAMILIARES, ADD_NEW_FAMILIAR, DELETE_ONE_FAMILIAR, ADD_CONVENIOS, ADD_CATEGORIAS, ADD_AGRUPAMIENTOS, ADD_CENTRO_COSTO, ADD_SECTOR_DEPTO, ADD_OBRAS_SOCIALES, ADD_LUGARES_DE_PAGO, ADD_BANCOS, ADD_DIRECCIONES, ADD_SINDICATOS, ADD_ESQUEMAS, ADD_NEW_ESCI, ADD_DOCU_EMPL} from "../types/fetchTypes";

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
    familiares : "",
    convenios : "",
    categorias : "",
    agrupamientos : "",
    centroCosto : "",
    sectorDepto : "",
    obrasSociales : "",
    lugaresDePago : "",
    bancos : "",
    direcciones : "",
    sindicatos : "",
    esquemas : "",
    documentacionEmpleados : ""
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
            console.log(action.payload)
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
        case ADD_FAMILIARES: {
            return{
                ...state,
                loading: false,
                familiares : action.payload
            }
        }
        case ADD_NEW_FAMILIAR: {
            return {
                ...state.familiares,
                familiares : [...state.familiares, action.payload]
            }
        }
        case DELETE_ONE_FAMILIAR : {
            return{
                ...state.familiares,
                familiares : state.familiares.filter((fam)=> fam.iDfamiliares !== action.payload)
            }
        }
        case ADD_CONVENIOS : {
            return {
                ...state,
                convenios : action.payload
            }
        }
        case ADD_CATEGORIAS : {
            return {
                ...state,
                categorias : action.payload
            }
        }
        case AXIOS_ERROR : 
            return{
                error: true,
                loading : false,
                data: {}
            } 
        case ADD_AGRUPAMIENTOS : {
            return {
                ...state,
                agrupamientos : action.payload
            }
        }
        case ADD_CENTRO_COSTO : {
            return {
                ...state,
                centroCosto : action.payload
            }
        }
        case ADD_SECTOR_DEPTO : {
            return {
                ...state,
                sectorDepto : action.payload
            }
        }
        case ADD_OBRAS_SOCIALES : {
            return {
                ...state,
                obrasSociales : action.payload
            }
        }
        case ADD_LUGARES_DE_PAGO :
            return {
                ...state,
                lugaresDePago : action.payload
            }
        case ADD_BANCOS : {
            return{
                ...state,
                bancos : action.payload
            }
        }
        case ADD_DIRECCIONES : {
            return {
                ...state,
                direcciones : action.payload
            }
        }
        case ADD_SINDICATOS : {
            return {
                ...state,
                sindicatos : action.payload
            }
        }
        case ADD_ESQUEMAS : {
            return {
                ...state,
                esquemas : action.payload
            }
        }
         case ADD_NEW_ESCI :{
            return {
                ...state,
                estadosCiviles : [...state.estadosCiviles, action.payload]
            }
        }
        case ADD_DOCU_EMPL : {
            return {
                ...state,
                documentacionEmpleados : action.payload
            }
        }
        default : return state;
    }
}