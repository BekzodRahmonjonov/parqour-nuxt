<template>
  <div class="inline-flex flex-y-center space-x-2">
    <span
      class="icon-sun text-xl text-blue-200 transition-200 dark:text-gray-200"
    />
    <FormToggle v-model="theme" @input="toggleTheme" />
    <span
      class="icon-moon text-xl text-blue-100 transition-200 dark:text-white"
    />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/store/theme'

const themeStore = useTheme()
const theme = ref(false)
const toggleTheme = (value: boolean) => {
  theme.value = value
  themeStore.changeTheme()
}
</script>

<style scoped></style>
