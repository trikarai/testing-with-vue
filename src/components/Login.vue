<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Enter your username: <input v-model="username" /> Enter your password:
    <input v-model="password" />
    <div v-if="error" class="error">
      Please enter a username with at least seven letters.
    </div>
    <button type="submit" @click="login">Login</button>

    <div class="modal" v-if="isShow">this is dummy modal</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Foo",

  data() {
    return {
      message: "Welcome to the Vue.js cookbook",
      username: "",
      password: "",
      result: null,
      isShow: false,
    };
  },
  computed: {
    error() {
      return this.username.trim().length < 7;
    },
  },
  methods: {
    async login() {
      this.username = "";
      this.password = "";

      const response = await axios.post("mock/service");
      this.result = response.data;
    },
  },
};
</script>

