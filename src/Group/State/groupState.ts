export default interface GroupState {
    groupList: GroupList[];
}

export interface GroupList {
    id: string;
    name: string;
    enterprise: string;
    device_count: number;
}