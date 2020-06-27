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
      hint="This is the provider you choose"
      label="Provider"
      required
    ></v-select>

    <v-select
      v-model="select"
      :items="ci_cd_options"
      label="CI/CD"
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
    chooseProvider(value: string) {
      this.$emit('chooseProvider','value')
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