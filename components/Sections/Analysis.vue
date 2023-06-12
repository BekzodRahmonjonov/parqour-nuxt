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
        :bg="item.bg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardsAnalise from '~/components/Cards/Аnalise.vue'
import { analysisData } from '~/data/fakeData'


</script>
