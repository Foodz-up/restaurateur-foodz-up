<template>
  <div>
    <h1 class="mt-4 text-4xl text-center">
      Vos commandes
    </h1>
    <hr class="my-4">
    <div v-if="storeOrders">
      <ListOrdersRestaurant :orders="storeOrders" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListOrdersRestaurant from '~/components/Lists/ListOrdersRestaurant.vue'
import { IOrder } from '~/store/interfaces'
import OrderStore from '~/store/order'

@Component({
  components: { ListOrdersRestaurant }
})
export default class Orders extends Vue {
  mounted () {
    if (OrderStore.orders.length === 0) {
      OrderStore.getOrders()
    }
  }

  get storeOrders ():Array<IOrder> {
    return OrderStore.orders
  }
}

</script>

<style scoped>

</style>
