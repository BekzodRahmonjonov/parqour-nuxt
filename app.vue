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
import { useHomeStore } from '~/store/index'
import { useTheme } from '~/store/theme'

const homeStore = useHomeStore()
const themeStore = useTheme()

homeStore.nuxtServerInit()
themeStore.initTheme()
</script>
