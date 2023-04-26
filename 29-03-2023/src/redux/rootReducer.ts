import { combineReducers } from "redux";
import { LoaderReducer } from "./reducers/LoaderReducer";
import  ThemeReducer  from "./reducers/ThemeReducer";

export default combineReducers({
    LoaderReducer,
    ThemeReducer
})