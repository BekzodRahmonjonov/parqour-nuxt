<template>
  <div class="pb-3 border-b border-solid border-gray-300 last:border-b-[0px]">
    <p class="text-blue-200 text-xs leading-140 font-medium text-xs mb-1">
      {{ card?.date }}
    </p>
    <p class="text-sm leading-140 font-semibold text-blue-200">
      {{ card?.title }}
      <i v-if="card?.isVideo" class="icon-play-circle text-blue-200" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { INews } from '~/types'

interface Props {
  card?: INews
}

defineProps<Props>()
</script>

<style scoped></style>
