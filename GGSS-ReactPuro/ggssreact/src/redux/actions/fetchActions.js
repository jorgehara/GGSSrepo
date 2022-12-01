import { ADD_TAREASDESEMPEÑADAS, ADD_CARGOS, ADD_ESTADOS, ADD_ESTADOSCIVILES, ADD_ESTUDIOS, ADD_PAISES, ADD_TIPOSDOCUMENTO, AXIOS_ERROR, AXIOS_SUCCESS, SET_LOADING, ADD_PARENTESCOS, ADD_FORMASPAGO, ADD_MODOSCONTRATACION, ADD_MODOSLIQUIDACION, ADD_EMPLEADORES, ADD_DOMICLIOS, ADD_CALLES, ADD_DEPARTAMENTOS, ADD_BARRIOS, ADD_PROVINCIAS, ADD_LOCALIDADES, ADD_FAMILIARES, ADD_NEW_FAMILIAR, DELETE_ONE_FAMILIAR, ADD_CONVENIOS, ADD_CATEGORIAS, ADD_AGRUPAMIENTOS, ADD_CENTRO_COSTO, ADD_SECTOR_DEPTO, ADD_OBRAS_SOCIALES, ADD_LUGARES_DE_PAGO, ADD_BANCOS, ADD_DIRECCIONES, ADD_SINDICATOS, ADD_ESQUEMAS, ADD_NEW_ESCI, ADD_DOCU_EMPL } from "../types/fetchTypes";


export const setLoading = (payload) =>{
    return {
        type : SET_LOADING,
        payload,
    };
}
export const axiosSuccess = (payload) =>{
    return {
        type : AXIOS_SUCCESS,
        payload,
    };
}
export const axiosError = (payload) =>{
    return {
        type : AXIOS_ERROR,
        payload,
    };
}

//ACTIONS ESTADOS
export const addEstados = (payload) =>{
    return {
        type : ADD_ESTADOS,
        payload,
    };
}
export const addEstadosCiviles = (payload) =>{
    return {
        type : ADD_ESTADOSCIVILES,
        payload,
    };
}
export const addPaises = (payload) =>{
    return {
        type : ADD_PAISES,
        payload,
    };
}
export const addEstudios = (payload) =>{
    return {
        type : ADD_ESTUDIOS,
        payload,
    };
}
export const addTiposDocumento = (payload) =>{
    return {
        type : ADD_TIPOSDOCUMENTO,
        payload,
    };
}
export const addCargos = (payload) =>{
    return {
        type : ADD_CARGOS,
        payload,
    };
}
export const addTareasDesempeñadas = (payload) =>{
    return {
        type : ADD_TAREASDESEMPEÑADAS,
        payload,
    };
}
export const addParentescos = (payload) =>{
    return {
        type : ADD_PARENTESCOS,
        payload,
    };
}
export const addFormasPago = (payload) =>{
    return {
        type : ADD_FORMASPAGO,
        payload,
    };
}
export const addModosContratacion = (payload) =>{
    return {
        type : ADD_MODOSCONTRATACION,
        payload,
    };
}
export const addModosLiquidacion = (payload) =>{
    return {
        type : ADD_MODOSLIQUIDACION,
        payload,
    };
}
export const addEmpleadores = (payload) =>{
    return {
        type : ADD_EMPLEADORES,
        payload,
    };
}

export const addDomicilios = (payload) =>{
    return {
        type : ADD_DOMICLIOS,
        payload,
    };
}
export const addCalles = (payload) =>{
    return {
        type : ADD_CALLES,
        payload,
    };
}
export const addDepartamentos = (payload) =>{
    return {
        type : ADD_DEPARTAMENTOS,
        payload,
    };
}
export const addBarrios = (payload) =>{
    return {
        type : ADD_BARRIOS,
        payload,
    };
}
export const addProvincias = (payload) =>{
    return {
        type : ADD_PROVINCIAS,
        payload,
    };
}
export const addLocalidades = (payload) =>{
    return {
        type : ADD_LOCALIDADES,
        payload,
    };
}
export const addFamiliares =(payload)=>{
    return {
        type : ADD_FAMILIARES,
        payload,
    };
}
export const deleteOneFamiliar=(payload)=>{
    return {
        type : DELETE_ONE_FAMILIAR,
        payload
    }
}
export const addNewFamiliar =(payload)=>{
    return {
        type : ADD_NEW_FAMILIAR,
        payload
    }
}
export const addConvenios =(payload)=>{
    return {
        type : ADD_CONVENIOS,
        payload
    }
}
export const addCategorias =(payload)=>{
    return {
        type: ADD_CATEGORIAS,
        payload,
    };
}
export const addAgrupamientos=(payload)=>{
    return{
        type : ADD_AGRUPAMIENTOS,
        payload
    }
}
export const addCentroDeCosto=(payload)=>{
    return {
        type: ADD_CENTRO_COSTO,
        payload,
    };
}
export const addSectorDepto=(payload)=>{
    return {
        type: ADD_SECTOR_DEPTO,
        payload,
    };
}
export const addObrasSociales=(payload)=>{
    return {
        type : ADD_OBRAS_SOCIALES,
        payload,
    };
}
export const addLugaresDePago=(payload)=>{
    return {
        type : ADD_LUGARES_DE_PAGO,
        payload,
    };
}
export const addBancos =(payload)=>{
    return {
        type : ADD_BANCOS,
        payload,
    };
}
export const addDirecciones=(payload)=>{
    return{
        type : ADD_DIRECCIONES,
        payload,
    };
}
export const addSindicatos=(payload)=>{
    return{
        type : ADD_SINDICATOS,
        payload,
    };
}
export const addEsquemas=(payload)=>{
    return {
        type : ADD_ESQUEMAS,
        payload,
    };
}
export const addNewEstadoCivil=(payload)=>{
    return {
        type : ADD_NEW_ESCI,
        payload,
    };
}
export const addDocumentacionEmpleados=(payload)=>{
    return {
        type : ADD_DOCU_EMPL,
        payload,
    };
}