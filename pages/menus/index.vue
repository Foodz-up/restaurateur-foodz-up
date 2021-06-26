<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Gestion des Menus
      </h1>

      <ButtonFoodzUp :title="'Ajouter un menu'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="toggleModal()" />
    </div>
    <ListMenu :menus="menus" class="mt-24" />
    <Modal :class="{'hidden': !modal}" @save="saveArticle()" @cancel="toggleModal()">
      <FormMenu :form-menu="formMenu" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListMenu from '~/components/Lists/ListMenu.vue'
import Modal from '~/components/Others/Modal.vue'
import FormMenu from '~/components/Forms/FormMenu.vue'

@Component({
  components: { ListMenu, Modal, FormMenu }
})
export default class Enseignes extends Vue {
    modal: boolean = false
    formMenu: { type: string, name: string, description: string, price?: number } = {
      type: '', name: '', description: ''
    }

    // TODO: need type
    menus: Array<{ id: number, name: string, description?: string, articles?: Array<object>, price: number }> = [
      {
        id: 1,
        name: 'Menu best of',
        description: 'Menu classique',
        articles: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }],
        price: 10
      },
      {
        id: 2,
        name: 'Menu maxi best of',
        description: 'Grand menu classique',
        articles: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }],
        price: 13.50
      },
      {
        id: 3,
        name: 'Menu duo',
        description: 'Grand menu classique pour deux',
        articles: [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 }],
        price: 23
      }
    ];

    // TODO: need type
        articles: Array<{ id: number, type: string, name: string, description?: string, price: number, tag?: string }> = [
          { id: 1, type: 'Entrée', name: 'Foie gras maison', description: 'Servi avec sa confiture de figues', price: 5.20 },
          { id: 2, type: 'Entrée', name: 'Salade César', description: 'Servi sous format d\'entrée', price: 4.00 },
          { id: 3, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50, tag: 'Nouveau' },
          { id: 4, type: 'Plat', name: 'Pavé de saumon', description: 'Servi avec salade / purée maison pu riz', price: 17.20 },
          { id: 5, type: 'Désert', name: 'Tiramisu', price: 6.30 },
          { id: 6, type: 'Boisson', name: 'Coca-cola', description: '1.25 L', price: 2.40 },
          { id: 7, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 },
          { id: 8, type: 'Plat', name: 'Hamburger savoyard', description: 'Servi avec salade et frites fraîches', price: 18.50 }
        ];

        toggleModal () {
          this.modal = !this.modal
        }

        saveMenu () {
        }
}
</script>

<style scoped>

</style>
