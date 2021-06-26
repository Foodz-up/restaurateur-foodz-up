<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Gestion des Menus
      </h1>

      <ButtonFoodzUp :title="'Ajouter un menu'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="toggleModal()" />
    </div>
    <ListMenu :menus="storeMenus" class="mt-24" />
    <Modal :class="{'hidden': !modal}" :delete-button="false" @save="saveArticle()" @cancel="toggleModal()">
      <FormMenu :form-menu="formMenu" />
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

    get storeMenus (): Array<IMenu> {
      return MenuStore.menus
    }
    
    get storeArticles (): Array<IArticle> {
      return ArticleStore.articles
    }

    mounted () {
      MenuStore.setMenus(this.menus)
    }

    toggleModal () {
      this.modal = !this.modal
    }

    saveMenu () {
    }
}
</script>

<style scoped>

</style>
