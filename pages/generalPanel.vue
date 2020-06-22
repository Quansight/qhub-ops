<template>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs4 justify-center>
            <GeneralOptions :options=GeneralOptionsProps></GeneralOptions>
          </v-flex>
          <v-flex xs2 justify-center>
          </v-flex>
          <v-flex xs6>
            <InfoCard :options=GeneralOptionsInformation description="The Project Name will be the name with which your project is seen."></InfoCard>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import GeneralOptions from "./generalOptions.vue";
import InfoCard from "./infoCard.vue"

export default Vue.extend({
  name: 'GeneralOptionsPanel',
  props: {
  },
  data () {
    return {
      GeneralOptionsProps: {
        project_name: '',
        provider_options: ['Amazon Web Services', 'Google Cloud Platform', 'Digital Ocean'],
        ci_cd_options: ['Github CI/CD'],
        domain: ''
      },
      GeneralOptionsInformation: {
        project_name_desc: 'The Project Name will be the name with which your project is referred to.',
        provider_logo_filepath: [ '~/assets/aws_large.png', '~/assets/gcp.png', '~/assets/do.png'],
        provider_descriptions: ['', '', ''],
        ci_cd_logo_filepath: ['', '', ''],
        ci_cd_descriptions: ['']
      }
    }
  },
  components: {
    GeneralOptions,
    InfoCard
  },
  computed: {
  }
});
</script>