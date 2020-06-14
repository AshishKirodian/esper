import { GetEntInfo, GETENTINFO, GetEntInfoSuccess, GETENTINFO_SUCCESS, GetEntInfoFailure, GETENTINFO_FAILURE } from "./def";

export default class AppActionGen {
    public static GetEntInfo(id: string, token: string): GetEntInfo {
        return {
            type: GETENTINFO,
            payload: {
                token: token,
                id: id
            }
        };
    }
    public static GetEntInfoSuccess(name: string): GetEntInfoSuccess {
        return {
            type: GETENTINFO_SUCCESS,
            payload: {
                name: name
            }
        };
    }
    public static GetEntInfoFailure(): GetEntInfoFailure {
        return {
            type: GETENTINFO_FAILURE
        };
    }
} 