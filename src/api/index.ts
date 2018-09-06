export enum VacuumStateEnum {
    'Starting' = 1,
    'Charger disconnected' = 2,
    'Idle' = 3,
    'Remote control active' = 4,
    'Cleaning' = 5,
    'Returning home' = 6,
    'Manual mode' = 7,
    'Charging' = 8,
    'Charging problem' = 9,
    'Paused' = 10,
    'Spot cleaning' = 11,
    'Error' = 12,
    'Shutting down' = 13,
    'Updating' = 14,
    'Docking' = 15,
    'Going to target' = 16,
    'Zoned cleaning' = 17,
}

export interface StatusResponse {
    battery: number;
    in_cleaning: boolean;
    state: VacuumStateEnum;
    human_error: string;
    clean_area: number;
    clean_time: number;
    fan_power: number;
}

export interface IValetudoApi {
    getCurrentStatus(): Promise<StatusResponse>;
}