<template>
    <v-ons-page>
        <ons-toolbar>
            <div class="left">
                <ons-back-button>Settings</ons-back-button>
            </div>
            <div class="center">Timers</div>
            <div class="right">
                <ons-toolbar-button id="settings-timers-create-new-timer" onclick="addNewTimer();">
                    <ons-icon icon="fa-plus"></ons-icon>
                </ons-toolbar-button>
            </div>
        </ons-toolbar>
        <ons-progress-bar id="loading-bar-settings-timers" value="0" indeterminate="indeterminate"></ons-progress-bar>

        <ons-list-title style="margin-top:5px;">Timers</ons-list-title>
        <ons-list id="settings-timers-timer-list"></ons-list>

    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerSettings extends Vue {}
</script>
