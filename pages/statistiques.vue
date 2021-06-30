<template>
  <div>
    <h1 class="text-center sm:text-left mt-1 text-4xl font-medium">
      Statistiques
    </h1>

    <hr class="mt-4 mb-12">
    <div class="overflow-x-auto bg-primary-15 px-4">
      <div class="grid grid-cols-1 justify-items-center">
        <SellMenu class="rounded-xl p-2 shadow-lg my-6" />
        <MoneyDay class="rounded-xl p-2 shadow-lg mb-6" />
      </div>
      <div class="grid justify-items-center">
        <OrderMonth class="rounded-xl p-2 shadow-lg mb-6" />
      </div>
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
