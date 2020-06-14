import React from 'react';
import { History } from 'history';
import AuthorizeUser from './authorizeUser';
interface Props {
    history: History;
    isLoggedIn: boolean;
    enterpriseName: string;
    enterpriseId: string;
    accessToken: string;
    getEntInfo: (id: string, token: string) => void;
}

export default function Home(props: Props) {
    let { history, getEntInfo, enterpriseName, enterpriseId, accessToken } = props;
    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <img className="img-fluid" src="/static_images/start.svg" alt="start" />
            </div>
            <div className="offset-md-1 col-md-4 right-fold">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="esper-title">Esper Console</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <AuthorizeUser accessToken={accessToken} enterpriseId={enterpriseId} enterpriseName={enterpriseName} getEntInfo={getEntInfo} history={history} />
                    </div>
                </div>
            </div>
        </div>
    );
}
