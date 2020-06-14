import { GetEntInfo, GETENTINFO } from "../Actions/def";
import { SITEAPI } from "../../Configuration/global";
import AppAPI from "../Actions/api";
import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import AppActionGen from "../Actions/actionGen";
function* getEntInfo(action: GetEntInfo) {
    let id = action.payload.id;
    let url = SITEAPI + '/v1/enterprise/' + id;
    try {
        let response = yield call(AppAPI.getEnterpriseInfo, url);
        switch (response.status) {
            case 200: {
                let name = response.data.name as string;
                yield put(AppActionGen.GetEntInfoSuccess(name));
                break;
            }
            default: {
                yield put(AppActionGen.GetEntInfoFailure());
            }
        }
    } catch (e) {
        yield put(AppActionGen.GetEntInfoFailure());
    }
}

export default function* appWatcher() {
    yield all([
        takeLatest(GETENTINFO, getEntInfo)
    ]);
}