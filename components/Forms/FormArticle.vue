<template>
  <form>
    <InputFoodzUp
      v-model="formArticle.name"
      :value="formArticle.name"
      :variable-description="'Nom de l\'article'"
      :placeholder="'Ex: Sandwich'"
    />
    <InputSelect
      v-model="formArticle.type"
      :value="formArticle.type"
      :variable-description="'Type d\'article'"
      :input-variable="'type'"
      class=" mt-2"
      :option-list="optionList"
    />
    <InputFoodzUp
      v-model="formArticle.description"
      :value="formArticle.description"
      :variable-description="'Description'"
      :input-variable="'address'"
      class="mt-2"
      :placeholder="'Ex: Bon sandwich bien fourni'"
    />
    <InputFoodzUp
      v-model="formArticle.price"
      :value="formArticle.price"
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
import InputSelect from '~/components/Inputs/InputSelect.vue'

@Component({
  components: { InputFoodzUp, InputSelect }
})
export default class FormArticle extends Vue {
    optionList: Array<object> = [
      { name: 'Entrée' },
      { name: 'Plat' },
      { name: 'Déssert' },
      { name: 'Boisson' },
      { name: 'Menu' }
    ]

    @Prop({ required: true })
    formArticle!: { type: string, name: string, description: string, price: number }
}
</script>

<style scoped>

</style>
