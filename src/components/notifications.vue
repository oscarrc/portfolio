<template>
  <v-system-bar id="notifications" lights-out dark app absolute>
    <v-img
      class="mr-2 notification"
      src="/img/logo.svg"
      contain
      alt="Oscar R.C. Web Developer"
    ></v-img>
    Oscar R.C.
    <v-spacer></v-spacer>
    <v-icon v-if="!network">mdi-signal-off</v-icon>
    <v-icon v-else>mdi-signal</v-icon>
    <v-icon v-if="network">{{ network }}</v-icon>
    <v-icon v-if="battery">{{ battery }}</v-icon>
    <span>{{ hours }} : {{ minutes }}</span>
  </v-system-bar>
</template>

<script>
import { useBattery, useNetwork } from "vue-use-web";

export default {
  name: "notifications",
  data() {
    return {
      hours: "00",
      minutes: "00"
    };
  },
  computed: {
    battery() {
      const { isCharging, level } = useBattery();
      let battery;

      if (isCharging.value) {
        battery = "mdi-battery-charging-" + level.value * 100;
      } else {
        battery = "mdi-battery" + (level.value < 1 ? "-" + level.value : "");
      }

      return battery;
    },
    network() {
      const { isOnline, effectiveType, type } = useNetwork();
      let network;

      switch (type.value) {
        case "wifi":
          network = isOnline.value
            ? "mdi-wifi-strength-4"
            : "mdi-wifi-strength-alert-outline";
          break;
        case "cellular":
          if (isOnline) {
            network =
              effectiveType == "slow-2g"
                ? "mdi-hspa"
                : "mdi-signal-" + effectiveType;
          }
          break;
        case "bluetooth":
          network = isOnline.value ? "mdi-bluetooth" : "mdi-bluetooth-off";
          break;
        case "none":
          network = false;
          break;
        default:
          network = isOnline.value
            ? "mdi-ethernet-cable"
            : "mdi-ethernet-cable-off";
          break;
      }

      return network;
    }
  },
  methods: {
    time: function() {
      let date = new Date();
      this.hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
      this.minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    }
  },
  mounted: function() {
    setInterval(() => {
      this.time();
    }, 1000);
  }
};
</script>
