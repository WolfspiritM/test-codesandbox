<template>
    <v-ons-page>
  <ons-toolbar>
                <div class="left">
                    <ons-back-button>Settings</ons-back-button>
                </div>
                <div class="center">Wifi</div>
                <div class="right">
                </div>
            </ons-toolbar>
            <ons-progress-bar id="loading-bar-settings-wifi" value="0" indeterminate="indeterminate"></ons-progress-bar>

            <ons-list-title style="margin-top:5px;">Current connection</ons-list-title>
            <ons-list>
                <ons-list-item>
                    <div class="left">
                        Status
                    </div>
                    <div class="right" id="settings-wifi-current-connection-status-connected">
                        ???
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        SSID
                    </div>
                    <div class="right" id="settings-wifi-current-connection-status-ssid">
                        ???
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Signal
                    </div>
                    <div class="right" id="settings-wifi-current-connection-status-signal">
                        -?? dBm
                    </div>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        TX Bitrate
                    </div>
                    <div class="right" id="settings-wifi-current-connection-status-tx-bitrate">
                        ??? MBit/s
                    </div>
                </ons-list-item>

            </ons-list>

            <ons-list-title style="margin-top:20px;">Wifi Settings</ons-list-title>
            <ons-list>
                <ons-list-item>
                    <div class="left">
                        SSID:
                    </div>
                    <label class="right" style="width:75%">
                        <ons-input id="settings-wifi-input-ssid" float maxlength="32" placeholder="SSID" style="width:100%"></ons-input>
                    </label>
                </ons-list-item>
                <ons-list-item>
                    <div class="left">
                        Password:
                    </div>
                    <label class="right" style="width:75%">
                        <ons-input id="settings-wifi-input-password" type="password" float maxlength="63" placeholder="Password" style="width:100%;"></ons-input>
                    </label>
                </ons-list-item>
                <ons-list-item>
                    <div class="center">
                        <ons-button id="settings-wifi-input-save-button" modifier="large" class="button-margin" disabled onclick="handleWifiSettingsSaveButton();">Save new Wifi configuration</ons-button>
                    </div>
                </ons-list-item>
            </ons-list>
    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WifiSettings extends Vue {}
</script>
