<template>
  <div class="container">
    <CommonSectionWrapper is-centered title="Разборы" />
    <div class="grid grid-cols-12 sm:gap-x-8 gap-y-6 gap-8 mt-6">
      <CardsAnalise
        v-for="(item, index) in analysisData"
        :key="index"
        v-bind="{ item }"
        :title="item.title"
        :text="item.text"
        :bg-color="cardColor(item.id)"
        class=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardsAnalise from '~/components/Cards/Аnalise.vue'
import { analysisData } from '~/data/fakeData'

const cardColor = (id: number) => {
  const colors: { [key: number]: string } = {
    1: 'bg-gradient-to-b from-[#F6B175] to-[#BA4D4D]',
    2: 'bg-gradient-to-b from-[#008E8E] to-[#1C4D36]',
    3: 'bg-gradient-to-b from-[#65BDEF] to-[#2C5A9E]',
    4: 'bg-gradient-to-b from-[#B181EB] to-[#5B2C93]',
  }
  return colors[id]
}
</script>
