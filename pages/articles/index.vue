<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Gestion des articles
      </h1>

      <ButtonFoodzUp :title="'Ajouter un article'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="toggleModal()" />
    </div>

    <div v-if="storeArticles">
      <ListArticles
        :key="componentListArticleKey"
        :articles="storeArticles"
        :restaurant-id="restaurantId"
        @editArticle="editArticle"
        @deleteArticle="deleteArticle"
      />
    </div>

    <Modal :class="{'hidden': !modal}" :delete-button="false" @save="saveArticle()" @cancel="toggleModal()">
      <FormArticle :form-article="formArticle" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'
import Modal from '~/components/Others/Modal.vue'
import FormArticle from '~/components/Forms/FormArticle.vue'
import ArticleStore from '~/store/article'
import NotificationStore from '~/store/notification'
import { Article } from '~/store/article/class'
import { IArticle } from '~/store/interfaces'

@Component({
  components: { ListArticles, Modal, FormArticle }
})
export default class Articles extends Vue {
    modal: boolean = false
    componentListArticleKey: number = 0
    formArticle: IArticle = new Article()

    get storeArticles (): Array<IArticle> {
      return ArticleStore.articles
    }

    restaurantId:number = 1;

    toggleModal () {
      this.modal = !this.modal
    }

    saveArticle () {
      if (this.formArticle.type === '') {
        NotificationStore.addNotification({
          message: 'Attention, vous devez sélectionner un type d\'article',
          status: 400
        })
        return
      }

      ArticleStore.addArticle(this.formArticle)
      this.modal = !this.modal
      this.formArticle = new Article()
    }

    editArticle (updatedArticle: IArticle) {
      ArticleStore.updateArticle(updatedArticle)
      // TODO: fix problem, the children have to auto update the content
      this.componentListArticleKey += 1
    }

    deleteArticle (updatedArticle: IArticle) {
      ArticleStore.deleteArticle(updatedArticle)
    }
}
</script>

<style scoped>

</style>
