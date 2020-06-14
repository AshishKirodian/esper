import axios from 'axios';
import { isNullOrUndefined } from 'util';;

export default class AxiosGateWay {
    public static get(url: string, extraToken?: string) {
        var response = axios.get(url, this.getConfig(extraToken));
        return response;
    }

    public static getConfig(extraToken?: string) {
        var tokenLatest: string = '';
        tokenLatest = localStorage.getItem('accessToken') as any;
        if (!isNullOrUndefined(tokenLatest)) {
            if (!isNullOrUndefined(extraToken)) {
                return {
                    headers: { 'Authorization': 'Bearer ' + tokenLatest, 'Content-Type': 'application/json' }
                };
            } else {
                return {
                    headers: { 'Authorization': 'Bearer ' + tokenLatest, 'Content-Type': 'application/json' }
                };
            }

        } else {
            return {
                headers: { 'Authorization': 'loggedout', 'Content-Type': 'application/json' }
            };
        }

    }
}