<template>
  <NuxtLink
    class="flex-y-center py-2 px-4 rounded-lg space-x-2 font-medium cursor-pointer transition-200 group hover:bg-blue-100/[16%]"
    :to="localePath(`${link?.url}`)"
  >
    <span
      :class="link?.icon"
      class="text-blue-100 text-base leading-130 transition-200 group-hover:text-blue-200 dark:group-hover:text-blue-100"
    />
    <span
      class="text-blue-200 dark:text-blue-100 text-sm transition-200 leading-130 group-hover:text-blue-700 dark:group-hover:text-white"
    >
      {{ link?.title }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { INavigation } from '~/types'

interface Props {
  link: INavigation
}
defineProps<Props>()
</script>

<style scoped></style>
