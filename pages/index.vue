<template>
 <v-app>
  <div>
  <Navbar></Navbar>
  </div>
  <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col align="center"
      justify="center">
      <div class="display-4 font-weight-regular"> Welcome to QHub </div> 
      </v-col>
  </v-row>
  <v-row align="center"
      justify="center">
  <div>
  <DescriptionChanger></DescriptionChanger>
  </div>
  </v-row>
</v-container>
  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import DescriptionChanger from "./description.vue";

export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  },
  components: {
    Navbar,
    DescriptionChanger
  }
};
</script>
