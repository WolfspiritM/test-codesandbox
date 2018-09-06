<template>
    <v-ons-page>
        <v-ons-toolbar>
        <div class="left">
            <v-ons-back-button>Zones</v-ons-back-button>
        </div>
        <div class="center">Zone configuration</div>
        </v-ons-toolbar>

        <v-ons-progress-bar id="loading-bar-zones-config-zone" value="0"></v-ons-progress-bar>

        <v-ons-list-title style="margin-top:20px;">Cleanup area definition</v-ons-list-title>
        <v-ons-list>
            <v-ons-list-item>
                <div class="left">
                    x1:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-zone-area-x1" float style="width:100%" value="500"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    y1:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-zone-area-y1" float style="width:100%" value="500"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    x2:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-zone-area-x2" float style="width:100%" value="1000"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    y2:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-zone-area-y2" float style="width:100%" value="1000"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    Iterations:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-zone-area-iterations" float style="width:100%" value="2"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-button id="zones-config-zone-areabutton" modifier="large" class="button-margin" onclick="handlezonesConfigZoneAreaButton();">Clean zone</v-ons-button>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ZonesConfiguration extends Vue {}
</script>
