<template>
  <form>
    <InputFoodzUp
      v-model="formMenu.name"
      :value="formMenu.name"
      :variable-description="'Nom du menu'"
      :placeholder="'Ex: Sandwich'"
    />
    <InputFoodzUp
      v-model="formMenu.description"
      :value="formMenu.description"
      :variable-description="'Description'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: Bon sandwich bien fourni'"
    />
    <InputFoodzUp
      v-model="formMenu.price"
      :value="formMenu.price"
      :variable-description="'Prix'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: 5'"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'

@Component({
  components: { InputFoodzUp }
})
export default class FormArticle extends Vue {
    @Prop({ required: true })
    formMenu!: { type: string, name: string, description: string, price: number }
}
</script>

<style scoped>

</style>
