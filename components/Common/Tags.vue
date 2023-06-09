<template>
  <div class="flex-y-center gap-4">
    <div v-for="(item, index) in tags" :key="index" class="flex-center rounded text-blue-200 dark:text-blue-100 text-base leading-125 py-1 px-2 bg-gray-150 dark:bg-gray-150/10 cursor-pointer transition-200">
      {{ item }}
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  tags: string[]
  loading?: boolean
}
const props = defineProps<Props>()
</script>