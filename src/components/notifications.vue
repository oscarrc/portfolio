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
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>{{ hours }} : {{ minutes }}</span>
  </v-system-bar>
</template>

<script>
export default {
  name: "notifications",
  data() {
    return {
      hours: "00",
      minutes: "00",
      battery:
        navigator.battery || navigator.mozBattery || navigator.webkitBattery,
      connection:
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection
    };
  },
  methods: {
    time: function() {
      let date = new Date();
      this.hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
      this.minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    }
  },
  mounted: function() {
    setInterval(this.time(), 1000);
  }
};
</script>
