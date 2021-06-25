<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardMenuRestaurant
        v-for="menu in menus"
        :id="menu.id"
        :key="menu.id"
        :description="menu.description"
        :name="menu.name"
        :price="menu.price"
        :type="menu.type"
        :articles="menu.articles"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardMenuRestaurant from '~/components/Cards/CardMenuRestaurant.vue'

@Component({
  components: { CardMenuRestaurant }
})

export default class ListMenu extends Vue {
    // TODO: need type
    @Prop({ required: true })
    menus!: Array<{ id: number, name: string, description?: string, articles?: Array<object>, price: number }>
}
</script>

<style scoped>

</style>
