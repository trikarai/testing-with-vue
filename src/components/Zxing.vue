<template>
  <div>
    <v-zxing :success="success"></v-zxing>
  </div>
</template>

<script>
import Vue from "vue";
import VueZxing from "vue-zxing";

Vue.use(VueZxing);

export default {
  name: "VueBarcodeTest",
  methods: {
    success(codeText) {
      console.log(codeText);
    },
  },
};
</script>
