import AxiosGateWay from "../../Utils/Axios/axiosUtils";

export default class AppAPI {
    public static getEnterpriseInfo(url: string) {
        return AxiosGateWay.get(url).then(
            result => {
                return result;
            }
        ).catch(
            error => {
                return error.response;
            }
        );
    }
}