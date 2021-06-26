<template>
  <div class="flex flex-row justify-between w-full">
    <img :src="require(`assets/img/${picture}`)" class="object-contain w-1/3 mr-4">
    <div class="w-2/3">
      <h3 class="font-bold text-xl">
        {{ name }}
      </h3>
      <p class="text-gray-500 text-lg">
        {{ type }}
      </p>
      <p class="text-lg text-gray-500 font-medium">
        {{ address }}
      </p>
      <div v-for="(avaibilitie, index) in avaibilities" :key="index">
        <p class="text-sm text-gray-500 font-medium">
          {{ avaibilitie.day }} : {{ avaibilitie.startTime }}h - {{ avaibilitie.endTime }}h
        </p>
      </div>
      <div class="flex mt-2">
        <ButtonFoodzUp :title="'Modifier'" class="mt-4 bg-primary text-white hover:bg-primary-80" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ButtonFoodzUp from '~/components/Buttons/ButtonFoodzUp.vue'

@Component({
  components: { ButtonFoodzUp }
})
export default class CardOwnRestaurant extends Vue {
    @Prop({ required: true })
    id!: number

    @Prop({ default: 'Sans nom' })
    name!: string

    @Prop({ default: 'Restaurant' })
    type!: string

    @Prop({ default: [] })
    avaibilities!: []

    @Prop({ default: 'noshop.jpg' })
    picture!: string

    @Prop({ default: '' })
    address!: string
}
</script>

<style scoped>

</style>
