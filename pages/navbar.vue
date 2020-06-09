<template>
<no-ssr>
  <v-app-bar app flat light>
  
   <a href="/">
   <v-img 
   src="/QS_Full_Logo.svg"
   contain></v-img>
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
  </no-ssr>
</template>

<script>
module.exports = {
  name: "Navbar",
  data: function() {
    return {};
  }
};
</script>
