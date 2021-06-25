<template>
  <div class="m-4">
    <h1 class="mt-1 text-4xl font-medium">
      Gestion des enseignes
    </h1>
    <button class="inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50 m-4 bg-primary text-white hover:bg-primary-80" @click="toggleModal()">
      <span>Ajouter une enseigne</span>
    </button>
    <ListEnseigne :enseignes="enseignes" />
    <Modal :class="{'hidden': !modal}" :only-cancel="true" @cancel="toggleModal()">
      <FormEnseigne :form-enseigne="formEnseigne" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListEnseigne from '~/components/Lists/ListEnseigne.vue'
import Modal from '~/components/Others/Modal.vue'
import FormEnseigne from '~/components/Forms/FormEnseigne.vue'

@Component({
  components: { ListEnseigne, Modal, FormEnseigne }
})
export default class Enseignes extends Vue {
    modal: boolean = false
    formEnseigne: object = {
      name: '', type: '', avaibilities: [], address: ''
    }

    // TODO: need type
    enseignes: Array<object> = [
      {
        id: 1,
        name: 'Macdo',
        type: 'Fastfood',
        avaibilities: [
          { day: 'Lundi', startTime: 9, endTime: 23 },
          { day: 'Mardi', startTime: 9, endTime: 23 },
          { day: 'Mercredi', startTime: 9, endTime: 23 },
          { day: 'Jeudi', startTime: 9, endTime: 23 },
          { day: 'Vendredi', startTime: 9, endTime: 23 },
          { day: 'Samedi', startTime: 11, endTime: 21 },
          { day: 'Dimanche', startTime: 11, endTime: 21 }
        ],
        picture: 'LogoFoodzUp.png',
        address: '12 rue du 12 décembre 1212'
      },
      {
        id: 2,
        name: 'Macdo',
        type: 'Fastfood',
        avaibilities: [
          { day: 'Lundi', startTime: 9, endTime: 23 },
          { day: 'Mardi', startTime: 9, endTime: 23 },
          { day: 'Mercredi', startTime: 9, endTime: 23 },
          { day: 'Jeudi', startTime: 9, endTime: 23 },
          { day: 'Vendredi', startTime: 9, endTime: 23 },
          { day: 'Samedi', startTime: 11, endTime: 21 },
          { day: 'Dimanche', startTime: 11, endTime: 21 }
        ],
        picture: 'LogoFoodzUp.png',
        address: '2 rue du 2 février 1222'
      },
      {
        id: 3,
        name: 'Macdo',
        type: 'Fastfood',
        avaibilities: [
          { day: 'Lundi', startTime: 9, endTime: 23 },
          { day: 'Mardi', startTime: 9, endTime: 23 },
          { day: 'Mercredi', startTime: 9, endTime: 23 },
          { day: 'Jeudi', startTime: 9, endTime: 23 },
          { day: 'Vendredi', startTime: 9, endTime: 23 },
          { day: 'Samedi', startTime: 11, endTime: 21 },
          { day: 'Dimanche', startTime: 11, endTime: 21 }
        ],
        picture: 'LogoFoodzUp.png',
        address: '5 rue du 5 mai 1555'
      }
    ]

    toggleModal () {
      this.modal = !this.modal
    }
}
</script>

<style scoped>

</style>
