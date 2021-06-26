<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Gestion des articles
      </h1>

      <ButtonFoodzUp :title="'Ajouter un article'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="toggleModal()" />
    </div>

    <ListArticles
      :key="componentListArticleKey"
      :articles="storeArticles"
      :restaurant-id="restaurantId"
      @editArticle="editArticle"
      @deleteArticle="deleteArticle"
    />

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

    // TODO: need type
    articles: Array<IArticle> = [
      { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
      { id: 2, type: 'Entrée', name: 'Salade César', description: 'Servi sous format d\'entrée', price: 4.00 },
      { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
      { id: 4, type: 'Plat', name: 'Pavé de saumon', description: 'Servi avec salade / purée maison pu riz', price: 17.20 },
      { id: 5, type: 'Déssert', name: 'Tiramisu', price: 6.30 },
      { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
      { id: 7, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 },
      { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
    ];

    get storeArticles (): Array<IArticle> {
      return ArticleStore.articles
    }

    restaurantId:number = 1;

    mounted () {
      ArticleStore.setArticles(this.articles)
    }

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

      this.formArticle.id = ArticleStore.articles.length > 0 ? ArticleStore.articles[ArticleStore.articles.length - 1].id + 1 : 1
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
      // try {
      //   const response = await ArticleStore.deleteArticle(updatedArticle)
      //   NotificationStore.addNotification({
      //     message: response.data.message,
      //     status: response.status
      //   })
      // } catch (error) {
      //   NotificationStore.addNotification({
      //     message: error.response.data.message,
      //     status: error.response.status
      //   })
      // }
    }
}
</script>

<style scoped>

</style>
