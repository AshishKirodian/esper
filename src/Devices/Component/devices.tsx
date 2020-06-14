import React from 'react';
import { SITEAPI } from '../../Configuration/global';
import AxiosGateWay from '../../Utils/Axios/axiosUtils';
import { DeviceList } from '../State/deviceState';
import IndDevice from './indDevice';

interface Props {
    enterpriseId: string;
}

interface State {
    deviceList: DeviceList[];
}
export default class Devices extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            deviceList: []
        };
    }
    componentDidMount() {
        let { enterpriseId } = this.props;
        let url = SITEAPI + '/enterprise/' + enterpriseId + '/device';
        this.getData(url);
    }
    getData(url: string) {
        AxiosGateWay.get(url).then(
            res => {
                let list = res.data.results as DeviceList[];
                this.setState({ deviceList: list });
            }
        ).catch(e => {
            // do nothing
        })
    }
    render() {
        let { deviceList } = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 device-title mt-3">
                            Devices
                        </div>
                    </div>
                    <div className="row mt-3">
                        {deviceList.map((device, i) =>
                            <div className="col-md-4 col-12" key={i}>
                                <IndDevice indDevice={device} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}