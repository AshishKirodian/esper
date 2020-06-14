export default interface DeviceState {
    deviceList: DeviceList[];
    loader: boolean;
}

export interface DeviceList {
    id: string;
    url: string;
    device_name: string;
    memoryInfo: {
        totalRam: number;
    };
    softwareInfo: {
        supportedAbi: string;
    };
    hardwareInfo: {
        brand: string;
        model: string;
    }
}
export function defaultDeviceState(): DeviceState {
    return {
        deviceList: [],
        loader: false
    }
}