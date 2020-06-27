<template>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs4 justify-center>
            <GeneralOptions 
            v-on:chooseProvider="setProvider" 
            :options=GeneralOptionsProps
            >
            </GeneralOptions>
          </v-flex>
          <v-flex xs2 justify-center>
          </v-flex>
          <v-flex xs6>
            <InfoCard 
            :options=GeneralOptionsInformation
            :chosen_provider=provider_choice
            description="The Project Name will be the name with which your project is seen."
            >
            <div v-if="show" slot="project_name_description">
            <p>{{ GeneralOptionsInformation.project_name_desc }}</p>
            </div>
            </InfoCard>
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
      show: false,
      provider_choice: '',
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
      },
    }
  },
    methods: {
     setProvider(value: string) {
      this.provider_choice = value
    }
    },
  components: {
    GeneralOptions,
    InfoCard
  },
  computed: {
  },
  mounted() {
   this.$data.show = true; 
  },
});
</script>