<template>
    <v-ons-page>
        <ons-toolbar>
                <div class="left">
                    <ons-back-button>Settings</ons-back-button>
                </div>
                <div class="center">Consumables</div>
                <div class="right">
                </div>
            </ons-toolbar>
            <ons-progress-bar id="loading-bar-settings-consumables" value="0" indeterminate="indeterminate"></ons-progress-bar>

            <ons-list-title style="margin-top:5px;">Consumables</ons-list-title>
            <ons-list>
                <ons-list-item>
                    <div class="left">
                        Main Brush
                    </div>
                    <div class="center" id="settings-consumables-status-main-brush" style="margin-left:5%">
                        ??? hours left
                    </div>
                    <div class="right">
                        <ons-icon icon="fa-undo" class="list-item__icon" style="color: #eb5959;" onclick="handleConsumableResetButton('main_brush_work_time');"></ons-icon>
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Side Brush
                    </div>
                    <div class="center" id="settings-consumables-status-side-brush" style="margin-left:5%">
                        ??? hours left
                    </div>
                    <div class="right">
                        <ons-icon icon="fa-undo" class="list-item__icon" style="color: #eb5959;" onclick="handleConsumableResetButton('side_brush_work_time');"></ons-icon>
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Filter
                    </div>
                    <div class="center" id="settings-consumables-status-filter" style="margin-left:5%">
                        ??? hours left
                    </div>
                    <div class="right">
                        <ons-icon icon="fa-undo" class="list-item__icon" style="color: #eb5959;" onclick="handleConsumableResetButton('filter_work_time');"></ons-icon>
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Sensor
                    </div>
                    <div class="center" id="settings-consumables-status-sensor" style="margin-left:5%">
                        ??? hours left
                    </div>
                    <div class="right">
                        <ons-icon icon="fa-undo" class="list-item__icon" style="color: #eb5959;" onclick="handleConsumableResetButton('sensor_dirty_time');"></ons-icon>
                    </div>
                </ons-list-item>
            </ons-list>

            <ons-list-title style="margin-top:20px;">All-time statistics</ons-list-title>
            <ons-list>
                <ons-list-item>
                    <div class="left">
                        Total cleaned area:
                    </div>
                    <div class="right" id="settings-consumables-status-statistics-area">
                        ??? mÂ²
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Total cleaning hours:
                    </div>
                    <div class="right" id="settings-consumables-status-statistics-hours">
                        ??? hours
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Total cleaning count:
                    </div>
                    <div class="right" id="settings-consumables-status-statistics-count">
                        ???
                    </div>
                </ons-list-item>
            </ons-list>
    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ConsumableSettings extends Vue {}
</script>
