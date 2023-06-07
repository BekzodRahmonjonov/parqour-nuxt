<template>
  <div class="inline-flex flex-y-center space-x-2">
    <span
      class="icon-sun text-xl text-blue-200 transition-200 dark:text-gray-200"
    />
    <FormToggle :model-value="isDark" @input="toggleDark" />
    <span
      class="icon-moon text-xl text-blue-100 transition-200 dark:text-white"
    />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
