<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-4xl font-medium">
        Information du restaurant
      </h1>

      <ButtonFoodzUp :title="'Ajouter son restaurant'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="toggleModal()" />
    </div>
    <CardOwnRestaurant
      :id="restaurant.id"
      :key="restaurant.id"
      :name="restaurant.name"
      :type="restaurant.type"
      :avaibilities="restaurant.avaibilities"
      :picture="restaurant.picture"
      :address="restaurant.address"
      class="mt-24 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
    />
    <Modal :class="{'hidden': !modal}" :only-cancel="true" @cancel="toggleModal()">
      <FormRestaurant :form-restaurant="formRestaurant" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardOwnRestaurant from '~/components/Cards/CardOwnRestaurant.vue'
import Modal from '~/components/Others/Modal.vue'
import FormRestaurant from '~/components/Forms/FormRestaurant.vue'

@Component({
  components: { CardOwnRestaurant, Modal, FormRestaurant }
})
export default class Restaurant extends Vue {
    modal: boolean = false
    formRestaurant: object = {
      name: '', type: '', avaibilities: [], address: ''
    }

    // TODO: need type
    restaurant: object =
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
      }

    toggleModal () {
      this.modal = !this.modal
    }
}
</script>

<style scoped>

</style>
