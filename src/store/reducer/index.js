import { combineReducers } from "redux";
import apartmentReducer from './apartmentReducer';

const rootReducer = combineReducers({
    apartment: apartmentReducer
})

export default rootReducer;