<template>
 <v-card height="100%">
 <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col>
  <transition name="fade" v-bind="$attrs" v-on="$listeners">
    <slot name="project_name_description"></slot>
  </transition>
  </v-col>
  </v-row>
</v-container>
 </v-card>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IPropsGeneralOptionsDescriptions } from '~/assets/general'
export default Vue.extend({
  name: 'InfoCard',
  props: {
    description: String,
    options: {
        type: Object,
        required: false
    } as PropOptions<IPropsGeneralOptionsDescriptions>
  },
  methods: {
      },
  data () {
    return {
      show: false,
      showImage: false,
      myImage: require("~/assets/aws_large.png")
    }
  },
  computed: {
    },
  mounted() {
    this.$data.show = true; 
    this.$data.showImage = true;
  } 
 }
);
</script>