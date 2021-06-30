<template>
  <div>
    <h1 class="text-center sm:text-left mt-1 text-4xl font-medium">
      Statistiques
    </h1>

    <hr class="mt-4 mb-12">

    <div class="grid grid-cols-1 xl:grid-cols-2 justify-items-center">
      <SellMenu />
      <MoneyDay />
    </div>
    <div class="grid justify-items-center">
      <OrderMonth />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SellMenu from '~/components/Graph/SellMenu.vue'
import MoneyDay from '~/components/Graph/MoneyDay.vue'
import OrderMonth from '~/components/Graph/OrderMonth.vue'

@Component({
  components: { SellMenu, MoneyDay, OrderMonth }
})
export default class statistiques extends Vue {
}

</script>

<style scoped>

</style>
