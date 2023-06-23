<template>
  <NuxtLayout>
    <Transition name="fade" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
      </div>
    </Transition>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useTheme } from '~/store/theme'

const themeStore = useTheme()
themeStore.initTheme()
</script>
