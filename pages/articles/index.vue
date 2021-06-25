<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Gestion des articles
    </h1>
    <button class="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50 m-4 bg-primary text-white hover:bg-primary-80" @click="toggleModal()">
      <span>Ajouter un article</span>
    </button>
    <ListArticles :articles="articles" />
    <Modal :class="{'hidden': !modal}" @save="saveArticle()" @cancel="toggleModal()">
      <FormArticle :form-article="formArticle" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListArticles from '~/components/Lists/ListArticles.vue'
import Modal from '~/components/Others/Modal.vue'
import FormArticle from '~/components/Forms/FormArticle.vue'

@Component({
  components: { ListArticles, Modal, FormArticle }
})
export default class Enseignes extends Vue {
    modal: boolean = false

    formArticle: { type: string, name: string, description: string, price?: number } = {
      type: '', name: '', description: ''
    }

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

    saveArticle () {
    }
}
</script>

<style scoped>

</style>
