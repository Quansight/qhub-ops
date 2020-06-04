<template>
  <v-toolbar
   flat
   color="white">
   <v-toolbar-items class="hidden-sm-and-down">
   <v-btn 
   nuxt
   text
   tag="img"
   to="/"><img src="../assets/Quansight_Logo.png" style="width:15em"></v-btn>
   </v-toolbar-items>  
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
       active-class to="/deploy">Deploy</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
module.exports = {
  name: "Navbar",
  data: function() {
    return {};
  }
};
</script>
