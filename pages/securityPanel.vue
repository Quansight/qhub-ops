<template>
<v-container>
<GridSystem 
:tbldata=lols
:tblheaders=headers
>
</GridSystem>
</v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import GridSystem from "./components/gridSystem.vue"

export default Vue.extend({
    name: 'SecurityOptionsPanel',
    props: {
        
    },
    methods: {

    },
    data() {
        return {
        lols: [{
            username: 'akrishnan',
            uid: 10001,
            primarygroups: [ 'wheel', '1337' ],
            secondarygroups: [ 'haxxors' ],
          },
          {
              username: '',
              uid: '',
              primarygroups: [''],
              secondarygroups: [''],
          }
          ],
        headers: [
        { text: 'Username', align: 'start', sortable: false, value: 'username' },
        { text: 'User ID (UID)', value: 'uid', sortable: false },
        { text: 'Primary Groups', value: 'primarygroups' },
        { text: 'Secondary Groups', value: 'secondarygroups' },
      ],
        }
    },

    components: {
       GridSystem 
    },
});
</script>