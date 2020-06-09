<template>

  <v-app-bar app flat light>
  
   <a href="/">
   <no-ssr>
   <v-img 
   max-width="256px"
   max-height="256px"
   src="/QS_Full_Logo.svg"
   contain></v-img>
  </no-ssr>
   </a>

   <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
       nuxt
       text
       active-class to="/docs">Documentation</v-btn>
      <v-btn 
       text
       nuxt
       active-class to="/blog">Blog</v-btn>
      <v-btn 
       text
       nuxt
       active-class to="/faq">F.A.Q.</v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>

<script>
module.exports = {
  name: "Navbar",
  data: function() {
    return {};
  }
};
</script>
