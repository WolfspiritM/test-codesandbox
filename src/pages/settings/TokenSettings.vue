<template>
    <v-ons-page>
        <ons-toolbar>
            <div class="left">
                <ons-back-button>Settings</ons-back-button>
            </div>
            <div class="center">Token</div>
            <div class="right">
            </div>
        </ons-toolbar>
        <ons-progress-bar id="loading-bar-settings-token" value="0" indeterminate="indeterminate"></ons-progress-bar>

        <ons-list-title style="margin-top:5px;">Current Token</ons-list-title>
        <ons-list>
            <ons-list-item>
                <div class="left">
                    Token
                </div>
                <div class="right">
                    <span id="settings-token-label" style="text-align:right;user-select:text;">????????????????????????????????</span>
                </div>
            </ons-list-item>
        </ons-list>
    </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TokenSettings extends Vue {}
</script>
