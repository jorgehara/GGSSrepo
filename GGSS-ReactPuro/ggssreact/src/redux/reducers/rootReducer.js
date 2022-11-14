import { combineReducers } from "redux"
import employeReducer from "./employeReducer";

const rootReducer = combineReducers({
    //Este es nuestro estado general de Empleados (Lo llamamos en el Browser con useSelector.)
    employeStates: employeReducer,
});

export default rootReducer;