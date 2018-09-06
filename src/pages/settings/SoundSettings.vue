<template>
    <v-ons-page>
        <ons-toolbar>
            <div class="left">
                <ons-back-button>Settings</ons-back-button>
            </div>
            <div class="center">Sound Volume</div>
            <div class="right">
            </div>
        </ons-toolbar>
        <ons-progress-bar id="loading-bar-settings-sound-volume" value="0" indeterminate="indeterminate"></ons-progress-bar>
        
        <ons-list-title style="margin-top:20px;">Sound Volume Settings</ons-list-title>
        <ons-list>
            <ons-list-item>
                <div class="left">
                    Volume:
                </div>
                <label class="right" style="width:75%">
                    <ons-row>
                            <ons-col width="40px" style="text-align: center; line-height: 31px;">
                                <ons-icon icon="md-volume-down"></ons-icon>
                            </ons-col>
                            <ons-col>
                                <ons-range style="width: 100%;" value="0" id="settings-sound-volume-input-volume"></ons-range>
                            </ons-col>
                            <ons-col width="40px" style="text-align: center; line-height: 31px;">
                                <ons-icon icon="md-volume-up"></ons-icon>
                            </ons-col>
                        </ons-row>
                </label>
            </ons-list-item>
            <ons-list-item>
                <div class="center">
                    <ons-button id="settings-sound-volume-input-save-button" modifier="large" class="button-margin" onclick="handleSoundVolumeSettingsSaveButton();">Save sound volume</ons-button>
                </div>
            </ons-list-item>
            <ons-list-item>
                <div class="center">
                    <ons-button id="settings-sound-volume-input-test-button" modifier="large" class="button-margin" onclick="handleSoundVolumeSettingsTestButton();">Test sound volume</ons-button>
                </div>
            </ons-list-item>
        </ons-list>
    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SoundSettings extends Vue {}
</script>
