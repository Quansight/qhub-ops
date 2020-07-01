<template>
<GridSystem />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import GridSystem from "./components/gridSystem.vue"

export default Vue.extend({
    name: 'SecurityOptionsPanel',
    props: {
        
    },
    data() {
        return {

        }
    },
    components: {
       GridSystem 
    },
});
</script>