<template>
  <form>
    <InputFoodzUp
      v-model="formEnseigne.name"
      :value="formEnseigne.name"
      :variable-description="'Nom du restaurant'"
      :placeholder="'Ex: Au burger qui rit'"
    />
    <InputSelect
      v-model="formEnseigne.type"
      :value="formEnseigne.type"
      :variable-description="'Type de restaurant'"
      :input-variable="'type'"
      class=" mt-2"
      :option-list="optionList"
    />
    <InputFoodzUp
      v-model="formEnseigne.address"
      :value="formEnseigne.address"
      :variable-description="'adresse du restaurant'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: 1 rue du 1 janvier 1111'"
    />
    <div class="flex mt-2">
      <InputFoodzUp
        v-model="formEnseigne.address"
        :value="formEnseigne.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formEnseigne.address"
        :value="formEnseigne.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formEnseigne.address"
        :value="formEnseigne.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formEnseigne.address"
        :value="formEnseigne.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'
import InputSelect from '~/components/Inputs/InputSelect.vue'

@Component({
  components: { InputFoodzUp, InputSelect }
})
export default class FormEnseigne extends Vue {
    optionList: Array<object> = [
      { name: 'Fastfood' },
      { name: 'Gastronomique' }
    ]

    @Prop({ required: true })
    formEnseigne!: { name: string, type: string, avaibilities: [], address: string }
}
</script>

<style scoped>

</style>
