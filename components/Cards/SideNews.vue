<template>
  <NuxtLink
    to="/"
    class="pb-3 border-b border-solid border-gray-300 last:border-b-[0px] group dark:border-gray-300/10"
  >
    <p
      class="text-blue-200 text-xs leading-140 font-medium text-xs mb-1 transition-200 dark:text-white"
    >
      {{ card?.date }}
    </p>
    <p
      class="text-sm leading-140 font-semibold text-blue-600 transition-200 group-hover:text-blue-200 dark:text-white"
    >
      {{ card?.title }}
      <i
        v-if="card?.isVideo"
        class="icon-play-circle text-blue-200 dark:text-white transition-200 inline-block -mb-1 translate-y-0.5"
      />
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import { INews } from '~/types'

interface Props {
  card?: INews
}

defineProps<Props>()
</script>

<style scoped></style>
