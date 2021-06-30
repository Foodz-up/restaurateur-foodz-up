<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Gestion des Menus
      </h1>

      <ButtonFoodzUp :title="'Ajouter un menu'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="openModal()" />
    </div>
    <ListMenu :menus="storeMenus" class="mt-24" />
    <Modal :class="{'hidden': !modal}" :delete-button="false" @save="saveMenu()" @cancel="closeModal()">
      <FormMenu
        :form-menu="formMenu"
        @addRandomArticleToMenu="addRandomArticleToMenu()"
        @addselectedArticleToMenu="addselectedArticleToMenu"
        @removeArticle="removeArticle"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListMenu from '~/components/Lists/ListMenu.vue'
import Modal from '~/components/Others/Modal.vue'
import FormMenu from '~/components/Forms/FormMenu.vue'
import { IMenu, IArticle } from '~/store/interfaces'
import MenuStore from '~/store/menu'
import ArticleStore from '~/store/article'
import NotificationStore from '~/store/notification'
import { Menu } from '~/store/menu/class'

@Component({
  components: { ListMenu, Modal, FormMenu }
})
export default class MenuHome extends Vue {
  modal: boolean = false
  formMenu: IMenu = new Menu()

  get storeMenus (): Array<IMenu> {
    return MenuStore.menus
  }

  get storeArticles (): Array<IArticle> {
    return ArticleStore.articles
  }

  openModal () {
    if (this.storeArticles.length === 0) {
      NotificationStore.addNotification({
        message: 'Article introuvable : Pour commencer a créer un menu il faut ajouter au minimum 1 article',
        status: 404
      })
    } else {
      this.modal = true
    }
  }

  closeModal () {
    this.modal = false
  }

  addRandomArticleToMenu () {
    this.formMenu.articles = [...this.formMenu.articles, this.storeArticles[0]]
  }

  addselectedArticleToMenu (addedArticleIdAndIndex: { articleId: number, index: number }) {
    const articleIndex = ArticleStore.articles.findIndex(x => x.id === addedArticleIdAndIndex.articleId)
    this.formMenu.articles[addedArticleIdAndIndex.index] = ArticleStore.articles[articleIndex]
  }

  removeArticle (index: number) {
    this.formMenu.articles.splice(index, 1)
  }

  saveMenu () {
    MenuStore.addMenu(this.formMenu)
    this.formMenu = new Menu()
  }
}
</script>

<style scoped>

</style>
