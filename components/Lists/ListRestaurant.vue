<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardOwnRestaurant
        v-for="restaurant in restaurants"
        :id="restaurant.id"
        :key="restaurant.id"
        :name="restaurant.name"
        :type="restaurant.type"
        :avaibilities="restaurant.avaibilities"
        :picture="restaurant.picture"
        :address="restaurant.address"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardRestaurant from '~/components/Cards/CardOwnRestaurant.vue'
import { IRestaurant } from '~/store/interfaces'

@Component({
  components: { CardRestaurant }
})

export default class ListRestaurant extends Vue {
    @Prop({ required: true })
    restaurants!: Array<IRestaurant>
}
</script>

<style scoped>

</style>
