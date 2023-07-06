<template>
  <div class="flex-y-center gap-4">
    <NuxtLink
      v-for="(item, index) in tags"
      :key="index"
      :to="`/${link}/${item}`"
      class="flex-center rounded text-blue-200 dark:text-blue-100 sm:text-base text-xs leading-125 py-1 px-2 bg-gray-150 dark:bg-gray-150/10 cursor-pointer transition-200 hover:bg-gray-500 dark:hover:bg-blue-800 hover:bg-blue-150"
    >
      {{ item }}
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
interface Props {
  tags: string[]
  loading?: boolean
  link?: string
}
const props = defineProps<Props>()
</script>
