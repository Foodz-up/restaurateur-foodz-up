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

  menus: Array<IMenu> = [
    {
      id: 1,
      name: 'Menu best of',
      description: 'Menu classique',
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
      ],
      price: 10
    },
    {
      id: 2,
      name: 'Menu maxi best of',
      description: 'Grand menu classique',
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
      ],
      price: 13.50
    },
    {
      id: 3,
      name: 'Menu duo',
      description: 'Grand menu classique pour deux',
      articles: [
        { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
        { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
        { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }
      ],
      price: 23
    }
  ];

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

  get storeMenus (): Array<IMenu> {
    return MenuStore.menus
  }

  get storeArticles (): Array<IArticle> {
    return ArticleStore.articles
  }

  mounted () {
    ArticleStore.setArticles(this.articles)
    MenuStore.setMenus(this.menus)
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
