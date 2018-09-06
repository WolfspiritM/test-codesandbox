import { IValetudoApi, StatusResponse } from '@/api';



export class MockApi implements IValetudoApi {
    public getCurrentStatus(): Promise<StatusResponse> {
        const response: StatusResponse = {
            battery: 100,
            in_cleaning: false,
            state: 4,
            human_error: '',
            clean_area: 123,
            clean_time: 123,
            fan_power: 38,
        };
        return Promise.resolve(response);
    }
}