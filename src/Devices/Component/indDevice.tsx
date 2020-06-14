import React from 'react';
import { DeviceList } from '../State/deviceState';
import { Link } from 'react-router-dom';

interface Props {
    indDevice: DeviceList;
}

export default function IndDevice(props: Props) {
    let { indDevice } = props;
    return (
        <div className="row">
            <div className="offset-md-1 col-md-12 col-12 ind-device">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={'/static_images/device.svg'} alt="device" />
                    </div>
                    <Link to={'/'}>
                        < div className="overlay">
                            <div className="row">
                                <div className="col-md-12 device-name mt-1">
                                    <i className="fas fa-mobile-alt info-icon" />
                                    <a style={{ textDecoration: 'none', color: 'white' }} href={indDevice.url}>{indDevice.device_name}</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 device-model  mt-1">
                                    <i className="fas fa-copyright info-icon" />
                                    {indDevice.hardwareInfo.brand}
                                </div>
                                <div className="col-md-6 device-model  mt-1">
                                    <i className="fab fa-buromobelexperte info-icon" />
                                    {indDevice.hardwareInfo.model}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 device-ram  mt-1">
                                    <i className="fas fa-memory info-icon" />
                                    {indDevice.memoryInfo.totalRam}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 device-software  mt-1">
                                    <i className="fas fa-tools info-icon" />
                                    {indDevice.softwareInfo.supportedAbi}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
}
