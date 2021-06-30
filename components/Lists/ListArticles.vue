<template>
  <div>
    <div v-for="(articleArrayByType, index) in splitedByType" :key="index" class="w-full">
      <h2 class="text-3xl font-semibold mt-24 mb-8 text-yellow-pastel">
        {{ articleArrayByType[0].type }}
      </h2>
      <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <CardArticleRestaurant
          v-for="article in articleArrayByType"
          :id="article._id"
          :key="article._id"
          :description="article.description"
          :name="article.name"
          :price="article.price"
          :tag="article.tag"
          :type="article.type"
          :menu-articles="article.menuArticles"
          :restaurant-id="restaurantId"
          class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
          @needUpdateCard="openModal(article._id)"
        />
      </div>
      <Modal :class="{'hidden': !modal}" @save="editArticle()" @remove="deleteArticle()" @cancel="closeModal()">
        <FormArticle :form-article="formArticle" />
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardArticleRestaurant from '~/components/Cards/CardArticleRestaurant.vue'
import Modal from '~/components/Others/Modal.vue'
import FormArticle from '~/components/Forms/FormArticle.vue'
import { Article } from '~/store/article/class'
import { IArticle } from '~/store/interfaces'

@Component({
  components: { CardArticleRestaurant, Modal, FormArticle }
})

export default class ListArticles extends Vue {
    @Prop({ required: true })
    articles!: Array<IArticle>

    @Prop({ required: true })
    restaurantId!: number

    modal:boolean = false;
    idSelectedArticle: {} = {};
    formArticle: IArticle = new Article()

    get splitedByType () {
      const newObject = this.articles.reduce(function (obj, value) {
        const key = value.type
        // @ts-ignore
        if (obj[key] == null) { obj[key] = [] }

        // @ts-ignore
        obj[key].push(value)
        return obj
      }, {})

      return newObject
    }

    openModal (id: object) {
      this.idSelectedArticle = id
      const selectedArticle = this.articles.find(article => article._id === id)
      this.formArticle = { ...this.formArticle, ...selectedArticle }
      this.modal = true
    }

    closeModal () {
      this.formArticle = new Article()
      this.modal = false
    }

    editArticle () {
      this.$emit('editArticle', this.formArticle)
      this.closeModal()
    }

    deleteArticle () {
      this.$emit('deleteArticle', this.formArticle)
      this.closeModal()
    }
}
</script>

<style scoped>

</style>
