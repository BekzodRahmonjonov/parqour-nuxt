<template>
  <div class="flex items-center gap-4">
    <button
      class="p-2 rounded-md text-white bg-[#0000004d] text-2xl cursor-pointer transition-300 ease-out hover:text-opacity-50"
      v-for="(item, i) in icons"
      :key="i"
      :class="item"
    ></button>
  </div>
</template>

<script setup lang="ts">
const icons = [
  'icon-multiplier-1x',
  'icon-time-back',
  'icon-time-forvard',
  'icon-download-stroke',
]
</script>

<style scoped></style>
