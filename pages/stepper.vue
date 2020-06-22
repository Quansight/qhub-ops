<template>
 <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Welcome</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Project Setup</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Security Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Users & Groups</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Provider Options</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
      <GeneralOptionsPanel></GeneralOptionsPanel>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Next
        </v-btn>

        <v-btn text @click="e1 = 1">Previous</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Next
        </v-btn>

        <v-btn 
        text
        @click="e1 = e1 -1">
        Previous</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import GeneralOptionsPanel from "./generalPanel.vue";

interface User {
  firstName: string
  lastName: number
}
export default Vue.extend({
  name: 'DependencyStepper',
  props: {
    user: {
      type: Object,
      required: true
    } as PropOptions<User>
  },
  data () {
    return {
      message: 'This is a message',
      e1: 1
    }
  },
  components: {
    GeneralOptionsPanel
  },
  computed: {
    fullName (): string {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
});
</script>
