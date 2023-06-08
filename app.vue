<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useTheme } from '~/store/theme'

const themeStore = useTheme()
themeStore.initTheme()
</script>
