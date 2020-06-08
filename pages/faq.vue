<template>
<v-app>
<div><Navbar></Navbar></div>
<div>
<ul>
<li> <p> What is QHub? </p> </li>
<li> <p> What makes Qhub different, than, say, JupyterHub? </p> </li>
<li> <p> Can I use Qhub offline? </p> </li>
</ul>
</div>
</v-app>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>
