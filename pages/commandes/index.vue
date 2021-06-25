<template>
  <div>
    <h1 class="mt-4 text-4xl text-center">
      Vos commandes
    </h1>
    <hr class="my-4">
    <ListOrdersRestaurant :orders="orders" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListOrdersRestaurant from '~/components/Lists/ListOrdersRestaurant.vue'

@Component({
  components: { ListOrdersRestaurant }
})
export default class Orders extends Vue {
    // TODO: need type
    orders: Array<object> = [
      { id: 1, orderNumber: '1', price: 18.00, status: 'Passée', date: Date.now, itemsNumber: 3, restaurantID: 2 },
      { id: 2, orderNumber: '2', price: 20.99, status: 'Passée', date: Date.now, itemsNumber: 5, restaurantID: 3 },
      { id: 3, orderNumber: '6', price: 11.50, status: 'En cours', date: Date.now, itemsNumber: 1, restaurantID: 8 },
      { id: 4, orderNumber: '3', price: 18.50, status: 'Passée', date: Date.now, itemsNumber: 3, restaurantID: 2 },
      { id: 5, orderNumber: '4', price: 16.00, status: 'Passée', date: Date.now, itemsNumber: 2, restaurantID: 6 },
      { id: 6, orderNumber: '7', price: 15.50, status: 'En cours', date: Date.now, itemsNumber: 2, restaurantID: 2 },
      { id: 7, orderNumber: '5', price: 22.50, status: 'Passée', date: Date.now, itemsNumber: 4, restaurantID: 4 }
    ]
}
</script>

<style scoped>

</style>
