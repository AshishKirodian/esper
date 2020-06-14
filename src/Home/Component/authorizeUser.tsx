import React from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';

interface Props {
    history: History;
    enterpriseName: string;
    enterpriseId: string;
    accessToken: string;
    getEntInfo: (id: string, token: string) => void;
}
interface State {
    accessToken: string;
    enterpriseId: string;
    stage: number;
    mode: string;
    pulsate: boolean;
}
export default class AuthorizeUser extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            accessToken: props.accessToken,
            enterpriseId: props.enterpriseId,
            stage: 0,
            mode: 'slide-in-left',
            pulsate: false
        }
    }
    handleChangeToken(token: string) {
        this.setState({ accessToken: token });
    }
    handleChangeEnterpriseId(token: string) {
        this.setState({ enterpriseId: token });
    }
    submit() {
        let { accessToken, enterpriseId } = this.state;
        let { getEntInfo } = this.props;
        if (accessToken.length > 0) {
            localStorage.setItem('accessToken', accessToken);
        }
        if (enterpriseId.length > 0) {
            localStorage.setItem('enterpriseId', enterpriseId);
        }
        if (accessToken.length > 0 && enterpriseId.length > 0) {
            getEntInfo(enterpriseId, accessToken);
        }
    }
    changeStage(stage: number, mode: string) {
        let { accessToken, enterpriseId } = this.state;
        if (stage === 2 && enterpriseId.length > 0 && accessToken.length > 0) {
            this.submit();
        }
        if (stage >= 0 && stage <= 2) {
            this.setState({ stage: stage, mode: mode === 'right' ? 'slide-in-right' : 'slide-in-left', pulsate: false });
        }
        if (accessToken.length === 0 && enterpriseId.length === 0 && stage === 2) {
            this.setState({ pulsate: true });
        }

    }
    componentWillReceiveProps(nextProps: Props) {
        let { history } = nextProps;
        if (nextProps.enterpriseName.length > 0) {
            this.setState({ stage: 3 });
            setTimeout(() => {
                history.push('/devices')
            }, 3000);
        }
        
    }
    switchRender() {
        let { stage, accessToken, enterpriseId, mode } = this.state;
        let { enterpriseName } = this.props;
        switch (stage) {
            case 0: {
                return (
                    <>
                        <label>Access Token</label>
                        <input value={accessToken} placeholder="Enter Access Token" className={'form-control ' + mode} type="text" onChange={(e) => this.handleChangeToken(e.currentTarget.value)} />
                    </>
                )
            }
            case 1: {
                return (
                    <>
                        <label>Enterprise ID</label>
                        <input value={enterpriseId} placeholder="Enter Enterprise ID" className={'form-control ' + mode} type="text" onChange={(e) => this.handleChangeEnterpriseId(e.currentTarget.value)} />
                    </>
                );
            }
            case 2: {
                if (accessToken.length > 0 && enterpriseId.length > 0) {
                    return (
                        <div>
                            Loading...
                        </div>
                    );
                } else {
                    return (
                        <div className="danger-text">
                            You need to enter relevant information.Go back.
                        </div>
                    );
                }

            }
            case 3: {
                return (
                    <div className="row">
                        <div className={'col-md-12 welcome-text ' + mode}>
                            Welcome {' ' + enterpriseName} <br />
                            We will be redirecting you soon..
                        </div>
                    </div>
                )
            }
        }
    }
    render() {
        let { stage, pulsate } = this.state;
        return (
            <div className="row">
                <div className="col-md-12 authorize-container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {this.switchRender()}
                        </div>
                    </div>
                    {stage !== 3 && <div className="row">
                        <div className="col-md-6 mt-3 col-6 text-center">
                            <i id={stage === 0 ? 'disable-arrow' : ''} onClick={() => stage > 0 && this.changeStage(stage - 1, 'left')} className={'far fa-arrow-alt-circle-left next-icon'} />
                        </div>
                        <div className="col-md-6 mt-3 col-6 text-center">
                            <i id={pulsate ? 'disable-arrow' : ''} onClick={() => !pulsate && this.changeStage(stage + 1, 'right')} className="far fa-arrow-alt-circle-right next-icon" />
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}