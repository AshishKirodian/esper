export const GETENTINFO = 'GETENTINFO';
export type GETENTINFO = typeof GETENTINFO;
export const GETENTINFO_SUCCESS = 'GETENTINFO_SUCCESS';
export type GETENTINFO_SUCCESS = typeof GETENTINFO_SUCCESS;
export const GETENTINFO_FAILURE = 'GETENTINFO_FAILURE';
export type GETENTINFO_FAILURE = typeof GETENTINFO_FAILURE;

export interface GetEntInfo {
    type: GETENTINFO;
    payload: {
        id: string;
        token: string;
    }
}

export interface GetEntInfoSuccess {
    type: GETENTINFO_SUCCESS;
    payload: {
        name: string;
    }
}

export interface GetEntInfoFailure {
    type: GETENTINFO_FAILURE;
}

export type AppAction = GetEntInfo |
    GetEntInfoSuccess |
    GetEntInfoFailure