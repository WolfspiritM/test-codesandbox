<template>
  <v-ons-page>
    <div class="content">
      <v-ons-list-title style="margin-top:20px;">Clean zones</v-ons-list-title>
      <v-ons-list id="zones-list">
          <v-ons-list-item>No zones are configured yet.</v-ons-list-item>
      </v-ons-list>

      <v-ons-card @click="openGotoConfiguration">
          <div class="title"><v-ons-icon icon="fa-wrench"></v-ons-icon> Go to configuration</div>
          <div class="content">Configure go to spots / Check coordinate system</div>
      </v-ons-card>

      <v-ons-card @click="openZoneConfiguration">
          <div class="title"><v-ons-icon icon="fa-wrench"></v-ons-icon> Zone configuration</div>
          <div class="content">Configure the different zones</div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Zones extends Vue {

  public openZoneConfiguration() {
    this.$router.push({name: "zoneConfig"});
  }
  public openGotoConfiguration() {
    this.$router.push({name: "gotoConfig"});
  }
}
</script>
