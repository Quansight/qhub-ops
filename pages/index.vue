<template>
 <v-app>
  <div>
  <Navbar></Navbar>
  <div>
   <v-container fluid align-center grid-list-md>
   <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4 align-center>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
     </v-layout>
  </v-container>
  </div>
  <h1 class="text-xs-center"> Welcome to QHub </h1>
  </div>
  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  },
  components: {
    Navbar
  }
};
</script>
