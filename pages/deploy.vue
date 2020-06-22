<template>
<v-app>
<Navbar></Navbar>
<div class="content">
<v-container>
<DeploymentStepper :user=TestUser></DeploymentStepper>
</v-container>
</div>
</v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import DeploymentStepper from "./stepper.vue";

export default {
  data() {
    return {
      TestUser: {
        firstName: "Anirrudh",
        lastName: 0
      }
    };
  },
  components: {
    Navbar,
    DeploymentStepper
  }
};
</script>


<style scoped>
.content {
  padding-top: 260px; 
}
</style>