<template>
<v-app>
<div>
<Navbar></Navbar>
<div>
<DeploymentStepper></DeploymentStepper>
</div>
</div>
</v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import DeploymentStepper from "./stepper.vue";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    DeploymentStepper
  }
};
</script>
