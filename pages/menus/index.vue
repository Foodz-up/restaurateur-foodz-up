<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Gestion des menus
    </h1>
    <button class="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50 m-4 bg-primary text-white hover:bg-primary-80" @click="toggleModal()">
      <span>Ajouter un menu</span>
    </button>
    <ListMenu :menus="menus" />
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
      { id: 1, name: 'Menu best of', description: 'Menu classique', articles: [{ name: 'BigMac' }, { name: 'Ice Tea' }, { name: 'Frites' }], price: 10 },
      { id: 2, name: 'Menu maxi best of', description: 'Grand menu classique', articles: [{ name: 'BigMac' }, { name: 'Ice Tea' }, { name: 'Grandes Frites' }], price: 13.50 },
      { id: 3, name: 'Menu duo', description: 'Grand menu classique pour deux', articles: [{ name: '2 BigMac' }, { name: '2 Ice Tea' }, { name: '2 Grandes Frites' }], price: 23 }
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
