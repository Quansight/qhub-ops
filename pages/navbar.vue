<template>

  <v-app-bar app flat fixed color="primary" light>
 
   <no-ssr> 
   <!-- TODO: Change to base path -->
   <a href="/qhub-ops/">
   <v-img 
   max-width="180px"
   max-height="180px"
   :src="myImage"
   contain></v-img>
   </a>
   </no-ssr>

   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
       nuxt
       text
       ripple
       color="white"
       active-class to="/docs">Documentation</v-btn>
      <v-btn 
       text
       nuxt
       ripple
       color="white"
       active-class to="/blog">Blog</v-btn>
      <v-btn 
       text
       nuxt
       ripple
       color="white"
       active-class to="/faq">F.A.Q.</v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>

<script>
module.exports = {
  name: "Navbar",
  data: function() {
    return {
      myImage: require("~/assets/QS_Full_Transparent.svg")
    };
  }
};
</script>
