<template>
  <v-app>
  <div>
  <Navbar></Navbar>
  <div v-html="hello"></div>
  </div>
  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import hello from "../docs/hello.md";

export default {
  computed: {
    hello() {
      return hello;
    }
  },
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

