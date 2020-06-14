import React from 'react';
import { GroupList } from '../State/groupState';
import { SITEAPI } from '../../Configuration/global';
import AxiosGateWay from '../../Utils/Axios/axiosUtils';
import IndGroup from './indGroup';

interface Props {
    enterpriseId: string;
}

interface State {
    groupList: GroupList[];
}

export default class Group extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            groupList: []
        };
    }
    componentDidMount() {
        let { enterpriseId } = this.props;
        let url = SITEAPI + '/enterprise/' + enterpriseId + '/devicegroup';
        this.getData(url);
    }
    getData(url: string) {
        AxiosGateWay.get(url).then(
            res => {
                let list = res.data.results as GroupList[];
                this.setState({ groupList: list });
            }
        ).catch(e => {
            // do nothing
        })
    }
    render() {
        let { groupList } = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 device-title mt-3">
                            Device Groups
                        </div>
                    </div>
                    <div className="row mt-3">
                        {groupList.map((group, i) =>
                            <div key={i} className="col-md-4 col-12">
                                <IndGroup group={group} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}