<template>
  <form>
    <InputFoodzUp
      v-model="formRestaurant.name"
      :value="formRestaurant.name"
      :variable-description="'Nom du restaurant'"
      :placeholder="'Ex: Au burger qui rit'"
    />
    <InputSelect
      v-model="formRestaurant.type"
      :value="formRestaurant.type"
      :variable-description="'Type de restaurant'"
      :input-variable="'type'"
      class=" mt-2"
      :option-list="optionList"
    />
    <InputFoodzUp
      v-model="formRestaurant.address"
      :value="formRestaurant.address"
      :variable-description="'adresse du restaurant'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: 1 rue du 1 janvier 1111'"
    />
    <div class="flex mt-2">
      <InputFoodzUp
        v-model="formRestaurant.address"
        :value="formRestaurant.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formRestaurant.address"
        :value="formRestaurant.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formRestaurant.address"
        :value="formRestaurant.address"
        :variable-description="'adresse du restaurant'"
        :input-variable="'address'"
        class="mx-2"
        :placeholder="'Ex: 8h'"
      />
      <InputFoodzUp
        v-model="formRestaurant.address"
        :value="formRestaurant.address"
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
export default class FormRestaurant extends Vue {
    optionList: Array<object> = [
      { name: 'Fastfood' },
      { name: 'Gastronomique' }
    ]

    @Prop({ required: true })
    formRestaurant!: { name: string, type: string, avaibilities: [], address: string }
}
</script>

<style scoped>

</style>
