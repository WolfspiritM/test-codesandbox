
import { Module } from 'vuex';
import { Component as Component } from 'vue-router/types/router';
import { StatusResponse, IValetudoApi } from '@/api';
import { MockApi } from '@/api/mockApi';

const api: IValetudoApi = new MockApi();

export interface VacuumState extends StatusResponse {
    connected: boolean;
}

export const vacuum: Module<VacuumState, any> = {
    namespaced: true,
    state: {
        connected: false,
        battery: 0,
        in_cleaning: false,
        state: 0,
        human_error: '',
        clean_area: 0,
        clean_time: 0,
        fan_power: 0,
    },
    mutations: {
        setStateFromApi(state, response: StatusResponse) {
            state.connected = true;
            for (const test in response) {
                if (response.hasOwnProperty(test)){
                    (state as any)[test] = (response as any)[test];
                }
            }
        }
    },
    actions: {
        async updateVacuumStatus(context) {
            const status = await api.getCurrentStatus();
            console.log("Update", status);
            context.commit('setStateFromApi', status);
        }
    }
}