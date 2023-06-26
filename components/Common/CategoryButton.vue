<template>
  <button
    class="category-button py-[7px] px-2 rounded-[30px] text-sm font-medium leading-130 text-blue-200 hover:text-white transition-colors duration-200 hover:!bg-blue-200/80"
  >
    <span v-if="isHash">#</span>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string
  isHash?: boolean
}

defineProps<Props>()
</script>

<style scoped>
.category-button {
  background-color: rgba(162, 188, 222, 0.16);
}
</style>
