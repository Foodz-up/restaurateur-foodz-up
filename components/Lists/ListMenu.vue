<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardMenuRestaurant
        v-for="menu in menus"
        :id="menu.id"
        :key="menu.id"
        :description="menu.description"
        :name="menu.name"
        :price="menu.price"
        :type="menu.type"
        :articles="menu.articles"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
        @openModalRequested="openModal(menu.id)"
      />
    </div>
    <Modal :class="{'hidden': !modal}" @remove="deleteMenu()" @save="saveMenu()" @cancel="closeModal()">
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
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardMenuRestaurant from '~/components/Cards/CardMenuRestaurant.vue'
import { IArticle, IMenu } from '~/store/interfaces'
import FormMenu from '~/components/Forms/FormMenu.vue'
import { Menu } from '~/store/menu/class'
import Modal from '~/components/Others/Modal.vue'
import ArticleStore from '~/store/article'
import MenuStore from '~/store/menu'

@Component({
  components: { CardMenuRestaurant, FormMenu, Modal }
})

export default class ListMenu extends Vue {
    @Prop({ required: true })
    menus!: Array<IMenu>

    idSelectedMenu: number = 0

    formMenu: IMenu = new Menu()

    modal:boolean = false

    get storeArticles (): Array<IArticle> {
      return ArticleStore.articles
    }

    openModal (id: number) {
      this.idSelectedMenu = id
      const selectedMenu = this.menus.find(menu => menu.id === id)
      this.formMenu = { ...this.formMenu, ...selectedMenu }
      this.modal = true
    }

    closeModal () {
      this.formMenu = new Menu()
      this.modal = false
    }

    addRandomArticleToMenu () {
      this.formMenu.articles = [...this.formMenu.articles, this.storeArticles[0]]
    }

    addselectedArticleToMenu (addedArticleIdAndIndex: { articleId: number, index: number }) {
      const articleIndex = ArticleStore.articles.findIndex(x => x.id === addedArticleIdAndIndex.articleId)
      this.formMenu.articles[addedArticleIdAndIndex.index] = ArticleStore.articles[articleIndex]
    }

    // BUG: there is a probleme by removing an article, the page automatically reload
    removeArticle (index: number) {
      this.formMenu.articles.splice(index, 1)
    }

    saveMenu () {
      MenuStore.updateMenu(this.formMenu)
      this.closeModal()
    }

    deleteMenu () {
      MenuStore.deleteMenu(this.formMenu)
      this.closeModal()
    }
}
</script>

<style scoped>

</style>
