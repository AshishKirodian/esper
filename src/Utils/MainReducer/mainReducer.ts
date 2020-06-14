import { combineReducers } from "redux";
import appReducer from "../../App/Reducer/reducer";
import AppState from "../../App/State/appState";

export default interface StoreTree {
    app: AppState;
}

export const mainReducer = combineReducers({
    app: appReducer
})