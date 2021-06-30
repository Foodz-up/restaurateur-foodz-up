<template>
  <div class="m-4">
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <h1 class="text-center sm:text-left text-4xl font-medium">
        Information du restaurant
      </h1>

      <ButtonFoodzUp v-if="!storeRestaurant" :title="'Ajouter son restaurant'" class="mt-2 sm:mt-0 bg-primary text-white hover:bg-primary-80" @buttonClicked="openModal()" />
    </div>
    <CardOwnRestaurant
      v-if="storeRestaurant"
      :id="storeRestaurant._id"
      :key="storeRestaurant._id"
      :name="storeRestaurant.name"
      :type="storeRestaurant.type"
      :avaibilities="storeRestaurant.timetable"
      :picture="storeRestaurant.picture"
      :address="storeRestaurant.address"
      class="mt-12 sm:mt-24 border-gray-100 sm:border-none sm:pb-0 w-auto"
      @openModalRequested="openModal()"
    />
    <Modal
      :class="{'hidden': !modal}"
      :delete-button="isEdit"
      @cancel="closeModal()"
      @save="saveRestaurant()"
      @remove="deleteRestaurant()"
    >
      <FormRestaurant :form-restaurant="formRestaurant" />
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardOwnRestaurant from '~/components/Cards/CardOwnRestaurant.vue'
import Modal from '~/components/Others/Modal.vue'
import FormRestaurant from '~/components/Forms/FormRestaurant.vue'
import { IRestaurant } from '~/store/interfaces'
import { Restaurant } from '~/store/restaurant/class'
import RestaurantStore from '~/store/restaurant/'

@Component({
  components: { CardOwnRestaurant, Modal, FormRestaurant }
})
export default class RestaurantProfil extends Vue {
    modal: boolean = false
    formRestaurant: IRestaurant = new Restaurant()

    get storeRestaurant (): IRestaurant | null {
      return RestaurantStore.restaurant
    }

    get isEdit (): boolean {
      return this.storeRestaurant !== null
    }

    mounted () {
      RestaurantStore.getRestaurants()
    }

    deleteRestaurant () {
      RestaurantStore.deleteRestaurant()
      this.closeModal()
      this.formRestaurant = new Restaurant()
    }

    saveRestaurant () {
      if (this.storeRestaurant) {
        RestaurantStore.updateRestaurant(this.formRestaurant)
      } else {
        RestaurantStore.addRestaurant(this.formRestaurant)
      }
      this.closeModal()
      this.formRestaurant = new Restaurant()
    }

    openModal () {
      if (this.storeRestaurant) {
        this.formRestaurant = this.storeRestaurant
      }
      this.modal = true
    }

    closeModal () {
      this.modal = false
    }
}
</script>

<style scoped>

</style>
