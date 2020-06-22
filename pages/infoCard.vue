<template>
 <v-card height="100%">
 <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col>
  <transition name="fade">
    <!-- <div class="text-center"> -->
    <p v-if="show">{{ options.project_name_desc }}</p>
  <v-img 
   v-if="showImage"
   :src="myImage"
   height="200px"
   max-width="600px">
  </v-img>
    <!-- </div> -->
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