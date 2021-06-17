<template>
  <div>
    <v-zxing @decode="onDecode" />
    <br />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import CameraScanner from "vue-zxing-scanner";

Vue.use(CameraScanner);

export default {
  name: "Zxing-scanner",
  data() {
    return {
      result: null,
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },
  },
};
</script>

<style></style>
