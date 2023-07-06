<template>
  <div class="flex-y-center gap-4">
    <div
      v-for="(item, index) in tags"
      :key="index"
      class="flex-center rounded-[30px] text-blue-200 dark:text-blue-100 sm:text-base text-xs leading-125 py-[7px] px-2 bg-gray-150 dark:bg-gray-150/10"
    >
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
