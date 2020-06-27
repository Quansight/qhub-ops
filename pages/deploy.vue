<template>
<v-app>
<Navbar></Navbar>
<v-container fill-height>
  
  <v-row align="center"
      justify="center">
 <v-col xs={12}>
<DeploymentStepper></DeploymentStepper>
</v-col>
  </v-row>
</v-container>

</v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import DeploymentStepper from "./stepper.vue";

export default {
  data() {
    return {
          };
  },
  components: {
    Navbar,
    DeploymentStepper
  }
};
</script>


