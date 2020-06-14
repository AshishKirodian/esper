import { isNullOrUndefined } from "util";

export default interface AppState {
    accessToken: string;
    isLoggedIn: boolean;
    enterpriseName: string;
    enterpriseId: string;
}

export function defaultAppState():AppState {
    return {
        accessToken: getTokenFromStorage(),
        isLoggedIn: getTokenFromStorage().length > 0,
        enterpriseName: '',
        enterpriseId: getEnterpriseIDFromStorage()
    }
}

function getTokenFromStorage() {
    let item = localStorage.getItem('accessToken');
    if (!isNullOrUndefined(item)) {
        return item;
    } else {
        return '';
    }
}
function getEnterpriseIDFromStorage() {
    let item = localStorage.getItem('enterpriseId');
    if (!isNullOrUndefined(item)) {
        return item;
    } else {
        return '';
    }
}