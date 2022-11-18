import { combineReducers } from "redux"
import datosPersonalesReducer from "./datosPersonalesReducer";
import domicilioReducer from "./domicilioReducer";
import employeReducer from "./employeReducer";
import familiaReducer from "./familiaReducer";
import { fetchReducer } from "./fetchReducer";


const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeStates: employeReducer,
    datosPersonalesStates : datosPersonalesReducer,
    domiciliosStates : domicilioReducer,
    familiaStates : familiaReducer,
    generalState : fetchReducer
});

export default rootReducer;