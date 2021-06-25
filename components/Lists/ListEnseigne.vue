<template>
  <div>
    <div class="grid gap-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <CardEnseigne
        v-for="enseigne in enseignes"
        :id="enseigne.id"
        :key="enseigne.id"
        :name="enseigne.name"
        :type="enseigne.type"
        :avaibilities="enseigne.avaibilities"
        :picture="enseigne.picture"
        :address="enseigne.address"
        class="pb-5 border-gray-100 border-b-2 sm:border-none sm:pb-0 w-auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardEnseigne from '~/components/Cards/CardEnseigne.vue'

@Component({
  components: { CardEnseigne }
})

export default class ListEnseigne extends Vue {
    // TODO: need type
    @Prop({ required: true })
    enseignes!: Array<
    { id: number, name: string, type: string, avaibilities: [], picture: string, address: string }
    |
    { id: number, name: string, type: string, avaibilities: [], picture: string, address: string }
    >
}
</script>

<style scoped>

</style>
