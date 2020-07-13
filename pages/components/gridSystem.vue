<template>
  <v-data-table
    :headers="this.tblheaders"
    :items="this.tbldata"
    sort-by="calories"                                                                                                  bg fc
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title> Users Setup </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            
              <v-container>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                  </v-col>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.userid" label="User ID"></v-text-field>
                  </v-col>
                </v-row>
                  <v-row
        align="center"
      >
                  <v-col cols="12" sm="12" md="12">
                    <v-select 
                    v-model="editedItem.primarygroups" 
                    :items="secondarygroupsopts"
                    chips
                    label="Chips"
                    multiple
                    outlined
                    ></v-select>
                  </v-col>
                  </v-row>
                  <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-select 
                    v-model="editedItem.secondarygroups" 
                    :items="secondarygroupsopts"
                    attach
                    chips
                    label="Chips"
                    multiple
                    outlined
                    ></v-select>
                    </v-text-field>
                  </v-col>
                  </v-row>
                  </v-col>
                  </v-container>
                
              </v-container>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { IPropsUserMap } from '~/assets/general'

export default Vue.extend({
     name: 'GridSystem',
     props: {
       tbldata: {
       type: Array, 
       required: true
       },
       tblheaders: {
        type: Array,
        required: true
       },
   },
    methods: {
      editItem (item: any) {
        this.editedIndex = this.tbldata.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item: any) {
        const index = this.tbldata.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tbldata.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.tbldata[this.editedIndex], this.editedItem)
        } else {
          this.tbldata.push(this.editedItem)
        }
        this.close()
      },
    },

    data () {
      return {
      secondarygroupsopts: [ 'docker', 'libvirt'],
      dialog: false, 
      editedIndex: -1,
      editedItem: {
        name: '',
        uid: 0,
        primarygroups: ['', ''],
        secondarygroups: ['', ''],
      },
      defaultItem: {
        name: '',
        uid: 0,
        primarygroups: ['', ''],
        secondarygroups: ['', ''],
      },
      users: this.tbldata
    }
    },

    computed: {
      // formTitle () {
      //   return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      // },
    },

    watch: {
      // dialog (val) {
      //   val || this.close()
      // },
    },

    created: () => {
      // this.configuredusers = this.$props.users
    },

    
  });
</script>