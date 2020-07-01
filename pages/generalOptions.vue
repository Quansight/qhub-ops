  <template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Project Name"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="provider_options"
      :value="provider_options"
      @change="chooseProvider"
      @click="chooseMessage"
      hint="This is the provider you choose"
      label="Provider"
      required
    ></v-select>

    <v-select
      v-model="select"
      :items="ci_cd_options"
      :value="ci_cd_options"
      @change="chooseCiCd"
      label="CI/CD"
      clear
    ></v-select>
  </v-form>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IPropsGeneralOptions } from '~/assets/general'

export default Vue.extend({
  name: 'GeneralOptions',

  props: {
    options: {
        type: Object,
        required: true
    } as PropOptions<IPropsGeneralOptions>,
  },
  methods: {
    chooseCiCd(value: string) {
      console.log(value)
      this.$emit('chooseCiCd', value)
    },
    chooseProvider(value: string) {
      this.$emit('chooseProvider',value)
    },
    chooseMessage() {
      this.$emit('chooseMessage')
    }
  },
  data () {
    return {
      provider_options: this.options.provider_options,
      ci_cd_options: this.options.ci_cd_options
    }
  },
  computed: {
    },
  }
);
</script>