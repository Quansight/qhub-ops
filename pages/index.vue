<template>
 <v-app>
  <Navbar class="navbar">
  </Navbar>
    <div class="content">
  <v-container class="fill-height" fluid> 
  <v-row align="center"
      justify="center">
      <v-col align="center" justify="center">
    <transition name="fade">
      <div class="display-4"> This </div> 
    </transition>
      </v-col>
      <v-col align="center" justify="center">
    <transition name="fade">
      <div class="display-4"> is </div> 
    </transition>
      </v-col>
      <v-col align="center" justify="center">
    <transition name="fade">
      <div class="display-4"> Q|Hub </div> 
    </transition>
      </v-col>
  </v-row>
  <v-row align="center"
      justify="center">
  <div>
  <DescriptionChanger></DescriptionChanger>
  </div>
  </v-row>
</v-container>
</div>

  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import DescriptionChanger from "./description.vue";

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    Navbar,
    DescriptionChanger
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.content {
  padding-top: 65px; 
}
</style>