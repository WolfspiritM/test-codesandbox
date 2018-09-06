<template>
  <v-ons-page>
    <v-ons-progress-bar value="0" indeterminate="indeterminate"></v-ons-progress-bar>
    <div class="content">
            <section>
                <p id="robot-state" v-if="!this.hasError()">
                    {{this.getCurrentStatus()}}
                </p>
                <p id="robot-state" v-if="this.hasError()">
                    <span class="robot-error">
                        <ons-icon icon="fa-exclamation-triangle"></ons-icon>
                            {{this.vacuum.human_error()}}
                        <ons-icon icon="fa-exclamation-triangle"></ons-icon>
                    </span>
                </p>
                <div style="width:100%; text-align:center;">
                    <p id="robot-state-details">
                        <span id="robot-state-details-m2">Area: {{this.vacuumState.clean_area}} mÂ²</span>
                        <span id="robot-state-details-time">Time: {{this.vacuumState.clean_time}}</span>
                    </p>
                </div>
            </section>
            <hr style="width:98%; opacity: 0.3"/>
            <section id="robot-control-buttons">
                <v-ons-button id="start-button" class="button-margin" onclick="handleControlButton('start')" :disabled="!this.isNotPausable()" style="width:40%"><v-ons-icon icon="fa-play"></v-ons-icon> Start</v-ons-button>
                <v-ons-button id="pause-button" class="button-margin" onclick="handleControlButton('pause')" :disabled="this.isNotPausable()" style="width:40%"><v-ons-icon icon="fa-pause"></v-ons-icon> Pause</v-ons-button>
                <br>
                <v-ons-button id="stop-button" class="button-margin" onclick="handleControlButton('stop')" disabled style="width:40%"><v-ons-icon icon="fa-stop"></v-ons-icon> Stop</v-ons-button>
                <v-ons-button id="home-button" class="button-margin" onclick="handleControlButton('home')" disabled style="width:40%"><v-ons-icon icon="fa-home"></v-ons-icon> Home</v-ons-button>
                <br>
                <v-ons-button id="spot-button" class="button-margin" onclick="handleControlButton('spot')" disabled style="width:40%"><v-ons-icon icon="fa-caret-down"></v-ons-icon> Spot</v-ons-button>
                <v-ons-button id="find-robot-button" class="button-margin" onclick="handleControlButton('find')" disabled style="width:40%"><v-ons-icon icon="fa-map-marker"></v-ons-icon> Find</v-ons-button>
                <br>
                <v-ons-button id="go-to-button" class="button-margin" onclick="handleGoToButton()" disabled style="width:40%"><v-ons-icon icon="fa-map-signs"></v-ons-icon> Go to </v-ons-button>
                <v-ons-button id="area-button" class="button-margin" onclick="handleAreaButton()" disabled style="width:40%"><v-ons-icon icon="fa-map"></v-ons-icon> Area </v-ons-button>

                <br>
                <v-ons-button id="fanspeed-button" class="button-margin" onclick="handleFanspeedButton()" disabled style="width:40%"><v-ons-icon icon="fa-superpowers"></v-ons-icon> {{getFanSpeed()}}</v-ons-button>
            </section>
            <hr style="width:98%; opacity: 0.3">

            <section style="margin: 10px 16px">
                <p id="battery-status-text">
                    Battery: {{this.vacuumState.battery}}%
                </p>

                <p>
                    <v-ons-progress-bar id="battery-status-bar" secondary-value="100"></v-ons-progress-bar>
                </p>
            </section>
    </div>
  </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { VacuumState } from '@/store/modules/vacuum';
import { VacuumStateEnum } from '@/api';

const vacuum = namespace('vacuum');

enum FanSpeeds {
    'Low power' = 38,
    'Medium power' = 60,
    'High power' = 75,
    'Super power' = 100,
}

@Component
export default class Home extends Vue {
  @vacuum.State(state => state) public vacuumState!: VacuumState;

  public getFanSpeed() {
      return FanSpeeds[this.vacuumState.fan_power];
  }


  public getCurrentStatus() {
      return VacuumStateEnum[this.vacuumState.state];
  }

  public hasError() {
      return this.vacuumState.state === VacuumStateEnum.Error;
  }

  public isNotPausable() {
      return this.vacuumState.state === VacuumStateEnum.Idle
                || this.vacuumState.state === VacuumStateEnum.Paused
                ||this.vacuumState.state === VacuumStateEnum['Charger disconnected'];
  }


}
</script>

<style scoped>
 #robot-state {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
}
.robot-error {
    color: #eb5959;
}
#robot-control-buttons {
    text-align: center;
}
#robot-control-buttons > ons-button {
    margin: 5px;
    font-size: 1.2em;
}
#robot-state-details-m2 {
    margin-right: 5%;
}
#robot-state-details-time {
    text-align: right;
}
</style>

