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
    <InputSelect
      v-model="formMenu.type"
      :value="formMenu.type"
      :variable-description="'Type de restaurant'"
      :input-variable="'type'"
      class=" mt-2"
      :option-list="optionList"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
// import FormMenu from '~/components/Forms/FormMenu.vue'
import { IMenu, IArticle } from '~/store/interfaces'
// import MenuStore from '~/store/menu'
// import ArticleStore from '~/store/article'
// import { Menu } from '~/store/menu/class'

@Component({})
export default class FormArticle extends Vue {
    @Prop({ required: true })
    formMenu!: IMenu
}
</script>

<style scoped>

</style>
