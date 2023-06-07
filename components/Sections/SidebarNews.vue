<template>
  <div class="w-full">
    <CommonTab v-model="active" class="!w-full" :list="tabs" />

    <Transition name="fade" mode="out-in">
      <div :key="active" class="mt-4">
        <CommonNewsBlock :list="popularNews" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { popularNews } from '~/data'

const active = ref('value')

const tabs = [
  {
    label: 'label',
    value: 'value',
  },
  {
    label: 'label 2',
    value: 'value2',
  },
]
</script>

<style scoped></style>
