import React from 'react';
import { GroupList } from '../State/groupState';

interface Props {
    group: GroupList;
}

export default function IndGroup(props: Props) {
    let { group } = props;
    return (
        <div className="row">
            <div className="offset-md-1 col-md-10 col-10 offset-1">
                <div className="row group-container">
                    <div className="col-md-4 col-4 number">
                        {group.device_count}
                        <sub className="sub">{getCountTitle(group.device_count)}</sub>
                    </div>
                    <div className="col-md-8 col-8">
                        <div className="row">
                            <div className="col-md-12 group-name">
                                {group.name.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mt-2">
                        <a href={group.enterprise}>GO HERE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getCountTitle(count: number) {
    if (count > 1) {
        return 'Devices';
    } else {
        return 'Device';
    }
}