<template>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs4 justify-center>
            <GeneralOptions 
            v-on:chooseProvider="setProvider" 
            v-on:chooseMessage="setMessage"
            v-on:chooseCiCd="setCiCd"
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
            >
            <div v-if="show" slot="project_name_description">
            <v-card-title>
            <p>Please enter a project name.</p>
            </v-card-title>
            </div>
            <div v-if="messageShow" slot="choose_option_message">
            <v-card-title>
            <p>Please Choose a Provider</p>
            </v-card-title>
            </div>
            <div v-if="digitalocean" slot="do_description">
                 <v-img :src=do_img ></v-img>
            <br>
            <v-card-title>Affordable. Efficient. Gets the job done.</v-card-title>
            <v-card-subtitle class="pb-0"> Reccomended for Beginners </v-card-subtitle>
            <v-card-text>
            <p>New to the ecosystem? Want to test something out on the cheap? Give this a shot. Typically the cheapest and the most restrictive choice. Sign up at
              <a href="https://cloud.digitalocean.com/registrations/new"> Digital Ocean </a> 
              if you plan to use this provider.</p>
            </v-card-text>
            </div>
            <div v-if="aws" slot="aws_description">
            <v-img :src=aws_img ></v-img>
            <br>
            <v-card-title>Expensive, but the oldest and most robust.</v-card-title>
            <v-card-subtitle class="pb-0"> Reccomended for Amazon Ecosystem Users and Experts </v-card-subtitle>
            <v-card-text>
            <p>If you want scalability, integration, and more features, AWS has you covered. Generally
              very competitive with Google Cloud Platform pricing, but can get more expensive when considering
              the problem set. Sign up at
              <a href="https://aws.amazon.com/"> Amazon Web Services </a> 
              if you plan to use this provider.</p>
              </v-card-text>
            </div>
            <div v-if="gcp" slot="gcp_description">
            <br>
              <v-img :src=gcp_img ></v-img>
              <v-card-title>Expensive, but feature rich. </v-card-title>
              <v-card-subtitle class="pb-0"> Reccomended for Copmute Heavy Users </v-card-subtitle>
            <v-card-text>
            <p>In the Google Ecosystem? Maybe want TPUs? Robust Kubernates support and GSuite Integration?
              Then Google Cloud Platform has you covered.
              Typically on par or around Amazon Pricing, but can get expensive. Sign up at
              <a href="https://cloud.google.com/"> Google Cloud Platform </a> 
              if you plan to use this provider.</p>
              </v-card-text>
            </div> 
            <div v-if="githubcicd" slot="githubcicd_description">
            <br>
              <v-img :src=githubcicd_img ></v-img>
              <v-card-title> A free, experimental, and stable solution. </v-card-title>
              <v-card-subtitle class="pb-0"> Reccomended for Everyone. Novice Friendly. </v-card-subtitle>
            <v-card-text>
            <p> The Github Continuous Integration and Continuous Deployment Server. Utilize this to deploy your notebooks.</p>
              </v-card-text>
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
      messageShow: false,
      aws: false,
      gcp: false,
      digitalocean: false,
      githubcicd: false,  
      aws_img: require("~/assets/aws_large.png"),
      gcp_img: require("~/assets/gcp_logo.svg"),
      do_img: require("~/assets/do_long_logo.png"),
      githubcicd_img: require("~/assets/GitHub_Logo.png"),
      provider_choice: '',
      cicd_choice: '',
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
      this.provider_choice = value;
      this.githubcicd = false;
      if(value === 'Amazon Web Services') {
      this.$data.messageShow = false;
      this.aws = true;
      }
      if(value === 'Google Cloud Platform') {
      this.$data.messageShow = false;
      this.gcp = true;
      }
      if(value === 'Digital Ocean') {
      this.$data.messageShow = false;
      this.digitalocean = true;
      }
    },
     setMessage() {
       this.$data.githubcicd = false;
       this.$data.show = false;
       this.$data.messageShow = true;
       this.$data.aws = false;
       this.$data.gcp = false; 
       this.$data.digitalocean = false;
     },
     setCiCd(value: string) {
       this.cicd_choice = value;
       if(value === 'Github CI/CD') {
       this.$data.messageShow = false;
       this.$data.show = false;
       this.$data.messageShow = false;
       this.$data.aws = false;
       this.$data.gcp = false; 
       this.$data.digitalocean = false;
       this.githubcicd = true;
       }
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