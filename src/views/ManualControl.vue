<template>
  <v-ons-page>
      <v-ons-progress-bar id="loading-bar-manualcontrol" value="0" indeterminate="indeterminate"></v-ons-progress-bar>

      <div class="aspect-ratio" style="text-align: center; position: relative; height: 99%;" id="notouchmovementsarea">
              <canvas id="manual-control-area"  class="fit-img fit-img-tight" style="background-color: #9ea7b833; height: 90%; width: 90%; position:relative;"></canvas>
              <div>
                  <v-ons-button id="start-manual-control-button" class="button-margin" onclick="startManualControl()">Start Manual Control</v-ons-button>
                  <v-ons-button id="stop-manual-control-button" class="button-margin" onclick="stopManualControl()" disabled>Stop Manual Control</v-ons-button>
              </div>
      </div>
  </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ManualControl extends Vue {}
</script>
