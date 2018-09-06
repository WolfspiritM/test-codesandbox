<template>
    <v-ons-page>
        <v-ons-toolbar>
        <div class="left">
            <v-ons-back-button>Zones</v-ons-back-button>
        </div>
        <div class="center">Go to configuration</div>
        </v-ons-toolbar>

        <v-ons-progress-bar id="loading-bar-zones-go-to" value="0"></v-ons-progress-bar>

        <v-ons-list-title style="margin-top:20px;">Go to setup</v-ons-list-title>
        <v-ons-list>
            <v-ons-list-item>
                <div class="left">
                    Go to x:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-go-to-x" float style="width:100%" value="100"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    Go to y:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-go-to-y" float style="width:100%" value="100"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-button id="zones-config-go-to-button" modifier="large" class="button-margin" onclick="handleZonesConfigGoToButton();">Go To</v-ons-button>
                </div>
            </v-ons-list-item>
        </v-ons-list>

        <v-ons-list-title style="margin-top:20px;">Save Go To spot as</v-ons-list-title>
        <v-ons-list>
            <v-ons-list-item>
                <div class="left">
                    Save as:
                </div>
                <label class="right" style="width:75%">
                    <v-ons-input id="zones-config-go-to-name" float style="width:100%" value="My go to point"></v-ons-input>
                </label>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-button id="zones-config-go-to-save-button" modifier="large" class="button-margin" onclick="handleZonesConfigGoToSaveButton();">Save Go To spot</v-ons-button>
                </div>
            </v-ons-list-item>
        </v-ons-list>

        <v-ons-list-title style="margin-top:20px;">Delete Go To spot</v-ons-list-title>
        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-button modifier="large" class="button-margin" onclick="handleZonesConfigGoToDeleteButton();">Select Go To spot to delete</v-ons-button>
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
