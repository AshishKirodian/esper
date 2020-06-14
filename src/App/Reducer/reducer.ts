import AppState, { defaultAppState } from "../State/appState";
import { AppAction, GETENTINFO_SUCCESS, GETENTINFO } from "../Actions/def";

export default function appReducer(state: AppState = defaultAppState(), action: AppAction): AppState {
    switch (action.type) {
        case GETENTINFO: {
            return { ...state, enterpriseId: action.payload.id };
        }
        case GETENTINFO_SUCCESS: {
            return { ...state, isLoggedIn: true, enterpriseName: action.payload.name };
        }
        default: return state;
    }
}